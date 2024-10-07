import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counter from './components/display-counter';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/privacymessagw';

function App() {

  const privacy =useSelector(store => store.privacy);
  return (
    <div class="px-5 py-5 my-5 text-center card">             
        <Header></Header>
        {privacy ? <PrivacyMessage></PrivacyMessage>: <Counter></Counter>}
    </div>
  );
}

export default App;
