import React from 'react';
import ResponsiveAppBar from '../../components/App-Bar/Navbar';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <section className={'overflow-hidden hide-scrollbar hide-scrollbar-mz relative z-[2] flex flex-col max-h-screen min-h-screen'}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <main className={`overflow-y-scroll hide-scrollbar hide-scrollbar-mz`}>
                <Outlet></Outlet>
            </main>
        </section>
    );
};

export default Main;