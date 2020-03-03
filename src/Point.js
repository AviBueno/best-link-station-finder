'use strict';

const Validator = require( './utils/Validator' );

/**
 * A 2D coordinate representation
 */
class Point {
	constructor( x, y ) {
		this.x = Validator.getValidNumber( x );
		this.y = Validator.getValidNumber( y );
	}

	static distance( pt1, pt2 ) {
		const dx = pt1.x - pt2.x;
		const dy = pt1.y - pt2.y;

		return Math.sqrt( (dx * dx) + (dy * dy) ); // Or just use Math.hypot()
	}
}

module.exports = Point;