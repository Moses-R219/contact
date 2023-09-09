import React from 'react';

const ContactCard = ({ contact, onEdit, onDelete }) => {
  return (
    
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
        {console.log(contact)}
      <h2 className="text-xl font-semibold">{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Status: {contact.status}</p>
      <div className="mt-2">
        <button
          className="bg-blue-500 text-white rounded px-2 py-1 mr-2"
          onClick={() => onEdit(contact)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white rounded px-2 py-1"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
