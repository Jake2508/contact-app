import { useLocation, Link, useNavigate } from 'react-router-dom';
import user from '../images/user.png';


const ConfirmDeleteModal = ({ removeContactHandler}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const contact = location.state?.contact; 
    
    if (!contact) {
         // Handle edge case - no data
        return <h2>No contact details available - DELETE MODAL</h2>;
    }

    const handleDelete = () => {
        removeContactHandler(contact.id);
        navigate("/");
    };

    
    return(
        <div className="ui container center aligned" style={{ marginTop: '10em' }}>
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
                <p>Are you sure you want to delete the following contact?</p>
                <Link to="/">
                    <button className="ui button blue center">
                        Cancel
                    </button>
                </Link>
                    <button className="ui button blue center" 
                    onClick={handleDelete}> 
                        Confirm
                    </button>
            </div>
        </div>
    );
};


export default ConfirmDeleteModal;