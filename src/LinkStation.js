'use strict';

const Point = require('./Point');
const Validator = require( './utils/Validator' );

/**
 * A representation of a link station, containing the
 * station's location as an inherited Point object
 * along with the station's reach value.
 */
class LinkStation extends Point {
	constructor( x, y, reach ) {
		super( x, y );
		this.reach = Validator.getValidNumber( reach );
	}

	power( p ) {
		const distance = Point.distance( p, this );

		if ( this.reach < distance ) {
			return 0; // Out of range
		}

		return Math.pow( this.reach - distance, 2 );
	}
}

module.exports = LinkStation;