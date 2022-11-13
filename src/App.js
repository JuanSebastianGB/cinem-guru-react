import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/general/Input';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const getToken = () => localStorage.getItem('accessToken');
    const accessToken = getToken();
    const headers = {
      accessToken,
    };
    fetch('/api/auth/');
  }, []);
  return (
    <div className="App">
      <Input label="Username" type="text" icon="faUser" />
      {/* 
      <SelectInput />
      <Button label="test" />
      <SearchBar title="title" /> */}
    </div>
  );
}

export default App;
