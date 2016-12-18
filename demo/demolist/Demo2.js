/**
 *
 * @title 不同方向的气泡提示
 *
 */

 const popoverLeft = (
   <Popconfirm id="popover-positioned-left" title="左侧弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );

 const popoverTop = (
   <Popconfirm id="popover-positioned-top" title="向上弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );

 const popoverBottom = (
   <Popconfirm id="popover-positioned-bottom" title="向下弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );

 const popoverRight = (
   <Popconfirm id="popover-positioned-right" title="右侧弹出">
     您喜欢使用tinper-bee组件库吗？
   </Popconfirm>
 );
class Demo2 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="demoPadding" style={{ marginLeft:"10%"}}>
              <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button colors="primary">向左!</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                <Button colors="primary">向上!</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                <Button colors="primary">向下!</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                <Button colors="primary">向右!</Button>
              </OverlayTrigger>
            </div>
        )
    }
}
