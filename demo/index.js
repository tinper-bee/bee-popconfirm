
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Popconfirm from '../src';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


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
            <div className="demoPadding">
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
var DemoArray = [{"example":<Demo1 />,"title":" 不同方向的气泡提示","code":"/**\r\n *\r\n * @title 不同方向的气泡提示\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n\r\n    render () {\r\n        const content = '您喜欢使用tinper-bee组件库吗？';\r\n        return (\r\n            <div className=\"demoPadding\">\r\n              <Popconfirm trigger=\"click\" placement=\"left\" content={content}>\r\n                <Button colors=\"primary\">向左!</Button>\r\n              </Popconfirm>\r\n              <Popconfirm trigger=\"click\" placement=\"top\" content={content}>\r\n                <Button colors=\"primary\">向上!</Button>\r\n              </Popconfirm>\r\n              <Popconfirm trigger=\"click\" placement=\"bottom\" content={content}>\r\n                <Button colors=\"primary\">向下!</Button>\r\n              </Popconfirm>\r\n              <Popconfirm trigger=\"click\" placement=\"right\" content={content}>\r\n                <Button colors=\"primary\">向右!</Button>\r\n              </Popconfirm>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色气泡提示","code":"/**\r\n *\r\n * @title 不同颜色气泡提示\r\n * @description 气泡提示提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。\r\n *\r\n */\r\n\r\n\r\nclass Demo2 extends Component {\r\n\r\n    render () {\r\n        const content = '您喜欢使用tinper-bee组件库吗？';\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <Popconfirm trigger=\"click\" placement=\"bottom\" content={content} color='dark'>\r\n              <Button colors=\"primary\">黑色</Button>\r\n            </Popconfirm>\r\n            <Popconfirm trigger=\"click\" rootClose placement=\"bottom\" content={content}>\r\n              <Button colors=\"primary\">点击其他关闭</Button>\r\n            </Popconfirm>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 气泡提示提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );

        
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
