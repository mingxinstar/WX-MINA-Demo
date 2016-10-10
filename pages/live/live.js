const hlsApiUrl = 'http://api.memeyule.com/public/hls_pull_url/'

Page({
    data : {
        hlsUrl : ''
    },
    handleError : (err) => {
        console.log(err);
    },
    onLoad : function (data) {
        console.log('live data: ', data)

        wx.request({
            url : `${hlsApiUrl}${data.id}`,
            success : (res) => {
                console.log(res, this);

                this.setData({
                    // hlsUrl : res.data.data
                    hlsUrl : 'http://dl.sumeme.com/mp4/wishesvideo/officalVideo.mp4'
                })
            }
        })
    }
})
