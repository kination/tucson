let tyson = require('../lib/index')
let dummyJson = {
  "id": 139,
  "group_number": 17,
  "user": "inylove82@gmail.com",
  "phone_number": "000-111-2222",
  "company": "LeapMind",
  "salary": "Unknown"
}

let tunedResult = {}
console.log(tyson.tuned(dummyJson, {}, tunedResult))
