// pages/trucks/trucks.js
// let {
//   $attr
// } = require('../../utils/appUtils.js')
// let {
//   $toast
// } = require('../../utils/appUtils.js')
/**
 * ES6写法
 */
import {
  $attr,
  $toast
} from '../../utils/appUtils.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 总价
    totalPrice: 0,
    // 是否是全选
    isSelectAll: false,
    // 商品列表
    commoditys: [{
      id: "1", // id
      name: "LV", // name
      specification: "进口", // 规格
      univalence: 200000, // 价格
      quantity: 0, // 购买数量
      selected: false, // 选中
    }, {
      id: "2",
      name: "Apple",
      specification: "进口",
      univalence: 18999,
      quantity: 0,
      selected: false,
    }, {
      id: "3",
      name: "XIAOMI",
      specification: "国产",
      univalence: 3999,
      quantity: 0,
      selected: false,
    }, {
      id: "4",
      name: "NIKE",
      specification: "进口",
      univalence: 999,
      quantity: 0,
      selected: false,
    }, {
      id: "5",
      name: "LiNing",
      specification: "国产",
      univalence: 899,
      quantity: 0,
      selected: false,
    }, {
      id: "6",
      name: "LOL",
      specification: "进口",
      univalence: 199,
      quantity: 0,
      selected: false,
    }, {
      id: "7",
      name: "CSGO",
      specification: "进口",
      univalence: 10,
      quantity: 0,
      selected: false,
    }, ],
    // 选中icon
    selected: "../../assets/icons/icon_selected.png",
    // 未选中icon
    unselected: "../../assets/icons/icon_unselected.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calcTotalPrice();
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
   * 计算总价
   */
  calcTotalPrice() {
    let money = 0;
    this.data.commoditys.forEach(r => {
      if (r.selected) {
        money += r.univalence * r.quantity;
      }
    });

    this.setData({
      totalPrice: money
    });
  },

  /**
   * 数量减少
   * @param {*} e 
   */
  count_jian(e) {
    let id = $attr(e, "id");
    let commodity = this.data.commoditys.find(function (item) {
      return item.id === id
    });
    if (commodity.quantity > 0) {
      --commodity.quantity;
      this.setData({
        commoditys: this.data.commoditys
      });
      this.calcTotalPrice();
    }
  },

  /**
   * 数量添加
   * @param {*} e 
   */
  count_add(e) {
    let id = $attr(e, "id");
    let commodity = this.data.commoditys.find(function (item) {
      return item.id === id
    });
    ++commodity.quantity;
    this.setData({
      commoditys: this.data.commoditys
    });
    this.calcTotalPrice();
  },

  /**
   * 选中 & 取消选中
   * @param {*} e  
   */
  select(e) {
    let id = $attr(e, "id");
    let commodity = this.data.commoditys.find(function (item) {
      return item.id === id
    });
    commodity.selected = !commodity.selected;

    let isSelectAll = this.data.commoditys.every(r => r.selected);

    this.setData({
      commoditys: this.data.commoditys,
      isSelectAll
    });
    this.calcTotalPrice();
  },

  /**
   * 全选
   */
  selectAll() {
    this.data.isSelectAll = !this.data.isSelectAll;

    this.data.commoditys.forEach(r => {
      r.selected = this.data.isSelectAll;
    });
    this.setData({
      commoditys: this.data.commoditys,
      isSelectAll: this.data.isSelectAll,
    });
    this.calcTotalPrice();
  },
  /**
   * 结账
   */
  settleAccounts() {
    let it = this;
    // 是否选购了商品
    let isChoose = false;
    // 遍历商品数据
    this.data.commoditys.forEach(r => {
      // 是否选中
      if (r.selected) {
        // 选中的商品是否数量大于0
        if (r.quantity > 0) {
          isChoose = true;
        }
      }
    });
    if (isChoose) {
      // 提示对话框
      wx.showModal({
        title: "结算",
        content: "您的消费总额为: " + it.data.totalPrice,
        cancelColor: '#777777',
        confirmColor: '#96CDE8',
        // 显示成功的回调
        success(res) {
          if (res.confirm) {
            $toast("结算成功", "success", 2000);
          } else if (res.cancel) {
            $toast("已取消", "none", 2000);
          }
        },
      })
    } else {
      $toast("未选购商品", "none", 2000);
    }
  }
})