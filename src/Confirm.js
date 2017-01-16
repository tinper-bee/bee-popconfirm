import React from 'react';
import isRequiredForA11y from 'tinper-bee-core/lib/isRequiredForA11y';
import classnames from 'classnames';
import i18n from './i18n';
import Button from 'bee-button';



const propTypes = {

  /**
   * Sets the direction the Popover is positioned towards.
   */
  placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Popover.
   */
  positionTop: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  /**
   * The "left" position value for the Popover.
   */
  positionLeft: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),

  /**
   * The "top" position value for the Popover arrow.
   */
  arrowOffsetTop: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  /**
   * The "left" position value for the Popover arrow.
   */
  arrowOffsetLeft: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),

  /**
   * Title content
   */
  title: React.PropTypes.node,
  onClose: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  color: React.PropTypes.oneOf(['dark']),
};

const defaultProps = {
  placement: 'right',
  clsPrefix: 'u-popconfirm',
  locale: 'zh-cn'
};

class Confirm extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    const {
      placement,
      positionTop,
      positionLeft,
      arrowOffsetTop,
      arrowOffsetLeft,
      clsPrefix,
      trigger,
      title,
      className,
      style,
      children,
      locale,
      onClose,
      color,
      onCancel,
      ...props
    } = this.props;

    const local = i18n[locale];

    //const [bsProps, elementProps] = splitBsProps(props);

    const classes = {
        [`${clsPrefix}`]: true,
        [placement]: true,
        [`${clsPrefix}-${color}`]: color,
    };

    const outerStyle = {
      display: 'block',
      top: positionTop,
      left: positionLeft,
      ...style,
    };

    const arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft,
    };



    return (
        <div
        { ...props }
          role="tooltip"
          className={classnames(className, classes)}
          style={outerStyle}
        >
          <div className="arrow" style={arrowStyle} />
          <div className={classnames(`${clsPrefix}-content`)}>
            {children}
          </div>
          <div className={classnames(`${clsPrefix}-confirm`)}>
            <Button onClick={onCancel} size='sm' style={{ minWidth: 50 }} shape='border'>{ local['cancel'] }</Button>
            <Button onClick={onClose} size='sm' style={{ minWidth: 50 }} colors='primary'>{ local['ok'] }</Button>
          </div>
        </div>
    );
  }
}

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

export default Confirm;
