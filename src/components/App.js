import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  // Load contacts from localStorage on initial render
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const addContactHandler = (contact) => {
    const newContact = { id: uuidv4(), ...contact };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    
    setContacts(newContactList);
  };

  useEffect(() => {
    if(contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    } 
  }, [contacts]);


  return (
    <div className="ui container">
      <Router>  {/* Wrap Routes with Router */}
        <Header />
        <Routes>  
          {/* Home */}
          <Route 
            path="/" 
            element={
            <ContactList 
              contacts={contacts} 
              getContactId={removeContactHandler} 
            />} 
          />

          {/* Add Contact */}
          <Route 
            path="/add" 
            element={
            <AddContact 
              addContactHandler={addContactHandler} 
            />}  
          />

          {/* Edit Contact */}
          <Route 
            path="/contact/:id" 
            element={
            <ContactDetails />}  
          />
        </Routes>

      </Router>
    </div>
  );
}


export default App;