
import { useState } from 'react';
import './App.css';
import Futer from './components/Footer';
import Header from './components/Header';
import Postlist from './components/Postlist';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';

function App() {

  const [selectedTab,setselectedTab]=useState("Home")
  return (
    <div className='app-container'>
     <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
     <div className='content'>
        <Header></Header>
        {selectedTab === "Home" ? (
          <Postlist></Postlist>
        ) : (
         <CreatePost></CreatePost>
        )}
        <Futer></Futer>
     </div>
    </div>
    
  );
}

export default App;
