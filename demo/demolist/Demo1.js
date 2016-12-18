/**
 *
 * @title 气泡提示默认样式
 * @description
 */


class Demo1 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div style={{ height: 120 }}>
              <Popconfirm
                id="popover-basic"
                placement="right"
                positionLeft={200}
                title="提醒"
              >
                您喜欢使用tinper-bee组件库吗？
                
              </Popconfirm>
            </div>
        )
    }
}
