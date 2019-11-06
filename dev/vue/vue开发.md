---
title: vue开发 
tags: ts, vue
grammar_cjkRuby: true
---

 - 不能直接将prop传递到子组件
	 - 因为自己的prop可能被外部修改，vue控制台会显示mulated
 - 单例问题
	 - 在一个comp文件中定义的变量，多次import，后面的会共享