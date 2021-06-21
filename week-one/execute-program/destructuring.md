# Lesson: [Basic array destructuring](https://www.executeprogram.com/courses/modern-javascript/lessons/basic-array-destructuring)

* We use destructuring syntax to unpack, or remove, that structure to access the individual pieces.

* We can skip array indexes by leaving them out of the destructuring syntax entirely - "sparse array destructuring".

* If we try to destructure a value that doesn't have structure, like null or undefined, we'll get an error. 

* If the object has too few indexes, we'll get undefined for those indexes, but no error occurs.

* We can provide defaults when destructuring. If the array has no value at that key, we'll get the default instead. This is useful to avoid getting undefined.

* We can collect any remaining elements using ... . Rest parameters are always returned to us in an array, even if there's only one of them. Rest element must be last element.