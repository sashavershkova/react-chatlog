import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog.jsx';
import ColorChoice from './components/ColorChoice.jsx';
import messagesData from './data/messages.json';
import { use } from 'react';

const calculateTotalLikes = (messagesData) => {
  return messagesData.reduce((total, sender) => {
    const like = sender.liked ? 1 : 0;
    return total + like;
  }, 0);
};



const App = () => {
  const [messages, setMessagesData] = useState(messagesData);
  const totalHearts = calculateTotalLikes(messages);
  const localSenderName = messagesData[0].sender;
  const remoteSenderName = (messagesData, name) => {
    for (let message of messagesData) {
      if (message.sender !== name) {
        return message.sender;
      }
    }
  };

  const [localColor, setLocalColor] = useState('blue');
  const [remoteColor, setRemoteColor] = useState('green');


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
        <h1>
          Chat between{' '}
          <span className={localColor}>{localSenderName}</span>
          {' and '}
          <span className={remoteColor}>{remoteSenderName(messagesData, localSenderName)}</span>
        </h1>
        <section>
          <ColorChoice lable='local' setColorCallback={setLocalColor} />
          <span className='widget' id='heartWidget'>{totalHearts} ❤️s</span>
          <ColorChoice lable='remote' setColorCallback={setRemoteColor} />
        </section>
      </header>
      <main>

        <ChatLog
          onHeart={toggleLike}
          entries={messages}
          localSenderName={localSenderName}
          localColor={localColor}
          remoteColor={remoteColor} />
      </main>
    </div>
  );
};

export default App;
