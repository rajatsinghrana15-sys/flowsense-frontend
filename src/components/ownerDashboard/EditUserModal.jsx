import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const EditUserModal = ({ user, closeModal, fetchUsers }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    username: user.username,
    department: user.department,
    role: user.role,
    status: user.status,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Updating user...");

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/users/${user._id}`,
        formData,
      );

      toast.dismiss(toastId);
      toast.success("User updated successfully!");

      fetchUsers();
      closeModal();
    } catch (error) {
      console.log(error);

      toast.dismiss(toastId);
      toast.error(error.response?.data?.message || "Failed to update user");
    }
  };

  return (
    <div className="edit-user-modal-overlay">
      <div className="edit-user-modal">
        <div className="edit-user-modal-header">
          <h2>Edit User</h2>

          <button
            type="button"
            className="edit-user-close-btn"
            onClick={closeModal}
          >
            <X size={20} />
          </button>
        </div>

        <form className="edit-user-form" onSubmit={handleUpdate}>
          <input
            className="edit-user-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="edit-user-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="edit-user-input"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            className="edit-user-input"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

          <select
            className="edit-user-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option>User</option>
            <option>Admin</option>
            <option>Manager</option>
          </select>

          <select
            className="edit-user-select"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="edit-user-submit-btn">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
