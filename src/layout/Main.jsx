import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Main;
