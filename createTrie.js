/**
 * Given an array of strings, creates a trie,
 * also known as a prefix tree. This data structure
 * is effective for searching large lists of strings.
 * @param {Array} list
 */

const createTrie = function (list) {
  const root = {}

  list.forEach(str => {
    let vertex = root

    for (let i = 0; i < str.length; i++) {
      let ch = str[i]
      vertex[ch] = vertex[ch] || {}
      vertex = vertex[ch]
    }
  })

  return root
}

module.exports = createTrie
