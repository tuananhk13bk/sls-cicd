"use strict"
const moment = require("moment")

module.exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless CICD version 1.0",
      author: "Michael Phan",
      version: "3.0",
      changelog: {
        date: new Date().toDateString(),
        version: "3.0.1",
        changes: ["a", "b", "c"],
      },
      timestamp: moment().unix(),
    }),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
