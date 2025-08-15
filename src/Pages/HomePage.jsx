import React from 'react';
import Hero from '../Component/Hero';
import { Outlet } from 'react-router';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
        </div>
    );
};

export default HomePage;