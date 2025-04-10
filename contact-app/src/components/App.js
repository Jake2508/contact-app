import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import api from '../api/contacts';
import './App.css';
import Header from "./Header"
import SideBar from "./Sidebar"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails";
import ConfirmDeleteModal from './ConfirmDeleteModal';
import EditContact from './EditContact';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Retrieve Contacts from API
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  useEffect(() => {
    // Add data from api
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
  
    getAllContacts();
  }, []);

  // Search Handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }
  };

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
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);

    // Update Selected Contact
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === contact.id ? response.data : contact
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


  return (
    <div className="ui container">
      <Router>  {/* Wrap Routes with Router */}
        <Header />
        <SideBar />
        <div className={"main-content"}>
        <Routes>  
          {/* Home - Contact List */}
          <Route 
            path="/" 
            element={
            <ContactList 
              contacts={searchTerm.length < 1 ? contacts : searchResults} 
              term={searchTerm}
              searchKeyword={searchHandler}
              
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

          {/* View Contact */}
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

          {/* Delete Contact */}
          <Route 
            path="/confirm-delete/:id" 
            element={
            <ConfirmDeleteModal
              removeContactHandler={removeContactHandler} 
            />}  
          />
        </Routes>
        </div>
        
      </Router>
    </div>
  );
}


export default App;