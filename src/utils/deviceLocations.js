'use strict';

/**
 * An array of Point objects, representing device locations.
 * The data is based on values from data/linkStations.json
 */

const Validator = require( '../utils/Validator' );
const Point = require( '../Point' );
const deviceLocationsData = require( '../../data/deviceLocations.json' );

Validator.validateArray( deviceLocationsData );

var deviceLocations = [];

// Fill the collection with Point objects based on given config data
deviceLocationsData.forEach( dl => deviceLocations.push( new Point( dl[0], dl[1], dl[2] ) ) )

module.exports = deviceLocations;