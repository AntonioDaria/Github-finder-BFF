# GithubFinder Browser

A simple tool to allow anyone to find out what is Github user's favourite language:
```
As a user
so I can use the application
I can navigate to a web UI with a serach bar
```

```
As a user
so I can find out what is Github user's favourite language
I can insert the user name in the search bar
```

```
As a user
so I can find out what is Github user's favourite language
I can press submit and see the results on the same page
```


## What's been accomplished ✅

- The Form take a user name to search for the user favourite language, sends the query to the backend API, which  returns the user favourite language 

## What's left to do on the current output ⚠️

- Improve error handling 
- Improve Tests for service on the API and for the service on the front end

## Nice to haves 💫

- Bring back more values from the backend to create a better experience to the user

## Scaling up ⏫

- IN SOA the code would have been split into two different microservices for the pourpose of this exercise the code was made all in one repo

## Getting started

To run it locally 

```
cd  into the root folder and run npm i
cd  into the client folder and run npm i
```

Run development server (on port 5000)

```
cd  into the root folder 
npm run dev
```

To interact with the application

```
visit http://localhost:3000/
```

### Technologies used

- React
- Axios to make HTTP requests
- React hooks for components state management
- concurrently to run simultaneously frontend and backend
- Node js
- Express
- Jets 
