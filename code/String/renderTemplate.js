// 给定一个模板和一个对象，利用对象中的数据渲染模板，并返回最终结果。
let template = '你好，我们公司是{{ company }}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。'

let obj = {
  group: {
    name: '天猫',
    jobs: ['前端']
  },
  company: '阿里'
}

function render(template, obj) {
  const reg = /\{\{\s*(.+?)\s*\}\}/g
  return template.replace(reg, (_, $1) => {
    const val = (new Function(`return this.${$1}`)).call(obj)
    return val || ''
  })
}

// console.log(render(template, obj))