# Lesson: [Template literals](https://www.executeprogram.com/courses/modern-javascript/lessons/template-literals)

* In JavaScript the third type of string written with backticks => ``  are called "template literals". 

* Interpolation means inserting something into something else. With template literals, we can insert the result of any JavaScript expression into the string by wrapping it in ${...}.

```javascript
`${'Shouting'.toUpperCase()} and ${'Whispering'.toLowerCase()}`;
RESULT:
'SHOUTING and whispering'
```

* Interpolating with ${...} converts the value to a string by calling its .toString() method. For numbers, that works great. But for arrays, it probably won't do what we want. For objects, it definitely won't do what we want!

* All of the usual string syntax also works inside template literals. 

* Template literals can contain newlines! This simplifies a lot of code. 

* With template literals is much cleaner: we don't have to constantly open and close quotes, and we don't have to merge the lines with join.