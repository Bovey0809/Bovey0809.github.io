---
layout: default
title: "Using org-mode with Jekyll"
permalink: /:title/
tags: hacking
---

# 实验

1.  exclude org
2.  输出是post文件夹
3.  不使用 export
    可以识别page, title, 无法识别内容

# 实验2

1.  使用export, P, f
    exclude没有生效, 效果和不使用export是一样的.

# 实验3

1.  使用绝对路径替换org

# 实验4

1.  无法阻止生成两个, 无法阻止org
2.  使用对org下划线,成功.

# 实验5

1.  如何做到识别layout?
2.  add the header to try
    添加
    
        #+OPTIONS: toc:nil num:nil
        #+BEGIN_HTML
        ---
        layout: post
        title: "Using org-mode with Jekyll"
        permalink: /:title/
        tags: hacking
        ---
        #+END_HTML

# test image insert function

-   根据网上的教程
-   直接插入图片尝试
    -   org 官网教程可以和图片一起生成images
    -   ![test latex file]({{site.baseurl}}/images/2017-11-03-LSTM-colah's-blog-review_5f8a0448a1f73965285a2ecfed44d459f91d15b8.png)
              失败, 识别成了超链接
    -   尝试使用export 输出

# Hello World!

This is the index page

# [LSTM description blog](http://colah.github.io/posts/2015-08-Understanding-LSTMs)

# TODO cell state , it is common for every LSTM or not?

state is the unique sturcture in LSTM, as the RNN sturcture don't have such kind of 'state cell'.

# TODO test latex with github pages

\[\theta^{100}\]

# steps to test github-blog with org mode

1.  org mode official website of how to build org into jekyll
    [Using org to blog with jekyll](http://orgmode.org/worg/org-tutorials/org-jekyll.html)
2.  steps to install
    install jekyll.
    the main idea of the mechanism is the usage of org to produce <body> and jekyll to produce the rest.
3.  steps to configure
4.  

# TODO can i define the head of the org file using html export headings.

1.  like only body ture
2.  

# TODO test images

using images file to include images
use link insert with file name only as the links local files.

# TODO test latex

export latex

# TODO test html change

using directly the html change settings to export html.

# DONE links local files

do not use the absolute directory
use the file name [remember](name.md)

# TODO set org-publish-project-alist

1.  org -> html
2.  images, scipts -> html
3.  execute the iamges and scripts.

## This is the org file.

1.  Change the org file without export to project.
    the two file will change together. That's too strange.

# Test whether it is the reason of post layout.

# two files together i can;t figure out where it comes from.
