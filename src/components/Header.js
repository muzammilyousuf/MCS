import { React } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"; // Import the CSS for styling
import logo from "../images/logo.png"

function Header() {

    return (
        <header className="sticky-header">
            <div className="header-container">
                <div className="logo">
                    <a href='/'><img src={logo} alt='logo' /></a>
                </div>
                <div className="nav">
                    <nav className="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
