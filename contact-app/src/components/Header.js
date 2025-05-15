import '../styling/header.css';


const Header = () => {
    const avatarUrl = "https://ui-avatars.com/api/?name=G&background=c1f0f6&color=444";
    return (
        <div className="topbar">
            <h2 className="logo">
            Contact<span style={{ color: '#f2711c' }}>Manager</span>
            </h2>
            <div className="topbar-right">
                <span className="user-name">Guest</span>
                <img
                    src={avatarUrl}
                    alt="user"
                    className="user-avatar"
                />
                <i className="bell outline icon notification-icon"></i>
                <i className="envelope outline icon message-icon"></i>
            </div>
      </div>
    );
}


export default Header;