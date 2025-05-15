import { useRef } from 'react'
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';
import '../styling/styles.css';



const ContactList = (props) => {
    const inputEl = useRef("");

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

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };

    // Return parsed contact data formatted
    return (
        <div class="main">
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center" 
            }}>
                <h2 className="ui sub header">Contacts</h2>
                <Link to="/add">
                    <button className="ui button blue">CREATE NEW CONTACT</button>
                </Link>
            </div>
            <div className="ui-input">
                <div className="ui icon input">
                    <input 
                        ref={inputEl}
                        type="text" 
                        placeholder="Search Contacts" 
                        className="prompt"
                        value={ props.term } 
                        onChange={ getSearchTerm } 
                    />
                    <i className="search icon"></i>
                </div>
            </div>

            <div className="ui celled list">
                {renderContactList.length > 0
                    ? renderContactList 
                    : "No Contacts available"} 
            </div>
        </div>
    );
};


export default ContactList;