
import { useState } from 'react';
import './App.css';
import Futer from '../components/Footer';
import Header from '../components/Header';
import Postlist from '../components/Postlist';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';
import PostListProvider from '../store/post-list-store';
import { Outlet } from 'react-router-dom';

function App() {

  const [selectedTab, setselectedTab] = useState("Home")
  return (
    <PostListProvider>
       <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
        <div className='content'>
          <Header></Header>
          <Outlet/>
          <Futer></Futer>
        </div>
      </div>
    </PostListProvider>


  );
}

export default App;
