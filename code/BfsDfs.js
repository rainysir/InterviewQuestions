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

// DFS
function findPath(tree, name) {
  const result = []
  function dfs(node, root = '') {
    if (node.name === name) {
      result.push(root)
    }
    console.log(root)
    if (node.children) {
      node.children.forEach(item => bfs(item, `${root ? `${root},`: ''}${item.name}`))
    }
  }
  dfs(tree, tree.name)
  return result
}

// BFS
function findPath(tree, name) {
  let queue = [tree]
  const result = []
  while (queue.length) {
    const first = queue.shift()
    if (name !== first.name) {
      first.children && first.children.forEach(item => {
        item.path = `${first.path || first.name}, ${item.name}`
        queue.push(item)
      })
    } else {
      result.push(first.path)
      queue = []
    }
  }

  return result
}

console.log(findPath(tree, '1-2-1-1'))


