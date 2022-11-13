import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
  const hendleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="SelectInput">
      <label>{label}:</label>
      <select onChange={hendleSelect}>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
