const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = 3055;

// 生成 uuid 随机函数
function genSomeKey () {
    return 'filerxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 开放指定的静态资源
app.use(express.static('./node_modules/jquery/dist'));

// 路由的请求链式调用
app.route('/').get((req, res) => {
    fs.readFile('./index.html',function (err, data) {
        res.send(data.toString());
    });
        
});

app.route('/tojson.json').post( urlencodedParser,(req, res) => {
    const nowData = req.body;
    const filerName = genSomeKey ();
    fs.writeFile('./public/datajson/' + filerName + '.json',data.data,(err) => {console.log(err)})
    res.send();
}
);
app.listen(port, () => console.log(`算法Node服务运行成功！`))