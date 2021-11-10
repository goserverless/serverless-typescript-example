const fs = require('fs');
const path = require('path');
const API_URL = process.argv[2].match(/.*com/)[0]

const pathToCurrentEnvNewman = path.resolve(process.cwd(), 'postman-collections', 'Serverless_Example_ENV.postman_environment.json');
const pathToCIEnvNewman = path.resolve(process.cwd(), 'postman-collections', 'Serverless_Example_ENV_CI.postman_environment.json');

const data = fs.readFileSync(pathToCurrentEnvNewman, 'utf-8');

const JSONdata = JSON.parse(data);
JSONdata.values[0].value = API_URL;

fs.writeFileSync(pathToCIEnvNewman, JSON.stringify(JSONdata, null, 2), 'utf-8');