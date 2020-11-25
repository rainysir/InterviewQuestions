//评测题目: 无有如下一段 xml, 请使用 js 将其转换成如下 json 对象.
// 要求使用纯 JS 代码自行实现解析逻辑, 不可引用任何外部 xml 解析库, 
// 不可参考社区或开源实现, 也不可使用浏览器自带 DOMParser API.


// 基础版
// 有如下一段 xml, 请使用 js 将其转换成如下 json 对象. 要求使用纯 JS 代码自行实现解析逻辑, 不可引用任何外部 xml 解析库, 不可参考社区或开源实现, 也不可使用浏览器自带 DOMParser API.
// // 原始 xml
const xml = `
<list>
  <item>content1</item>
  <item>content2</item>
  <item>content3</item>
  <item>
    <name>hema</name>
    <value>frontend</value>
  </item>
</list>
`

function isTextNode() {
  // TODO
}

function parseQueue(xmlQueue) {
  const children = []
  let parsing = true

  while (parsing) {
    const first = xmlQueue[0]
    const tagIndex = first.indexOf('>')
    const tagName = first.slice(0, tagIndex)
    const other = first.slice(tagIndex + 1)
    const endIndex = xmlQueue.indexOf(`/${tagName}>`)
    childrenQueue = xmlQueue.slice(1, endIndex)
    xmlQueue.splice(0, endIndex + 1)
    
    children.push({
      tag: tagName,
      children: other || parseQueue(childrenQueue),
    })

    if (!xmlQueue.length) {
      parsing = false
    }
  }

  return children
}

function parse(xml) {
  let tagQueue = xml.replace(/\s*/g,"").split('<')
  tagQueue.shift()

  return parseQueue(tagQueue)
}

function xml2json (xml) {
  let result = parse(xml)

  return result[0]
}




// // 目标 json
const json = {
  tag: 'list',
  children: [
    {
      tag: 'item',
      children: 'content1'
    },
    {
      tag: 'item',
      children: 'content2'
    },
    {
      tag: 'item',
      children: 'content3'
    },
    {
      tag: 'item',
      children: [
        {
          tag: 'name',
          children: 'hema'
        },
        {
          tag: 'value',
          children: 'frontend'
        }
      ]
    }
  ]
}
console.log(JSON.stringify(xml2json(xml)) === JSON.stringify(json))
// // console: true
// console.log(JSON.stringify(xml2json(xml)) === JSON.stringify(json))


// 增强版
// 请扩展你的解析器实现, 使 xml 得到增强支持:
// 1. 支持 xml 标签属性解析
// 2. 支持 CDATA 解析（参见：https://developer.mozilla.org/zh-CN/docs/Web/API/CDATASection）
// 3. 解析算法具备较高性能, 时间复杂度达到 O(n)
// 4. 异常处理: 针对标签未闭合情况, 能报出异常信息
// 示例 xml 如下:
// <list>
//   <item key="1">content1</item>
//   <item key="2">content2</item>
//   <item key="3">CDATA Content:<![CDATA[ <tag>不被解析的标签</tag> ]]></item>
//   <item key="4">
//     <name id="hema-name">hema</name>
//     <value id="hema-value">frontend</value>
//   </item>
// </list>
// 解析后需要转换生成的 json 如下:
// // 生成的 json
// const json = {
//   tag: 'list',
//   children: [
//     {
//       tag: 'item',
//       children: 'content1',
//       props: {
//         key: '1'
//       }
//     },
//     {
//       tag: 'item',
//       children: 'content2',
//       props: {
//         key: '2'
//       }
//     },
//     {
//       tag: 'item',
//       children: 'CDATA Content: <tag>不被解析的标签</tag>',
//       props: {
//         key: '3'
//       }
//     },
//     {
//       tag: 'item',
//       children: [
//         {
//           tag: 'name',
//           children: 'hema',
//           props: {
//             id: 'hema-name'
//           }
//         },
//         {
//           tag: 'value',
//           children: 'frontend',
//           props: {
//             id: 'hema-value'
//           }
//         }
//       ],
//       props: {
//         key: '4'
//       }
//     }
//   ]
// }