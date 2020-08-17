// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id: 100,
        name: "急急急就尴尬看看脚后跟付费更换急急急就尴尬看看脚后跟付费更换u与国刚刚好立刻就会谓u与国刚刚好立刻就会谓",
        url: "/assets/pic/telev.jpg",
        price: 998,
        num: 1
      },
      {
        id: 101,
        name: "急急急就尴尬看看脚后跟付费更换u与国刚刚好立刻就会谓",
        url: "/assets/pic/telev.jpg",
        price: 998,
        num: 1
      },
      {
        id: 102,
        name: "急急急就尴尬看看脚后跟付费更换u与国刚刚好立刻就会谓",
        url: "/assets/pic/telev.jpg",
        price: 2330,
        num: 1
      }
    ]
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
    list[index].num>1 ? list[index].num-- : list[index].num=1
    this.setData({
      list
    })
  },
  handleAdd(index){
    let list = this.data.list
    list[index].num++
    this.setData({
      list
    })
  },
  handleInput(index){},
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