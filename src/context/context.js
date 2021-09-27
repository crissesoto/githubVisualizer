import React, { useState } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {

    const [githubUser, setGithubUser] = useState([]);
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);

    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState({show: false, msg: ""});

    const fetchGithubUser = async (user) => {
        // set loading
        setIsLoading(true);

        // fetch & set user or set error
        const response = await axios(`${rootUrl}/users/${user.nickname}`).catch((error) => console.log(error));        
        
        if (response) {
            setGithubUser(response.data)
            const {followers_url, repos_url} = response.data;

            // Fetch repos of the user
            const repos = axios(`${repos_url}?per_page=100`)

            // Fetch followers of the user
            const followers = axios(`${followers_url}?per_page=100`)

            await Promise.allSettled([repos, followers])
                .then((data) => {
                    const [repos, followers] = data;
                    const status = "fulfilled";

                    if (repos.status === status) {
                        setRepos(repos.value.data)
                    }
                    if (followers.status === status) {
                        setFollowers(followers.value.data)
                    }
                }).catch((error) => console.log(error))

        }
        checkRequestRate();
        setIsLoading(false)
    }

    const searchGithubUser = async (searchUser) => {
        // if error remove it
        toggleError();
        
        // set loading
        setIsLoading(true);

        // fetch & set user or set error
        const response = await axios(`${rootUrl}/users/${searchUser}`).catch((error) => console.log(error));        
        
        if (response) {
            setGithubUser(response.data)
            const {followers_url, repos_url} = response.data;

            // Fetch repos of the user
            const repos = axios(`${repos_url}?per_page=100`)

            // Fetch followers of the user
            const followers = axios(`${followers_url}?per_page=100`)

            await Promise.allSettled([repos, followers])
                .then((data) => {
                    const [repos, followers] = data;
                    const status = "fulfilled";

                    if (repos.status === status) {
                        setRepos(repos.value.data)
                    }
                    if (followers.status === status) {
                        setFollowers(followers.value.data)
                    }
                }).catch((error) => console.log(error))

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
    
    return (
        <GithubContext.Provider value={{githubUser, repos, followers, requests, isLoading, error, searchGithubUser, fetchGithubUser}}>{children}</GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider};
