import {Link} from 'react-router-dom';

export default function Header() {
    return (<nav className="nav">
        <div className="nav-container">
            <div>
                <Link to="/">
                    <span  className="logo">Appt-Cal</span>
                </Link>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Appointment</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}