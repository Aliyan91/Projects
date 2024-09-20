import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { CreatePostAction } from './components/CreatePost';
import Postlist, { postloader } from "../src/components/Postlist";

const router =createBrowserRouter([
  {path: "/",element:<App/>, children:[
  {path: "/",element:<Postlist/>, loader:postloader},
  {path: "/create-post",element:<CreatePost/>, }]},
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
