import React from 'react';
import ResponsiveAppBar from '../../components/App-Bar/Navbar';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;