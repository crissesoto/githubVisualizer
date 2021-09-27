import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import loginImg from '../images/login-img.png';

const Login = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <Wrapper>
        <img src={loginImg} alt="github logo" height="300" width="300" />
        <h1>Github visualizer</h1>
        <button to="/" className="btn" onClick={() => loginWithRedirect()}>Signup / Login</button>
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: inherit;
  }
  img {
    width: inherit;
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 0.8rem;
  }
`;
