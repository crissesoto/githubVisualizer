import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GoLocation} from "react-icons/go"
import {BsCalendar} from "react-icons/bs"

const Wrapper = styled.section`
    padding: 3rem 5rem 6rem;
    background-color: rgb(26, 30, 34);
    color: rgb(200, 225, 255);
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

    div.avater {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    border: 0.5rem solid var(--clr-primary-5);
    border-radius: 100%;
    width: 150px;
    height: 150px; 
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
    margin: 0px 1rem 0.5rem;
    white-space: nowrap;

        svg{
            margin-right: 10px;
        }
    }

`;

const Header = () => {
    return (
        <Wrapper>
            <StyledDiv>
                <div class="avatar"><img src="" alt="avatar" /></div>
                <h1>Crisse Soto</h1>
                <h2><Link to="/" target="_blank" rel="noopener noreferrer">@crissesoto</Link></h2>
                <div class="info">
                    <span class="info__item"><GoLocation/>Ghent</span>
                    <span class="info__item"><BsCalendar/>Joined January 24, 2019</span>
                </div>
            </StyledDiv>
        </Wrapper>    
    )
}

export default Header;