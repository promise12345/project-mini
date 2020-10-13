// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 100,
        shopName: 'xxx化妆品旗舰店',
        name: "电视",
        price: 100,
        intro: "50英寸 1980x900 内存：4G，内核：8核，会有胡",
        url: "/assets/pic/telev.jpg",
        num: 1
      },
      {
        id: 101,
        name: "电饭煲",
        shopName: 'xxx海外旗舰店',
        price: 100,
        intro: "50英寸 1980x900 内存：4G，内核：8核，哪家酒",
        url: "/assets/pic/bao.jpg",
        num: 2
      },
    ],
    totalPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let totalPrice = 0
    this.data.list.map(v => {
      totalPrice += v.price*v.num
    })
    this.setData({
      totalPrice
    })
  },
  /**
   * @param {}
   */
  handlePay(){
    const token = wx.getStorageSync('token');
    if(!token){
      wx.navigateTo({
        url: '/pages/auth/auth',
      });
      return
    }
    console.log('已存在token')
    wx.requestPayment({
      timeStamp: Date.now(),
      nonceStr: 'U6tYjNdYvm3ReKgi',
      package: 'prepay_id=wx09182118356902a15c8b8d071931343000',
      signType: 'MD5',
      paySign: 'C514E29387794F84004C983AFFF4707F',
      success: (result) => {
        console.log(result)
      },
    });
      
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