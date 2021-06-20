# Lesson: [Let](https://www.executeprogram.com/courses/modern-javascript/lessons/let)

* In the old days in JS local variables were declared with the var keyword. When we define a var inside a function, it's only visible inside the function.

* Trying to reference the variable outside of the function is an error.

* Inside the function, variables defined in the function are visible. Outside the function, the function's variables are invisible. 

* The var are visible to the entire function body.

* In 2015, let was introduced. With let, a variable defined inside the if isn't visible outside the if. Trying to access it will cause an error.

* We can define an x in the function body, then define another x inside an if. Changing the "inner" x won't change the "outer" x.

```javascript
function f() {
  let x = 'outer';
  if (true) {
    let x = 'inner';
  }
  return x;
}
f();
RESULT:
'outer'
```