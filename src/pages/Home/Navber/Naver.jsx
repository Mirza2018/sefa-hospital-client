import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Provider/AuthProvider';

const Naver = () => {
    const { user,logOut } = useContext(AuthContex)
    // const signout=()=>{
    //     logOut()
    // }
    const menu = <>


        <li><Link to='/'>Home</Link></li>
        <li><Link to='/doctors'>Doctors</Link></li>
        <li><Link to='/appointmentData'>Appointment details</Link></li>
        {
            user ? <li onClick={()=>logOut()}><Link to='/'>log Out</Link></li>: <li><Link to='/login'>login</Link></li>
        }


    </>
    return (
        <div className="navbar bg-orange-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <img className='w-12' src="https://alshifa-healthcare.com/assets/img/a4.png" alt="" />
                {/* <a className="btn btn-ghost normal-case text-xl">Al-Shifa Hospital</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<h1>{user?.email}</h1>:<a className="btn"><Link to="/register">Register</Link></a>
                }
                
            </div>
        </div>
    );
};

export default Naver;