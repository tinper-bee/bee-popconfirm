/**
 *
 * @title 不同触发事件的气泡提示
 * @description 通过设置trigger属性来设置不同触发事件
 *
 */


class Demo2 extends Component {

    render () {
        const content = '您喜欢使用tinper-bee组件库吗？';
        return (
            <div className="demoPadding">
            <Popconfirm trigger="click" placement="bottom" content={content}>
              <Button colors="primary">点击</Button>
            </Popconfirm>
            <Popconfirm trigger="click" rootClose placement="bottom" content={content}>
              <Button colors="primary">点击且点击其他关闭</Button>
            </Popconfirm>
            </div>
        )
    }
}
