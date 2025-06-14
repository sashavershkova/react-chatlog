import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog.jsx';
import messagesData from './data/messages.json';

const calculateTotalLikes = (messagesData) => {
  return messagesData.reduce((total, sender) => {
    const like = sender.liked ? 1 : 0;
    return total + like;
  }, 0);
};

const App = () => {
  const [messages, setMessagesData] = useState(messagesData);
  const totalHearts = calculateTotalLikes(messages);

  const toggleLike = (senderId) => {
    const senders = messages.map(sender => {
      if (sender.id === senderId) {
        return {...sender, liked: !sender.liked};
      } else {
        return sender;
      }
    });

    setMessagesData(senders);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section><span className='widget' id='heartWidget'>{totalHearts} ❤️s</span></section>
      </header>
      <main>

        <ChatLog
          onHeart={toggleLike}
          entries={messages} />
      </main>
    </div>
  );
};

export default App;
