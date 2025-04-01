import React from 'react';
import Header from './Components/header/header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/footer/footer';
const Layout = () => {
    return (
        <>
        <Header />
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout;
