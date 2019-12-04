---
title: 开发QA 
tags: QA
grammar_cjkRuby: true
---

- git 已经跟踪的文件ignore
	git rm --cached <file>
    git rm --cached -r <path>
	
- sqlalchemy相关
	- to_json:
		- 让它先dict，然后要用urlencode，不然解析后有些额外字符，转义的问题
		```python
		def as_dict(self):
		   return {c.name: getattr(self, c.name) for c in self.__table__.columns}
	
- flask app builder
	- 默认设置了如下日志显示，因此显示了route等
	```python
	import logging
	from flask import Flask
	from flask_appbuilder import AppBuilder, SQLA
	logging.basicConfig(format="%(asctime)s:%(levelname)s:%(name)s:%(message)s")
	logging.getLogger().setLevel(logging.DEBUG)
	
	- API接口要单独添加modelbaseapi，它与modelview实现不同

- javascript
	- cookies
		- 如何按键值读取
			- js-cookie @types/js-cookie