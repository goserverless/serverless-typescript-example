## Introduction

This is a complete example serverless function using Typescript

Folder structure:
```
|-- config-env-for-serverless.js: config env variable for serverless
|-- jest.config.js: jest config file for unit test
|-- postman-collections: postman collections for this project, you can import them to Postman (includes some tests)
|-- scripts: will include some helper scripts (using in CI/CD)
|-- serverless.deploy.yml: serverless config file for CI/Cd
|-- serverless.local.yml: serverless config file for local development (serverless offline, ...)
|-- src
|---- const: it includes some constant variables
|---- middlewares: it includes middlewares for you projects
|---- routes: it includes your routes
|---- services: it includes your services
```

## How to start

### 1. Install packages
```
npm i
```

### 2. Create `.env` file
```
cp .env.example .env
```
And the modified the value for this file

### 3. Run unit test (using Jest)
```
npm run unit-test
```

### 4. Start the app in local (it will reload the server automatically if you change your code)
```
npm start
```
The console output will look like this
![](https://i.imgur.com/Pt9uVmr.png)

### 5. Run integration test local

Note: you need to keep the server running and open new terminal and run
```
npm run integration-test
```
it will run integration test with localhost
![](https://i.imgur.com/3N6Vprk.png)


### 6. Run integration test after the project is deployed (dont run it in your local, it will be run in CI/CD):
Basically, when the app is deployed, we will get a api url, the integration test will run to test the api url.
```
npm run ci-integration-test
```
![](https://i.imgur.com/B9O6TGh.png)

## Deploy
### a. Deploy local
Make sure that you have [configured AWS files](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
```
npm run deploy
```
### b. Deploy using Github actions

Please set all environment varibles in file `.env` using Github secrets.

This project is using [AWS configure credentials action](https://github.com/aws-actions/configure-aws-credentials), so you also need to set two secrets: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

### c. Deploy using Bitbucket

You need to set two mandatory project variables: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

## Developing
1. Run unit test to see what going on
2. Create new routes inside `src/routes`
3. Create new service to handle the routes above inside `src/services`
4. Update or create new unit tests, integration tests

## Using Postman collections for newbie
1. Start the server in local (`npm start`)
2. Open Postman App
3. Click `Import` button

![](https://i.imgur.com/IoGzSeg.png)

4. Select the environment file and postman collection file inside `postman-collections` folder
5. Run the your test/request
- Select a collection

![](https://i.imgur.com/WA06rdN.png)

- Choose environment

![](https://i.imgur.com/ANNRwlh.png)

- Run the first request

![](https://i.imgur.com/QUn7z6n.png)

- See test case in tab `Tests`

![](https://i.imgur.com/Iue3AuR.png)

