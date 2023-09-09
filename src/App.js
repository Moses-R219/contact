// App.js
import React, { useState } from 'react';
import ContactCard from './ContactCard';
import SideBar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
function App() {
  

  return (
    <div className="App">
       <SideBar />
    </div>
  );
}

export default App;
