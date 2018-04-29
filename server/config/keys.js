if (process.env.NODE_ENV === 'production') {
  // we are in production module
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
