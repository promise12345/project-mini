// let reqTask = wx.request({
//   url: '',
//   data: {},
//   header: {'content-type':'application/json'},
//   method: 'GET',
//   dataType: 'json',
//   responseType: 'text',
//   success: (result) => {
    
//   },
//   fail: () => {},
//   complete: () => {}
// });
let baseUrl = "https://api.douban.com"
export const request = (reqUrl, data, method="get")=>{
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + reqUrl,
      method,
      data,
      success:(result) => {
        resolve(result)
      },
      fail:(err) => {
        reject(err)
      }
    })
  })
}

  