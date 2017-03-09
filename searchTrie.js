/**
 * Recursively destructures vertex and
 * children into the provided array.
 * @param {Array} arr
 * @param {Object} vertex
 * @param {String} prefix
 * @param {Number} limit
 */

const destructureVertex = function (arr, vertex, prefix, limit = Infinity) {
  if(arr.length >= limit) {
    return
  }

  if(!Object.keys(vertex).length) {
    arr.push(prefix)
    return
  }

  for(let key in vertex) {
    destructureVertex(arr, vertex[key], prefix + key, limit)
  }
}

/**
 * Returns a list of matching strings.
 * @param {Object} trie
 * @param {String} prefix
 */

const searchTrie = function (trie, prefix, limit) {
  let vertex = trie

  for (let i = 0; i < prefix.length; i++) {
    let ch = prefix[i]
    vertex = vertex[ch]

    if(!vertex) {
      return []
    }
  }

  const arr = []
  destructureVertex(arr, vertex, prefix, limit)
  return arr
}

module.exports = searchTrie
