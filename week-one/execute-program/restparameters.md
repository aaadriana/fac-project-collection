# Lesson: [Rest parameters](https://www.executeprogram.com/courses/modern-javascript/lessons/rest-parameters)

* JavaScript allows functions to take a variable number of parameters. In recent versions of JavaScript, we can do that by adding ... to the parameter list. The arguments will show up in a single array, regardless of how many arguments there were. This feature is called "rest parameters" because it collects "the rest" of the function's parameters into an array.
```javascript
function f(...args) {
  return args;
}
f('a', 'b');
RESULT:
['a', 'b']
```

* Rest parameters can be used after regular positional parameters but can't be used after rest parameters. We also can't have multiple rest parameters. T

* Rest parameters also work when calling a function.

```javascript
function add(x, y) {
  return x + y;
}
const numbers = [1, 2];
add(...numbers);
RESULT:
3
```
