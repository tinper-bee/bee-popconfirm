'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isRequiredForA11y = require('tinper-bee-core/lib/isRequiredForA11y');

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {

  /**
   * Sets the direction the Popover is positioned towards.
   */
  placement: _react2["default"].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Popover.
   */
  positionTop: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),
  /**
   * The "left" position value for the Popover.
   */
  positionLeft: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),

  /**
   * The "top" position value for the Popover arrow.
   */
  arrowOffsetTop: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),
  /**
   * The "left" position value for the Popover arrow.
   */
  arrowOffsetLeft: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),

  /**
   * Title content
   */
  title: _react2["default"].PropTypes.node,
  onClose: _react2["default"].PropTypes.func,
  onCancel: _react2["default"].PropTypes.func,
  color: _react2["default"].PropTypes.oneOf(['dark'])
};

var defaultProps = {
  placement: 'right',
  clsPrefix: 'u-popconfirm',
  locale: 'zh-cn'
};

var Confirm = function (_React$Component) {
  _inherits(Confirm, _React$Component);

  function Confirm(props) {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  Confirm.prototype.render = function render() {
    var _classes;

    var _props = this.props,
        placement = _props.placement,
        positionTop = _props.positionTop,
        positionLeft = _props.positionLeft,
        arrowOffsetTop = _props.arrowOffsetTop,
        arrowOffsetLeft = _props.arrowOffsetLeft,
        clsPrefix = _props.clsPrefix,
        trigger = _props.trigger,
        title = _props.title,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        locale = _props.locale,
        onClose = _props.onClose,
        color = _props.color,
        onCancel = _props.onCancel,
        props = _objectWithoutProperties(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'clsPrefix', 'trigger', 'title', 'className', 'style', 'children', 'locale', 'onClose', 'color', 'onCancel']);

    var local = _i18n2["default"][locale];

    //const [bsProps, elementProps] = splitBsProps(props);

    var classes = (_classes = {}, _defineProperty(_classes, '' + clsPrefix, true), _defineProperty(_classes, placement, true), _defineProperty(_classes, clsPrefix + '-' + color, color), _classes);

    var outerStyle = _extends({
      display: 'block',
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };

    return _react2["default"].createElement(
      'div',
      _extends({}, props, {
        role: 'tooltip',
        className: (0, _classnames2["default"])(className, classes),
        style: outerStyle
      }),
      _react2["default"].createElement('div', { className: 'arrow', style: arrowStyle }),
      _react2["default"].createElement(
        'div',
        { className: (0, _classnames2["default"])(clsPrefix + '-content') },
        children
      ),
      _react2["default"].createElement(
        'div',
        { className: (0, _classnames2["default"])(clsPrefix + '-confirm') },
        _react2["default"].createElement(
          _beeButton2["default"],
          { onClick: onCancel, size: 'sm', style: { minWidth: 50 }, shape: 'border' },
          local['cancel']
        ),
        _react2["default"].createElement(
          _beeButton2["default"],
          { onClick: onClose, size: 'sm', style: { minWidth: 50 }, colors: 'primary' },
          local['ok']
        )
      )
    );
  };

  return Confirm;
}(_react2["default"].Component);

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

exports["default"] = Confirm;
module.exports = exports['default'];