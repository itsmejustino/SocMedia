const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socMedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;