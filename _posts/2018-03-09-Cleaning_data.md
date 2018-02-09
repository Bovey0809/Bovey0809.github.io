---
layout: post
title: Cleaning Data
---

# Cleaning sequences
- Cleaning steps concept
    - Define
    - Code
    - Test

# Cleaning Tips
- First clone a data instead of using the original one.
    - reason: Protect the original data.
- Remember to seperate the whole processes into qulity and tideness.

# Missing Data
- This is always the first step to address.
- how to fix the missing data

# Cleaning Tideness
- clean tideness first and then queality issue.

## Use regex to seperate the number and the mail
- all the style of the number
- [ ] why the format syntax return two groups?
    ```python
    patients_clean.contact.str.extract('((\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4})', expand=True)
    ```
    answer
    - The sentence will retuen groups captured by regex.
    - analyse the sentence first.

#TIPs
- It is a good way to test while ''cleaning data'' using sample()
 ```ptrhon
 df.sample(25)
 ```

# python pandas melt function
- function: transform the dataframe into variable and value structure.
    - New structure
        |variable|value|
        |---|---|
- when should we use this function?
    - encounter tidy problem.(Three rules)
        - The same vairble should be observed in the same table.
        - Use melt function to transform different variables into one columns.
            - It is something like melting the columns.

# Little trick to select different columns in pandas
```python
id_names = patients_clean[['patient_id', 'given_name', 'surname']]
type(id_names) == 'DataFrame'
```

# Little trick to extract columns' names
```python
list(patients_clean)
```
This will return the columns' names of DataFrame.

# Question 
- [x] How to merge series with dataframe?
    ```python
    In [17]: s2.str.split('_').str.get(1)
    Out[17]: 
    0      b
    1      d
    2    NaN
    3      g
    dtype: object
    
    In [18]: s2.str.split('_').str[1]
    Out[18]: 
    0      b
    1      d
    2    NaN
    3      g
    dtype: object
    ```
- So that you can use the str[0] to extract the value in the series.

# Tip return a view vs a copy
- We usually use the df[name] way to select column, and also we can use df.loc do the same thing.
- Loc is recommended because it is faster.
-  [loc vs copy](http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy)

# Assign new value to dataframe
- Using the df['new_column'] = value will arise warning suggesting using df.loc.
- loc is the method for slicing, it can not being used to create new column.
- Use assign to create new column in df.
    ```python
    df.assgin(**args)
    ```