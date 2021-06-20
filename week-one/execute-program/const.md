# Lesson: [Const](https://www.executeprogram.com/courses/modern-javascript/lessons/const)

* Const is like let except that a const variable can never be reassigned. If we try to assign a new value to it, that's an error.

* Const doesn't stop us from changing the value held by the variable. For example, we can mutate a const array by calling its push method. 

* We can't define the same variable twice; that will cause an error.
* However, we can shadow const variables, we can define the same variable name in two different scopes. That's allowed, just like we're allowed to define the same variable name in two different functions.

```javascript
function f() {
  const x = 'outer';
  {
    const x = 'inner';
  }
  return x;
}
f();
RESULT:
'outer'
```