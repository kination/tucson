let assert = require('assert');
let moment = require('moment')
let { Tyson, Config } = require('../lib/index')

describe('to camelcase', () => {

  const dummyUnderscoreJson = {
    'group_code': 17,
    'user': 'inylove82@gmail.com',
    'phone_number': '000-111-2222',
    'company': 'LeapMind',
    'date': '2014-06-01 12:00'
  }
  let tunedResult = {}
  let cctyson = new Tyson(new Config('camelCase'))

  before(() => {
    cctyson.tuned(dummyUnderscoreJson, {makeDate: ['date']}, tunedResult)
  })

  describe('check key', () => {
    it('key should be changed as camelcase', function() {
      assert.equal(tunedResult.hasOwnProperty('groupCode'), true)
      assert.equal(tunedResult.hasOwnProperty('phoneNumber'), true)
    });
  });

  describe('check makeDate', () => {
    it('value with `makeDate` should be converted as Moment', function() {
      assert.equal(tunedResult['date'].valueOf(), moment('2014-06-01 12:00').toDate().valueOf())
    });
  });
});
