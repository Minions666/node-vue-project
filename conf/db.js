let MYSQL_CONF = {};
let REDIS_CONF = {};

MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'yang6606472125',
  port: '3306',
  database: 'new_blog'
};

REDIS_CONF = {
  port: '6379',
  host: '127.0.0.1'
};

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
};
