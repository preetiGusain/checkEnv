const chalk = require("chalk");

function checkEnvVariables(requiredVariables) {
    // check for variables
    const missingVariables = requiredVariables.filter(
        (variable) => !process.env[variable] || process.env[variable].trim() == ''
    );

    if(missingVariables.length > 0) {
        console.log(chalk.red(`dotenv-verifier found ${missingVariables.length} error!`));
        console.log(chalk.yellow("Error: Missing required environment variables:"));
        missingVariables.forEach((variable) => {
            console.log(chalk.yellow(`- ${variable}`));
        });
        process.exit(1);
    }
    console.log(chalk.green("dotenv-verifier - All required environment variables are set."));
};

module.exports = checkEnvVariables;