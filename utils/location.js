import {
  TENCENT_MAP_KEY
} from '../config/AppConfig'
import {
  $parseVars2String,
  $get
} from '../utils/appUtils'

/**
 * 对 wx.getLocation() 封装
 * 获取位置信息并返回经纬度
 */
export function $getLocatio() {
  return new Promise((resolve, reject) => {
    // wx.getLocation会要求获取位置权限
    wx.getLocation({
      // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      type: 'gcj02',
      // 是否获取高度信息 获取高度需要较高精确度 会减慢接口返回速度
      altitude: 'false',
      // 直接对返回的数据进行解构 解构时使用了js的别名 先对数据进行解构 解构出指定的变量 然后把这个变量赋值给别名的变量
      success: ({
        longitude: lg,
        latitude: la
      }) => {
        /**
         * 返回结果示例
         * accuracy: 65 位置的精确度
         * altitude: 0 高度，单位 m
         * errMsg: "getLocation:ok"
         * horizontalAccuracy: 65 水平精度，单位 m
         * latitude: 36.65118 纬度，范围为 -90~90，负数表示南纬
         * longitude: 116.99744 经度，范围为 -180~180，负数表示西经
         * speed: -1 速度，单位 m/s
         * verticalAccuracy: 65 垂直精度，单位 m（Android 无法获取，返回 0）
         */
        resolve({
          la,
          lg
        });
      }
    });
  });
}

/**
 * 使用腾讯地图api将经纬度转换为地址
 * @param {经度} la 
 * @param {纬度} lg 
 */
export function $convertLocation2Address(la, lg) {
  return new Promise(async (resolve, reject) => {
    let res = await $get(
      'https://apis.map.qq.com/ws/geocoder/v1', {
        location: $parseVars2String(la, lg),
        key: TENCENT_MAP_KEY,
      }
    )
    resolve(res);
  });
}

/**
 * 使用腾讯地图api将地址转换为经纬度
 * @param {地址} address 
 */
export function $convertAddress2Location(address) {
  return new Promise(async (resolve, reject) => {
    let res = await $get(
      'https://apis.map.qq.com/ws/geocoder/v1', {
        address: address,
        key: TENCENT_MAP_KEY,
      }
    )
    resolve(res);
  });
}