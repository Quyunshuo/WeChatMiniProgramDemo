import {
  BASE_URL
} from "../config/AppConfig";

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

/**
 * GET请求
 * @param {接口地址} url 
 * @param {传的值} data 
 */
export function $get(url, data) {
  return $request(url, 'GET', data);
}

/**
 * POST请求
 * @param {接口地址} url 
 * @param {传的值} data 
 */
export function $post(url, data) {
  return $request(url, 'POST', data);
}

// 普通方式
// /**
//  * 对wx.request()封装
//  * @param {接口地址} url 
//  * @param {请求方式} method 
//  * @param {回调} success 
//  */
// function $request(url, method, success) {
//   wx.showLoading({
//     title: '加载中...',
//   });
//   wx.request({
//     method,
//     url: BASE_URL + url,
//     success: res => {
//       success(res.data)
//     },
//     complete() {
//       wx.hideLoading()
//     }
//   });
// }

/**
 * 对wx.request()封装 Promise方式
 * @param {接口地址} url 
 * @param {请求方式} method 
 * @param {传的值} data 
 */
function $request(url, method, data) {
  wx.showLoading({
    title: '加载中...',
  });
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      data,
      url: url.startsWith('http') ? url : (BASE_URL + url),
      success: res => {
        resolve(res.data)
      },
      fail(e) {
        reject(e);
      },
      complete() {
        wx.hideLoading()
      }
    });
  });
}

/**
 * 将数据转为string
 * @param  {...any} args 
 */
export function $parseVars2String(...args) {
  return args.join();
}