'use strict';

const BestLinkStationFinder = require( './BestLinkStationFinder' );
const LinkStation = require( './LinkStation' );
const Point = require( './Point' );
const mockLinkStations = [
	new LinkStation( 0, 0, 1 ),
	new LinkStation( 100, 100, 10 ),
];

const farAwayLoc = new Point( 9999, 9999 );


const blsf = new BestLinkStationFinder( mockLinkStations );

describe( 'BestLinkStationFinder', () => {
	// Loop all link stations, and use them as a device point.
	// The result should be that the best match for every link
	// station is the station itself.
	test.each(
			mockLinkStations
		) ( 'Match link stations to their own location', ( ls ) => {
			expect( blsf.findBestLinkStation( ls ) ).toMatchObject( {
				linkStation: ls,
				power: ls.power( ls )
			} );
		} );

	test( 'No match', () => {
		expect( blsf.findBestLinkStation( farAwayLoc ) ).toEqual( null );
	} );

	test( 'Report link station within reach', () => {
		expect( blsf.getBestLinkStationReportString( mockLinkStations[0] ) ).toMatch( /^Best link station for point.*/ );
	} );

	test( 'Report link station out of reach', () => {
		expect( blsf.getBestLinkStationReportString( farAwayLoc ) ).toMatch( /^No link station within reach for point.*/ );
	} );
} );
