import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import {  FaHome, FaUsers, FaWallet, } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../pages/provider/AuthProvider";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <Helmet>
                <title>Teaching Corner | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-300 flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-transparent bg-cyan-800">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-black h-full ">
                        {
                            user ? <>
                                <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="addClass">  Add Class</NavLink></li>
                                <li><NavLink to="manageClasses"> Manage Classes</NavLink></li>
                                <li><NavLink to="allUsers"><FaUsers></FaUsers> All Users</NavLink></li>
                                <li><NavLink to="selectedClass"> My Selected Class</NavLink></li>

                            </> : <>
                                <li><NavLink to="/home"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                                
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes"> Classes</NavLink></li>
                        <li><NavLink to="/instructors">Instructors</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;