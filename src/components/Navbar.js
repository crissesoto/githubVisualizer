import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  return (
    <section className="section nav-section">
      <Wrapper className="section-center">navbar component
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  padding-bottom: 4rem;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  color: var(--clr-white);
  h4 {
    margin-bottom: 0;
    font-weight: 400;
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
