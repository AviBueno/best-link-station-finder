'use strict';

class BestLinkStationFinder {
	constructor( linkStations ) {
		this.linkStations = linkStations; // An array of LinkStation objects
	}

	/**
	 * Find the best link station for a given device location
	 * @param {Point} deviceLoc A point describing the device's location
	 * @return {null|object}     Returns null in case no link station is within range,
	 *                           or an object representing the best link, in the format of:
	 *                           {
	 *                               linkStation: <LinkStation object>,
	 *                               power: <power value>
	 *                           }
	 */
	findBestLinkStation( deviceLoc ) {
		var bestLinkStation = null;
		var bestLinkPower = 0;

		this.linkStations.forEach( linkStation => {
			const power = linkStation.power( deviceLoc );

			if ( power > bestLinkPower ) {
				// Update best-match-so-far
				bestLinkStation = linkStation;
				bestLinkPower = power;
			}
		} );

		return bestLinkStation === null ? null : {
			linkStation: bestLinkStation,
			power: bestLinkPower
		};
	}

	/**
	 * A utility function that searches for the best link station for a given device
	 * and return a report string for it.
	 *
	 * @param {Point} dl
	 * @returns {string} The report string for either the best link station details or for reporting no link station found.
	 */
	getBestLinkStationReportString( dl ) {
		const res = this.findBestLinkStation( dl );

		if ( res !== null ) {
			const ls = res.linkStation;
			return `Best link station for point (${dl.x},${dl.y}) is (${ls.x},${ls.y}) with power ${res.power.toFixed( 2 )}`;
		}

		return `No link station within reach for point (${dl.x},${dl.y})`;
	}
}

module.exports = BestLinkStationFinder;