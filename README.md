# Github Profile Visualizer App

A web app to visualize Github profiles with the help ofReact, Styled Components, and the Github Web API with charts!.

![demo](https://raw.githubusercontent.com/crissesoto/githubVisualizer/master/public/og.png)

## Built with:

- [Gihthub API](https://api.github.com)
- [Create React App](https://github.com/facebook/create-react-app)
- [Express](https://expressjs.com/)
- [Reach Router](https://reach.tech/router)
- [Styled Components](https://www.styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Fusion Charts](https://www.fusioncharts.com/)
- [Auth0 ](https://auth0.com/)



## Test app
Login with test account as de application still in development mode until verification.

Live app: <https://github-profile-visualizer.netlify.app/>


## Deployment

[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)
