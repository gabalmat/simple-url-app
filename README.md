# Simple URL APP
A simple React.js frontend for the [Simple URL API](https://github.com/gabalmat/simple-url-api)

### Description
This application is not deployed to a web server, so you will need to run it locally. It is, however, already configured to access 
the currently deployed API endpoints.

### Assumptions:
 - You have cloned this repo locally
 - You have npm installed
 - cwd is the top-level `simple-url-app` directory

### To Initialize the Node Modules
Make sure you have npm and then run the follow command:

```npm install```

### To Run
```npm start``` 

Once the application is running, navigate to http://localhost:3000/. You will see that a couple of URLs and comments
have already been added to the database. Use the text inputs to add more.

*Note: Although URLs can have more than one comment, the UI isn't set up to allow inputting multiple comments
for a single URL.  Additional comments can be added to a URL using the '/api/addcomment' API endpoint and will be 
displayed in the UI.
