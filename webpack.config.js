const {resolve} = require('path');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src'),
  plugins: [
    new WatchMissingNodeModulesPlugin(resolve(__dirname, 'node_modules')),
  ],
}
