import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GithubContext } from '../context/context';

import {GoLocation} from "react-icons/go"
import {BsCalendar} from "react-icons/bs"


const Header = () => {
    const {githubUser} = useContext(GithubContext);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <Wrapper>
            {
                githubUser && (
                <StyledDiv>                                   
                    <div className="avatar"><img src={githubUser.avatar_url} alt="avatar" /></div>
                    <h1>{githubUser.name}</h1>
                    <p>{githubUser.bio}</p>
                    <h3><Link to={githubUser.html_url ? githubUser.html_url : "/"} target="_blank" rel="noopener noreferrer">{`@${githubUser.login}`}</Link></h3>
                    <div className="info">
                        <span className="info__item"><GoLocation/>{githubUser.location}</span>
                        <span className="info__item"><BsCalendar/>{new Date(githubUser.created_at).toLocaleDateString("en-BE", options)}</span>
                    </div>
                </StyledDiv>
                )
            }
        </Wrapper>    
    )
}


const Wrapper = styled.section`
    padding: 3rem 5rem 6rem;
    color: var(--clr-white);
    background-color: #272727;
`;

const StyledDiv = styled.div`
    max-width: 1400px;
    margin: 0px auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    div.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    border: 0.5rem solid var(--clr-primary-5);
    border-radius: 100%;
    width: 150px;
    height: 150px; 

        img {
            border-radius: 100%;
        }
    }

    h3 > a {
        color: rgb(0, 112, 243);
    }

    div.info {
        display: flex;
        justify-content: center;
        align-items: center; 
    }

    .info__item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0.5rem 0.5rem;
    white-space: nowrap;

        svg{
            margin-right: 8px;
        }
    }

`;

export default Header;