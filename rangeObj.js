
var range = require('./range');


module.exports = function (length) {

  //console.log("length", range(length));
  return range(length).reduce(function(prev, current) {
    //console.log("prev", prev);
    //console.log("current", current);
    prev[current] = current;
    console.log('prev', prev);
    return prev;
  }, {});
};

