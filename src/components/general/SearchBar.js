const SearchBar = ({ title, setTitle }) => {
  const hendleInput = (e) => {
    setTitle(e.target.value);
  };
  return <input onChange={hendleInput}>{title}</input>;
};

export default SearchBar;
