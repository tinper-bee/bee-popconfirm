
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
var DemoArray = [{"example":<Demo1 />,"title":" 气泡提示默认样式","code":"/**\r\n *\r\n * @title 气泡提示默认样式\r\n * @description\r\n */\r\n\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    render () {\r\n        return (\r\n            <div style={{ height: 120 }}>\r\n              <Popconfirm\r\n                id=\"popover-basic\"\r\n                placement=\"right\"\r\n                positionLeft={200}\r\n                title=\"提醒\"\r\n              >\r\n                您喜欢使用tinper-bee组件库吗？\r\n                \r\n              </Popconfirm>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 不同方向的气泡提示","code":"/**\r\n *\r\n * @title 不同方向的气泡提示\r\n *\r\n */\r\n\r\n const popoverLeft = (\r\n   <Popconfirm id=\"popover-positioned-left\" title=\"左侧弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\n\r\n const popoverTop = (\r\n   <Popconfirm id=\"popover-positioned-top\" title=\"向上弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\n\r\n const popoverBottom = (\r\n   <Popconfirm id=\"popover-positioned-bottom\" title=\"向下弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\n\r\n const popoverRight = (\r\n   <Popconfirm id=\"popover-positioned-right\" title=\"右侧弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\nclass Demo2 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\" style={{ marginLeft:\"10%\"}}>\r\n              <OverlayTrigger trigger=\"click\" placement=\"left\" overlay={popoverLeft}>\r\n                <Button colors=\"primary\">向左!</Button>\r\n              </OverlayTrigger>\r\n              <OverlayTrigger trigger=\"click\" placement=\"top\" overlay={popoverTop}>\r\n                <Button colors=\"primary\">向上!</Button>\r\n              </OverlayTrigger>\r\n              <OverlayTrigger trigger=\"click\" placement=\"bottom\" overlay={popoverBottom}>\r\n                <Button colors=\"primary\">向下!</Button>\r\n              </OverlayTrigger>\r\n              <OverlayTrigger trigger=\"click\" placement=\"right\" overlay={popoverRight}>\r\n                <Button colors=\"primary\">向右!</Button>\r\n              </OverlayTrigger>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo3 />,"title":" 不同触发事件的气泡提示","code":"/**\r\n *\r\n * @title 不同触发事件的气泡提示\r\n * @description 通过设置trigger属性来设置不同触发事件\r\n *\r\n */\r\n\r\n const popoverClick = (\r\n   <Popconfirm id=\"popover-trigger-click\" title=\"向下弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\n\r\n const popoverHoverFocus = (\r\n   <Popconfirm id=\"popover-trigger-hover-focus\" title=\"向下弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\n\r\n const popoverFocus = (\r\n   <Popconfirm id=\"popover-trigger-focus\" title=\"向下弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\n\r\n const popoverClickRootClose = (\r\n   <Popconfirm id=\"popover-trigger-click-root-close\" title=\"向下弹出\">\r\n     您喜欢使用tinper-bee组件库吗？\r\n   </Popconfirm>\r\n );\r\n\r\nclass Demo3 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <OverlayTrigger trigger=\"click\" placement=\"bottom\" overlay={popoverClick}>\r\n              <Button colors=\"primary\">点击</Button>\r\n            </OverlayTrigger>\r\n            <OverlayTrigger trigger={['hover', 'focus']} placement=\"bottom\" overlay={popoverHoverFocus}>\r\n              <Button colors=\"primary\">鼠标滑过或焦点事件</Button>\r\n            </OverlayTrigger>\r\n            <OverlayTrigger trigger=\"focus\" placement=\"bottom\" overlay={popoverFocus}>\r\n              <Button colors=\"primary\">焦点事件</Button>\r\n            </OverlayTrigger>\r\n            <OverlayTrigger trigger=\"click\" rootClose placement=\"bottom\" overlay={popoverClickRootClose}>\r\n              <Button colors=\"primary\">点击且点击其他关闭</Button>\r\n            </OverlayTrigger>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过设置trigger属性来设置不同触发事件"}]


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
