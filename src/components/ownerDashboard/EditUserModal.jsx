import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

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

    try {
      await axios.put(`http://localhost:5000/api/users/${user._id}`, formData);

      alert("User Updated Successfully");

      fetchUsers();

      closeModal();
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="user-modal">
        <div className="modal-header">
          <h2>Edit User</h2>

          <button onClick={closeModal}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleUpdate}>
          <input name="name" value={formData.name} onChange={handleChange} />

          <input name="email" value={formData.email} onChange={handleChange} />

          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

          <select name="role" value={formData.role} onChange={handleChange}>
            <option>User</option>
            <option>Admin</option>
            <option>Manager</option>
          </select>

          <select name="status" value={formData.status} onChange={handleChange}>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="primary-btn">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
