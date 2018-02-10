---
title: react 开发一个前端app
tags: react,javascript,front
grammar_cjkRuby: true
---
### 功能

管理仓库库存，根据设定的最小，最大量提醒领料或清理库存。
扫描仓库生成的条码来入库。
定期盘点库存物料。

### 设计

 - 选择库存和安全组
 - 入库
	 - 扫描一堆条码
	 - 点击入库
	 - 根据条码可以找到名称和有效期的项目自动入库
	 - 如果选择了打印条码，自动打印条码
	 - 无法自动入库的项目显示编辑界面
	 - 编辑完保存后，可以重试入库
 - 库存
 - 盘点

#### 编码

 -  使用ant-design

##### 问题

 - 如何使用pug
 - state为null
	 - 需在constructor中初始化state
 - 把test迁移到其他目录
	 - 设置jest的配置文件
	```javascript
	"moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1",
      "^react-native$": "react-native-web"
    }
	```