let assert = require('assert')
let { Tucson, Config } = require('../lib/index')

describe('test recursive data', () => {

  const dummyUnderscoreJson = {
    'group_code': 17,
    'date': '2014-06-01 12:00',
    'personal_info': {
      'user': 'inylove82@gmail.com',
      'phone_number': '000-111-2222',
      'company': 'LeapMind',
    }
  }
  let formedResult = {}
  let cctucson = new Tucson(new Config('camelCase'))

  before(() => {
    cctucson.formed(dummyUnderscoreJson, {makeDate: ['date']}, formedResult)
  })

  it('keys of object should be converted', function() {
    assert(formedResult.hasOwnProperty('personalInfo') == true)
    
    const personalInfo = formedResult['personalInfo']

    assert(personalInfo.hasOwnProperty('phoneNumber') == true)
    assert(personalInfo['phoneNumber'] === '000-111-2222')
  })
})
