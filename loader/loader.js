const loaderUtils = require('loader-utils');
module.exports = function(source) {
    // console.log(source);
    // console.log("======================")
    // console.log(this);
    // console.log("====================")
    // const options = loaderUtils.getOptions(this);
    // console.log(options);
    // return source; 
    console.log(source)
    console.log("==========")
    console.log(sourceMaps)
    this.callback(null, source, sourceMaps);
    return
} 