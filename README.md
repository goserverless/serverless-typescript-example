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

## Setup

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

### 5. Run integration test local
```
npm run integration-test
```

### 6. Run integration test after the project is deployed (dont run it in your local, it will be run in CI/CD):
Basically, when the app is deployed, we will get a api url, the integration test will run to test the api url.
```
npm run ci-integration-test
```

### 6. Deploy
#### a. Deploy local
Make sure that you have [configured AWS files](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
```
npm run deploy
```
#### b. Deploy using Github actions

Please set all environment varibles in file `.env` using Github secrets.

This project is using [AWS configure credentials action](https://github.com/aws-actions/configure-aws-credentials), so you also need to set two secrets: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`