import user from '../images/user.png';
import { Link } from 'react-router-dom';
import '../styling/animations.css';


const ContactCard = ({ contact }) => {
  const { id, name, email } = contact;

  return (
    <div
      className="contact-card"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 20px',
        marginBottom: '10px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      {/* LEFT SIDE: Avatar + Name/Email */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          className="ui avatar image"
          src={user}
          alt="user"
          style={{ width: '35px', height: '35px' }}
        />
        <div style={{ marginLeft: '12px' }}>
          <Link to={`/contact/${id}`} state={{ contact }} className="userFields">
            <div className="header" style={{ fontWeight: '600', color: "black" }}>{name}</div>
            <div style={{ fontSize: '0.9rem'}}>{email}</div>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE: Action Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link to={`/edit/${id}`} state={{ contact }}>
          <i className="edit alternate outline icon" style={{ color: 'blue', cursor: 'pointer' }}></i>
        </Link>
        <Link to={`/confirm-delete/${id}`} state={{ contact }}>
          <i className="trash alternate outline icon" style={{ color: 'red', cursor: 'pointer' }}></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
