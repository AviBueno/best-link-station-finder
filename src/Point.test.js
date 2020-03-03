'use strict';

const Point = require( './Point' );
const zeroPoint = new Point( 0, 0 );

describe( 'Point', () => {
	test( 'Valid point', () => {
			expect( () => new Point( 1, 2 ) ).not.toThrow( Error );
		} );

	test( 'Invalid x', () => {
			expect( () => new Point( 'x', 2 ) ).toThrow( Error );
		} );

	test( 'Invalid y', () => {
			expect( () => new Point( 1, 'y' ) ).toThrow( Error );
		} );

	test.each( [
			[ 1, 1, Math.sqrt( 2 ) ],
			[ 3, 4, 5 ],
			[ 5, 12, 13 ],
			[ 9, 12, 15 ],
			[ 8, 15, 17 ],
		] ) ( 'Distance', ( x, y, dist ) => {
			expect( Point.distance( zeroPoint, new Point( x, y ) ) ).toEqual( dist );
		} );
} );
