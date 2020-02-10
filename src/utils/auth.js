// 提供了用户信息（token）操作相关函数
// 是用了sessionStorage存储用户信息
// 约定：
// key是 toutiao-pc
// value是json字符串
const KEY = 'toutiao-pc'
// 存储用户信息
const setUser = (user) => {
  window.sessionStorage.setItem(KEY, JSON.stringify(user))
}
// 获取用户信息
const getUser = ()=>{
  // 考虑：有可能之前未存储过用户信息，获取到的值null
  // 返回：最好是对象，需要转换成对象，所以如果没有获取到值，默认是一个{}即可
  return JSON.parse(window.sessionStorage.getItem(KEY)||'{}')
}
const delUser = () => {
  window.sessionStorage.removeItem(KEY)
}
export default {
  setUser,
  getUser,
  delUser
}