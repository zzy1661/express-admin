var express = require('express');
var querystring = require('querystring');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var data = ' ';
    req.on('data', function (chunk) {
        // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
        data += chunk;
    });
    req.on('end', function () {

        //（1）.对url进行解码（url会对中文进行编码）
        data = decodeURI(data); 
        console.log(data); //{username}

        /**post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象 */

        //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
        //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
        var dataObject = querystring.parse(data);
        console.log(dataObject);
    });
});

module.exports = router;
