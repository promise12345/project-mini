// pages/index/index.js
import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      {
        good_id: "9001",
        good_url: "/assets/pic/car.jpeg",
      },
      {
        good_id: "9002",
        good_url: "/assets/pic/pig.jpg",
      },
      {
        good_id: "9003",
        good_url: "/assets/pic/dogs.jpeg",
      },
    ],
    navList: [
      {
        id: "9001",
        name: "分类",
        url: "/assets/imgs/fenlei.png"
      },
      {
        id: "9002",
        name: "秒杀",
        url: "/assets/imgs/fenlei.png"
      },
      {
        id: "9003",
        name: "超市购",
        url: "/assets/imgs/fenlei.png"
      },
      {
        id: "9003",
        name: "影院",
        url: "/assets/imgs/fenlei.png"
      }
    ],
    proList: [
      {
        floor_title: {
          id: "9001",
          name: "特色好物",
          url: "/assets/pic/h1.png"
        },
        pro_list: [
          {
            id: "9001_1",
            name: "汽车",
            url: "/assets/pic/a1.jpg"
          },
          {
            id: "9001_2",
            name: "汽车",
            url: "/assets/pic/a2.jpg"
          },
          {
            id: "9001_3",
            name: "汽车",
            url: "/assets/pic/a3.jpg"
          },
          {
            id: "9001_4",
            name: "汽车",
            url: "/assets/pic/dogs.jpeg"
          },
          {
            id: "9001_5",
            name: "汽车",
            url: "/assets/pic/car.jpeg"
          }
        ]
      },
      {
        floor_title: {
          id: "9002",
          name: "热卖单品",
          url: "/assets/pic/h2.png"
        },
        pro_list: [
          {
            id: "9002_1",
            name: "汽车",
            url: "/assets/pic/a4.jpg"
          },
          {
            id: "9002_2",
            name: "汽车",
            url: "/assets/pic/a5.jpg"
          },
          {
            id: "9002_3",
            name: "汽车",
            url: "/assets/pic/a6.jpg"
          },
          {
            id: "9002_4",
            name: "汽车",
            url: "/assets/pic/car.jpeg"
          },
          {
            id: "9002_5",
            name: "汽车",
            url: "/assets/pic/car.jpeg"
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getNavList()
    this.getProList()
  },
  getSwiperList(){
    console.log(999)
  },
  getNavList(){

  },
  getProList(){

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