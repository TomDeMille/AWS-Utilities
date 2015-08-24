# AWS-Utilities  : Lambda
Utilities for AWS cloud computing using Lambda

- LambdaContextMock:  AWS Lambda passes a context object to the handler.  This is a mock of that object and allows one to test lambda functions with node locally witout stubbing out context code.
- sample stream data.json  : mocks a kinesis event, pass this to your handler locally along with the mock context
- KinesisHandler.js :  more on this available at AWS and elsewhere this is a do-nothing handler
- runKinesisHandlerLocally.js :  run/debug this locally in node, creates the mock context, loads the sample data, and calls your handler
