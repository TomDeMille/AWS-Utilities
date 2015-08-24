/*
 * (C) Copyright Tom DeMille
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Contributors:
 *     Tom DeMille
 */

// AWS Lambda passes a context object to the handler.  This is a mock of that object
// and allows us to test lambda functions locally witout stubbing out context code
// if one was testing the getRemainingTimeInMillis function we could ad an actual
//counter that decrements here
exports.MockContext = function () {

	this.awsRequestId = 123;
	this.logStreamName = "logstreamname";
	this.clientContext = "local test";
	this.identity = "42532341245322";
	this.logGroupName = "logGroupName";
	this.logStreamName = "logSTreamName";
	this.functionName = "functionName()";

	this.done = function ( err, data ) {
		console.log( "you called done from your code with data: ", data, " err ", err );
	}
	this.succeed = function ( data ) {
		console.log( "you called succeed from your code with data: ", data );
	}
	this.fail = function ( err ) {
		console.log( "you called fail from your code with err:", err );
	}

	this.getRemainingTimeInMillis = function () {
		return 1000;
	}
}
