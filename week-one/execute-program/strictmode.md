# Lesson: [Strict Mode](https://www.executeprogram.com/courses/modern-javascript/lessons/strict-mode)

* Strict Mode prevents many kinds of mistakes, including global variable definitions like x = 1. If we try to define a variable with x = 1, we'll get an error.  

* You can activate the Strict mode by putting the string 'use strict' at the top of a module or function.

* Most JavaScript compilers automatically insert 'use strict' for us. 

* JavaScript supports numbers in octal (base 8). For example, 0100 in octal is 64 in base 10. However, octal is rarely used; if you type 0100, it's more likely that you meant 100! To prevent that mistake, all uses of octal cause errors in strict mode.

* The delete keyword can be used to completely remove a **key** from an object. 

```javascript
const user = {name: 'Amir', age: 36};
delete user.age;
user;
RESULT:
{name: 'Amir'}
```

* Trying to delete entire variables or the Object.prototype property will cause an error. 