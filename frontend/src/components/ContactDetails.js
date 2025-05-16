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
        <div className="ui container center aligned" style={{ marginTop: '10em' }}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <h2 className="header">{contact.name}</h2>
                    <a className="description" href={`mailto:${contact.email}`}>
                        {contact.email}
                    </a>
                </div>
            </div>
            <div className="ui section style">
                <Link to="/">
                    <button className="ui button blue center">
                        Return
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default ContactDetails;