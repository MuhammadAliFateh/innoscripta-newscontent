# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Required npm and node version`
npm : 10.2.4
node: 20.11.0

### `installation`
npm install

### `Technologies`
React
Typescript
Bootstrap 5
Axios

## Environment Variables

This project uses environment variables to manage sensitive data like API keys.

### .env Setup

Create a `.env` file in the root of the project and add the following:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
REACT_APP_NEWS_API_KEY=your_api_key_here
NEWS_API_URL=https://newsapi.org/v2
NY_API_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json
REACT_APP_NY_API_KEY=X1ccX7iUTvN8H97QmpXU9hrGQGSk5FD7

## Docker Configuration 

Need those run command
docker build -t innoscripta-newscontent .
docker run -p 3000:80 innoscripta-newscontent

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
