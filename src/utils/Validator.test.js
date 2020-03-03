'use strict';

const Validator = require( './Validator' );

describe( 'Validator', () => {
	test.each( [
		0,
		'0',
		1,
		2.34,
		-5,
		-6.7,
		'8',
		'+90.12',
		'-3',
		'-4.56'
	] ) ( 'Valid number', ( n ) => {
			expect( Validator.getValidNumber( n ) ).toEqual( Number.parseFloat( n ) );
		} );

	test.each( [
		null,
		'',
		'12px',
		'y12',
		'1x2',
		'45%',
	] ) ( 'Invalid number input', ( n ) => {
			expect( () => Validator.getValidNumber( n ) ).toThrow( Error );
		} );
} );
