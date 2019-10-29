'use strict'

module.exports = {
  create: async (event, context) => {
    let bodyObj = {}
    try {
      bodyObj.parse(event.body)
    } catch (error) {
      console.log('there was an error parsing the body', error)
      return {
        statusCode: 400
      }
    }

    if (typeof bodyObj.name === undefined || typeof bodyObj.age === undefined) {
      console.log('Missing params')
      return {
        statusCode: 400
      }
    }

    let putParams = {
      TableName: process.env.DYNAMODB_KITTEN_TABLE,
      Item: {
        name: bodyObj.nam,
        age: bodyObj.age
      }
    }

    let putResult = {}
    try {
      let dynamodb = new AWS.DynamoDB.DocumentClient()
      putResult = await dynamodb.put(putParams).promise()
    } catch (error) {
      console.log('There was a problem putting the kitten', error)
      return {
        statusCode: 500
      }
    }

    return {
      statusCode: 201
    }
  },
  delete: async (event, context) => {
    return {
      statusCode: 200
    }
  },
  update: async (event, context) => {
    return {
      statusCode: 200
    }
  },
  get: async (event, context) => {},
  list: async (event, context) => {
    let scanParams = {
      TableName: process.env.DYNAMODB_KITTEN_TABLE
    }

    let scanResults = {}
    try {
      let dynamodb = new AWS.DynamoDB.DocumentClient()
      scanResults = await dynamodb.scan(scanParams).promise()
    } catch (error) {
      console.log('There was a problem scanning the kittens', error)
      return {
        statusCode: 500
      }
    }

    if (
      scanResults.Items === null ||
      !Array.isArray(scanResults.Items) ||
      scanResults.Items.length === 0
    ) {
      return {
        statusCode: 404
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(
        scanResults.Items.map(kitten => {
          return {
            name: kitten.name,
            age: kitten.age
          }
        })
      )
    }
  }
}
