import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { API_URL } from "../config";
import "./Admin-Services.css";

const AdminServices = () => {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [editingService, setEditingService] = useState(null);

  const [showAddForm, setShowAddForm] = useState(false);

  const [newService, setNewService] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });

  const { authorizationToken } = useAuth();


  // ==========================
  // GET SERVICES
  // ==========================

  const getServices = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/admin/services`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch services"
        );
      }

      setServices(data);

    } catch (error) {
      console.log("Services Error:", error);

      setError(error.message);

      setServices([]);

    } finally {
      setLoading(false);
    }
  };


  // ==========================
  // ADD SERVICE
  // ==========================

  const handleAddChange = (e) => {
    const { name, value } = e.target;

    setNewService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const addService = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/api/admin/services`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },

          body: JSON.stringify(newService),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add service"
        );
      }

      setServices((prev) => [
        ...prev,
        data.service,
      ]);

      setNewService({
        service: "",
        description: "",
        price: "",
        provider: "",
      });

      setShowAddForm(false);

    } catch (error) {
      console.log("Add Service Error:", error);

      alert(error.message);
    }
  };


  // ==========================
  // DELETE SERVICE
  // ==========================

  const deleteService = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/admin/services/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete service"
        );
      }

      setServices((prev) =>
        prev.filter((item) => item._id !== id)
      );

      alert("Service deleted successfully");

    } catch (error) {
      console.log("Delete Service Error:", error);

      alert(error.message);
    }
  };


  // ==========================
  // EDIT SERVICE
  // ==========================

  const handleEdit = (service) => {
    setEditingService(service);
  };


  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditingService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const updateService = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/api/admin/services/${editingService._id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",

            Authorization: authorizationToken,
          },

          body: JSON.stringify({
            service: editingService.service,
            description: editingService.description,
            price: editingService.price,
            provider: editingService.provider,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update service"
        );
      }

      setServices((prev) =>
        prev.map((item) =>
          item._id === editingService._id
            ? data.service
            : item
        )
      );

      setEditingService(null);

      alert("Service updated successfully");

    } catch (error) {
      console.log("Update Service Error:", error);

      alert(error.message);
    }
  };


  // ==========================
  // USE EFFECT
  // ==========================

  useEffect(() => {
    if (authorizationToken) {
      getServices();
    }
  }, [authorizationToken]);


  // ==========================
  // LOADING
  // ==========================

  if (loading) {
    return (
      <div className="services-page">
        <div className="services-loading">
          Loading services...
        </div>
      </div>
    );
  }


  // ==========================
  // ERROR
  // ==========================

  if (error) {
    return (
      <div className="services-page">
        <div className="services-error">
          {error}
        </div>
      </div>
    );
  }


  return (
    <div className="services-page">

      {/* HEADER */}

      <div className="services-header">

        <div>
          <h1>Services</h1>

          <p>
            Manage all company services
          </p>
        </div>

        <div className="service-header-right">

          <div className="service-count">
            Total Services:
            <strong>{services.length}</strong>
          </div>

          <button
            className="add-service-btn"
            onClick={() => setShowAddForm(true)}
          >
            + Add Service
          </button>

        </div>

      </div>


      {/* TABLE */}

      <div className="services-table-container">

        <table className="services-table">

          <thead>

            <tr>
              <th>S.No.</th>
              <th>Service</th>
              <th>Description</th>
              <th>Price</th>
              <th>Provider</th>
              <th>Actions</th>
            </tr>

          </thead>


          <tbody>

            {services.map((item, index) => (

              <tr key={item._id}>

                <td>
                  {index + 1}
                </td>

                <td className="service-name">
                  {item.service}
                </td>

                <td className="service-description">
                  {item.description}
                </td>

                <td className="service-price">
                  ₹{item.price}
                </td>

                <td>
                  {item.provider}
                </td>

                <td>

                  <div className="service-actions">

                    <button
                      className="service-edit-btn"
                      onClick={() =>
                        handleEdit(item)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="service-delete-btn"
                      onClick={() =>
                        deleteService(item._id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {services.length === 0 && (
          <div className="no-services">
            No services found
          </div>
        )}

      </div>


      {/* ==========================
          ADD SERVICE MODAL
      ========================== */}

      {showAddForm && (

        <div className="service-modal-overlay">

          <div className="service-modal">

            <div className="service-modal-header">

              <h2>Add Service</h2>

              <button
                className="service-close-btn"
                onClick={() =>
                  setShowAddForm(false)
                }
              >
                ×
              </button>

            </div>


            <form onSubmit={addService}>

              <div className="service-form-group">

                <label>Service</label>

                <input
                  type="text"
                  name="service"
                  placeholder="Mobile App Development"
                  value={newService.service}
                  onChange={handleAddChange}
                  required
                />

              </div>


              <div className="service-form-group">

                <label>Description</label>

                <textarea
                  name="description"
                  placeholder="Developing innovative and user-friendly mobile applications"
                  value={newService.description}
                  onChange={handleAddChange}
                  required
                />

              </div>


              <div className="service-form-group">

                <label>Price</label>

                <input
                  type="text"
                  name="price"
                  placeholder="10000-20000"
                  value={newService.price}
                  onChange={handleAddChange}
                  required
                />

              </div>


              <div className="service-form-group">

                <label>Provider</label>

                <input
                  type="text"
                  name="provider"
                  placeholder="Tech Solution Inc."
                  value={newService.provider}
                  onChange={handleAddChange}
                  required
                />

              </div>


              <div className="service-modal-actions">

                <button
                  type="button"
                  className="service-cancel-btn"
                  onClick={() =>
                    setShowAddForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="service-save-btn"
                >
                  Add Service
                </button>

              </div>

            </form>

          </div>

        </div>

      )}


      {/* ==========================
          EDIT SERVICE MODAL
      ========================== */}

      {editingService && (

        <div className="service-modal-overlay">

          <div className="service-modal">

            <div className="service-modal-header">

              <h2>Edit Service</h2>

              <button
                className="service-close-btn"
                onClick={() =>
                  setEditingService(null)
                }
              >
                ×
              </button>

            </div>


            <form onSubmit={updateService}>

              <div className="service-form-group">

                <label>Service</label>

                <input
                  type="text"
                  name="service"
                  value={editingService.service}
                  onChange={handleEditChange}
                  required
                />

              </div>


              <div className="service-form-group">

                <label>Description</label>

                <textarea
                  name="description"
                  value={editingService.description}
                  onChange={handleEditChange}
                  required
                />

              </div>


              <div className="service-form-group">

                <label>Price</label>

                <input
                  type="text"
                  name="price"
                  value={editingService.price}
                  onChange={handleEditChange}
                  required
                />

              </div>


              <div className="service-form-group">

                <label>Provider</label>

                <input
                  type="text"
                  name="provider"
                  value={editingService.provider}
                  onChange={handleEditChange}
                  required
                />

              </div>


              <div className="service-modal-actions">

                <button
                  type="button"
                  className="service-cancel-btn"
                  onClick={() =>
                    setEditingService(null)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="service-save-btn"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default AdminServices;