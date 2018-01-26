---
title: udacity data analysis Term 2 Lesson 1
layout: post
---

##  David数据整理示例
    1. 不同地方的数据的格式不一样.

## 点击率
- 一种衡量网页热门程度的指标.
- 计算的方式
    - 点击率=广告被点击次数 \ 广告被显示次数
- 举例
    - 广告显示次数100次.
    - 一百次里面被网友点击*5*次
    - CTR=5/100=5%

## 数据整理的三个步骤
### 1. 收集数据
    - 最关键的一个步骤.
    - 采集数据, 整理缺失值.
    - 导入数据
    
#### 解压文件
- 使用 zipfile 解压文件.
    ```python
        with zipfile.Zipfile('address', 'r') as myzip:
            myzip.extractall()
    ```
    
#### 读取csv文件
- 一般使用pandas读取.
    ``` python
    df = pd.readcsv()
    ```
- 注意这里的命名最好使用df, 代表他的格式是dataframe

### 2. 评估数据
#### 质量和整洁度
- 质量问题
    1. 信息不全
    2. 信息错误
    3. 单位不一致
    4. 不准确
- 整洁数据的表现
    - 变量是一行
    - 观察结果是一行
    - 每种类型的观察单位构成一个表格.

#### 评估方法的种类
1. 使用肉眼评估小数据
2. 使用pd评估大数据.
    ```python
    df.info()
    ```
3. 把数据中出现的问题记录下来.

### 3. 清洗数据
    - 清晰数据的概念就是尽可能的把数据变得符合上面的tiny数据的三条规范.
    
[tiny 数据并不一定有用](https://simplystatistics.org/2016/02/17/non-tidy-data/)

    - 步骤
        1. define
            把需要做的整理任务写出来.变成任务清淡.
        2. code
            把任务写成代码.
        3. test
            执行代码
    - df的点操作
        - 如果列名里面没有空格的话可以使用df的点操作
        - 如果有空格那么需要使用中括号提取操作.
    - 清洗的时候依据这个清洗模版来操作.
    

#### pandas的copy以及reference区别.
- df.copy会创建一个新的表格, 改变这个新表格的时候, 原始表格不会改变.
- 使用‘=’的时候会reference一个新表格, 改变新表格的值原始表格会改变.

#### pd.series.replace
使用这个方法来替换清理一列的数据.
#### assert的检测方法
- 检测之前清理结果是否成功.

```python
for phrase in assaplist:
    assert phrase not in df.StartDate.values()
```

- 这样的ASSERT是一个编程检验, 如果出现错误, 会返回一个assertError.

```flow
st=>start: 数据整理
e=>end: finish
op1=>operation: 收集数据:
下载,抓取,
导入编程环境
op2=>operation: 评估数据:
质量和整洁度
利用编程评估
op3=>operation: 清洗数据:
define
code
test
cond=>condition: 数据符合三原则:
变量成列
个体成行
角度成表

st->op1
op1(right)->op2
op2(right)->op3
op3(right)->cond
cond(yes, bottom)->e
cond(no, left)->op2
```

数据整理是一个循环的过程, 不可能一蹴而就.

