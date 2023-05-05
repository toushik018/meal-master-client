import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import classNames from 'classnames';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handleLogOut = () => {
        logOut();
    };

    const getNavLinkClass = (path) => {
        return classNames('mr-4', {
            'header-btn': location.pathname === path,
            'header-btn-2': location.pathname !== path,
        });
    };

    return (
        <div className="navbar bg-base-100 w-full lg:w-4/5 mx-auto mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink exact="true" to='/' className={getNavLinkClass('/')}>Home</NavLink>
                        <NavLink to='/blog' className={getNavLinkClass('/blog')}>Blog</NavLink>
                        {!user && <NavLink to='/register' className={getNavLinkClass('/register')}>Register</NavLink>}
                    </div>
                </div>
                <Link to="/" className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Meal <span className="text-gray-800">Master</span>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink exact="true" to='/' className={getNavLinkClass('/')}>Home</NavLink>
                <NavLink to='/blog' className={getNavLinkClass('/blog')}>Blog</NavLink>
                {!user && <NavLink to='/register' className={getNavLinkClass('/register')}>Register</NavLink>}
            </div>
            <div className="navbar-end">
                {user &&
                    <>
                        <div to='/profile' className='mr-4 tooltip' data-tip={user.displayName}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-full" >
                                    <img src={user.photoURL} alt="Profile" />
                                </div>
                            </label>
                        </div>
                        <button onClick={handleLogOut} className='header-btn-2 mr-4'>Logout</button>
                    </>
                }
                {!user && <NavLink to='/login' className={getNavLinkClass('/login')}>Login</NavLink>}
            </div>
        </div>
    );
};

export default Header;
