const { exec } = require('../conf/mysql');

const { get } = require('../conf/redis');

var express = require('express');

var router = express.Router();

const {
  SuccessModel,
  ErrorModel
} = require('../model/index.js');

router.get('/', function (req, res) {
  const sql = 'select * from blogs where id = 1';
  // get('name').then(result => {
  //   res.json(new SuccessModel(result, '数据查询成功'));
  // });
  // exec(sql).then((result) => {
  //   res.json(new SuccessModel(result, '数据查询成功'));
  // });
  aa(sql, res);
});

async function aa (sql, res) {
  const name = await get('name');
  const result = await exec(sql);
  const obj = {
    result,
    name
  };
  res.json(new SuccessModel(obj, '数据查询成功'));
}

router.get('/a', function (req, res) {
  const data = {
    a: []
  };
  res.json(new ErrorModel(data, '数据查询失败', 10023));
});

router.post('/b', function (req, res) {
  console.log(req.body);
  const data = {
    a: req.body.a
  };
  res.json(new ErrorModel(data, '数据查询失败', 10025));
});

module.exports = router;
