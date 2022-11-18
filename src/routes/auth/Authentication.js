import PropTypes from 'prop-types';
import { lazy, useState } from 'react';
import Button from '../../components/general/Button';
import { loginService, registerService } from '../../services/auth.service';
import './auth.css';

// import Login from './Login';
// import Register from './Register';

const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (_switch) {
      try {
        const response = await loginService({ username, password });
        if (response?.data) {
          localStorage.setItem(
            'accessToken',
            `Bearer ${response.data.accessToken}`
          );
          setIsLoggedIn(true);
          setUserUsername(username);
        }
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError('');
        }, 3000);
      }
    } else {
      try {
        const response = await registerService({ username, password });
        if (response?.data) {
          localStorage.setItem(
            'accessToken',
            `Bearer ${response.data.accessToken}`
          );
        }
        setIsLoggedIn(true);
        setUserUsername(username);
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError('');
        }, 3000);
      }
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
        <div className="authentication-error">
          {error.length !== '' && error}
        </div>
        {_switch ? (
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            error={error}
          />
        ) : (
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            error={error}
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
