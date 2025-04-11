import React from "react";
import '../styling/sidebar.css';


const SideBar = () => {
    return(
        <div className="sidebar">
            <ul className="nav-list">
                <li>
                    <i className="users icon"></i>
                    <span>Company</span>
                </li>
                <li>
                    <i className="money bill alternate icon"></i>
                    <span>People</span>
                </li>
                <li>
                    <i className="boxes icon"></i>
                    <span>Expenses</span>
                </li>
                <li>
                    <i className="tasks icon"></i>
                    <span>Projects</span>
                </li>
            </ul>
        </div>
    );
}


export default SideBar;