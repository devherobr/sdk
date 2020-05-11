class DynamoAdapter {
  constructor(AWS) {
    this.initialize(AWS);
  }

  initialize(AWS) {
    const options = { convertEmptyValues: true };
    const dynamo = new AWS.DynamoDB.DocumentClient(options);
    this.dynamo = dynamo;
  }
}

module.exports = DynamoAdapter;
