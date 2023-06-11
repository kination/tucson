let assert = require('assert');
let moment = require('moment')
let { Tucson, Config } = require('../lib/index')

describe('Check date', () => {

  const dummyUnderscoreJson = {
    id: 1,
    company_id: 1,
    title: 'Software engineer',
    description: 'Job desc',
    location: 'Anywhere',
    timezone: 'AZ',
    contact_email: 'admin@remozine.com',
    created_at: new Date('2023-05-28 09:00:00'),
    updated_at: new Date('2023-05-28 09:00:00'),
    published: true
  }
  let formedResult = {}
  let cctucson = new Tucson(new Config('camelCase'))

  before(() => {
    cctucson.formed(dummyUnderscoreJson, {}, formedResult)
  })

  describe('check date', () => {
    it('value with type `Date` should not be converted', function() {
      assert(formedResult['createdAt'].toLocaleString() === "5/28/2023, 9:00:00 AM")
    });
  });
});