import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import api from '../api/contacts';
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails";
import ConfirmDeleteModal from './ConfirmDeleteModal';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  // Retrieve Contacts from API
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
  
  // Init an empty array
  const [contacts, setContacts] = useState([]);  
  useEffect(() => {
    // Add data from api
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
  
    getAllContacts();
  }, []);

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

          {/* Are you Sure Modal */}
          <Route 
            path="/confirm-delete/:id" 
            element={
            <ConfirmDeleteModal
              removeContactHandler={removeContactHandler} 
            />}  
          />
        </Routes>
      </Router>
    </div>
  );
}


export default App;