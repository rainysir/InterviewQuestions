// Deep first search
const tree = {
  name: '1',
  children: [{
    name: '1-1',
    children: [{
      name: '1-1-1'
    }, {
      name: '1-1-2'
    }]
  }, {
    name: '1-2',
    children: [{
      name: '1-2-1',
      children: [{
        name: '1-2-1-1'
      }, {
        name: '1-2-1-2'
      }]
    }, {
      name: '1-2-2'
    }, {
      name: '1-2-3'
    }]
  }]
}

function findPath(tree, name) {
  const result = []
  function bfs(node, root = '') {
    if (node.name === name) {
      result.push(root)
    }
    console.log(root)
    if (node.children) {
      node.children.forEach(item => bfs(item, `${root ? `${root},`: ''}${item.name}`))
    }
  }
  bfs(tree, tree.name)
  return result
}

console.log(findPath(tree, '1-2-1-1'))


