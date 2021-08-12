'use strict';

const AWS = require('aws-sdk')
const uuid = require('uuid')
const cache = require('memory-cache')

// const https = require('https')
// const agent = new https.Agent({
//   keepAlive: true
// })
const dynamodb = new AWS.DynamoDB.DocumentClient(
  // {
  // httpOptions: { agent }
  // }
)

module.exports.hello = async (event) => {
  var instanceId = cache.get('instanceId')
  if (!instanceId) {
    instanceId = uuid.v4()
    cache.put('instanceId', instanceId)
  }

  const { userId, message } = event
  const postId = uuid.v4()

  const start = new Date().getTime()

  await dynamodb.put({
    TableName: process.env.DYNAMODB_TABLE,
    Item: { 
      "userId": userId, 
      "postId": postId,
      "message": message
    }
  }).promise()

  const end = new Date().getTime()
  console.log(`DynamoDB.put[ms]: ${end-start} - instanceId: ${instanceId}`)

  return "V2"

}
