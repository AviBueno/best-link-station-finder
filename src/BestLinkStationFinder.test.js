'use strict';

const BestLinkStationFinder = require( './BestLinkStationFinder' );
const LinkStation = require( './LinkStation' );
const Point = require( './Point' );
const mockLinkStations = [
	new LinkStation( 0, 0, 1 ),
	new LinkStation( 100, 100, 10 ),
];

const farAwayLoc = new Point( 9999, 9999 );
const matchStrRegExp = /^Best link station for point.*/;
const noMatchStrRegExp = /^No link station within reach for point.*/;


const blsf = new BestLinkStationFinder( mockLinkStations );

describe( 'BestLinkStationFinder', () => {
	// Loop all link stations, and use them as a device point.
	// The result should be that the best match for every link
	// station is the station itself.
	test.each(
			mockLinkStations
		) ( 'Match link stations to their own location', ( ls ) => {
			const findResult = blsf.findBestLinkStation( ls );
			expect( findResult ).toEqual(
				expect.objectContaining( {
					bestLink: {
						station: ls,
						power: ls.power( ls ),
					}
				} )
			);

			 expect( findResult.message ).toBeFalsy();
		} );

	test( 'Match with message', () => {
		const findResult = blsf.findBestLinkStation( mockLinkStations[0], true );
		 expect( findResult.message ).toMatch( matchStrRegExp );
	} );

	test( 'No match', () => {
		const findResult = blsf.findBestLinkStation( farAwayLoc );
		expect( findResult ).toEqual(
			expect.objectContaining( {
				bestLink: null
			} )
		 );
	} );

	test( 'No match with message', () => {
		const findResult = blsf.findBestLinkStation( farAwayLoc, true );
		 expect( findResult.message ).toMatch( noMatchStrRegExp );
	} );

	test( 'Report link station within reach', () => {
		expect( blsf.getBestLinkStationReportString( mockLinkStations[0] ) ).toMatch( matchStrRegExp );
	} );

	test( 'Report link station out of reach', () => {
		expect( blsf.getBestLinkStationReportString( farAwayLoc ) ).toMatch( noMatchStrRegExp );
	} );
} );
