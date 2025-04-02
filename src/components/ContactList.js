import React from 'react'
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';


const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id} 
            /> 
        );
    })

    // Return parsed contact data formatted
    return (
        <div class="main" style={{marginTop: "50px"}}>
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center" 
            }}>
                <h2>Contact List</h2>
                <Link to="/add">
                    <button className="ui compact button blue">Add Contact</button>
                </Link>
            </div>
            <p>Sort by</p>
            <div className="ui celled list">{renderContactList} </div>
        </div>
    );
};


export default ContactList;