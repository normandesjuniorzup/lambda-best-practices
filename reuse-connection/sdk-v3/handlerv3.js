const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb')
const uuid = require('uuid')
const cache = require('memory-cache')
const { marshall } = require('@aws-sdk/util-dynamodb')

const dynamodb = new DynamoDBClient({});

module.exports.hello = async (event) => {
  var instanceId = cache.get('instanceId')
  if (!instanceId) {
    instanceId = uuid.v4()
    cache.put('instanceId', instanceId)
  }

  const { userId, message } = event
  const postId = uuid.v4()

  const start = new Date().getTime()

  await dynamodb.send(new PutItemCommand({
    TableName: process.env.DYNAMODB_TABLE,
    Item: marshall({ 
      "userId": userId, 
      "postId": postId,
      "message": message
    })
  }))

  const end = new Date().getTime()
  console.log(`DynamoDB.put[ms]: ${end-start} - instanceId: ${instanceId}`)

  return "V3"

}
