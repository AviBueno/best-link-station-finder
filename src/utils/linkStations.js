'use strict';

/**
 * An array of LinkStation objects, based on the
 * values in data/linkStations.json
 */

const Validator = require( '../utils/Validator' );
const LinkStation = require( '../LinkStation' );
const linkStationsData = require( '../../data/linkStations.json' );

Validator.validateArray( linkStationsData );

var linkStations = [];

// Fill the collection with LinkStation objects based on given config data
linkStationsData.forEach( ls => linkStations.push( new LinkStation( ls[0], ls[1], ls[2] ) ) )

module.exports = linkStations;