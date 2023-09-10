import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="container mb-4 mt-4">
            <ul className="nav nav-pills bg-dark">
                <li className="nav-item">
                    <Link className="nav-link" to="/registration"> resgister </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login"> Login </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;