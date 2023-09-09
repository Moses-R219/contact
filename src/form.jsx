// src/components/ContactForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, edit } from './redux/Action';

const ContactForm = ({ contactToEdit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: contactToEdit ? contactToEdit.name : '',
    phone: contactToEdit ? contactToEdit.phone : '',
    status: contactToEdit ? contactToEdit.status : 'Active',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactToEdit) {
      dispatch(edit({ ...formData, id: contactToEdit.id }));
    } else {
      dispatch(add({ ...formData, id: Date.now() }));
    }

    onCancel();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <h2 className="text-xl font-semibold">
        {contactToEdit ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <div className="flex">
            <label className="mr-2">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={formData.status === 'Active'}
                onChange={handleInputChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={formData.status === 'Inactive'}
                onChange={handleInputChange}
              />
              Inactive
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
          >
            {contactToEdit ? 'Update' : 'Add'}
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white rounded px-4 py-2"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
