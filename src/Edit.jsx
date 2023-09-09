import React, { useState } from 'react';

const EditContactForm = ({ contact, onSave, onCancel }) => {
  const [editedContact, setEditedContact] = useState({ ...contact });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({
      ...editedContact,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedContact);
    onCancel();
  };

  return (
    <div className="edit-contact-form">
      <h2>Edit Contact</h2>
      <label>Name:</label>
      <input
        type="text"
        name="Customer"
        value={editedContact.Customer}
        onChange={handleInputChange}
      />
      <label>Phone:</label>
      <input
        type="text"
        name="Phone"
        value={editedContact.Phone}
        onChange={handleInputChange}
      />
      <label>Status:</label>
      <input
        type="text"
        name="Status"
        value={editedContact.Status}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditContactForm;
