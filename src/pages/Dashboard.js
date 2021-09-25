import React, { useContext } from 'react';
import styled from 'styled-components';
import { Info, Repos, User, Search, Navbar, Header } from '../components';
import Loader from '../components/Loader';
import { GithubContext } from '../context/context';

const Wrapper = styled.main`
  height: 100vh;
`;

const Dashboard = () => {
  const {isLoading} = useContext(GithubContext);

  if (isLoading) {
    return (
      <Wrapper>
        <Navbar />
        <Header />
        <Search />
        <Loader />
      </Wrapper>
    ) 
    
  } else {
    return (
      <Wrapper>
        <Navbar />
        <Header />
        <Search />
        <Info />
        <User />
        <Repos />
      </Wrapper>
    ) 
  }
  }

  const WrapperSkeleton = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Dashboard;
