import React from 'react';

function SideNav(props) {
    return (
        <div>
            <nav className="navmenu">
                <ul>
                    <li><a href="#home" className=""><i className="fas fa-home"></i><span>Home</span></a></li>
                    <li><a href="#about" className=""><i className="fas fa-users"></i><span>About us</span></a></li>
                    <li><a href="#event" className=""><i className="fas fa-calendar-alt"></i><span>Events</span></a></li>
                    <li><a href="#prizes" className=""><i className="fas fa-trophy"></i><span>Prizes</span></a></li>
                    <li><a href="#sponsors" className=""><i className="fas fa-wallet"></i><span>Sponsors</span></a></li>
                    <li><a href="#faq" className=""><i className="fas fa-comments"></i><span>FAQ's</span></a></li>
                    <li><a href="#footer" className=""><i className="fas fa-phone-square-alt"></i><span>Contact us</span></a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default SideNav;