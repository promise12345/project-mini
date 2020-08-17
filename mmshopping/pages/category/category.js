import myData from "./comp/data.js"

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContent: [],
    currentIndex: 0,
    scrollTop: 0
  },
  sortList: myData.sortList,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const Cates = wx.getStorageSync("cates")
    this.getCates()
  },
  getCates(){
    // wx.setStorageSync("cates", {time: Date.now(),data: myData.sortList})
    let leftMenuList = this.sortList.map(v => v.menu)
    let rightContent = this.sortList[0].children
    this.setData({
      leftMenuList,
      rightContent
    })
  },
  clickMenu(e){
    // console.log(e)
    let rightContent = this.sortList[e.currentTarget.dataset.index].children
    this.setData({
      currentIndex: e.currentTarget.dataset.index,
      rightContent,
      scrollTop: 0
    })
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
    console.log(myData)
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