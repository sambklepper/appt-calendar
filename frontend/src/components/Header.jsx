import {Link} from 'react-router-dom';
import {FaHome, FaInfoCircle, FaPlus} from "react-icons/fa";

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
                        <Link to="/">
                            <span className='nav-icon'>
                                <FaHome />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/add"><span className='nav-icon'><FaPlus /></span></Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span className='nav-icon'>
                                <FaInfoCircle />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}