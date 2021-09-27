import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {isAuthenticated,  loginWithRedirect, logout, user} = useAuth0();
  const isUser = isAuthenticated && user;


  return (
    <section className="section nav-section">
      <Wrapper className="section-center">
        <div className="info">
        {
        isUser && user.picture && <img src={user.picture} alt="user profile" />
        }
        {
          isUser && user.name && <h4>Welcome, {user.name}</h4>
        }
        </div>

      {
        !isUser ? <button type="button" onClick={() => loginWithRedirect()} >Login</button>
        : <button type="button" onClick={() => logout({returnTo:window.location.origin})} >Logout</button>
      }
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  padding-bottom: 4rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--clr-white);
  .info{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4 {
    margin-bottom: 0;
    font-weight: 400;
    margin-left: 15px;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
