import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState({show: false, msg: ""});

    const searchGithubUser = async (user) => {
        // if error remove it
        toggleError();
        
        // set loading
        setIsLoading(true);

        // fetch & set user or set error
        const response = await axios(`${rootUrl}/users/${user}`).catch((error) => console.log(error));

        console.log(response)
        
        if (response) {
            setGithubUser(response.data)
        }else {
            toggleError(true, "User not found, please try again.")
        }
        
        checkRequestRate();
        setIsLoading(false)
    }

    const checkRequestRate = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({data}) => {

                let {remaining} = data.rate
                setRequests(remaining);

                if (remaining < 1) {
                    // throw error
                    toggleError(true, "Sorry, you have exeeded your hourly request limit!")
                }
            })
            .catch((error) => console.log(error))
    };

    const toggleError = (show = false, msg = "") => {
        setError({show, msg})
    }

    useEffect(checkRequestRate, [])
    
    return (
        <GithubContext.Provider value={{githubUser, repos, followers, requests, isLoading, error, searchGithubUser}}>{children}</GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider};
