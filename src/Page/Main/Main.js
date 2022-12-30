import React from 'react';
import ResponsiveAppBar from '../../components/App-Bar/Navbar';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <section className={'overflow-hidden max-h-screen'}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <main>
                <Outlet></Outlet>
            </main>
        </section>
    );
};

export default Main;