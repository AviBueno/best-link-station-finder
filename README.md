# Best Link Station Calculator

## Description and Usage

Finds the best link station (nearest / with strongest signal) for a given mobile device location in 2D space.

This is a CLI application, which may be operated in several modes:

1. Demo mode<br>
   Output the results of a predefined set of device coordinates.<br>
   Syntax: `node app.js demo`

1. Device location mode<br>
   Find the best link station for a given device's location<br>
   Syntax: `node app.js --x=<number> --y=<number>`

1. List link stations<br>
   Output the list of link stations that the app is familiar with<br>
   Syntax: `node app.js ls`

## Technical Info

### Data

See [data/README.md](data/README.md) for details

### Command line parsing

The project utilizes the `yargs` package in order to parse command line arguments.<br>
In case of an error, an error message will be printed.<br>
The `-d` / `--debug` flag may be used in order to get extended debug info.

### Error handling

Error handling will take care of invalid input, such as non-numeric values where a float is expected, for example.<br>
Any unexpected error will be trapped by a global 'uncaught exception' handler.

### Unit tests

The project utilizes the `jest` library for unit testing all major source code files.<br>
The tests suite may be run using: `npm test`

## Deployment

Follow these steps to deploy the project:

1. Clone this git repository
1. Change dir into the projects root directory
1. Run `npm install`
1. Run `npm test`
