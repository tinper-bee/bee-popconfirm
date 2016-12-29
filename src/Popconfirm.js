
import React from 'react';
import Confirm from './Confirm';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';




class Popconfirm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleClose () {
        const { onClose } = this.props;
        this.setState({
            show: false
        });
            console.log(this.state.show);
        onClose && onClose();
    }
    handleCancel () {
        const { onCancel } = this.props;
        this.setState({
            show: false
        })
            console.log(this.state.show);
        onCancel && onCancel();
    }
  render() {
    const {
      placement,
      children,
      rootClose,
      onClose,
      onCancel,
      content,
      trigger,
      ...props
    } = this.props;



    const overlay = (
        <Confirm
        {...props}
        onClose={ this.handleClose}
        onCancel= {this.handleCancel}
        placement={placement}>
            { content }
        </Confirm>
    )
    console.log(this.state.show)

    return (
        <OverlayTrigger
        rootClose={rootClose}
        trigger={trigger}
        placement={placement}
        overlay={overlay}
        show = {this.state.show}>
          { children }
        </OverlayTrigger>
    );
  }
}


export default Popconfirm;
