import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const AddContact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); 

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") 
        {
            alert("All fields are mandatory!");
            return;
        }

        props.addContactHandler({ name, email });
        // Reset States
        setName(""); 
        setEmail(""); 
        // Navigate to home page
        navigate("/"); 
    };


    return (
        <div className="ui main" style={{ marginTop: "50px" }}>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
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
                    Add
                </button>
            </form>
        </div>
    );
};


export default AddContact;