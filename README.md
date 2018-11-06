# TUCSON - TUne/Convert Your jSON

Package to convert JSON key/values to make it fit on your project.

## Motivation

We usually want to keep unified code format, such as naming rule, spacing, etc. in project. But when code convention between client side(front-end) and server side(back-end) are different, this would cause some exception on it.

For example, I developed client side with javascript and server side with python. But python usually uses `snake_case` for parameter name, while javascirpt has been developed, in my case, with camelCase. In this situation, some of the javascript needs to be using `snake_case`, to receive and handle parameters from server.

So this is why I thought about this. By wrapping response data with this and setup option fit to convention in client side, I could keep codes in unified form.

### Thanks for reviewers
* [suttang](https://github.com/suttang)
* [odoku](https://github.com/odoku)

## Usage

### Installation
```
// NPM
$ npm install tucson

// YARN
$ yarn add tucson
```

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

### Options
------
#### Config
It has single parameter(will be updated more...)
Key Name | Type | Available Value
--- | --- | ---
KeyConvertType | string | 'camelCase', 'snake_case'

#### Tucson::formed
Definition of `formed` is:
```
Tucson.formed(originalObject, option, reformedObject)
```
Second parameter is JSON format option to select converting rule.

Key Name | Type | Description
--- | --- | ---
exclude | string[key of original json] | Exclude selected keys
makeDate | string[key of original json] | Make value of selected keys as format of Moment.Date
makeBool | string[key of original json] | Make value of selected keys as boolean.
