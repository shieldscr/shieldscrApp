'use strict';

describe('shieldsCrApp.version module', function() {
  beforeEach(module('shieldsCrApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
