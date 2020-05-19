// pages/store/store.js
import {
  $attr,
  $get
} from '../../utils/appUtils.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeType: 1,
    typelist: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // Promise方式
    // this.getTypeListPromise();

    // Async方式
    this.getTypeListAsync();
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
   * 采用async await 方式请求
   */
  async getTypeListAsync() {
    let {
      typelist
    } = await $get('/typelist');
    this.setData({
      typelist
    });
  },

  /**
   * 普通Promise方式请求
   */
  getTypeListPromise() {
    $get('/typelist').then(({
      typelist
    }) => {
      this.setData({
        typelist
      });
    });
  },

  /**
   * 栏目选中事件
   */
  selectMenu(e) {
    this.setData({
      activeType: parseInt($attr(e, 'type')),
    });
  },
})