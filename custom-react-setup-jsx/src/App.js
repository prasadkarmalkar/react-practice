import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import ClassBasedCount from './components/ClassBasedCount';
import ClassLifeCycle from './components/ClassLifeCycle';
const MyContainer = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}
const routingConfiguration = createBrowserRouter([
    {
        path:'/',
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/classbasedcount',
                element: <ClassBasedCount />
            },
            {
                path:'/classlifecycle',
                element: <ClassLifeCycle />
            }
        ],
        element:<MyContainer />
    }
]) 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routingConfiguration} />)