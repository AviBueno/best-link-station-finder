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
	findBestLinkStation( deviceLoc, withMessageString = false ) {
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

		const bestLinkObj = bestLinkStation === null ? null : {
			station: bestLinkStation,
			power: bestLinkPower
		};

		var resObj = {
			deviceLoc: deviceLoc,
			bestLink: bestLinkObj,
		};

		if ( withMessageString ) {
			resObj.message = this.formatBestLinkStationReportString( resObj, deviceLoc );
		}

		return resObj;
	}

	/**
	 * A utility function that searches for the best link station for a given device
	 * and return a report string for it.
	 *
	 * @param {Point} deviceLoc
	 * @returns {string} The report string for either the best link station details or for reporting no link station found.
	 */
	getBestLinkStationReportString( deviceLoc ) {
		const findResult = this.findBestLinkStation( deviceLoc );
		return this.formatBestLinkStationReportString( findResult, deviceLoc );
	}

	formatBestLinkStationReportString( findResult, deviceLoc ) {
		const dl = deviceLoc;

		if ( findResult.bestLink ) {
			const ls = findResult.bestLink.station;
			return `Best link station for point (${dl.x},${dl.y}) is (${ls.x},${ls.y}) with power ${findResult.bestLink.power.toFixed( 2 )}`;
		}

		return `No link station within reach for point (${dl.x},${dl.y})`;
	}
}

module.exports = BestLinkStationFinder;