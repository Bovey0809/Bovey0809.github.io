---
layout: page
title: JavaClassPath
---

# Java class path

最近遇到了两个问题

1. 设置 _Atom_ 的 _auto complete_ 的时候发现需要设置 _class path_ ,但是完全没弄懂class path 是什么意思.
2. 正在学习的 _algorithm_ 课程需要导入第三方包,以前都是用 _intellij_ 导入,不知道第三方包的导入机制是怎样的.

[wikipedia](https://en.wikipedia.org/wiki/Classpath_%28Java%29)

## 概览

1. Class-path 的作用是告诉 Java 去 _哪里_ 找到代码中导入的 class.
2. Java 虛擬機中的尋找 class 順序

  - _bootstrap classes_ 引導程序:那些 _Java platform_ 的基本 _class_ 以及程序中需要使用的 _private classes_.
  - _extension classes_: 在 _JRE_ 或者 _JDK_ 中的擴展 class, 路徑一般為 _jre/lib/ext/_.
  - 用戶自定義的 _packages_ 和 _library_.

3. 只有 _JDK standard API_ 和 _extension package_ 不需要設置路徑,用戶自定義的 _packages_ 和 _library_ 必須在 _command line_ 裡面設置路徑,或者在 _manifest_ 中設置.

## 為 Java 程序設置路徑

假設擁有一個叫做 _org.mypackage_ 的包,裡面包含以下 _class_

- HelloWorld(main class)
- SupportClass
- UtilClass 所以如果要調用這個包裡面的 _class_ 需要在 _command line_ 裡面寫上 **java -cp /home/user/myprogram org.mypackage.HelloWorld**

## 通過 _environment variable_ 環境變量設置路徑

對於上面的例子,在環境變量中应该如下设置

- set CLASSPATH=D:\myprogram
- java org.mypackage.HelloWorld

如果没有设置环境变量,目前工作路径就会作为 _CLASSPATH_

- 假设工作路径是 _D:\myprogram_
- 我们不需要设置系统的 _CLASSPATH_
- 建议在环境变量中添加 _"."_ ,代表添加当前路径到环境变量

## 为 _Jar file_ 设置路径

如果在 _D:\myprogram\lib\_ 中有一个 _Jar file_ 叫做 _supportLib.jar_.

- 命令行设置应该如下

  - java -classpath D:\myprogram;D:\myprogram\lib\supportLib.jar org.mypackage.HelloWorld
  - or set CLASSPATH=D:\myprogram;D:\myprogram\lib\supportLib.jar java org.mypackage.HelloWorld
