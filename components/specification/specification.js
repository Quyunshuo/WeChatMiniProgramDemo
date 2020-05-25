import {
  $attr
} from "../../utils/appUtils";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 类别
    label: {
      type: String,
    },
    // 选项
    list: {
      type: Array,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 选项选中的下标
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件
    select(e) {
      this.setData({
        activeIndex: $attr(e, 'i')
      });
      // 把值传出去
      this.triggerEvent("change", this.data.activeIndex);
    }
  }
})