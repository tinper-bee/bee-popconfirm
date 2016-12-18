
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
var DemoArray = [{"example":<Demo1 />,"title":" 气泡提示默认样式","code":"/**\n *\n * @title 气泡提示默认样式\n * @description\n */\n\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div style={{ height: 120 }}>\n              <Popconfirm\n                id=\"popover-basic\"\n                placement=\"right\"\n                positionLeft={200}\n                title=\"提醒\"\n              >\n                您喜欢使用tinper-bee组件库吗？\n                \n              </Popconfirm>\n            </div>\n        )\n    }\n}\n","desc":""},{"example":<Demo2 />,"title":" 不同方向的气泡提示","code":"/**\n *\n * @title 不同方向的气泡提示\n *\n */\n\n const popoverLeft = (\n   <Popconfirm id=\"popover-positioned-left\" title=\"左侧弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\n\n const popoverTop = (\n   <Popconfirm id=\"popover-positioned-top\" title=\"向上弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\n\n const popoverBottom = (\n   <Popconfirm id=\"popover-positioned-bottom\" title=\"向下弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\n\n const popoverRight = (\n   <Popconfirm id=\"popover-positioned-right\" title=\"右侧弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\" style={{ marginLeft:\"10%\"}}>\n              <OverlayTrigger trigger=\"click\" placement=\"left\" overlay={popoverLeft}>\n                <Button colors=\"primary\">向左!</Button>\n              </OverlayTrigger>\n              <OverlayTrigger trigger=\"click\" placement=\"top\" overlay={popoverTop}>\n                <Button colors=\"primary\">向上!</Button>\n              </OverlayTrigger>\n              <OverlayTrigger trigger=\"click\" placement=\"bottom\" overlay={popoverBottom}>\n                <Button colors=\"primary\">向下!</Button>\n              </OverlayTrigger>\n              <OverlayTrigger trigger=\"click\" placement=\"right\" overlay={popoverRight}>\n                <Button colors=\"primary\">向右!</Button>\n              </OverlayTrigger>\n            </div>\n        )\n    }\n}\n","desc":""},{"example":<Demo3 />,"title":" 不同触发事件的气泡提示","code":"/**\n *\n * @title 不同触发事件的气泡提示\n * @description 通过设置trigger属性来设置不同触发事件\n *\n */\n\n const popoverClick = (\n   <Popconfirm id=\"popover-trigger-click\" title=\"向下弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\n\n const popoverHoverFocus = (\n   <Popconfirm id=\"popover-trigger-hover-focus\" title=\"向下弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\n\n const popoverFocus = (\n   <Popconfirm id=\"popover-trigger-focus\" title=\"向下弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\n\n const popoverClickRootClose = (\n   <Popconfirm id=\"popover-trigger-click-root-close\" title=\"向下弹出\">\n     您喜欢使用tinper-bee组件库吗？\n   </Popconfirm>\n );\n\nclass Demo3 extends Component {\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n            <OverlayTrigger trigger=\"click\" placement=\"bottom\" overlay={popoverClick}>\n              <Button colors=\"primary\">点击</Button>\n            </OverlayTrigger>\n            <OverlayTrigger trigger={['hover', 'focus']} placement=\"bottom\" overlay={popoverHoverFocus}>\n              <Button colors=\"primary\">鼠标滑过或焦点事件</Button>\n            </OverlayTrigger>\n            <OverlayTrigger trigger=\"focus\" placement=\"bottom\" overlay={popoverFocus}>\n              <Button colors=\"primary\">焦点事件</Button>\n            </OverlayTrigger>\n            <OverlayTrigger trigger=\"click\" rootClose placement=\"bottom\" overlay={popoverClickRootClose}>\n              <Button colors=\"primary\">点击且点击其他关闭</Button>\n            </OverlayTrigger>\n            </div>\n        )\n    }\n}\n","desc":" 通过设置trigger属性来设置不同触发事件"}]


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

        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
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
