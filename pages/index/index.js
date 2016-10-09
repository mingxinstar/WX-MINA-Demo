//index.js
//获取应用实例
var app = getApp()
const apiUrl = 'http://api.memeyule.com/public/room_recomm?size=8';

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        liveList : []
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            // wx.redirectTo({
            url: '../logs/logs'
        })
    },
    gotoLivePage : (event) => {
        console.log(event.currentTarget.dataset)
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            console.log(userInfo);
            //更新数据
            that.setData({
                userInfo:userInfo
            })
        })

        wx.request({
            url : apiUrl,
            success : (res) => {
                console.log(res);

                that.setData({
                    liveList : res.data.data
                })
            }
        })
    }
});
