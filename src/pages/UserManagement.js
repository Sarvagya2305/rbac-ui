// src/pages/UserManagement.js
import React, { useState } from "react";
import Modal from "../components/Modal";
import mockUsers from "../mockData/users.json";

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addUser = (user) => {
    setUsers([...users, user]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={() => setIsModalOpen(true)}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status ? "Active" : "Inactive"}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add User"
      >
        {/* Add User Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <select>
            <option>Admin</option>
            <option>User</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserManagement;
