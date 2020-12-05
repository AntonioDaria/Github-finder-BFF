# GithubFinder Browser

A simple tool to allow anyone to find out what is a Github user's favourite language:
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

- In a typical SOA architecture the code would have been split into two different microservices for the pourpose of this exercise the code was made all in   one repo

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
- Jest 

### Testing

- All the current tests are passing. The tests from back end and front end will need to be run independently :
- For Front end testing navigate to the client folder and run npm run test press a for all tests
- For Backend test navigate to the root folder and run npm run test, you will see the back end tests passing and for some reason
2 front end test not passing. I am unsure as to why this is happening. Alternatively run the test individually like so.:
npm run test <'filename'>
