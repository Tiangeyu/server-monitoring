let express = require('express');
let router = express.Router();
let fs = require('fs')
let path = './public/data/'


//  柱状图api
router.get('/', (req, res, next)=>{
    let type = req.query.type || ""
    // 此处处理路径问题, 需要特别 并不是通过相对路径来完成
    // 读取的时候 锁定位置自动为根目录开始
    fs.readFile(path + type + '.json', (err, data) => {
        
        if(err){
            return res.send({
                msg: "error",
                result: err
            })
        }else{
            let data1 = JSON.parse(data);
            return res.send({
                msg: "Ok",
                result: data1
            })
        }     
    })
})


module.exports = router;