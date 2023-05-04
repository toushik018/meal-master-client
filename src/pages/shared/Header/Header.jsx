import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="navbar bg-base-100 container mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className='btn btn-ghost'>Home</Link>
                        <Link to='/blog' className='btn btn-ghost'>Blog</Link>
                    </div>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">Meal <span className='text-orange-400'> Master</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink to='/' className='btn btn-ghost'>Home</NavLink>
                <NavLink to='/blog' className='btn btn-ghost' >Blog</NavLink>
                {!user && <NavLink to='/register' className='btn btn-ghost'>Register</NavLink>}
            </div>
            <div className="navbar-end">
                {user &&
                    <>
                        <div to='/profile' className=' mr-4 tooltip' data-tip={user.displayName}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-full" >
                                <img src={user.photoURL} alt="Profile" />
                                </div>
                            </label>
                        </div>
                        <button onClick={handleLogOut} className='btn btn-ghost mr-4'>Logout</button>
                    </>
                }
                {!user && <NavLink to='/login' className='btn btn-ghost'>Login</NavLink>}
            </div>
        </div >
    );
};

export default Header;
