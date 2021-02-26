# biuUI

## Getting Started

```
start
npm run start

```

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build site app,

```bash
$ npm run build
```

# 背景

能够沉淀组内组件，避免重复造轮子的缺陷。
统一维护组件，使不同开发人员遵循同一套使用标准。
自己的 UI 库，能够保证系统视觉和交互一致性。
提高产品研发效率，资源重复利用，减少重复开发。
项目统一设计、编码语言规则，沟通更轻松。
专注业务，在视觉要求方面减少花费时间，争取更好的时间写业务。

# 文档编写教程

## 自定义导航、分组和标题

---

title: 自定义页面名称
nav:
path: /自定义导航路由
title: 自定义导航名称
order: 控制导航顺序，数字越小越靠前，默认以路径长度和字典序排序
group:
path: /自定义分组路由，注意，分组路由 = 导航路由 + 自己
title: 自定义分组名称
order: 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序

---
