
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Popconfirm from '../src';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 不同方向的气泡提示","code":"/**\n *\n * @title 不同方向的气泡提示\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport Popconfirm from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n    }\n\n    render () {\n        const content = '您喜欢使用tinper-bee组件库吗？';\n        return (\n            <div className=\"demoPadding\">\n              <Popconfirm trigger=\"click\" placement=\"left\" content={content}>\n                <Button colors=\"primary\">向左!</Button>\n              </Popconfirm>\n              <Popconfirm trigger=\"click\" placement=\"top\" content={content}>\n                <Button colors=\"primary\">向上!</Button>\n              </Popconfirm>\n              <Popconfirm trigger=\"click\" placement=\"bottom\" content={content}>\n                <Button colors=\"primary\">向下!</Button>\n              </Popconfirm>\n              <Popconfirm trigger=\"click\" placement=\"right\" content={content}>\n                <Button colors=\"primary\">向右!</Button>\n              </Popconfirm>\n            </div>\n        )\n    }\n}\n\n\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色气泡提示","code":"/**\n *\n * @title 不同颜色气泡提示\n * @description 气泡提示提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport Popconfirm from 'tinper-bee';\n\nclass Demo2 extends Component {\n\n    render () {\n        const content = '您喜欢使用tinper-bee组件库吗？';\n        return (\n            <div className=\"demoPadding\">\n            <Popconfirm trigger=\"click\" placement=\"bottom\" content={content} color='dark'>\n              <Button colors=\"primary\">黑色</Button>\n            </Popconfirm>\n            <Popconfirm trigger=\"click\" rootClose placement=\"bottom\" content={content}>\n              <Button colors=\"primary\">点击其他关闭</Button>\n            </Popconfirm>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 气泡提示提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。"}]


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
