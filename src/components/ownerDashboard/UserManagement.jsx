import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";

import {
  Search,
  Plus,
  UserCheck,
  MoreVertical,
  Edit2,
  Trash2,
} from "lucide-react";

const UserManagement = () => {
  const [roleFilter, setRoleFilter] = useState("All");
  const [editUser, setEditUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get("http://10.189.81.148:5000/api/users");

      setUsers(response.data);
    } catch (error) {
      console.log(error);

      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://10.189.81.148:5000/api/users/${id}`);

      fetchUsers();
    } catch (error) {
      console.log(error);

      alert("Failed to delete user");
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === "All" || u.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="owner-user-management user-management-module">
      <div className="owner-module-top module-top">
        <div>
          <h2>User Management</h2>
          <p>
            Control access, assign department roles, and monitor enterprise
            permissions.
          </p>
        </div>
        <button
          className="owner-primary-btn primary-btn"
          onClick={() => setShowModal(true)}
        >
          <Plus size={16} />
          Add New User
        </button>
      </div>

      <div className="owner-table-card glass-card table-card">
        <div className="owner-table-controls table-controls">
          <div className="owner-search-bar search-bar sm">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="owner-role-filter role-filter">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>

        <div className="owner-table-wrapper responsive-table-wrapper">
          <table className="owner-table custom-table">
            <thead>
              <tr>
                <th>Emp ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="loading-text">
                    Loading Users...
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="emp-id">
                      {user.employeeId || user.empId || "-"}
                    </td>
                    <td className="font-semibold">{user.name}</td>

                    <td className="text-muted">{user.email}</td>

                    <td>{user.department}</td>

                    <td>
                      <span className="role-badge">{user.role}</span>
                    </td>

                    <td>
                      <span
                        className={`status-dot ${user.status?.toLowerCase()}`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="text-right">
                      <div className="owner-action-buttons action-buttons">
                        <button
                          className="owner-action-btn action-btn"
                          onClick={() => {
                            setSelectedUser(user);
                            setShowModal(true);
                          }}
                        >
                          <Edit2 size={15} />
                        </button>

                        <button
                          className="owner-action-btn action-btn danger"
                          title="Delete User"
                          onClick={() => deleteUser(user._id)}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
              {!loading && filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="loading-text">
                    No Users Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && (
        <AddUserModal
          closeModal={() => {
            setShowModal(false);
            setSelectedUser(null);
          }}
          fetchUsers={fetchUsers}
          selectedUser={selectedUser}
        />
      )}
      {showEditModal && (
        <EditUserModal
          user={editUser}
          closeModal={() => setShowEditModal(false)}
          fetchUsers={fetchUsers}
        />
      )}
    </div>
  );
};

export default UserManagement;
