let { Tyson, Config } = require('../lib/index')

const dummyUnderscoreJson = {
  "id": 139,
  "group_number": 17,
  "user": "inylove82@gmail.com",
  "phone_number": "000-111-2222",
  "company": "LeapMind",
  "salary": "Unknown",
  "date": "2014-06-01 12:00"
}

let tunedResult = {}
let cctyson = new Tyson(new Config('camelCase'))
cctyson.tuned(dummyUnderscoreJson, {makeDate: ['date']}, tunedResult)
console.log(`camelcase json: ${JSON.stringify(tunedResult)}`)

let tunedResult_sc = {}
let sctyson = new Tyson(new Config('snake_case'))
sctyson.tuned(tunedResult, {}, tunedResult_sc)
console.log(`snake_case json: ${JSON.stringify(tunedResult_sc)}`)
