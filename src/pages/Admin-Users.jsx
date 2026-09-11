import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { API_URL } from "../config";
import "./Admin-Users.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Edit user state
  const [editingUser, setEditingUser] = useState(null);

  const { authorizationToken } = useAuth();

  // =========================
  // GET ALL USERS
  // =========================

  const getUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/admin/users`,
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
          data.message || "Failed to fetch users"
        );
      }

      setUsers(data);
    } catch (error) {
      console.log("Users Error:", error);
      setError(error.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE USER
  // =========================

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/admin/users/${id}`,
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
          data.message || "Failed to delete user"
        );
      }

      // Remove deleted user from UI
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== id)
      );

      alert("User deleted successfully");

    } catch (error) {
      console.log("Delete User Error:", error);
      alert(error.message);
    }
  };

  // =========================
  // EDIT USER
  // =========================

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // =========================
  // UPDATE USER
  // =========================

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/api/admin/users/${editingUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify({
            username: editingUser.username,
            email: editingUser.email,
            phone: editingUser.phone,
            role: editingUser.role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update user"
        );
      }

      // Update UI without fetching again
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === editingUser._id
            ? data.user || editingUser
            : user
        )
      );

      setEditingUser(null);

      alert("User updated successfully");

    } catch (error) {
      console.log("Update User Error:", error);
      alert(error.message);
    }
  };

  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditingUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // USE EFFECT
  // =========================

  useEffect(() => {
    if (authorizationToken) {
      getUsers();
    }
  }, [authorizationToken]);


  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="users-page">
        <div className="users-loading">
          Loading users...
        </div>
      </div>
    );
  }


  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <div className="users-page">
        <div className="users-error">
          {error}
        </div>
      </div>
    );
  }


  return (
    <div className="users-page">

      {/* Header */}

      <div className="users-header">

        <div>
          <h1>Users</h1>
          <p>Manage all registered users</p>
        </div>

        <div className="user-count">
          Total Users:
          <strong>{users.length}</strong>
        </div>

      </div>


      {/* Table */}

      <div className="users-table-container">

        <table className="users-table">

          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user, index) => (

              <tr key={user._id}>

                <td>
                  {index + 1}
                </td>

                <td className="user-name">
                  {user.username || user.name || "N/A"}
                </td>

                <td>
                  {user.email || "N/A"}
                </td>

                <td>
                  {user.phone || "N/A"}
                </td>

                <td>

                  <span className="user-role">
                    {user.role || "User"}
                  </span>

                </td>

                <td>

                  <div className="user-actions">

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {users.length === 0 && (
          <div className="no-users">
            No users found
          </div>
        )}

      </div>


      {/* =========================
          EDIT MODAL
      ========================= */}

      {editingUser && (

        <div className="edit-modal-overlay">

          <div className="edit-modal">

            <div className="edit-modal-header">

              <h2>Edit User</h2>

              <button
                className="close-btn"
                onClick={() => setEditingUser(null)}
              >
                ×
              </button>

            </div>


            <form onSubmit={updateUser}>

              <div className="form-group">

                <label>
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={editingUser.username || ""}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={editingUser.email || ""}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={editingUser.phone || ""}
                  onChange={handleChange}
                />

              </div>


              <div className="form-group">

                <label>
                  Role
                </label>

                <select
                  name="role"
                  value={editingUser.role || "User"}
                  onChange={handleChange}
                >
                  <option value="User">
                    User
                  </option>

                  <option value="Admin">
                    Admin
                  </option>
                </select>

              </div>


              <div className="modal-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
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

export default AdminUsers;