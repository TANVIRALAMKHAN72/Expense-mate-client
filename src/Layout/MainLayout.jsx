import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import { Outlet } from 'react-router';



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;