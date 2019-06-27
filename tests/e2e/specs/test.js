// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'login test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#email')
      .assert.elementPresent('#password')
      .setValue('#email', 'admin')
      .setValue('#password', 'admin')
      .click('#loginBtn')
      .waitForElementVisible('#successLogin', 5000)
      .end();
  },
};
