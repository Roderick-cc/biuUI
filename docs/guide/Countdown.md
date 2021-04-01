---
title: Countdown 倒计时
---

## Countdown 倒计时

倒计时组件

- 支持自定义格式
- 支持 天 时 分 秒

<code src="../../demo/Countdown"></code>

| 参数       | 说明           | 类型    | 可选值 | 默认值                                           |
| ---------- | -------------- | ------- | ------ | ------------------------------------------------ |
| isShowDay  | 是否显示天数   | Boolean | -      | false                                            |
| isShowHour | 是否显示小时   | Boolean | -      | true                                             |
| format     | 格式化分割符号 | Object  | -      | day: '天',hours: '时',minutes: '分 seconds : '秒 |
| day        | 天数           | Number  | -      | 0                                                |
| hours      | 小时           | Number  | -      | 0                                                |
| minutes    | 分钟           | Number  | -      | 0                                                |
| seconds    | 秒             | Number  | -      | 0                                                |

tip:
后续考虑设计多定时器样式 依据 type 状态机选择定时器样式
