import Todoitem2 from './Todoitems2';
import './App.css';
import Appame from './AppName';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtodo from './Addtodo';
import WelcomeMessage from './WelcomeMessage';
import TodoitemsContextProvider from './todoitems-stor';



function App() {
  return (
    <TodoitemsContextProvider>
      <div className="cotainer text-center">
        <Appame></Appame>
        <Addtodo ></Addtodo>
        <WelcomeMessage></WelcomeMessage>
        <Todoitem2 ></Todoitem2>
      </div>
    </TodoitemsContextProvider>
  );
}

export default App;
