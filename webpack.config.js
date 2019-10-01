const path = require('path')
const env = process.env.NODE_ENV;

const settings = {
  BUILD_DIR: path.resolve(__dirname, 'dist'),
  APP_DIR: path.resolve(__dirname,'src')
}

console.log('\x1b[36m%s\x1b[0m',"App directory: ", settings.APP_DIR,'\x1b[0m');
console.log( '\x1b[36m%s\x1b[0m',"Build target: ", settings.BUILD_DIR,'\x1b[0m');

module.exports = function() {
  if(['development', 'production'].includes(env)) {
    return require(`./webpackConfig/${env}`)(settings)
  } else {
    console.log('\x1b[36m%s\x1b[0m', "wrong webpack build parameter. please choose between `development` or `production` .",  '\x1b[0m');
  }
}