const dotenv = require('dotenv');

function checkEnvVariables(requiredVariables) {
    //Loading environment variable from .env file
    const result = dotenv.config;

    if(result.error) {
        console.error("Error: unable to load .env file");
        process.exit(1);
    }

    const missingVariables = requiredVariables.filter(
        (variable) => !process.env[variable] || process.env[variable].trim() == ''
    );

    if(missingVariables.length > 0) {
        console.log("Error: Missing required environment variables:");
        missingVariables.forEach((variable) => {
            console.log(`- ${variable}`);
        });
        process.exit(1);
    }
    console.log("All required environment variables are set.");
};

module.exports = checkEnvVariables;