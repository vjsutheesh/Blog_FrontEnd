import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1> The VJ Blog </h1>
            <div className="links">
                {/* <a href="/"> Home </a>
                <a href="/create"> New Blog </a> */}
                <Link to="/"> Home </Link>
                <Link to="/create"> New Blog </Link>
            </div>
        </div>
     );
}
 
export default Navbar;