var nodeStatic 	= require( 'node-static' );
var http			= require( 'http' );

// create our file server config
var file = new nodeStatic.Server( '', { // bin is the folder containing our html, etc
	cache: 0,	// don't cache
	gzip: true	// gzip our assets
});

// create our server
var httpServer = http.createServer( function( request, response ) {
	request.addListener( 'end', function() {
		file.serve( request, response );
	});
	request.resume();
}).listen( 4000 );
