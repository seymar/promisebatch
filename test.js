const promiseBatch = require('./promisebatch.js')

const arr = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10]

promiseBatch(
  // Batch size
  3,
  // Array of functions that return promises
  arr.map(a => () => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(a)
      resolve()
    }, a * 100)
  })),
  // An optional callback function that is called when a batch is complete
  () => console.log('Batch complete')
)
  .then(() => {
    console.log('All done')
  })
