import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <Counter /> */}
      {/*<Message />*/}
      {/*<Greet name = "Daniel" />
      <Greet name = "Wisdom" />
      <Greet name = "AmiRa" />
  */}
    </div>
  );
}

export default App;
