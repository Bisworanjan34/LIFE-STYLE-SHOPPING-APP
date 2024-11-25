import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import logo from '../assets/admin_assets/lifestylelogo.png';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../contaxt/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCount } = useContext(ShopContext)

    return (
        <div className="sticky top-0 z-50 flex items-center justify-between py-5 font-medium bg-white">

            {/* Logo */}
            <Link to='/'><img src={logo} alt="logo" className="w-28" /></Link>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>Home</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>About</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>Collection</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>Contact</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>

            {/* Icons (Search, Profile, Cart, Menu) */}
            <div className="flex items-center gap-6">
                {/* Search Icon */}
                <Link to="/collection">
                    <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search Icon" />
                </Link>

                {/* Profile Dropdown */}
                <div className="relative group">
                    <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile Icon" />
                    <div className="hidden group-hover:block absolute right-0 pt-4 z-50">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <Link to="./contact"><p className="cursor-pointer hover:text-black">My Profile</p></Link>
                            <Link to="./order"><p className="cursor-pointer hover:text-black">Order</p></Link>
                            <Link to="./login"><p className="cursor-pointer hover:text-black">Logout</p></Link>
                        </div>
                    </div>
                </div>

                {/* Cart Icon */}
                <Link to="/Cart" className="relative">
                    <img src={assets.cart_icon} className="w-5" alt="Cart Icon" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        {getCount()}
                    </p>
                </Link>

                {/* Menu Icon for Mobile */}
                <img
                    onClick={() => setVisible(!visible)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt="Menu Icon"
                />
            </div>

            {/* Sidebar Menu for Mobile */}
            <div
                className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out z-50 sm:hidden ${visible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close button inside the sidebar */}
                <button
                    onClick={() => setVisible(false)}
                    className="absolute top-4 right-4 text-gray-600"
                >
                    <i class="bi bi-x"></i>
                </button>

                {/* Sidebar Content */}
                <ul className="flex flex-col gap-5 p-4 mt-4">
                    <li>        
                        <NavLink to="/" onClick={() => setVisible(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => setVisible(false)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/collection" onClick={() => setVisible(false)}>
                            Collection
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={() => setVisible(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
