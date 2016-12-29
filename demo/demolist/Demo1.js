/**
 *
 * @title 不同方向的气泡提示
 *
 */

class Demo1 extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const content = '您喜欢使用tinper-bee组件库吗？';
        return (
            <div className="demoPadding" style={{ marginLeft:"10%"}}>
              <Popconfirm trigger="click" placement="left" content={content}>
                <Button colors="primary">向左!</Button>
              </Popconfirm>
              <Popconfirm trigger="click" placement="top" content={content}>
                <Button colors="primary">向上!</Button>
              </Popconfirm>
              <Popconfirm trigger="click" placement="bottom" content={content}>
                <Button colors="primary">向下!</Button>
              </Popconfirm>
              <Popconfirm trigger="click" placement="right" content={content}>
                <Button colors="primary">向右!</Button>
              </Popconfirm>
            </div>
        )
    }
}
