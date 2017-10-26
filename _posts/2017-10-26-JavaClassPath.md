---
layout:post
title:JavaClassPath
---


# Java class path
最近遇到了两个问题
1. 设置 *Atom* 的 *auto complete* 的时候发现需要设置 *class path* ,但是完全没弄懂class path 是什么意思.
2. 正在学习的 *algorithm* 课程需要导入第三方包,以前都是用 *intellij* 导入,不知道第三方包的导入机制是怎样的.

[wikipedia](https://en.wikipedia.org/wiki/Classpath_%28Java%29)
## 概览
1. Class-path 的作用是告诉 Java 去 *哪里* 找到代码中导入的 class.
- Java 虛擬機中的尋找 class 順序
  * *bootstrap classes* 引導程序:那些 *Java platform* 的基本 *class* 以及程序中需要使用的 *private classes*.
  * *extension classes*: 在 *JRE* 或者 *JDK* 中的擴展 class, 路徑一般為 *jre/lib/ext/*.
  * 用戶自定義的 *packages* 和 *library*.
- 只有 *JDK standard API* 和 *extension package* 不需要設置路徑,用戶自定義的 *packages* 和 *library* 必須在 *command line* 裡面設置路徑,或者在 *manifest* 中設置.

## 為 Java 程序設置路徑
假設擁有一個叫做 *org.mypackage* 的包,裡面包含以下 *class*
  * HelloWorld(main class)
  * SupportClass
  * UtilClass
所以如果要調用這個包裡面的 *class* 需要在 *command line* 裡面寫上 **java -cp /home/user/myprogram org.mypackage.HelloWorld**

##  通過 *environment variable* 環境變量設置路徑
對於上面的例子,在環境變量中应该如下设置
- set CLASSPATH=D:\myprogram
- java org.mypackage.HelloWorld

如果没有设置环境变量,目前工作路径就会作为 *CLASSPATH*
- 假设工作路径是 *D:\myprogram*
- 我们不需要设置系统的 *CLASSPATH*
- 建议在环境变量中添加 *"."* ,代表添加当前路径到环境变量

## 为 *Jar file* 设置路径
如果在 *D:\myprogram\lib\*  中有一个 *Jar file* 叫做 *supportLib.jar*.
- 命令行设置应该如下
  - java -classpath D:\myprogram;D:\myprogram\lib\supportLib.jar
  org.mypackage.HelloWorld
  - or
  set CLASSPATH=D:\myprogram;D:\myprogram\lib\supportLib.jar
  java org.mypackage.HelloWorld
  
