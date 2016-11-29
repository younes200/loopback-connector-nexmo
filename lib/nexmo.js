var assert = require('assert')
var nexmo;

/**
 * Export the NexmoConnector class.
 */

module.exports = NexmoConnector;

/**
 * Create an instance of the connector with the given `settings`.
 */

function NexmoConnector(settings) {

    assert(typeof settings === 'object', 'cannot initialize NexmoConnector without a settings object');
    var connector = this;

    var apiKey = this.apiKey = settings.apiKey;
    var apiSecret = this.apiSecret = settings.apiSecret;

    var NexmoAPI = require('nexmo');
    nexmo = connector.nexmo = new NexmoAPI({
      apiKey: apiKey,
      apiSecret: apiSecret
    })
    
}

NexmoConnector.initialize = function (dataSource, callback) {
    dataSource.connector = new NexmoConnector(dataSource.settings);
    callback();
}

NexmoConnector.prototype.DataAccessObject = Nexmo;

function Nexmo() {

}

/**
 * Send a Nexmo message or call with the given `options`.
 */

Nexmo.sendSms = function (options, fn) {
    var dataSource = this.dataSource;
    var settings = dataSource && dataSource.settings;
    var connector = dataSource.connector;
    assert(connector, 'Cannot use this module without a connector!');
    
    console.log(options);
    connector.nexmo.message.sendSms(options.sender, options.recipient, options.message, options.options, fn);
  
}

/**
 * Initialize the connector for the given data source
 * @param {DataSource} dataSource The data source instance
 * @param {Function} [callback] The callback function
 */
exports.initialize = function initializeDataSource(dataSource, callback) {
    
};

/**
 * Send using `modelInstance.send()`.
 */

Nexmo.prototype.sendSms = function (fn) {
    this.constructor.sendSms(this, fn);
}

/**
 * Access the nexmo client object.
 */

NexmoConnector.client =
NexmoConnector.prototype.client =
    Nexmo.client =
        Nexmo.prototype.client = nexmo;
