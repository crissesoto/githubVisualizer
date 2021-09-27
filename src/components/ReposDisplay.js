import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {GoRepo} from "react-icons/go";
import {FiCode} from "react-icons/fi";
import {AiOutlineStar, AiOutlineFork} from "react-icons/ai";

const ReposDisplay = ({data}) => {
  const [activeRange, setActiveRange] = useState("stars");
  const [repos, setRepos] = useState(data);

  useEffect(() => {

    if (activeRange === "stars") {
      const byStars = Object.values(data).sort((a, b) => {
        return a.stargazers_count - b.stargazers_count;
      }).slice(-10).reverse();

      setRepos(byStars);
    }
    if (activeRange === "forks") {
      const byForks = Object.values(data).sort((a, b) => {
        return a.forks_count - b.forks_count;
      }).slice(-10).reverse();

      setRepos(byForks);
    }
    if (activeRange === "size") {
      const bySize = Object.values(data).sort((a, b) => {
        return a.size - b.size;
      }).slice(-10).reverse();

      setRepos(bySize);
    }

}, [activeRange])
    
    return (  
        <section className="section">
            <div className="title-section">
              <p><span className="title">Top repos</span></p>
              <StyledRangeButtons>
                <li>
                  <button
                    className={activeRange === 'stars' ? 'active' : ''}
                    onClick={() => setActiveRange('stars')}>
                    Stars
                  </button>
                </li>
                <li>
                  <button
                    className={activeRange === 'forks' ? 'active' : ''}
                    onClick={() => setActiveRange('forks')}>
                    Forks
                  </button>
                </li>
                <li>
                  <button
                    className={activeRange === 'size' ? 'active' : ''}
                    onClick={() => setActiveRange('size')}>
                    Size
                  </button>
                </li>
              </StyledRangeButtons>
             </div> 
            <Wrapper className="section-center">
            {
                repos && repos.map(item => {
                    return <Item key={item.id} {...item}></Item>
                })
                
            }
            </Wrapper>
        </section>
    );
}

const Item = ({name, size, language, forks_count, description, stargazers_count, html_url}) => {
    return(
    <WrapperItem>
        <header>
            <GoRepo/>
            <a href={html_url} target="_blank"><h4>{name}</h4></a>
        </header>
        <p className="bio">{description || 'Description not provided'}</p>
        <div className='links'>
            <div className="right">
                <p>
                    <FiCode></FiCode> {language || 'Language not provided'}
                </p>
                 <p>
                    <span><AiOutlineStar></AiOutlineStar> {stargazers_count}</span>
                    <span><AiOutlineFork></AiOutlineFork> {forks_count}</span>
                </p>
            </div>
            <p className="left">
                {`${size} KB`}
            </p>
        </div>
      </WrapperItem>
    )
  };
  
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat( minmax(200px, 1fr));
  gap: 1rem 2rem;
    @media (min-width: 540px) {
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
`;

const WrapperItem = styled.article`
background: var(--clr-white);
padding: 1.5rem 2rem;
border-radius: var(--radius);
position: relative;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
header {
  display: flex;
  margin-bottom: 1rem;
  svg {
    color: black;
    width: fit-content !important;
    margin-right: 9px;  
    font-size: 1.4rem;
    }
  h4 {
    margin-bottom: 0.25rem;
    color: var(--clr-grey-3);
    font-size: 1.4rem;
    letter-spacing: -0.5px;
  }
  p {
    margin-bottom: 0;
  }
}
.bio {
  color: var(--clr-grey-3);
}
.links {
    display: flex;
    justify-content: space-between;

    p {
        margin-right: 10px
    }
    p svg {
        color: black;
        width: fit-content !important;
    }

    .right {
        display: flex;
    }

    .left {
        min-width: fit-content;
    }
}
`;

const StyledRangeButtons = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 24px 0;
  padding: 0;
  margin-left: 30px;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 32px;
    margin-bottom: 0;
  }

  li {
    margin-right: 8px;

    @media (min-width: 768px) {
      margin-left: 8px;
      margin-right: 0;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid white;
    margin-bottom: -10px;
    &:hover,
    &:focus {
      background-color: var(--clr-primary-5);
      border-color: hsl(196deg 97% 74%);    
    }

    &.active {
      background-color: var(--clr-primary-5);
      border-color: hsl(196deg 97% 74%);
    }
  }
`;

export default ReposDisplay;