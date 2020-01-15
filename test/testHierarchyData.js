let assert = require('assert');
let moment = require('moment')
let { Tucson, Config } = require('../lib/index')

describe('check hierarchy data', () => {

  const testData = {
    'path': 'bank-master/banks/code/contract-with-maintenance',
    'result': {
      'status': 'OK',
      'message': 'Success call'
    },
    'data': {
      'user_info': {
        'name': 'Jung',
        'email': 'inylove82@gmail.com'
      },
      'user_history': {
        'last_updated': '2014-06-01 12:00',
        'registered': true
      }
    }
  }
  
  let formedResult = {}
  let cctucson = new Tucson(new Config('camelCase'))
  cctucson.formed(testData, {}, formedResult)
  console.log(`formedResult: ${JSON.stringify(formedResult)}`)

  before(() => {
    
  })

  describe(' // TODO', () => {
    
  });

});
