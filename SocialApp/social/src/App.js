
import './App.css';
import Post from './components/CreatePost';
import Futer from './components/Footer';
import Header from './components/Header';
import Card from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='app-container'>
     <Sidebar></Sidebar>
     <div className='content'>
        <Header></Header>
        <Post></Post>
        <Card></Card>
        <Futer></Futer>
     </div>
    </div>
    
  );
}

export default App;
