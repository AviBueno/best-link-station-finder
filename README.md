# Best Link Station Calculator

## Description and Usage

Finds the best link station (nearest / with strongest signal) for a given mobile device location in 2D space.

The project may run in two modes:

### Web server mode

To run as a web server the project may be executed using `npm start`.

The server support the following API, which is usually REST that returns a JSON object:

* `/demo`<br>
   Output the results of a predefined set of device coordinates.<br>
* `/ls`<br>
   Output the list of link stations that the app is familiar with
* `/device/x/y`<br>
   Find the best link station for a given device's location<br>
   For example: `/device/5/7`
* `/` (the website's root)<br>
  A demo page, containing examples for the various API calls.

### CLI mode

This CLI app is executed using `node app.js` and may be operated in several modes:

1. Demo mode<br>
   Output the results of a predefined set of device coordinates.<br>
   Syntax: `node app.js demo`

1. Device location mode<br>
   Find the best link station for a given device's location<br>
   Syntax: `node app.js --x=<number> --y=<number>`

1. List link stations<br>
   Output the list of link stations that the app is familiar with<br>
   Syntax: `node app.js ls`

### Note

You may run `node app.js --help` for details about the app's various commands and flags.

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
1. Change dir into the project's root directory
1. Run `npm install`
1. Run `npm test`

You may now run the application according to the Description and Usage section above.
