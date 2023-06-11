let assert = require('assert');
let moment = require('moment')
let { Tucson, Config } = require('../lib/index')

describe('Check camelcase', () => {

  const dummyUnderscoreJson = {
    'group_code': 17,
    'user': 'my-user-name',
    'phone_number': '000-111-2222',
    'company': 'online',
    'date': '2014-06-01 12:00',
  }
  let formedResult = {}
  let cctucson = new Tucson(new Config('camelCase'))

  before(() => {
    cctucson.formed(dummyUnderscoreJson, {makeDate: ['date']}, formedResult)
  })

  describe('check key', () => {
    it('key should be changed as camelcase', function() {
      assert(formedResult.hasOwnProperty('groupCode') === true)
      assert(formedResult.hasOwnProperty('phoneNumber') === true)
    });
  });

  describe('check makeDate', () => {
    it('value with `makeDate` should be converted as Moment', function() {
      assert(formedResult['date'].valueOf() === moment('2014-06-01 12:00').toDate().valueOf())
    });
  });
});
