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
    keyword: ""
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
    }
  }
})