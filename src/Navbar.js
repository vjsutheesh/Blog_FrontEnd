import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const Navbar = () => {
    return ( 
        <NavLink className="navbar">
            <h1> The VJ Blog </h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create"> New Blog </Link>
            </div>
        </NavLink>
     );
}
 
export default Navbar;