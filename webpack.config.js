var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'false',
  mode: 'development',
  entry: [
    './src/index'
  ],
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    // "react-router": {
    //   commonjs: "react-router",
    //   commonjs2: "react-router"
    // },
    // "react-router-dom": {
    //   commonjs: "react-router-dom",
    //   commonjs2: "react-router-dom"
    // },
    // "mobx": {
    //   commonjs: "mobx",
    //   commonjs2: "mobx",
    // },
    // "mobx-react": {
    //   commonjs: "mobx-react",
    //   commonjs2: "mobx-react",
    //   amd: "mobxReact",
    //   root: "mobxReact"
    // },
    "antd": {
      commonjs: "antd",
      commonjs2: "antd",
      amd: "antd",
      root: "antd"
    }

  },
  output: {
    path: path.join('D:/airparking/paycenter/src/main/resources/static/', 'js'),
    filename: 'bundle.js',
    publicPath: '/static/',
    
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/user/*': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        secure: false
      }
    }
  },
  externals: {
    "react": {
      "commonjs": "react",
      "commonjs2": "react",
      "amd": "React",
      "root": "React"
    },
    "react-dom": {
      "commonjs": "react-dom",
      "commonjs2": "react-dom",
      "amd": "ReactDOM",
      "root": "ReactDOM"
    },
    "antd": {
      "commonjs": "antd",
      "commonjs2": "antd",
      "amd": "antd",
      "root": "antd"
    }
  },
  module: {

    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "es2015", "react", 'stage-1',
          ],
          plugins: ['transform-decorators-legacy', 'transform-decorators']
        }
      },
      include: path.join(__dirname, 'src')

    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader'
    }]
  }
};
