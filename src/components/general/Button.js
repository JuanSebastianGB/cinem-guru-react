const Button = ({ label, className, onClick, icon }) => {
  return (
    <button onClick={onClick}>
      {icon ? icon : null}
      {label}
    </button>
  );
};

export default Button;
