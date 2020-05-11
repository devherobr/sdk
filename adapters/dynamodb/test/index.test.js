const { expect } = require('chai');
const AWS = require('../src/externals/aws-sdk');
const DynamoAdapter = require('../src/index').default;
const DynamoAdapterLocal = require('../src/index').Local;

describe('index.js', () => {
  describe('when default instance is created', () => {
    const adapter = new DynamoAdapter(AWS);

    it('should have the property dynamo set', () => {
      expect(adapter.dynamo).to.exist;
    });
  });

  describe('when local instance is created', () => {
    const adapter = new DynamoAdapterLocal(AWS);

    it('should have the property dynamo set', () => {
      expect(adapter.dynamo).to.exist;
    });
  });
});
