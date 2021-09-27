import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Info, Repos, User, Search, Navbar, Header } from '../components';
import Loader from '../components/Loader';
import { GithubContext } from '../context/context';
import { useAuth0 } from '@auth0/auth0-react';

const Wrapper = styled.main`
  height: 100vh;
`;

const Dashboard = () => {
  const {isLoading} = useContext(GithubContext);

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  const {fetchGithubUser} =  useContext(GithubContext);

  useEffect(() => {
    fetchGithubUser(user);
  }, [])

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

export default Dashboard;
