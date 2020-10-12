// pages/cart/components/111/inputBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex: Number,
    defaultNum: Number,
    boxVisible: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    newNum: 0
  },
  ready() {
    this.setData({
      newNum: this.data.defaultNum
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleBlur(e){
      const reg = /^[1-9]\d*$/
      const val = e.detail.value
      // console.log(val, 'val')
      reg.test(val)
      ? this.setData({
        newNum: val
      })
      : null
    },
    handleOk(){
      // console.log('ok')
      const index = this.data.currentIndex
      const num = this.data.newNum
      this.triggerEvent('emitOk', {index, num})
    },
    handleCancel() {
      // console.log('cancel')
      this.triggerEvent('onCancel')
    }
  }
})