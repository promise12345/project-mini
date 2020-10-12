// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      // {
      //   id: 100,
      //   name: "急急急就尴尬看看脚后跟付费更换急急急就尴尬看看脚后跟付费更换u与国刚刚好立刻就会谓u与国刚刚好立刻就会谓",
      //   url: "/assets/pic/telev.jpg",
      //   price: 10,
      //   num: 1
      // },
      // {
      //   id: 101,
      //   name: "急急急就尴尬看看脚后跟付费更换u与国刚刚好立刻就会谓",
      //   url: "/assets/pic/telev.jpg",
      //   price: 11,
      //   num: 1
      // },
      // {
      //   id: 102,
      //   name: "急急急就尴尬看看脚后跟付费更换u与国刚刚好立刻就会谓",
      //   url: "/assets/pic/telev.jpg",
      //   price: 20,
      //   num: 1
      // }
    ],
    totalPrice: 0,
    goodNum: 0,
    allChecked: false,
    boxVisible: false,
    currentIndex: null,
    currentNum: 0,
    showDel: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeNum(e){
    // console.log(e)
    let {action} = e.target.dataset
    let {index} = e.currentTarget.dataset
    action=="plus" && this.handlePlus(index)
    action=="input" && this.handleInput(index)
    action=="add" && this.handleAdd(index)
  },
  handlePlus(index){
    let list = this.data.list
    let totalPrice = 0
    list[index].num>1 ? list[index].num-- : list[index].num=1
    list.map(v => {
      if(v.checked){
        totalPrice += v.num*v.price
      }
    })
    this.setData({
      list,
      totalPrice
    })
  },
  handleAdd(index){
    let list = this.data.list
    let totalPrice = 0
    list[index].num++
    list.map(v => {
      if(v.checked){
        totalPrice += v.num*v.price
      }
    })
    this.setData({
      list,
      totalPrice
    })
  },
  handleInput(index){
    this.setData({
      boxVisible: true,
      currentIndex: index,
      currentNum: this.data.list[index].num
    })
  },
  emitOk(prop){
    // console.log(prop);
    let { index, num} = prop.detail
    let list = this.data.list
    let totalPrice = 0

    list[index].num = num
    list.map(v => {
      if(v.checked){
        totalPrice += v.num*v.price
      }
    })
    this.setData({
      boxVisible: false,
      list,
      totalPrice
    })
  },
  onCancel() {
    this.setData({
      boxVisible: false
    })
  },
  handleItemChecked(e){
    // console.log(e)
    let {value} = e.detail
    let {index} = e.target.dataset
    let list = this.data.list
    // 价格
    let totalPrice = 0
    let goodNum = 0
    value.length ? list[index].checked=true : list[index].checked=false
    list.map(v => {
      if(v.checked){
        totalPrice += v.num*v.price
        goodNum++
      }
    })
    // 是否全选
    let allChecked = list.every(v => v.checked)
    this.setData({
      totalPrice,
      allChecked,
      goodNum
    })
  },
  handleAllChecked(e){
    let list = this.data.list
    let {value} = e.detail
    let totalPrice = 0
    let goodNum = 0
    list.map(v => {
      value.length?v.checked=true:v.checked=false
      if(v.checked){
        totalPrice += v.num*v.price
        goodNum++
      }
    })
    this.setData({
      list,
      totalPrice,
      goodNum
    })
  },
  handleManage() {
    this.setData({showDel: !this.data.showDel})
  },
  handleDel() {
    let list = this.data.list.filter(v => !v.checked)
    this.setData({list})
    wx.setStorageSync('cart', list)
    // wx.removeStorageSync("cart")
  },
  handleEmpty() {
    this.setData({list: []})
    wx.removeStorageSync("cart")
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
    let cart = wx.getStorageSync('cart')
    // console.log(cart, 'cartmmm')
    cart.map(v => {
      v.num=v.number
      v.url=v.urls[0]
    })
    this.setData({
      list: cart,
      showDel: false
    })
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