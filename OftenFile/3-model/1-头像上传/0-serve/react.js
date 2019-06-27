const express = require('express')
const router = express.Router()

//引入数据库的模块
const {conn} = require('./ultis/db')
const {setError} = require('./ultis')


const multer = require('multer')
const storage = multer.diskStorage({
    //将上传的文件存储在指定的位置（不存在的话需要手动创建）
    destination: function (req, file, cb) {
        cb(null, './public/avatar')
    },
    //将上传的文件做名称的更改
    filename: function (req, file, cb) {
        var fileformat = (file.originalname).split('.');
        console.log(file);
        cb(null, Date.now()+file.originalname);
    }
})

//创建新的 multer对象
const upload = multer({storage:storage})
const avatarUpload = upload.any()


router.post('/uploadimg',avatarUpload,(req,res)=>{
    let imgUrl = req.files[0].path
    console.log(imgUrl)


    conn((err,db)=>{
        setError(err,res,db)
        console.log(imgUrl)
        db.collection('dingdan').insert({
            username:'lixiaobai',
            imgSrc:imgUrl
        },(err,result)=>{
            setError(err,res,db)
        })

        db.collection('dingdan').find({}).toArray((err,result)=>{
            console.log('-------------------')
            console.log(result[8])
            let imgsrc = result[8].imgSrc
            console.log(imgsrc)
            
        })
    })

    res.json({
        code:200,
        msg:'获取头像成功',
        type:1,
        result:imgUrl
    })
})


router.get('/home',(req,res)=>{
    res.json({
        code:200,
        msg:'ceshi',
        type:1
    })
})





module.exports = router