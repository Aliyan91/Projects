import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counter from './components/display-counter';

function App() {
  return (
    <div class="px-5 py-5 my-5 text-center card">             
        <Header></Header>
        <Counter></Counter>
    </div>
  );
}

export default App;
