import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onHeart, localSenderName, localColor, remoteColor}) => {
  const chatComponents = entries.map(chatEntry => {
    const colorClass = chatEntry.sender === localSenderName ? localColor : remoteColor;
    return (
      <li key={chatEntry.id}>
        <ChatEntry
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          onHeart={onHeart}
          localSenderName={localSenderName}
          color={colorClass}
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
  localSenderName: PropTypes.string.isRequired,
  localColor: PropTypes.string.isRequired,
  remoteColor: PropTypes.string.isRequired,
};

export default ChatLog;