## Popconfirm 气泡弹出框

点击元素弹出对话框。

## 代码演示

### API

### Popconfirm

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|defaultOverlayShown|默认是否显示|bool|false|
|content|显示的组件|node/string|-|
|onClick|点击事件的钩子函数|function|-|
|onClose|确认按钮的点击事件|function|-|
|onCancel|取消按钮的点击事件|function|-|
|rootClose|是否点击除弹出层任意地方隐藏|boolean|true|
|transition|过度动画组件|component|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|placement|显示位置设置|top\left\bottom\right|right|

### Confirm

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|placement|弹出位置|top/left/right/bottom|right|
|positionTop|弹出框向上偏移量|string/number|-|
|positionLeft|弹出框向左偏移量|string/number|-|
|arrowOffsetTop|弹出框箭头向上偏移量|string/number|-|
|arrowOffsetLeft|弹出框箭头向左偏移量|string/number|-|
|title|标题|node|-|
|defaultOverlayShown|覆盖Overlay设置的默认显隐状态|boolean|false|
|content|叠加层|element/string/function|-|
|onClick|点击事件|function|-|
|onClose|确认事件|function|-|
|onCancel|取消事件|function|-|
