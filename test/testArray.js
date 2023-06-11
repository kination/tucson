let assert = require('assert');
let moment = require('moment')
let { Tucson, Config } = require('../lib/index')

describe('Check array', () => {
  const dummyUnderscoreJson = {
    id: 1,
    company_id: 1,
    title: 'Software engineer',
    description: 'Job desc',
    location: 'Anywhere',
    timezone: 'AZ',
    contact_email: 'admin@remozine.com',
    tags: [],
    published: true,
    company: [
      {
        company_name: 'remozine',
        company_url: 'www.remozine.com',
        company_logo_url: null
      },
      {
        company_name: 'google',
        company_url: 'google.com',
        company_logo_url: null
      }
    ]
  }
  let formedResult = {}
  let cctucson = new Tucson(new Config('camelCase'))

  before(() => {
    cctucson.formed(dummyUnderscoreJson, {}, formedResult)
  })

  describe('check array values', () => {
    it('data inside array value should be converted ', function() {
      assert(formedResult["company"] instanceof Array === true)
      assert(formedResult["company"][0]["companyName"] === "remozine")
      assert(formedResult["company"][1]["companyName"] === "google")
    });
  });
});