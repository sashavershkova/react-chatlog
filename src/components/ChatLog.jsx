import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onHeart }) => {
  const chatComponents = entries.map(chatEntry => {
    return (
      <li key={chatEntry.id}>
        <ChatEntry
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          onHeart={onHeart}
        />
      </li>
    );
  });

  return (
    <ul className='chat-log'>
      {chatComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onHeart: PropTypes.func.isRequired,
};

export default ChatLog;