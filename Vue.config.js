/*
 * @Author: your name
 * @Date: 2020-07-30 17:43:52
 * @LastEditTime: 2020-07-30 18:06:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\Vue.config.js
 */ 
const path = require('path')

// module.exports = {
// module:{
// rules:[
//   {
//     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//     loader: 'url-loader',
//     options: {
//         limit: 10000,
//         name: 'img/[name].[hash:7].[ext]'
//     }
// },
// ]
// }
// }

// module.exports = {
//   // module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192
//             }
//           }
//         ]
//       }
//     ]
//  // }
// }
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}