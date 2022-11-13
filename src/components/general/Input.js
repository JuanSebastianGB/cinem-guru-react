import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

import PropTypes from 'prop-types';
import { icons } from '../../icons/icons';
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
    <>
      <div className="GeneralInput">
        {icon ? <FontAwesomeIcon className="icon" icon={icons[icon]} /> : null}
        <label>
          {label}
          <input
            type={type}
            className={className ? className : null}
            // inputAttributes={inputAttributes ? inputAttributes : null}
            onChange={handleInput}
          >
            {value}
          </input>
        </label>
      </div>
    </>
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
