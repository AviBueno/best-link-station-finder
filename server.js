'use strict';

const express = require( 'express' );
const app = express();
const port = 3000;

const serverController = require( './src/controllers/server' );


// Prettify JSON output
app.set('json spaces', 2);

// Routes
app.use( '/', express.static('public') );

app.get( '/demo', serverController.demo );

app.get( '/device/:x/:y', serverController.device );

app.get( '/ls', serverController.ls );


app.listen( port, () => console.log( `Best Link Station Finder app listening on port ${port}!` ) );
