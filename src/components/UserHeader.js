import React from './react';
import PropTypes from 'prop-types';
import './UserHeader.css';

export default function UserHeader({})
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

  })

  return(
    <div className="UserHeader">
      <form onSubmit={handleSubmit}>
        <div className="Username">
          Username
          <input
            type="text"
            name="Username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="Password">
          Password
          <input
            type="text"
            name="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="SubmitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
