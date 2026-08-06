import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

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

    try {
      if (selectedUser) {
        await axios.put(
          `http://localhost:5000/api/users/${selectedUser._id}`,
          formData,
        );

        alert("User Updated");
      } else {
        await axios.post("http://localhost:5000/api/users/create", formData);

        alert("User Created");
      }

      fetchUsers();
      closeModal();
    } catch (error) {
      console.log(error);
      alert("Operation Failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="user-modal">
        <div className="modal-header">
          <h2>{selectedUser ? "Edit User" : "Create New User"}</h2>

          <button onClick={closeModal}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />

          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="User">User</option>

            <option value="Admin">Admin</option>

            <option value="Manager">Manager</option>
          </select>

          <button className="primary-btn">
            {selectedUser ? "Update User" : "Create User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
