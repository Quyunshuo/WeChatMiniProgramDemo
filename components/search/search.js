// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    keyword: "",
    testData: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 搜索 
     */
    search(e) {
      // 使用triggerEvent 调用使用组件绑定的监听事件 并传值过去
      this.triggerEvent('onSearcherEvent', this.data.keyword)
    },

    /**
     * input 更改文本的监听事件
     */
    setValue(e) {
      this.data.keyword = e.detail.value;
      this.setData({
        testData: this.data.keyword
      });
    }
  },

  /**
   * 生命周期
   */
  lifetimes: {

    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("attached");
    },

    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("detached");
    },
  },

  /**
   * 数据监听器（观察者模式）
   */
  observers: {
    "testData": function (data) {
      console.log("监听到数据更改:" + data);
    }
  }
})