// /**
//  * 查询
//  * @param {*} e 
//  * @param {*} key 
//  */
// function $attr(e, key) {
//   return e.currentTarget.dataset[key];
// }

// /**
//  * 对Toast封装
//  * @param {内容} title 
//  * @param {图标} icon 
//  * @param {时间} duration 
//  */
// function $toast(title, icon, duration) {
//   return wx.showToast({
//     title: title,
//     icon: icon,
//     duration: duration
//   })
// }

// module.exports = {
//   $attr,
//   $toast,
// }

/**
 * ES6写法
 */
/**
 * 查询
 * @param {*} e 
 * @param {*} key 
 */
export function $attr(e, key) {
  return e.currentTarget.dataset[key];
}

/**
 * 对Toast封装
 * @param {内容} title 
 * @param {图标} icon 
 * @param {时间} duration 
 */
export function $toast(title, icon, duration) {
  return wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  })
}