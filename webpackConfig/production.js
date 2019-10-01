const webpack = require('webpack')

module.exports = function(settings) {

    const production = Object.assign({}, 
      {
        mode: 'production',
      },
      require('./common')(settings)
    );

    console.log('\x1b[36m%s\x1b[0m', 'Building for production ...','\x1b[0m');

    return production
}