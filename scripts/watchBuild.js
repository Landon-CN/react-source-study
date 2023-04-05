/* eslint-disable strict */
const chokidar = require('chokidar');
const path = require('path')
const _ = require('lodash')
const child_process = require('child_process')


chokidar.watch(path.resolve(__dirname, '../packages/')).on('change', _.debounce((fileChange) => {
  if (fileChange.indexOf('ReactVersion.js') > -1) return
  console.log('fileChange', fileChange)


  child_process.spawn('node', [path.resolve(__dirname, './rollup/build.js')], { stdio: 'inherit' })
}, 1000));
