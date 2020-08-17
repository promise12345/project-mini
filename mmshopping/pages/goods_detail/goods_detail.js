Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodData: {
      id: 104,
      name: "海信电视，HS10986754，还是代理号挥洒UI会啊US哈UI",
      price: 100,
      intro: "50英寸 1980x900 内存：4G，内核：8核，哪家酒店开呼呼呼会有胡",
      urls: ["/assets/pic/telev.jpg","/assets/pic/bao.jpg", "/assets/pic/pig.jpg", "/assets/pic/bing.png"]
    },
    // list:[
    //   {
    //     id: 100,
    //     name: "海信电视，HS10986754，还是代理号挥洒UI会啊US哈UI",
    //     price: 100,
    //     intro: "50英寸 1980x900 内存：4G，内核：8核，哪家酒店开呼呼呼会有胡",
    //     urls: ["/assets/pic/telev.jpg","/assets/pic/bao.jpg", "/assets/pic/pig.jpg", "/assets/pic/bing.png"]
    //   }
    // ],
    saveSrc: "/assets/imgs/shoucang.png",
    saveText: "收藏"
  },
  saveFlag: false,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {goods_id} = options
  },
  // 收藏
  handleSave(){
      this.saveFlag = !this.saveFlag
      this.saveFlag
      ? this.setData({saveSrc: "/assets/imgs/_shoucang.png", saveText: "已收藏"})
      : this.setData({saveSrc: "/assets/imgs/shoucang.png", saveText: "收藏"})
  },
  // 预览图片
  handlePreview(e){
    let {index} = e.currentTarget.dataset
    let urls = ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2358852319,3909041418&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2557547963,3527202789&fm=26&gp=0.jpg"]
    wx.previewImage({
      current: urls[index], // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  // 加入购物车
  addToCart(){
    let cart = wx.getStorageSync('cart') || []
    let index = cart.findIndex(item => item.id == this.data.goodData.id)
    if(index == -1){
      this.data.goodData.number = 1
      cart.push(this.data.goodData)
    }else {
      cart[index].number++
    }
    wx.setStorageSync("cart", cart)
    wx.showToast({
      title: '加入成功',
      icon: 'success'
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