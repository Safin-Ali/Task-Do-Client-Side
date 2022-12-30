import React from 'react';

const NoDataFound = ({
    children
}) => {
    return (
        <div>
            <h2 className={`text-3xl justify-center font-bold flex items-center min-h-screen`}>{children}</h2>
        </div>
    );
};

export default NoDataFound;