import React from 'react'
import ContactCard from './ContactCard';


const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contacts = [
        {
            id: "1",
            name: "Jake",
            email: "Examplee@gmail.com",
        },
    ];
    const renderContactList = contacts.map((contact) => {
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
            <h2>Contact List</h2>
            <p>Sort by</p>
            <div className="ui celled list">{renderContactList} </div>
        </div>
    );
};


export default ContactList;