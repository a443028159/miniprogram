// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {id:1,name:"a"},
      {id:2,name:"b"},
      {id:3,name:"c"},
    ],
    count:0,
    items:[]
  },
  add(){
    this.setData({
      count: this.data.count+1
    })
  },
  sub(){
    this.setData({
      count:this.data.count - 1
    })
  },
  getInfo(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://wangk.wang/data',
      success: (res) => {
        console.log(res)
        this.setData({
          items: res.data
        })
      }
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

  },
  onPageScroll(obj) {
    console.log(obj)
  },
  onPullDownRefresh(){
    console.log("页面下拉了")
  }
})