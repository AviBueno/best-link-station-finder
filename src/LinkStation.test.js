'use strict';

const LinkStation = require( './LinkStation' );
const Point = require( './Point' );

describe( 'LinkStation', () => {
	test( 'Valid LinkStation values', () => {
			expect( () => new LinkStation( 0, 0, 0 ) ).not.toThrow( Error );
		} );

	test( 'Invalid LinkStation (bad reach value)', () => {
			expect( () => new LinkStation( 11, 22, 'bad value' ) ).toThrow( Error );
		} );

	test( 'Power calculation', () => {
			expect( new LinkStation( 0, 0, 8 ).power( new Point( 3, 4 ) ) ).toEqual( 9 ); // 9 = (8 - 5) ^ 2
		} );
} );
