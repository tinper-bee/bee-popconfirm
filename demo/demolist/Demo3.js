/**
 *
 * @title 不同触发事件的气泡提示
 * @description 通过设置trigger属性来设置不同触发事件
 *
 */

 const popoverClick = (
   <Popconfirm id="popover-trigger-click" title="向下弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );

 const popoverHoverFocus = (
   <Popconfirm id="popover-trigger-hover-focus" title="向下弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );

 const popoverFocus = (
   <Popconfirm id="popover-trigger-focus" title="向下弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );

 const popoverClickRootClose = (
   <Popconfirm id="popover-trigger-click-root-close" title="向下弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );

class Demo3 extends Component {

    render () {
        return (
            <div className="demoPadding">
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
              <Button colors="primary">点击</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
              <Button colors="primary">鼠标滑过或焦点事件</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
              <Button colors="primary">焦点事件</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
              <Button colors="primary">点击且点击其他关闭</Button>
            </OverlayTrigger>
            </div>
        )
    }
}
