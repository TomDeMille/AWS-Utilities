'use strict';

var AWS = require( 'aws-sdk' );

//kinesis calls this handler
exports.handler = function ( event, context ) {
	var data = records
		.map( function ( record ) {
			return new Buffer( record.kinesis.data, 'base64' )
				.toString( 'utf8' );
		} )
		.join();
	doWork( data );
	context.done();
};
