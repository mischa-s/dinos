const { join } = require('path')

module.exports = {
  base: require('./base'),
  debian: require('./debian'),
  zsh: require('./zsh'),
  vim: require('./vim'),
  git: require('./git'),
  dev: require('./dev'),
  web: require('./web'),
  desktop: require('./desktop'),
  document: require('./document'),
  image: require('./image'),
  draw: require('./draw'),
  '3d': require('./3d'),
  circuits: require('./circuits'),
  video: require('./video'),
  audio: require('./audio')
}
