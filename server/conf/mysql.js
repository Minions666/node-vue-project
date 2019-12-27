const mysql = require('mysql');
const {
  MYSQL_CONF
} = require('./db');

// 创建mysql连接对象
const con = mysql.createConnection(MYSQL_CONF);
// 创建连接
con.connect();

function exec (sql) {
  console.log('sql=', sql);
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}

module.exports = {
  exec
};
