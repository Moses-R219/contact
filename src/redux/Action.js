import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    contacts:[
        {id:1,Customer:"Moses",Phone:"9348727842",Status:"active"},
        {id:2,Customer:"Moses",Phone:"9348727842",Status:"active"},
        {id:3,Customer:"Moses",Phone:"9348727842",Status:"active"}
    ],
}

export const newContact=createSlice({
    name:'contacts',
    initialState,
    reducers:{
        add:(state,action)=>{
            const { name, phone, status } = action.payload;
            const newContact = {
              id: nanoid(),
              Customer: name,
              Phone: phone,
              Status: status,
            };
            state.contacts.push(newContact);
        },
        edit: (state, action) => {
            const { id, name, phone, status } = action.payload;
            const contactIndex = state.contacts.findIndex((contact) => contact.id === id);
            if (contactIndex !== -1) {
              state.contacts[contactIndex] = { id, Customer: name, Phone: phone, Status: status };
            }
          },
          deletecontact: (state, action) => {
            const contactIdToDelete = action.payload;
            state.contacts = state.contacts.filter((contact) => contact.id !== contactIdToDelete);
          },
    }
});

export const {add,edit,deletecontact}=newContact.actions;
export default newContact.reducer;