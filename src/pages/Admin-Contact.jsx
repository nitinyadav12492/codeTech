import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { API_URL } from "../config";
import "./Admin-Contact.css";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { authorizationToken } = useAuth();

  const getContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/admin/contacts`,
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
          data.message || "Failed to fetch contacts"
        );
      }

      setContacts(data);

    } catch (error) {
      console.log("Contacts Error:", error);
      setError(error.message);
      setContacts([]);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorizationToken) {
      getContacts();
    }
  }, [authorizationToken]);

  if (loading) {
    return (
      <div className="contacts-page">
        <div className="contacts-loading">
          Loading contacts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="contacts-page">
        <div className="contacts-error">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="contacts-page">

      {/* Header */}
      <div className="contacts-header">

        <div>
          <h1>Contacts</h1>
          <p>Manage all customer messages</p>
        </div>

        <div className="contact-count">
          Total Contacts:
          <strong>{contacts.length}</strong>
        </div>

      </div>


      {/* Contact Table */}
      <div className="contacts-table-container">

        <table className="contacts-table">

          <thead>
            <tr>
              <th>S.No.</th>
              <th>Username</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>

            {contacts.map((contact, index) => (

              <tr key={contact._id}>

                <td>
                  {index + 1}
                </td>

                <td className="contact-name">
                  {contact.username || "N/A"}
                </td>

                <td className="contact-email">
                  {contact.email || "N/A"}
                </td>

                <td className="contact-message">
                  {contact.message || "N/A"}
                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {contacts.length === 0 && (
          <div className="no-contacts">
            No contacts found
          </div>
        )}

      </div>

    </div>
  );
};

export default AdminContacts;