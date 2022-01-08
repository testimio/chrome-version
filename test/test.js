const assert = require('assert');
const rewire = require("rewire");
const chromeVersionModule = rewire("../index.js");
const extractChromeVersionNumer = chromeVersionModule.__get__('extractChromeVersionNumer');

describe('extractChromeVersionNumer', function() {

  describe('Google Chrome 95.0.4638', function() {
    it('should return "95.0.4638"', function() {
      const versionString = 'Google Chrome 95.0.4638';
      const versionNumber = extractChromeVersionNumer(versionString);
      assert.equal(versionNumber, '95.0.4638');
    });
  });

  describe('Google Chrome 96.0.4664.110', function() {
    it('should return "96.0.4664.110"', function() {
      const versionString = 'Google Chrome 96.0.4664.110';
      const versionNumber = extractChromeVersionNumer(versionString);
      assert.equal(versionNumber, '96.0.4664.110');
    });
  });

  describe('Google Chrome 97.0.4692.71', function() {
    it('should return "97.0.4692.71"', function() {
      const versionString = 'Google Chrome 97.0.4692.71';
      const versionNumber = extractChromeVersionNumer(versionString);
      assert.equal(versionNumber, '97.0.4692.71');
    });
  });

});
