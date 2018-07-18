# Bug: The latex math equation can't be displayed on emacs.
1. Situation: I remember that it can be displayed in the past.
2. Solution: Git clone again from the web.

# Perceptron
1. What is the perceptron?
Translation: 感知机
It is mainly constructed as 'linear function' +  'step function'.
$wx+b$
It is the node as in the neural network.

## Use perceptron to represent Logitcal Operations.

||w1 | w2 | b
---|---|---|---
and | 0.9|0.9|-1
not| 1 | -3 | 1

# Perctron Algorithm

```flow
st=>start: Points(p, q), label y
e=>end: W, b
op1=>operation: d
sub1=>subroutine: My Subroutine
cond=>condition: y^ - y == 0
io=>inputoutput: catch something...

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
```

# Error Function
- Log-loss Error Function
    - Error Function should not be discrete, it should be continuous.
        - Because every small error should be represented in the loss function.
        - In mathmatical way, it is called as 'differentiable and continuous.'
- Discrete vs Continuous Predictions
    - Change the prediction into continuous values.
        - Step Function -> Sigmoid Function

# Softmax
- It is the equivalent as sigmoid function.
- $Softmax(x) = \frac{e^{x_i}}{\sum_{i}^{n}e^{x_i}}$
    - $\forall{x},  e^{x_i}>0$, so it use $e^{x_i}$ exponent function.

# Maximum Likelihood
- if we have the continuous function as $\hat{y}=\sigma(Wx+b)$.
- We want to maximax the model to output the right predictions.
- Assume all the data are independent, then multiply each of them and make it the largest is called Maximum Likelihood.

## Maximizing Probabilities
- Use the maximum likelihood be a error function.
- Product will make the probabilities be very small.
- Thus we want to use sum.
    - Then we should use logarithm.

### Cross Entropy
- Use logorithm to change possibility into sum format.
    - Example: ln(prob) < 0
- Change the sign of logarithm, -ln(prob)
- This is called cross entropy.
- Smaller number means the model is better.

### Cross entrpy formular
$\textbf{Cross-Entropy} = -\sum_{i}^{m} y_iln(p)+(1-y_i)ln(1-p_i)$
- $\text{if } y_i=1, \text{cross entropy} = \sum y_i ln(p)$
- if $y_i$  = 0, $\text{cross entropy}=-\sum ln(1-p)$
    
```python
import numpy as np

def cross_entropy(Y, P):
    Y = np.float_(Y)
    P = np.float_(P)
    return -np.sum(Y * np.log(P) + (1 - Y) * np.log(1 - P))
```

##  Multi-Class Cross-Entropy
- Formula: $\text{cross entropy} =- \sum \sum y_{ij}ln(p_{ij})$

When m == 2, which means there are only two kinds, will the multi-cross entropy the same as the cross entropy.

# Logistic Regression
- Error Function (Two class)
    - For each case, y = 1, y = 0.
    - if y =1, class 1(The first class)
        - P(Class == 1) = $\hat y$
        - Error = $-ln(\hat y)$
        - Idea:If the class is 1, the P(probability) value should be more and the more the better.
    - if y = 0, class 2 (The second class)
        - There are only two classes, if it is not class 1, then it is class 2.
        - P(class 2)=P(NOT class 1) = 1 - P(class 1) = $1 - \hat y$
        - Error = $-ln(1-\hat y)$
        - Idea: The same idea as class 1, we want to make P(class 2) higher. So that Error(class 2) should be lower.
    - Total error
        - $Error = - \frac{1}{m} \sum_{i=1}^{m} (1-y_i)(ln(1-\hat y) + y_iln(\hat y)$
- Error Function (Multi-Classes)
    - Formular
        - $-\frac{1}{m} \sum_{i=1}^{m}\sum_{j=1}^{n}y_{ij}ln(\hat y_{ij})$
    - Tip: What if the classes n equals 2?
        - For one X, which means m = 1.
        > j|$y_i$|Errror|explain
        > ---|---|--|--
        > 1|1|$-ln(\hat y)$| i is class 1 and make Error samller.
        > 1|0|0|i is class 1 and predict.
        > 2|1|$-ln(1-\hat y)$|i is class 2 and make the error
        > 2|0|0|i is class 2 and predict.
    
    So that the Error will only calculate the value when for every predict class. The error function is trying to promote the possibility for every predict 

# Gradient Descent
- Gradient Calculation
    - $\sigma^\prime = \sigma(x)(1-\sigma(x))$
        - $\sigma(x)$ is the sigmoid function.
    - calculate W, b seperately.
        - $\frac{\partial{E}}{\partial W_j}=(\hat y - y)x_j $
        - $\frac{\partial E}{\partial b} = (\hat y -y)$
    - Calculate gradient of Error(E) for one element X
        - $X \in R^{m\times n}$
        - $X^i \in R^{1\times n}$
        - $\nabla E = (\hat y - y )(x_1, \dots , x_n, 1)$
- Gradient Descent Step
    - Update W, and b.
    - $w^\prime _i \leftarrow w_i -\alpha (\hat y - y)x_i$
    - $b^\prime \leftarrow b - \alpha(\hat y - y )$
    - $\Delta w_i = \alpha \times \delta \times x_i$
        - $\delta=\hat y -y$ is the error term

# Perceptron VS gradient descent
- In perceptron algorithm, the weights changed only when the classfication is wrong.
- In gradient descent, the weights will change in each iteration.

# Use the Git to check the Quier notes.
[Use tool quiver2jekyll](https://github.com/bradley-curran/quiver2jekylljs)

# Bug: Emacs Font tty is not defined.
[solution from github issue](https://github.com/purcell/emacs.d/issues/259)
delete the desktop file saved before.
Solved!

# Use mac ctrl-h as delete key in emacs.
```lisp
(global-set-key (kbd "C-?") 'help-command)
(global-set-key (kbd "M-?") 'mark-paragraph)
(global-set-key (kbd "C-h") 'delete-backward-char)
(global-set-key (kbd "M-h") 'backward-kill-word)
```
1. Add the above line into init-locals.el

# what is npm?
Npm is a pakage manager for javascript.
1. It can be used in terminal line.
    - npm publish reusable-code

# Making a column vector
- Use arr[: ,None] to create a column vector.
    - ! The arr.T can't trun a 1D row vector into 1D column vector.
- ```python
  print(features)
  > array([ 0.49671415, -0.1382643 ,  0.64768854])

  print(features.T)
  > array([ 0.49671415, -0.1382643 ,  0.64768854])

  print(features[:, None])
  > array([[ 0.49671415],
       [-0.1382643 ],
       [ 0.64768854]])
  ```

