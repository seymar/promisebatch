module.exports = async function promiseBatch (size, promiseFunctions, batchCompleteCallback = () => {}) {
  for (let i = 0; i < promiseFunctions.length; i += size) {
    await Promise.all(promiseFunctions.slice(i, i + size).map(f => f()))
    batchCompleteCallback()
  }
}
