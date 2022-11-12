import '../../general.css';

import PropTypes from 'prop-types';
const Input = ({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      label={label}
      type={type}
      className={className}
      icon={icon ? icon : null}
      inputAttributes={inputAttributes ? inputAttributes : null}
      onChange={handleInput}
    >
      {value}
    </input>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
  icon: PropTypes.string,
  inputAttributes: PropTypes.object,
};

export default Input;
