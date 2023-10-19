import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserProvider } from '../context/Usercontext';
import swal from 'sweetalert';

const Header = () => {
    const { currentUser, firstShow, logOut } = useContext(UserProvider)
    const handelLogOut = () => {
        logOut()
            .then(() => {
                swal("Good job!", "Signout sucessfully!", "success");
            }).catch(() => {
                swal("Opps!", "Somethings rong!", "error");
            });
    }

    const navLink = <>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-400 font-bold px-2 py-2" : "text-white px-2 font-bold py-2"
            }
            to='/'>Home</NavLink>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-400 font-bold px-2 py-2" : "text-white px-2 font-bold py-2"
            }
            to='/addproduct'>Add Product</NavLink>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-400 font-bold px-2 py-2" : "text-white px-2 font-bold py-2"
            }
            to='/mycard'>My Cart</NavLink>
    </>
    return (
        <div className="navbar bg-[#1647638a]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="text-white btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1647638a] rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="text-xl normal-case btn btn-ghost"><img className='w-6 lg:w-10' src="https://i.postimg.cc/y60Mpp1P/Feation-3-removebg-preview-1.png" alt="" /><span className='text-lg text-white'>Fashion Shop</span></Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    currentUser ? <div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={currentUser.photoURL || firstShow} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black  rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Email
                                        <span className="p-3 text-white rounded-full badge bg-primary">{currentUser.emailVerified ? 'valid' : 'invalid'}</span>
                                    </a>
                                </li>
                                <li><a>{currentUser.displayName}</a></li>
                                <li onClick={handelLogOut}><a>Logout</a></li>
                            </ul>
                        </div>

                    </div> : <div> <Link to='/login' className="text-white bg-transparent border-none btn hover:text-black">Login</Link></div>
                }

            </div>
        </div>
    );
};

export default Header;