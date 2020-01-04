//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData: [
      {
        key: 0,
        depart: '上海',
        arrival: '札幌',
        departDate: '2019.10.1',
        arrivalDate: '2019.10.7',
      },
      {
        key: 1,
        depart: '杭州',
        arrival: '首尔',
        departDate: '2019.8.11',
        arrivalDate: '2019.8.13',
      }
    ],
    activeSwpierIndex: 0,
  },

  handleSwiperChange(event) {
    if (event.detail.source === 'touch') {
      this.setData({
        activeSwpierIndex: event.detail.current
      })
    }
  }
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
