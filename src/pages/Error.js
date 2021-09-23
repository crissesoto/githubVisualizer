import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import loginImg from '../images/login-img.png';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: inherit;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    margin-bottom: 1.5rem;
    font-weight: normal;
  }
`;

const Error = () => {
  return (
    <Wrapper>
      <img src={loginImg} alt="github logo" height="300" width="300" />
      <h1>404</h1>
      <h3>Sorry, the page you tried to find cannot be found</h3>
      <Link to="/" className="btn">Back home</Link>
    </Wrapper>
  );
};

export default Error;
