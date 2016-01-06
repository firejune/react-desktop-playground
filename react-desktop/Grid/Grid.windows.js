'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DesktopComponent = require('../DesktopComponent');

var _DesktopComponent2 = _interopRequireDefault(_DesktopComponent);

var styles = {
  grid: {
    userSelect: 'none',
    flex: '1',
    display: 'flex'
  }
};

var Grid = (function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, _Grid);

    _get(Object.getPrototypeOf(_Grid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var style = _props.style;
      var margin = _props.margin;
      var padding = _props.padding;
      var align = _props.align;
      var verticalAlign = _props.verticalAlign;

      var props = _objectWithoutProperties(_props, ['children', 'style', 'margin', 'padding', 'align', 'verticalAlign']);

      var componentStyle = _extends({}, styles.grid, {
        margin: margin,
        padding: padding
      });

      switch (align) {
        case 'center':
          componentStyle.justifyContent = 'center';
          break;
        case 'left':
          componentStyle.justifyContent = 'flex-start';
          break;
        case 'right':
          componentStyle.justifyContent = 'flex-end';
          break;
      }

      switch (verticalAlign) {
        case 'center':
          componentStyle.alignItems = 'center';
          break;
        case 'top':
          componentStyle.alignItems = 'flex-start';
          break;
        case 'bottom':
          componentStyle.alignItems = 'flex-end';
          break;
      }

      componentStyle = _extends({}, componentStyle, style);

      return _react2['default'].createElement(
        'div',
        _extends({
          style: componentStyle
        }, props),
        children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      margin: _react.PropTypes.string,
      padding: _react.PropTypes.string,
      align: _react.PropTypes.string,
      verticalAlign: _react.PropTypes.string
    },
    enumerable: true
  }]);

  var _Grid = Grid;
  Grid = (0, _DesktopComponent2['default'])(Grid) || Grid;
  return Grid;
})(_react.Component);

exports['default'] = Grid;
module.exports = exports['default'];