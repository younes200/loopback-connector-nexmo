var KEY = 'XXXXXX';
var SECRET = 'XXXXX';

var TO = 'YOUR_PHONE_NUMBER';
var FROM = 'TARGE_PHONE';

var smsData = {
    sender: FROM,
    recipient: TO,
    message: 'Hello, from the StrongLoop Nexmo Connector!',
    options: {}
}


var ds = require('loopback').createDataSource({connector: require('../'), apiKey: KEY, apiSecret:SECRET});

var Nexmo = ds.createModel('nexmo', {
    sender: {type: String, required: true},
    recipient: {type: String, required: true},
    message: {type: String, required: true},
    options: {type: "object"}
});

Nexmo.sendSms(smsData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
