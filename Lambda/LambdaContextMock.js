/**
 * Created by tdemille on 8/24/15.
 */

// AWS Lambda passes a context object to the handler.  This is a mock of that object
// and allows us to test lambda functions locally witout stubbing out context code
// if one was testing the getRemainingTimeInMillis function we could ad an actual
//counter that decrements here
exports.MockContext = function() {

    this.awsRequestId = 123;
    this.logStreamName = "logstreamname";
    this.clientContext = "local test";
    this.identity = "42532341245322";
    this.logGroupName = "logGroupName";
    this.logStreamName = "logSTreamName";
    this.functionName = "functionName()";

    this.done = function (err, data) {
        console.log("you called done from your code with data: ", data, " err ", err);
    }
    this.succeed = function (data) {
        console.log("you called succeed from your code with data: ", data);
    }
    this.fail = function (err) {
        console.log("you called fail from your code with err:", err);
    }

    this.getRemainingTimeInMillis = function () {
        return 1000;
    }
}
