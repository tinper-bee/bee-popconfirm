import React, { cloneElement, Component } from 'react';
import ReactDOM from 'react-dom';
import warning from 'warning';
import contains from 'dom-helpers/query/contains';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import splitComponentProps from 'tinper-bee-core/lib/splitComponent';
import PropTypes from 'prop-types';
import Overlay from 'bee-overlay/build/Overlay';
import Confirm from './Confirm';

const propTypes = {
  ...Overlay.propTypes,


  // FIXME: This should be `defaultShow`.
  /**
   * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
   */
  defaultOverlayShown: PropTypes.bool,

  /**
   * 要覆盖在目标旁边的元素或文本。
   */
  content: PropTypes.node.isRequired,

  /**
   * @private
   */
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,


  // Overridden props from `<Overlay>`.
  /**
   * @private
   */
  target: PropTypes.oneOf([null]),
   /**
   * @private
   */
  onHide: PropTypes.oneOf([null]),
  /**
   * @private
   */
  show: PropTypes.oneOf([null]),
};

const defaultProps = {
  defaultOverlayShown: false,
};

class Popconfirm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.makeOverlay = this.makeOverlay.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);


    this._mountNode = null;

    this.state = {
      show: props.defaultOverlayShown,
    };
  }

  componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  }

  componentDidUpdate() {
    this.renderOverlay();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;

  }

  handleToggle() {

    if (!this.state.show) {
      this.show();
    }
  }

  handleClose () {
       const { onClose } = this.props;
       this.hide();
       onClose && onClose();
   }
   handleCancel () {
       const { onCancel } = this.props;
       this.hide();
       onCancel && onCancel();
   }

  handleHide() {
    this.hide();
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  makeOverlay(overlay, props) {
    return (
      <Overlay
        {...props}
        show={this.state.show}
        onHide={this.handleHide}
        target={this}
      >
        {overlay}
      </Overlay>
    );
  }

  renderOverlay() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this, this._overlay, this._mountNode
    );
  }

  render() {
    const {
      content,
      children,
      onClick,
      ...props
    } = this.props;

    delete props.defaultOverlayShown;

    const [overlayProps, confirmProps] = splitComponentProps(props, Overlay);

    const child = React.Children.only(children);
    const childProps = child.props;

    const overlay = (
           <Confirm
           {...confirmProps}
           onClose={ this.handleClose}
           onCancel= {this.handleCancel}
           placement={props.placement}>
               { content }
           </Confirm>
       );

    const triggerProps = {
      'aria-describedby': overlay.props.id
    };

    // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

    triggerProps.onClick = createChainedFunction(childProps.onClick, onClick);

      triggerProps.onClick = createChainedFunction(
        triggerProps.onClick, this.handleToggle
      );


    this._overlay = this.makeOverlay(overlay, overlayProps);

    return cloneElement(child, triggerProps);
  }
}

Popconfirm.propTypes = propTypes;
Popconfirm.defaultProps = defaultProps;

export default Popconfirm;
