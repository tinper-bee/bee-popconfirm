/**
 *
 * @title 不同颜色气泡提示
 * @description 气泡提示提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。
 *
 */


class Demo2 extends Component {

    render () {
        const content = '您喜欢使用tinper-bee组件库吗？';
        return (
            <div className="demoPadding">
            <Popconfirm trigger="click" placement="bottom" content={content} color='dark'>
              <Button colors="primary">黑色</Button>
            </Popconfirm>
            <Popconfirm trigger="click" rootClose placement="bottom" content={content}>
              <Button colors="primary">点击其他关闭</Button>
            </Popconfirm>
            </div>
        )
    }
}
