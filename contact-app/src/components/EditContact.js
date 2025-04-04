import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';


const EditContact = ({ updateContactHandler }) => {
    const location = useLocation();
    const { contact } = location.state || {};

    const [name, setName] = useState(contact?.name || "");
    const [email, setEmail] = useState(contact?.email || "");
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if (name === "" || email === "") 
        {
            alert("All fields are mandatory!");
            return;
        }

        updateContactHandler({
            id: contact.id,
            name,
            email
        });

        // Reset States
        setName(""); 
        setEmail(""); 
        // Navigate to home page
        navigate("/"); 
    };


    return (
        <div className="ui main" style={{ marginTop: "50px" }}>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}  
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                </div>
                <Link to="/">
                    <button className="ui button blue center">
                        Cancel
                    </button>
                </Link>
                <button className="ui button blue" style={{ marginTop: "5px" }}>
                    Update
                </button>
            </form>
        </div>
    );
};


export default EditContact;