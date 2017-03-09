const createTrie = require('./createTrie')
const searchTrie = require('./searchTrie')

const names = [
  'bill1',
  'bill2',
  'bill3',
  'joe1',
  'joe2',
  'joe3',
  'john1',
  'john2'
]

const trie = createTrie(names)
console.log('trie:', trie)

const results = searchTrie(trie, 'jo', 2)
console.log('results:', results)
