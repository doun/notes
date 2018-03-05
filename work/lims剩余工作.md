---
title: lims剩余工作 
tags: lims
grammar_cjkRuby: true
---

 - 查询，顺便生成存档报表
   - 使用excel的power query
   - 细分
     - 流出物sel, ter, dvn, teg, ety, sek，需要注意重复样品的情况？
     - 环境
       - TLD使用了同一个comp，多个重复
       - 氚用了testname
 - 流出物
   - [ ]修改login template，使得assigned为true,解决需要手动分配的问题
   - sek的标签问题
   - 使用cross sample来处理数据，从而把dvn的碘盒，滤膜，气体关联起来。在login template中设置cross sample

