// pages/girls/girls.js
import {
  $attr
} from "../../utils/appUtils";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    girls: {
      1001: {
        imgurl: [
          "https://gank.io/images/d6bba8cf5b8c40f9ad229844475e9149",
          "https://gank.io/images/02eb8ca3297f4931ab64b7ebd7b5b89c",
          "https://gank.io/images/31f92f7845f34f05bc10779a468c3c13",
        ]
      },
      1002: {
        imgurl: [
          "https://gank.io/images/e56da642238a43c4971f12d4e3395f30",
          "https://gank.io/images/3e4423173d0a4c5e8447c0335b4458fc",
          "https://gank.io/images/1af9d69bc60242d7aa2e53125a4586ad",
        ]
      },
      1003: {
        imgurl: [
          "https://gank.io/images/50e3dd62dd9e4b0db957b3c5e296d6b1",
          "https://gank.io/images/6b2efa591564475fb8bc32291fb0007c",
          "https://gank.io/images/9fa43020cf724c69842eec3e13f6d21c",
        ]
      },
      1004: {
        imgurl: [
          "https://gank.io/images/d237f507bf1946d2b0976e581f8aab9b",
          "https://gank.io/images/25d3e3db2c1248bb917c09dc4f50a46f",
          "https://gank.io/images/19c99c447e0a40a6b3ff89951957cfb1",
        ]
      },
      1005: {
        imgurl: [
          "https://gank.io/images/f0c192e3e335400db8a709a07a891b2e",
          "https://gank.io/images/bdb35e4b3c0045c799cc7a494a3db3e0",
          "https://gank.io/images/92989b6a707b44dfb1c734e8d53d39a2",
        ]
      },
      1006: {
        imgurl: [
          "https://gank.io/images/6e57b254da79416bbe58248b570ea85f",
          "https://gank.io/images/e92911f5ff9446d5a899b652b1934b93",
          "https://gank.io/images/5fe5b1e9168d4a8a8f6f4e0acefef8f5",
        ]
      },
      1007: {
        imgurl: [
          "https://gank.io/images/291ee91a554f4cd88bf9a09a9fa2e95e",
          "https://gank.io/images/0f536c69ada247429b8a9e38d3dba8bb",
          "https://gank.io/images/2c924db2a1b84c5d8fdb9f8c5f6d1b71",
        ]
      },
      1008: {
        imgurl: [
          "https://gank.io/images/5a29ab0fc093408c82febe7c7e42e156",
          "https://gank.io/images/a2d3115b8d464d93933e79e88af03580",
          "https://gank.io/images/e941fa5d2cfb4a8297128178c371908c",
        ]
      },
    },

    bannerlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let bannerlist = this.data.girls[options.girlid].imgurl
    this.setData({
      bannerlist
    });
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
   * 查看大图
   * @param {url} params 
   */
  preview: function (params) {
    wx.previewImage({
      urls: this.data.bannerlist,
      current: $attr(params, 'src'),
    })
  }
})