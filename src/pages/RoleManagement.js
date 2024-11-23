// src/pages/RoleManagement.js
import React, { useState } from "react";
import Modal from "../components/Modal";
import mockRoles from "../mockData/roles.json";

const RoleManagement = () => {
  const [roles, setRoles] = useState(mockRoles);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addRole = (role) => {
    setRoles([...roles, role]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Role Management</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
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
        title="Add Role"
      >
        {/* Add Role Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Role Name" />
          <input type="text" placeholder="Permissions (comma-separated)" />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default RoleManagement;
