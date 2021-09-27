import React, {useContext} from 'react';
import styled from 'styled-components';
import ReposDisplay from './ReposDisplay';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {

  const {repos} = useContext(GithubContext);

  const languages = repos && repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = languages && Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // most stars per language

  const mostPopular = languages && Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  // stars, forks

  let { stars, forks } = repos && repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = stars && Object.values(stars).slice(-5).reverse();
  forks = forks && Object.values(forks).slice(-5).reverse();
  
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed}/>
        <Column3D data={forks}/>
        <Bar3D data={stars} />
        <Doughnut2D data={mostPopular} />
      </Wrapper>
      <div className="section-center">
        <ReposDisplay  data={repos} />
      </div>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  } 
`;

export default Repos;
