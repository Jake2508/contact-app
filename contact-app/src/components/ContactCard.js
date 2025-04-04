import React from 'react'
import user from '../images/user.png';
import { Link } from 'react-router-dom';


const ContactCard = ({ contact }) => {
        const {id, name, email} = contact;
    return(
        <div className="item" style={{ display: "flex", alignItems: "center" }}>
                <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{ contact }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            <div>
            <Link to={`/confirm-delete/${id}`} state={{ contact }}>
                <i className="trash alternate outline icon"
                style={{color: "red", marginTop: "7px"}}
                ></i>
            </Link>
            </div>
        </div>
    </div>
    );
};


export default ContactCard;