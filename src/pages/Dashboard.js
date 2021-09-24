import React, { useContext } from 'react';
import styled from 'styled-components';
import { Info, Repos, User, Search, Navbar, Header } from '../components';
import Loader from '../components/Loader';
import { GithubContext } from '../context/context';

const Wrapper = styled.main`
  height: 100vh;
`;

const Dashboard = () => {

  return (
      <Wrapper>
        {/* <Navbar />
        <Header />*/}
        <Search />
        <Info />
        <User />
        <Repos />
      </Wrapper>
    ) 
  }

export default Dashboard;
