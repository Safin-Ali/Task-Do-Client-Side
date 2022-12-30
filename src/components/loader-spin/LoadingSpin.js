import React from 'react';
import './loading-spin.css';

const LoadingSpin = () => {
    return (
        <section className={`flex justify-center items-center h-screen`}>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </section>
    );
};
export const LoadingSpinModal = () => {
    return (
        <section className={`mx-auto absolute bg-[#00000045] w-full h-screen top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-1/2 flex items-center justify-center`}>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </section>
    );
};

export const LoadingSpinRotateDot = () => {
    return (
        <section className={`flex flex-col justify-center items-center h-screen`}>
            <h1 className={`text-center text-4xl font-bold uppercase tracking-[.20em] fade text-[#1976D2]`}>Task Do</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </section>
    );
};

export default LoadingSpin;