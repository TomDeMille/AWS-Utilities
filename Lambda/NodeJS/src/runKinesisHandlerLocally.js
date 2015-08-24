/**
 * Created by tdemille on 8/21/15.
 */

var myLambda = require( './KinesisHandler' );
var lambdaCtx = require( './LambdaContextMock' );
var fs = require( 'fs' );

//read sample kinesis events from file
var event = JSON.parse( fs.readFileSync( 'sample stream data.json', 'utf8' ) );

//mock kinesis by calling into the handler with the event
myLambda.handler( event, new lambdaCtx.MockContext() );
