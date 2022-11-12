import '../../general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
  const hendleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <select>
      {options &&
        options.map((option) => (
          <option onChange={hendleSelect}>{option}</option>
        ))}
    </select>
  );
};

export default SelectInput;
