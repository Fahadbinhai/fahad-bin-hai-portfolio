import React from 'react';
import {
    createBrowserRouter
} from "react-router";
import HomePage from '../HomePage/HomePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
    },
]);

export default router;