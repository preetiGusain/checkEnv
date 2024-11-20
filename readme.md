# checkenv

 A simple Node.js package to validate required environment variables in your project.


```
const checkEnv = require('checkenv');


//List of required environment variables
const requiredVariables = ['DB_HOST', 'DB_USER', 'DB_PASS'];


//Run the check
checkEnv(requiredVariables);
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm](https://www.npmjs.com/) registry.

Before installing, download and install Node.js. Node.js 14.0 or higher is required.

If this is a brand new project, make sure to create a package.json first with the ```npm init``` command.

Installation is done using the ```npm install``` command:

```
$ npm install checkenv
```
## Features

1. Loads environment variables from the .env file.

2. Ensures required variables are set in the environment.

3. Exits the program and displays an error if any required variables are missing or empty.

4. Simple and easy to integrate into Node.js applications

## Usage

1. Install the package:

```
npm install checkenv
```

2. Create a ```.env``` file in your project root if it doesn't exist already:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=mysecretpassword
```
3. In your application, use ```checkEnv``` to validate the required variables:

```
const checkEnv = require('checkenv');


// List of required environment variables
const requiredVariables = ['DB_HOST', 'DB_USER', 'DB_PASS'];


// Run the check
checkEnv(requiredVariables);
```

4. If any required environment variables are missing or empty, the program will log the errors and exit.

## How It Works

1. The checkEnv function loads environment variables from the .env file using the dotenv package.

2. It checks for the presence of each required environment variable in the process environment.

3. If any variables are missing or empty, it logs the names of those variables and exits the program with an error message.

4. If all variables are correctly set, a success message is logged.

## Philosophy

Managing environment variables can be tricky, and missing or misconfigured ones often lead to runtime errors. This package takes care of that by ensuring all required variables are set, so you can focus on building your app without worrying about missing configurations.

## License
[MIT]()