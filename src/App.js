import { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import { authService } from './services/auth.service';

function App() {
  const [userUserName, setUserUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      {isLoggedIn ? (
        <Dashboard userUserName={userUserName} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div>
          {userUserName !== '' ? (
            <Authentication
              setIsLoggedIn={setIsLoggedIn}
              setUserUsername={setUserUserName}
            />
          ) : (
            <SpinnerCircular color="white" />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
