import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {About} from "./pages/About";
import { Elewacje } from './pages/Elewacje';
import { Wykonczenia } from './pages/Wykonczenia';
import { Wycena } from './pages/Wycena';
import Layout from './components/Layout';
import { Contact } from './pages/Contact';
import { Projekty } from './pages/Projekty';
import { Zdjecia } from './pages/Zdjecia';
import { Zdjecia1 } from './pages/Zjecia1';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><App /></Layout>,
        children: [
            {
                path: "team",
                element: <About />,
            },
        ],
    },
    {
        path: "/about",
        element: <Layout><About /></Layout>
    },
    {
        path: "/elewacje",
        element: <Layout><Elewacje /></Layout>
    },
    {
        path: "/wykonczenia",
        element: <Layout><Wykonczenia /></Layout>
    },
    {
        path: "/wycena",
        element: <Layout><Wycena /></Layout>
    },
    {
        path: "/projects",
        element: <Layout><Projekty /></Layout>
    },
    {
        path: "/contact",
        element: <Layout><Contact /></Layout>
    },
    {
        path: "/zdjecia",
        element: <Layout><Zdjecia /></Layout>
    },
    {
        path: "/zdjecia1",
        element: <Layout><Zdjecia1 /></Layout>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   
   
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
