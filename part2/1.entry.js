
//三种写法
module.exports = {
  entry: 'index.js'
}

module.exports = {
  entry: {
    index: 'index.js',
    vendor: 'vendor.js'
  }
}

module.exports = {
  entry: ['index.js', 'vendor.js']
}


