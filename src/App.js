import './App.css';
import { MessageForm } from './components/MessageForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">Message Processor</header>
      <div className="App-body">
        <MessageForm />
      </div>
    </div>
  );
}

export default App;
