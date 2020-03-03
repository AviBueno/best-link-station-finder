'use strict';

/**
 * Various validations utility class
 */
class Validator {
	static getValidNumber( n ) {
		if ( ! isNaN( n ) ) {
			const parsed = Number.parseFloat( n );

			if ( ! isNaN( parsed ) ) {
				return parsed;
			}
		}

		throw new Error( `Invalid numeric input: ${n}` );
	}

	static validateArray( a ) {
		if ( ! Array.isArray( a ) ) {
			throw new Error( `Invalid array input: ${a}` );
		}
	}
}

module.exports = Validator;