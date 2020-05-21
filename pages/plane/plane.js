// pages/plane/plane.js

import {
  $parseVars2String
} from '../../utils/appUtils.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userLocation: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取当前的位置
   */
  getLocation() {
    // wx.getLocation会要求获取位置权限
    wx.getLocation({
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
        this.setData({
          userLocation: $parseVars2String(lg, la)
        });
      }
    })
  }
})