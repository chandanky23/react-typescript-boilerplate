const webpack = require('webpack');
module.exports = function(settings) {
    const development = Object.assign({},
      {
        mode: 'development',
        devtool: 'cheap-eval-source-map',
      },
      require('./common')(settings)
    );
    console.log('\x1b[36m%s\x1b[0m', 'Building for development ...', '\x1b[0m');
    return development
}