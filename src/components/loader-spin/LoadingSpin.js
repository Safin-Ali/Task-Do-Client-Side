import React from 'react';
import './loading-spin.css';

const LoadingSpin = () => {
    return (
        <section className={`flex justify-center items-center h-screen`}>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </section>
    );
};

export const LoadingSpinRotateDot = () => {
    return (
        <section className={`flex justify-center items-center h-screen`}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </section>
    );
};

export default LoadingSpin;