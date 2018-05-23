# promiseBatch

Executes an array of promises in batches.

Arguments:
* **size** The size of each batch
* **promiseFunctions** An array of functions that return promises
* **onBatchCompleteCallback** (optional) A function that gets called when a batch is completed

Example:

```javascript
const promiseBatch = require('./promisebatch.js')

const arr = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10]

promiseBatch(3, arr.map(a => () => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(a)
    resolve()
  }, a * 100)
})), () => console.log('Batch complete'))
  .then(() => {
    console.log('All done')
  })
```
Result:
```
1
2
3
Batch complete
4
5
6
Batch complete
7
8
9
Batch complete
10
Batch complete
All done
```
