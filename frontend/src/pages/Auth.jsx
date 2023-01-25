import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import Layout from '../Components/layout';
import useAuth from '../hooks/useAuth';
import classes from './Auth.module.scss';

function Auth() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <Layout>
      <div className={classes.form_container}>
        <Login />
        <Register />
      </div>
    </Layout>
  );
}

export default Auth;
