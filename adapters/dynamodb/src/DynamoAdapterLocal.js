const DynamoAdapter = require('./DynamoAdapter');

class DynamoAdapterLocal extends DynamoAdapter {
  initialize(AWS) {
    const options = {
      convertEmptyValues: true,
      region: 'local-env',
      endpoint: 'http://localhost:8000',
      sslEnabled: false,
    };
    const dynamo = new AWS.DynamoDB.DocumentClient(options);
    this.dynamo = dynamo;
  }
}

module.exports = DynamoAdapterLocal;
