const BestLinkStationFinder = require( '../BestLinkStationFinder' );
const Point = require( '../Point' );
const linkStations = require( '../utils/linkStations' );
const blsf = new BestLinkStationFinder( linkStations );
const deviceLocations = require( '../utils/deviceLocations' );

module.exports.demo = ( req, res ) => {
	const fullDemo = req.query.full;

	var resArr = [];

	deviceLocations.forEach( dl => {
		if ( fullDemo === '1' ) {
			const findResult = blsf.findBestLinkStation( dl, true );
			resArr.push( findResult );
		}
		else {
			const reportString = blsf.getBestLinkStationReportString( dl );
			resArr.push( reportString );
		}
	} );

	res.json( resArr );
};

module.exports.device = ( req, res ) => {
	const deviceLoc = new Point(req.params.x, req.params.y );
	const findResult = blsf.findBestLinkStation( deviceLoc );
	const msg = blsf.formatBestLinkStationReportString( findResult, deviceLoc );

	res.json( {
		result: findResult,
		message: msg
	} );
};

module.exports.ls = ( req, res ) => {
	var resArr = [];

	linkStations.forEach( ls => {
		resArr.push( {
				x: ls.x,
				y: ls.y,
				reach: ls.reach
			} );
	} );

	res.json( resArr, null, 2 );
};
