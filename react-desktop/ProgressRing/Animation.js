'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.startAnimation = startAnimation;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _AnimationBezierEasing = require('../Animation/BezierEasing');

var _AnimationBezierEasing2 = _interopRequireDefault(_AnimationBezierEasing);

var requestAnimationFrame = undefined;
if (window) {
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
}

var totalIterations = 95;
var circlesInterval = 14;
var restartInterval = 250;
var stopRotationAt = totalIterations * 2 / 1.02;
var easing = (0, _AnimationBezierEasing2['default'])(0, 0.47, 0.9, .25);
var bounding = 68;

function rotateCircle(circles) {
  var lastFrame = false;
  for (var i = 0, len = circles.length; i < len; ++i) {
    if (this.iteration >= circlesInterval * i) {
      var iteration = this.iteration - circlesInterval * i;
      var revolution = Math.floor(iteration / totalIterations);
      iteration = iteration - revolution * totalIterations;
      if (iteration < 0) {
        iteration = totalIterations - iteration;
      } else if (iteration > totalIterations) {
        iteration = iteration - totalIterations;
      }
      if (iteration + revolution * totalIterations > stopRotationAt) {
        circles[i].setAttributeNS('', 'fill-opacity', '0');
        if (i === circles.length - 1) {
          lastFrame = true;
        }
      } else {
        var value = easing.get(1 / totalIterations * iteration) * 2 * Math.PI * -1;
        circles[i].setAttributeNS('', 'fill-opacity', '1');
        circles[i].setAttributeNS('', 'cx', 75 + bounding * Math.sin(value) + '');
        circles[i].setAttributeNS('', 'cy', 75 + bounding * Math.cos(value) + '');
      }
    }
  }

  this.iteration++;
  if (!lastFrame) {
    requestAnimationFrame(rotateCircle.bind(this, circles));
  } else {
    setTimeout(startAnimation.bind.apply(startAnimation, [null].concat(_toConsumableArray(circles))), restartInterval);
  }
}

function startAnimation() {
  if (requestAnimationFrame) {
    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }

    rotateCircle.apply({ iteration: 0, currentIteration: 0 }, [elements]);
  }
}