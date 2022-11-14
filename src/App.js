import { useEffect, useState } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import { authService } from './services/auth.service';
// const data = ['default', 'latest', 'oldest', 'highest Rated', 'Lowest Rated'];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUserName, setUserUserName] = useState('');

  useEffect(() => {
    authService()
      .then((data) => {
        if (data?.data) {
          setIsLoggedIn(true);
          setUserUserName(data.data.username);
        }
      })
      .catch((e) => console.log({ e }));
  }, [isLoggedIn]);
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUserName}
        />
      ) : (
        <Dashboard userUserName={userUserName} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
