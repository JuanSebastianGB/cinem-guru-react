import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../components/general/Button';
import { loginService, registerService } from '../../services/auth.service';
import './auth.css';
import Login from './Login';
import Register from './Register';

// const initialState = {
//   _switch: true,
//   username: '',
//   password: '',
// };
const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (_switch) {
      const response = await loginService({ username, password });
      if (response?.data) {
        localStorage.setItem(
          'accessToken',
          `Bearer ${response.data.accessToken}`
        );
        setIsLoggedIn(true);
        setUserUsername(username);
      }
    } else {
      const response = await registerService({ username, password });
      if (response?.data) {
        localStorage.setItem(
          'accessToken',
          `Bearer ${response.data.accessToken}`
        );
      }
      setIsLoggedIn(true);
      setUserUsername(username);
    }
  };

  const handleSignIn = (e) => set_switch(true);
  const handleSignUp = (e) => set_switch(false);
  return (
    <div className="Authentication">
      <div className="selection">
        <Button
          className={_switch ? 'button-red-dark' : 'button-red-light'}
          label="Sign In"
          onClick={handleSignIn}
        />
        <Button
          className={!_switch ? 'button-red-dark' : 'button-red-light'}
          label="Sign Up"
          onClick={handleSignUp}
        />
      </div>
      <form onSubmit={handleSubmit}>
        {_switch ? (
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
};

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func,
  setUserUsername: PropTypes.func,
};

Authentication.default = {
  setIsLoggedIn: () => {},
  setUserUsername: () => {},
};

export default Authentication;
