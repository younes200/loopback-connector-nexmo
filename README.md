## loopback-connector-nexmo

[Nexmo](http://nexmo.com) connector for [LoopBack](http://www.loopback.io)

## Customizing Nexmo configuration for examples

By default, examples from this module assumes the user has a [Nexmo](http://nexmo.com) account.  To run the example you will need to provide your `accountSid` and `authToken`.


The connector support the following aspects of the [Nexmo REST API](https://docs.nexmo.com/):
  - [Making Calls](https://docs.nexmo.com/messaging/sms-api)
  

### Installation

In your LoopBack project:
    
    $ npm install loopback-connector-nexmo


## Using the Connector
To use the connector, define the datasource using the connector in your `datasources.json` file:
    
    "nexmo": {
        "name": "nexmo",
        "connector": "nexmo",
        "apiKey": "YOUR_NEXMO_API_KEY",
        "apiSecret": "YOUR_NEXMO_API_KEY"
    }
  
Next, attach the created datasource to a model in the `model-config.json` file:

    "nexmo": {
        "dataSource": "nexmo",
        "public": true
    }
    
Now, using the created model, you can send an SMS or make a call using the `send` method of the model:
    
    Nexmo.sendSms(options, callback);
    
### Sending a SMS
    {
        sender: 'YOUR_PHONE_NUMBER',
        recipient: 'TARGET_PHONE_NUMBER',
        message: 'TEXT_MESSAGE',
        options: {}
    }


## Running the Example
To run the example in the `/example/example.js` directory, you must set the following values in the file:

    var KEY = 'YOUR_NEXMO_KEY';
    var SECRET = 'YOUR_NEXMO_SECRET';
    var TO = 'YOUR_TELEPHONE_NUMBER';
    var FROM = 'TARGET_PHONE_NUMBER';

Next, from the from the `/loopback-connector-nexmo/` directory, install the `loopback` module using the following command:
    
    $ npm install loopback
    
Finally, run the example app using the following command from the `/loopback-connector-nexmo/` directory:

    $ node ./example/example.js
    

### Version
1.0.0

License
----

MIT - Interactive Object <https://interactive-object.com>