// pages/updown/index.js
import {
  $attr
} from '../../utils/appUtils'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: [
      "AAAAAAAAAA", "BBBBBBBBBB", "CCCCCCCCCC", "DDDDDDDDDD"
    ],
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
   * 删除
   */
  delete(e) {
    let i = $attr(e, 'i');
    // 从数组中删除指定下标的元素及个数
    this.data.userList.splice(i, 1);
    this.setData({
      userList: this.data.userList
    })
  },

  /**
   * 上移
   */
  up(e) {
    let i = $attr(e, 'i');
    let tmp = this.data.userList[i]
    this.data.userList[i] = this.data.userList[i - 1]
    this.data.userList[i - 1] = tmp
    this.setData({
      userList: this.data.userList
    })
  },

  /**
   * 下移
   */
  down(e) {
    let i = $attr(e, 'i');
    let tmp = this.data.userList[i]
    this.data.userList[i] = this.data.userList[i + 1]
    this.data.userList[i + 1] = tmp
    this.setData({
      userList: this.data.userList
    })
  }
})