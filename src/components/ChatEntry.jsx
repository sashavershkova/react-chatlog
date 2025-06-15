import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onHeart, localSenderName, color}) => {
  const senderTypeClass = localSenderName === sender ? 'local' : 'remote';
  const heart = liked ? '❤️' : '🤍';
  const changeHeart = () => {
    onHeart(id);
  };

  return (
    <div className={`chat-entry ${senderTypeClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={changeHeart}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onHeart: PropTypes.func.isRequired,
  localSenderName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ChatEntry;
