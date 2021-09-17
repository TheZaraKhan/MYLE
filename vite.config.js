// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'pages/login/index.html'),
        signup1: resolve(__dirname, 'pages/signup1/index.html'),
        signup2: resolve(__dirname, 'pages/signup2/index.html'),
        signup3: resolve(__dirname, 'pages/signup3/index.html'),
        signup4: resolve(__dirname, 'pages/signup4/index.html'),
        explore_a: resolve(__dirname, 'pages/explore_a/index.html'),
        explore_b: resolve(__dirname, 'pages/explore_b/index.html'),  
        My_Activities_Cell: resolve(__dirname, 'pages/My_Activities_Cell/index.html'), 
      }
    }
  }
}

