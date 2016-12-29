'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

var _OverlayTrigger = require('bee-overlay/build/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Popconfirm = function (_React$Component) {
    _inherits(Popconfirm, _React$Component);

    function Popconfirm(props) {
        _classCallCheck(this, Popconfirm);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            show: false
        };
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }

    Popconfirm.prototype.handleClose = function handleClose() {
        var onClose = this.props.onClose;

        this.setState({
            show: false
        });
        console.log(this.state.show);
        onClose && onClose();
    };

    Popconfirm.prototype.handleCancel = function handleCancel() {
        var onCancel = this.props.onCancel;

        this.setState({
            show: false
        });
        console.log(this.state.show);
        onCancel && onCancel();
    };

    Popconfirm.prototype.render = function render() {
        var _props = this.props,
            placement = _props.placement,
            children = _props.children,
            rootClose = _props.rootClose,
            onClose = _props.onClose,
            onCancel = _props.onCancel,
            content = _props.content,
            trigger = _props.trigger,
            props = _objectWithoutProperties(_props, ['placement', 'children', 'rootClose', 'onClose', 'onCancel', 'content', 'trigger']);

        var overlay = _react2["default"].createElement(
            _Confirm2["default"],
            _extends({}, props, {
                onClose: this.handleClose,
                onCancel: this.handleCancel,
                placement: placement }),
            content
        );
        console.log(this.state.show);

        return _react2["default"].createElement(
            _OverlayTrigger2["default"],
            {
                rootClose: rootClose,
                trigger: trigger,
                placement: placement,
                overlay: overlay,
                show: this.state.show },
            children
        );
    };

    return Popconfirm;
}(_react2["default"].Component);

exports["default"] = Popconfirm;
module.exports = exports['default'];