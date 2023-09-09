// src/components/ContactList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import { deletecontact } from './redux/Action';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const [editingContact, setEditingContact] = useState(null);

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleDelete = (id) => {
    dispatch(deletecontact(id));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contacts</h1>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
        onClick={() => setEditingContact({})}
      >
        Add Contact
      </button>
      {editingContact && (
        <ContactForm contactToEdit={editingContact} onCancel={() => setEditingContact(null)} />
      )}
    </div>
  );
};

export default ContactList;
