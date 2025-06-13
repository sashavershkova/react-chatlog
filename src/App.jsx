import './App.css';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog
          entries={messages} />
      </main>
    </div>
  );
};

export default App;
