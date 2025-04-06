import React from 'react'
import user from '../images/user.png';
import { Link } from 'react-router-dom';
import './animations.css';

const ContactCard = ({ contact }) => {
        const {id, name, email} = contact;
    return(
        <div className="item" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            marginBottom: '10px',
            backgroundColor: '#fff',
          }}
        >
            {/* Left Section: User Img & Text */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content" style={{ marginLeft: '10px' }}>
                    <Link
                        to={`/contact/${id}`} 
                        state={{ contact }}
                        className="userFields"
                    >
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
            </div>

            
            {/* Right Section: Edit and Delete */}
            <div>
            <Link to={`/edit/${id}`} state={{ contact }}>
                <i className="edit alternate outline icon"
                style={{color: "blue", cursor: 'pointer' }}
                ></i>
            </Link>
            <Link to={`/confirm-delete/${id}`} state={{ contact }}>
                <i className="trash alternate outline icon"
                style={{color: "red", marginRight: '10px', cursor: 'pointer' }}
                ></i>
            </Link>
            </div>
        </div>
    );
};


export default ContactCard;