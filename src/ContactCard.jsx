import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { edit, deletecontact, add } from '../src/redux/Action'; // Import your edit and delete actions

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const [editedContact, setEditedContact] = useState(contacts);
  const dispatch = useDispatch();
  const [isediting, setisediting] = useState(false);
  const handleEdit = (contact) => {
    dispatch(edit(contact));
  };

  const handleDelete = (contactId) => {
    dispatch(deletecontact(contactId)); // Dispatch the delete action
  };
  // const handleSave = (updatedContact) => {
  //   const updatedContacts = contacts.map((contact) =>
  //     contact === selectedContact ? updatedContact : contact
  //   );
  //   setContacts(updatedContacts);
  //   setSelectedContact(updatedContact);
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isediting
        ? (<>
            <div>
          <h2>Edit Contact</h2>
          <input
            type="text"
            placeholder="Name"
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={editedContact.email}
            onChange={(e) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
          />
          {/* <button onClick={handleSave}>Save</button> */}
        </div>
        </>): (
          <div className="grid grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold">{contact.Customer}</h2>
              <ul className="mt-2">
                <li className="mb-1">
                  <span className="font-semibold">Phone:</span> {contact.Phone}
                </li>
                <li className="mb-1">
                  <span className="font-semibold">Status:</span> {contact.Status}
                </li>
              </ul>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setisediting(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
          )
}
    </div >
  );
};

export default ContactList;

