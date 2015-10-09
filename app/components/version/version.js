'use strict';

angular.module('shieldsCrApp.version', [
  'shieldsCrApp.version.interpolate-filter',
  'shieldsCrApp.version.version-directive'
])

.value('version', '0.1');
