var express = require('express'); //导入express

var config = require('./config/index'); //导入index.js(里面有很多配置)

var port = process.env.PORT || config.build.port; //初始化端口,端口在index.js配置

var app = express()

var appData = require('./data.json');
var seller =appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;
var apiRoutes = express.Router();
apiRoutes.get('/goods',function(req, res){
  "use strict";
  res.json({
    erron:0,  //根据业务方提供错误码
    data:goods
  })
});
apiRoutes.get('/seller',function(req, res){
  "use strict";
  res.json({
    erron:0,  //根据业务方提供错误码
    data:seller

  });

});
apiRoutes.get('/ratings',function(req, res){
  "use strict";
  res.json({
    erron:0,  //根据业务方提供错误码
    data:ratings

  });

});
app.use('/api', apiRoutes);
app.use(express.static('./dist')); //使用./dist作为web目录,所以能够找到.dist/index.html

module.exports = app.listen(port, function (err) { //启动监听
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
