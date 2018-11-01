# TYSON - Tune Your jSON
Package to convert JSON key/values to make it fit on your project.

# Usage

### Example
```javascript
let { Tyson, Config } = require('../lib/index')

const dummyUnderscoreJson = {
  "id": 139,
  "group_number": 17,
  "user": "inylove82@gmail.com",
  "phone_number": "000-111-2222",
  "salary": "Unknown",
  "date": "2014-06-01 12:00"
}

let tunedResult = {}
let cctyson = new Tyson(new Config('camelCase'))
cctyson.tuned(dummyUnderscoreJson, {makeDate: ['date']}, tunedResult)
console.log(tunedResult)
```
...result is...
```json
{
    "id":139,
    "user":"inylove82@gmail.com",
    "phoneNumber":"000-111-2222",
    "company":"LeapMind",
    "salary":"Unknown",
    "date":"2014-06-01T03:00:00.000Z"
}
```


