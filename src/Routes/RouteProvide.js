import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const RouteProvide = () => {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default RouteProvide;