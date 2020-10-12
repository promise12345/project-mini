// components/compModal/compModal.js
Component({
  /**
   * 组件的属性列表
   */
  options: { // 启用插槽
    multipleSlots: true
  },
  properties: {
    modalVisible: Boolean,
    modalTitle: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleOk(){
      this.triggerEvent('onConfirm')
    },
    handleCancel() {
      this.triggerEvent('onCancel')
    }
  }
})
