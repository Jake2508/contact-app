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
import EditContact from './EditContact';


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

  // Add New Contact
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(), 
      ...contact 
    }

    const response = await api.post("/contacts", request);
    setContacts((prevContacts) => [...prevContacts, response.data]);
  };

  // Edit Selected Contact
  const updateContactHandler = async (updatedContact) => {
    const response = await api.put(`/contacts/${updatedContact.id}`, updatedContact);

    // Corrected setContacts logic
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? response.data : contact
      )
    );
  };

  //  Remove Selected Contact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
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

          <Route 
            path="/contact/:id" 
            element={<ContactDetails />} 
          />

          {/* Edit Contact */}
          <Route 
            path="/edit/:id" 
            element={
            < EditContact updateContactHandler={updateContactHandler} />}  
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