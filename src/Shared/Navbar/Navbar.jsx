import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/provider/AuthProvider";
import img from "../../assets/images/website logo.jpg";
import "../Navbar/Navbar.css"
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li className="btn-nav"><Link to="/"><button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span className="btm-nav-label">Home</span>
        </button></Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        <li><Link to="/classes">Classes</Link></li>

        {
            user ?
                <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button></>
                : <><li><Link to="/login">Login</Link></li>
                </>
        }
    </>


    return (
        <>
            <div className="navbar  bg-cyan-950 text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={img} alt="" />
                    <a className="name btn btn-ghost">Instrument Of Percussion</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;