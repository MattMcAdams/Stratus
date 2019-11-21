var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, '_stratus.spec.scss');
sassTrue.runSass(
  {
    file: sassFile,
  },
  {
    sass: require('sass'),
    describe,
    it,
  }
);
