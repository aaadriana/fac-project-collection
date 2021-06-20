# Lesson: [For of loops](https://www.executeprogram.com/courses/modern-javascript/lessons/for-of-loops)

* JavaScript has a for...in loop that iterates over an object's keys (not its values), But this can causes some strange edge cases. 

* We can treat arrays as objects. For example, we can ask for their keys. The "keys" of ['a', 'b'] are ['0', '1']: the array's indexes converted into strings.

* JS arrays can have elements missing. Suppose that we create an empty array (const numbers = []) and insert a value at index 3 (numbers[3] = 'a'). The array has a value at index 3, but it has nothing at indexes 0, 1, or 2. This is an important point: it's not that the array has undefined or null at indexes 0-2. It has nothing at all there. JavaScript's for...in loop skips missing array elements. If we loop over the object with for...in, the keys 0-2 don't even show up. Only 3 shows up (as the string '3')! This can cause very confusing bugs if you're not expecting it.

* Fortunately, for...of loops over the values in an array, not the keys.

* If we have an array with some missing indexes Forr..of iterates from index 0 until the highest index in the array. If some indexes are missing, it will still iterate over them, giving us the value undefined. 
```javascript
const numbers = [];
numbers[3] = 'a';
const result = [];
for (const n of numbers) {
  result.push(n);
}
result;
RESULT:
[undefined, undefined, undefined, 'a']

function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

pick({a: 1, b: 2, c: 3, d: 4}, ['c', 'b', 'c']);
RESULT:
{b: 2, c: 3}
```


* If we want to iterate over an object's keys we can use Object.keys method that gives us an object's keys as an array. Then we can for...of over that array.

```javascript
const obj = {a: 1, b: 2};
const keys = [];
for (const key of Object.keys(obj)) {
  keys.push(key);
}
keys;
RESULT:
['a', 'b']
```
* If we want to iterate over a string the loop body executes once per character in the string. JavaScript doesn't have a dedicated character type, so the individual characters will show up as strings of length 1, like 'a'.
```javascript
const s = 'loop';
const chars = [];
for (const char of s) {
  chars.push(char);
}
chars;
RESULT:
['l', 'o', 'o', 'p']
```
