// const path = require('path');

// module.exports = {
//   chainWebpack(config) {
//     config
//       .entry('app')
//       .clear()
//       .add('./src/core/main.js')
//       .end();
//     config.resolve.alias
//       .set('~', path.join(__dirname, './src'))
//       .set('@', path.join(__dirname, './src/core'))
//       .set('#', path.join(__dirname, './src/modules'))
//   },
//   css: {
//     loaderOptions: {
//       sass: {
//         sassOptions: {
//           includePaths: [
//             path.resolve(__dirname, 'src/core/')
//           ],
//           indentedSyntax: true,
//         },
//         prependData: '@import "~@/assets/sass/main.scss"',
//       },
//     },
//   },
//   assetsDir: '@/assets/',
// }
