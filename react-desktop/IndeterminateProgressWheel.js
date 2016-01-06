'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Desktop = require('./Desktop');

var _Desktop2 = _interopRequireDefault(_Desktop);

var _ProgressRingProgressRingWindows = require('./ProgressRing/ProgressRing.windows');

var _ProgressRingProgressRingWindows2 = _interopRequireDefault(_ProgressRingProgressRingWindows);

var _IndeterminateCircularProgressIndicatorIndeterminateCircularProgressIndicatorOsx = require('./IndeterminateCircularProgressIndicator/IndeterminateCircularProgressIndicator.osx');

var _IndeterminateCircularProgressIndicatorIndeterminateCircularProgressIndicatorOsx2 = _interopRequireDefault(_IndeterminateCircularProgressIndicatorIndeterminateCircularProgressIndicatorOsx);

exports['default'] = _Desktop2['default'].os === 'win' ? _ProgressRingProgressRingWindows2['default'] : _IndeterminateCircularProgressIndicatorIndeterminateCircularProgressIndicatorOsx2['default'];
module.exports = exports['default'];