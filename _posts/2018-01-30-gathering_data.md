---
layout: default
title: 收集数据
---

# 简介

1. 需要学习从不同的数据源得到数据的方法.
2. 原因:

  - 课程中例如kaggle或者论文里面的数据都是别人下载好的, 不需要自己获取.
  - 但是收集数据是整个数据分析里面最繁琐的一步, 耗时最多的一步.

# 数据集:寻找最佳的电影

- 基础理念:

  1. 使用烂番茄上面的两种不同的数据来的得到最佳的电影.
  2. 使用词云的形式得到一部电影的关键词.

# 平面文件

1. 缺点

  1. 数据冗余: 可能是有许多的分隔符.
  2. 缺乏标准: 没有一个可以使用的标准, 譬如使用逗号, 使用分号, 或者tab.
  3. 不适用于大数据: 大数据有自己的格式.
  4. 共享数据比较麻烦: **为什么共享数据麻烦**
  5. - [ ] 为什么麻烦?

# 读取tsv

- tab的写法是

  ```python
  pd.read_csv(file, '\t')
  ```

# 从web抓取数据

- 使用beautiful soup保存html文件后打开进行数据收集工作.

## HTML

- html使用树形结构

  - parent
  - children
  - sibling

- HTML的元素,标签,以及分类.

# python中的html文件

- 使用bs4之前需要把html的文件的树形结构找出来.
- 然后使用bs4的find功能找到需要的内容.
- 使用字符串处理找到的内容,将其变成我需要的形式.

# 使用python的API

- 如果网站提供API供爬虫使用, 那么比使用bs4更加方便.
- 可以使用的图片API

  - wiki的API.
  - tweeter的API

# python中的文本文件

- 这一节主要接受了文本编码的问题.
- 打开文件的库

  - glob

    - glob.glob

  - os

- 打开文件的时候使用encoding参数,参数从文件的编码获取.

  ```python
    with open(file, encoding='utf-8') as file:
        print(file.readline()[-1])
  ```

  - 使用read来显示所有的文件内容.
  - 使用readline显示一行的内容.

# 下载非文本文件(例如照片)

- 有的时候下载照片会出现问题, 因为照片, 不是文本的格式.
- 解决办法

  - 使用PIL, 以及BytesIo
  - 配合PIL库

# API, 下载文件, 以及json

- wiki的title page

  - wiki的title page 的最后一个slash后面的就是我们需要的条目.

- 下载图片

  - 使用reuqest下载的时候有时候会遇到问题.
  - 使用PIL, 以及BytesIO下载

    ```python
      import requesrs
      from PIL import Image
      from io import BytesIO
      r = request.get(url)
      i = Image.open(BytesIO(r.content))
    ```

    - 使用上面的形式也可能会遇见问题, 这个时候需要使用异常处理机制.

- 如何搞定这些图片

  1. 第一步:使用**MediaWiki**的API获取电影海报.
  2. 第二步:下载这些图片到**bestofrt_posters**

- 答案在下一个page

# word cloud词云

- 使用review词频最高的单词生成词云.

## 存储数据 storing data

- 数据的整理一般是在清洁之后.
- flat files(文本文件)的好处以及坏处.

  - 好处: 适合小数据
  - 坏处: 不适合分享数据.

    - [ ] 解释为什么不适合分享.

### tip

使用pandas的时候把index参数写成False.

```python
df.to_csv(df, index=False)
```

### 关系型数据结构 Relational Database Structure

- 数据的种类

  - 关系型数据
  - 非关系型数据

- SQL的好处

  - 容易理解
  - 之间使用
  - 容易更改
  - 更加灵活

- business为什么使用SQL

- SQL statements

  - drop
  - select

    - from

## Relational Database in Python 在python中使用关系型数据

- 只有在_收集数据_和_存储数据_的时候使用SQL.
- 使用关系型数据库的步骤

  1. 连接关系型数据库
  2. 把pd里面的数据到数据库
  3. 把数据库的数据传入到pd.

- python SQLAlchemy package

  - 一个python的SQL包.

- pandas vs SQL

  - [pandas vs SQL](https://www.reddit.com/r/Python/comments/1tqjt4/why_do_you_use_pandas_instead_of_sql/)
