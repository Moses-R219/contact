import { configureStore } from "@reduxjs/toolkit";
import  toAddContact  from "./Action";


 const store =configureStore({
    reducer:{
        contacts:toAddContact,
    },
});

export default store;