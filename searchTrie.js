/**
 * Recursively destructures vertex and
 * children into the provided array.
 * @param {Array} arr
 * @param {Object} vertex
 * @param {String} prefix
 */

const destructureVertex = function (arr, vertex, prefix) {
  if(!Object.keys(vertex).length) {
    arr.push(prefix)
    return
  }

  for(let key in vertex) {
    destructureVertex(arr, vertex[key], prefix + key)
  }
}

/**
 * Returns a list of matching strings.
 * @param {Object} trie
 * @param {String} prefix
 */

const searchTrie = function (trie, prefix) {
  let vertex = trie

  for (let i = 0; i < prefix.length; i++) {
    let ch = prefix[i]
    vertex = vertex[ch]

    if(!vertex) {
      return []
    }
  }

  const arr = []
  destructureVertex(arr, vertex, prefix)
  return arr
}

module.exports = searchTrie
