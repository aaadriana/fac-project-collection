# Lesson: [Accessors in object literals](https://www.executeprogram.com/courses/modern-javascript/lessons/accessors-in-object-literals)

* Objects can also hold a function.

* The **get** and **set** keywords are required when creating getters and setters

* **Getter**. The getter function can compute anything that we want; it doesn't have to return a constant value.

```javascript
const user = {
  get userName() { return 'Be' + 'tty'; }
};
user.userName;
RESULT:'Betty'
```

* A **setter** property contains a function, like a getter does. But this time the function takes one argument: the value being written to the key. If we try to read the value of a setter, we'll get undefined. The object has no value at that key, even though there is a setter for that key.

* One use of setters is tracking changes over time. Setter can store a history of what happened.
```javascript
const user = {
  names: ['Amir'],
  set userName(newName) {
    this.names.push(newName);
  }
};
user.userName = 'Betty';
user.names;
RESULT: ['Amir', 'Betty']
```

