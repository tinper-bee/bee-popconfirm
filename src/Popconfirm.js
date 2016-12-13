import classNames from 'classnames';
import React from 'react';
import isRequiredForA11y from 'tinper-bee-core/lib/isRequiredForA11y';
import classnames from 'classnames';


const propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string}
   * @required
   */
  id: isRequiredForA11y(React.PropTypes.oneOfType([
    React.PropTypes.string, React.PropTypes.number,
  ])),

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
};

const defaultProps = {
  placement: 'right',
  clsPrefix: 'u-popover'
};

class Popover extends React.Component {
  render() {
    const {
      placement,
      positionTop,
      positionLeft,
      arrowOffsetTop,
      arrowOffsetLeft,
      clsPrefix,
      title,
      className,
      style,
      children,
      ...props
    } = this.props;

    //const [bsProps, elementProps] = splitBsProps(props);

    const classes = {
        [`${clsPrefix}`]: true,
        [placement]: true,
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
        {...props}
        role="tooltip"
        className={classNames(className, classes)}
        style={outerStyle}
      >
        <div className="arrow" style={arrowStyle} />

        {title && (
          <h3 className={classnames(`${clsPrefix}-title`)}>
            {title}
          </h3>
        )}

        <div className={classnames(`${clsPrefix}-content`)}>
          {children}
        </div>
      </div>
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
