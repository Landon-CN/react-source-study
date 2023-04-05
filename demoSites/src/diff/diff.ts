// eslint-disable-next-line strict
export type Flag = 'Placement' | 'Deletion'

interface Node {
  key: string;
  flag?: Flag;
  index?: number;
}

type NodeList = Node[]

function diff(before: NodeList, after: NodeList): NodeList {
  const result: NodeList = []

  const beforeMap = new Map<string, Node>()
  before.forEach((node, index) => {
    node.index = index
    beforeMap.set(node.key, node)
  })

  let lastPlacedIndex = 0
  for (let i = 0; i < after.length; i++) {
    const afterNode = after[i]
    afterNode.index = i
    const beforeNode = beforeMap.get(afterNode.key)

    if (beforeNode) {
      // 存在可复用的node
      beforeMap.delete(beforeNode.key);
      const oldIndex = beforeNode.index || 0;

      if (oldIndex < lastPlacedIndex) {
        // 需要移动
        afterNode.flag = 'Placement'
        result.push(afterNode)
        continue
      } else {
        lastPlacedIndex = oldIndex
      }
    } else {
      afterNode.flag = 'Placement'
      result.push(afterNode)
    }
  }
  beforeMap.forEach((node) => {
    node.flag = 'Deletion'
    result.push(node)
  })

  return result
}

// 更新前
const before = [
  { key: 'a' }
]
const after = [
  { key: 'd' }
]

console.log(diff(before, after))

const before1 = [
  { key: 'a' },
  { key: 'b' },
  { key: 'c' }
]

const after1 = [
  { key: 'c' },
  { key: 'b' },
  { key: 'a' },
]

console.log(diff(before1, after1))
