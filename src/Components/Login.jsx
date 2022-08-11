import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser, logout } from '../Features/user';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {
        dispatch(setUser({ name: 'John Doe', age: 30, email: 'test'}))
      }}>
        Login
      </button>
      <button onClick={() => {
        dispatch(logout())
      }}>
        Logout
      </button>
    </div>
  )
}

export default Login;
