// pages/airship/airship.js
Page({
  /**
   * 设置导航条的选中位置
   */
  setTabIndex(e) {
    let activeIndex = parseInt(e.currentTarget.dataset.i);
    this.setData({
      activeIndex
    });
  },

  closeShadow() {
    this.setData({
      isShowShadow: false
    })
  },

  count_jian() {
    if (this.data.conuter > 0) {
      this.setData({
        conuter: this.data.conuter - 1
      })
    }
  },
  count_add() {
    this.setData({
      conuter: this.data.conuter + 1
    })
  },

  /**
   * 扫一扫
   */
  scancode() {
    wx.scanCode({
      complete: (res) => {
        wx.navigateTo({
          url: '../detail/detail?id=' + res.result,
        })
      },
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    userList: ["Android", "前端", "ios"],
    activeIndex: 0,
    isShowShadow: true,
    conuter: 0,
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

  }
})