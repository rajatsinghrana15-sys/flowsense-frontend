import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const AddUserModal = ({ closeModal, fetchUsers, selectedUser }) => {
  const [formData, setFormData] = useState({
    name: selectedUser?.name || "",

    email: selectedUser?.email || "",

    username: selectedUser?.username || "",

    password: "",

    department: selectedUser?.department || "",

    role: selectedUser?.role || "User",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading(
      selectedUser ? "Updating user..." : "Creating user...",
    );

    try {
      if (selectedUser) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/users/${selectedUser._id}`,
          formData,
        );

        toast.dismiss(toastId);
        toast.success("User updated successfully!");
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/users/create`,
          formData,
        );

        toast.dismiss(toastId);
        toast.success("User created successfully!");
      }

      fetchUsers();
      closeModal();
    } catch (error) {
      console.log(error);

      toast.dismiss(toastId);
      toast.error(error.response?.data?.message || "Operation failed");
    }
  };

  return (
    <div className="add-user-modal-overlay">
      <div className="add-user-modal">
        <div className="add-user-modal-header">
          <h2>{selectedUser ? "Edit User" : "Create New User"}</h2>

          <button
            type="button"
            className="add-user-close-btn"
            onClick={closeModal}
          >
            <X size={20} />
          </button>
        </div>

        <form className="add-user-form" onSubmit={handleSubmit}>
          <input
            className="add-user-input"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="add-user-input"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="add-user-input"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            className="add-user-input"
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            className="add-user-input"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />

          <select
            className="add-user-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>

          <button className="add-user-submit-btn">
            {selectedUser ? "Update User" : "Create User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
