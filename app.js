'use strict';

const BestLinkStationFinder = require( './src/BestLinkStationFinder' );
const linkStations = require( './src/utils/linkStations' );
const blsf = new BestLinkStationFinder( linkStations );
const deviceLocations = require( './src/utils/deviceLocations' );
const yargs = require( 'yargs' );
const Point = require( './src/Point' );

// Uncaught exception handler
process.on( 'uncaughtException', ( err ) => {
	console.error( err.message );

	if ( yargs.argv.debug ) {
		console.error( err.stack );
	}
} );

yargs.command( {
	command: 'device',
	describe: "Find the best link station for a given device's coordinates",
	builder: {
		x: {
			describe: 'X coordinate',
			demandOption: true,
			type: 'int'
		},
		y: {
			describe: 'Y coordinate',
			demandOption: true,
			type: 'int'
		}
	},
	handler: ( argv ) => {
		const deviceLoc = new Point( argv.x, argv.y );
		const msg = blsf.getBestLinkStationReportString( deviceLoc );
		console.log( msg );
	}
} );

yargs.command( {
	command: 'demo',
	describe: 'Demo mode',
	handler: () => {
		deviceLocations.forEach( dl => {
			var reportString = blsf.getBestLinkStationReportString( dl );
			console.log( reportString );
		} );
	}
} );

yargs.command( {
	command: 'ls',
	describe: 'List link stations',
	handler: () => {
		console.log( "Link stations:" );
		for ( var i = 0; i < linkStations.length; i++ ) {
			const ls = linkStations[i];
			console.log( `  ${i}. Location: (${ls.x}, ${ls.y}), reach: ${ls.reach}` );
		}
	}
} );

yargs.option( 'd', {
	alias: 'debug',
	describe: 'Debug flag',
	type: 'boolean'
} );

yargs.parse();
