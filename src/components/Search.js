import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';

const Search = () => {

  const {requests, error, searchGithubUser, isLoading} = useContext(GithubContext);

  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)

    if (user) {
      searchGithubUser(user)
    }
  }


  return (
  <section className='section'>
    <Wrapper className='section-center'>
      {error.show && (
        <ErrorWrapper>
          <p>{error.msg}</p>
        </ErrorWrapper>
      )}
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            type='text'
            placeholder={isLoading ? 'loading user...' : 'enter github user'}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {
            requests > 0 && !isLoading &&<button type='submit'><MdSearch /></button>
          }
        </div>
      </form>
      <h5>requests : {requests} / 60</h5>
    </Wrapper>
  </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;

  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    margin-top: -40px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border: none;
      background-color: transparent;

      svg {
      color: var(--clr-grey-5);
      font-size: 1.4rem;
      transition: transform .2s;
      margin-right: 10px;

      &:hover {
        color: var(--clr-primary-1);
        transform: scale(1.2);
      }
    }
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h5 {
    text-align: center;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  bottom: -47px;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
    text-align: center;
  }
`;
export default Search;
