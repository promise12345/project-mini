// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  options: { // 启用插槽
    multipleSlots: true
  },
  properties: {
    titleList: {
      type:Array,
      value: []
    },
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
    handleItemTap(e){
      // console.log(e)
      let {id} = e.target.dataset
      // 父传子
      let {titleList} = this.data
      titleList.map(item => {
        item.id==id
        ? item.isActive = true
        : item.isActive = false
      })
      this.setData({
        titleList
      })
      // 子传父
      // this.triggerEvent("itemChange", {id})
    }
  }
})
