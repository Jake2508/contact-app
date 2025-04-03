import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import user from '../images/user.png';


const ContactDetails = (props) => {
    const location = useLocation();
    const contact = location.state?.contact; 
    
    if (!contact) {
         // Handle edge case - no data
        return <h2>No contact details available</h2>;
    }

    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to contact list
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default ContactDetails;