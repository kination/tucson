# TUCSON - TUne/Convert Your jSON
Package to convert JSON key/values to make it fit on your project.

# Usage

### Example
```javascript
let { Tucson, Config } = require('tucson')

const dummyUnderscoreJson = {
  "group_id": 139,
  "user": "inylove82@gmail.com",
  "phone_number": "000-111-2222",
  "salary": "Unknown",
  "date": "2014-06-01 12:00"
}

let formedResult = {}
let cctucson = new Tucson(new Config('camelCase'))
cctucson.formed(dummyUnderscoreJson, {makeDate: ['date']}, formedResult)
console.log(formedResult)
```
...result is...
```json
{
    "groupId":139,
    "user":"inylove82@gmail.com",
    "phoneNumber":"000-111-2222",
    "salary":"Unknown",
    "date":"2014-06-01T03:00:00.000Z"
}
```
