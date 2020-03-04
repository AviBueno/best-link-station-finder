'use strict';

const express = require( 'express' );
const app = express();
const port = 3000;

const BestLinkStationFinder = require( './src/BestLinkStationFinder' );
const Point = require( './src/Point' );
const linkStations = require( './src/utils/linkStations' );
const blsf = new BestLinkStationFinder( linkStations );
const deviceLocations = require( './src/utils/deviceLocations' );


// Prettify JSON output
app.set('json spaces', 2);


// Routes
app.get( '/', ( req, res ) => res.send( 'Hello, world!' ) );

app.get( '/demo', ( req, res ) => {
	const fullDemo = req.query.full;

	var resArr = [];

	deviceLocations.forEach( dl => {
		if ( fullDemo === '1' ) {
			const findResult = blsf.findBestLinkStation( dl, true );
			resArr.push( findResult );
		}
		else {
			const reportString = blsf.getBestLinkStationReportString( dl );
			resArr.push( reportString );
		}
	} );

	res.json( resArr );
} );

app.get( '/device/:x/:y', ( req, res ) => {
	const deviceLoc = new Point(req.params.x, req.params.y );
	const findResult = blsf.findBestLinkStation( deviceLoc );
	const msg = blsf.formatBestLinkStationReportString( findResult, deviceLoc );

	res.json( {
		result: findResult,
		message: msg
	} );
} );

app.get( '/ls', ( req, res ) => {
	var resArr = [];

	linkStations.forEach( ls => {
		resArr.push( {
				x: ls.x,
				y: ls.y,
				reach: ls.reach
			} );
	} );

	res.json( resArr, null, 2 );
} );


app.listen( port, () => console.log( `Best Link Station Finder app listening on port ${port}!` ) );
