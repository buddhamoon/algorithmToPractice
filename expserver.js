const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = 3055;

function genSomeKey () {
    return 'filerxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

app.use(express.static('./node_modules/jquery/dist'))

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/tojson.json',urlencodedParser,(req, res) => {

    const data = req.body;
    console.info(data);
    const filerName = genSomeKey ();
    fs.writeFile('./public/datajson/' + filerName + '.json',data.data,(err) => {console.log(err)})
    res.send('ok');
}
);
app.listen(port, () => console.log(`算法Node服务运行成功！`))