
import './App.css';
import Futer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='app-container'>
     <Sidebar></Sidebar>
     <div className='content'>
        <Header></Header>
        <Futer></Futer>
     </div>
    </div>
    
  );
}

export default App;
