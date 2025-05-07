import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, ListOrdered } from 'lucide-react'; // optional icons

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-semibold underline underline-offset-4"
                            : "hover:text-purple-500 transition-all"
                    }
                >
                    <BookOpen className="inline mr-1" size={18} />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/listedbooks"
                    className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-semibold underline underline-offset-4"
                            : "hover:text-purple-500 transition-all"
                    }
                >
                    <ListOrdered className="inline mr-1" size={18} />
                    Listed Books
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white/70 backdrop-blur-md shadow-md rounded-xl mx-4 mt-4 px-4 py-2 mb-4" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white shadow-lg rounded-lg w-52 mt-3 z-[1] p-2"
                    >
                        {links}
                    </ul>
                </div>
                <a className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    BOI POKA
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-sm rounded-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition">
                    Explore
                </a>
            </div>
        </div>
    );
};

export default Navbar;
