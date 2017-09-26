'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _createChainedFunction = require('tinper-bee-core/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _splitComponent = require('tinper-bee-core/lib/splitComponent');

var _splitComponent2 = _interopRequireDefault(_splitComponent);

var _Overlay = require('bee-overlay/build/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = _extends({}, _Overlay2["default"].propTypes, {

  // FIXME: This should be `defaultShow`.
  /**
   * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
   */
  defaultOverlayShown: _react.PropTypes.bool,

  /**
   * 要覆盖在目标旁边的元素或文本。
   */
  content: _react.PropTypes.node.isRequired,

  /**
   * @private
   */
  onClick: _react.PropTypes.func,
  onClose: _react.PropTypes.func,
  onCancel: _react.PropTypes.func,

  // Overridden props from `<Overlay>`.
  /**
   * @private
   */
  target: _react.PropTypes.oneOf([null]),
  /**
  * @private
  */
  onHide: _react.PropTypes.oneOf([null]),
  /**
   * @private
   */
  show: _react.PropTypes.oneOf([null])
});

var defaultProps = {
  defaultOverlayShown: false
};

var Popconfirm = function (_Component) {
  _inherits(Popconfirm, _Component);

  function Popconfirm(props, context) {
    _classCallCheck(this, Popconfirm);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.makeOverlay = _this.makeOverlay.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);

    _this._mountNode = null;

    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }

  Popconfirm.prototype.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };

  Popconfirm.prototype.componentDidUpdate = function componentDidUpdate() {
    this.renderOverlay();
  };

  Popconfirm.prototype.componentWillUnmount = function componentWillUnmount() {
    _reactDom2["default"].unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
  };

  Popconfirm.prototype.handleToggle = function handleToggle() {

    if (!this.state.show) {
      this.show();
    }
  };

  Popconfirm.prototype.handleClose = function handleClose() {
    var onClose = this.props.onClose;

    this.hide();
    onClose && onClose();
  };

  Popconfirm.prototype.handleCancel = function handleCancel() {
    var onCancel = this.props.onCancel;

    this.hide();
    onCancel && onCancel();
  };

  Popconfirm.prototype.handleHide = function handleHide() {
    this.hide();
  };

  Popconfirm.prototype.show = function show() {
    this.setState({ show: true });
  };

  Popconfirm.prototype.hide = function hide() {
    this.setState({ show: false });
  };

  Popconfirm.prototype.makeOverlay = function makeOverlay(overlay, props) {
    return _react2["default"].createElement(
      _Overlay2["default"],
      _extends({}, props, {
        show: this.state.show,
        onHide: this.handleHide,
        target: this
      }),
      overlay
    );
  };

  Popconfirm.prototype.renderOverlay = function renderOverlay() {
    _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  };

  Popconfirm.prototype.render = function render() {
    var _props = this.props,
        content = _props.content,
        children = _props.children,
        onClick = _props.onClick,
        props = _objectWithoutProperties(_props, ['content', 'children', 'onClick']);

    delete props.defaultOverlayShown;

    var _splitComponentProps = (0, _splitComponent2["default"])(props, _Overlay2["default"]),
        _splitComponentProps2 = _slicedToArray(_splitComponentProps, 2),
        overlayProps = _splitComponentProps2[0],
        confirmProps = _splitComponentProps2[1];

    var child = _react2["default"].Children.only(children);
    var childProps = child.props;

    var overlay = _react2["default"].createElement(
      _Confirm2["default"],
      _extends({}, confirmProps, {
        onClose: this.handleClose,
        onCancel: this.handleCancel,
        placement: props.placement }),
      content
    );

    var triggerProps = {
      'aria-describedby': overlay.props.id
    };

    // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

    triggerProps.onClick = (0, _createChainedFunction2["default"])(childProps.onClick, onClick);

    triggerProps.onClick = (0, _createChainedFunction2["default"])(triggerProps.onClick, this.handleToggle);

    this._overlay = this.makeOverlay(overlay, overlayProps);

    return (0, _react.cloneElement)(child, triggerProps);
  };

  return Popconfirm;
}(_react.Component);

Popconfirm.propTypes = propTypes;
Popconfirm.defaultProps = defaultProps;

exports["default"] = Popconfirm;
module.exports = exports['default'];