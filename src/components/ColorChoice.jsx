import PropTypes from 'prop-types';

const ColorChoice = ({ label, setColorCallback }) => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  return (
    <span>
      <p>{label}</p>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setColorCallback(color)}
          style={{ backgroundColor: color, borderRadius: '50%', margin: '0 4px' }}
        >
        </button>
      ))}
    </span>
  );
};

ColorChoice.propTypes = {
  label: PropTypes.string.isRequired,
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;