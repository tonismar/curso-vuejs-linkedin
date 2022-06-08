const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:9000'
  },
})
/*
module.exports = {
  devServer: {
    proxy: 'http://localhost:9000'
  },
}*/