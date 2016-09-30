Page({
  data:{
    logs : []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var tmpLogs = wx.getStorageSync('logs') || [];

    console.log(tmpLogs);

    this.setData({
        logs : tmpLogs.map(log => {
            return new Date(log).toLocaleDateString();
        })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})