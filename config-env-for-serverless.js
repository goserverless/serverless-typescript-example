const dotenv = require('dotenv');

const loadEnv = async () => {
  const envVars = dotenv.config({ path: '.env' }).parsed;
  return Object.assign(
    {},
    envVars,
    process.env,
  );
};

loadEnv();

module.exports = loadEnv;