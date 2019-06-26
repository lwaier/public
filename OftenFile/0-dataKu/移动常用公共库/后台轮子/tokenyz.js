
module.exports = function (req,res,next){
        let sToken = req.session.token; //服务器端token
        let bToken = req.headers.token; //浏览器端token

        if(bToken){
            if(sToken){
                if(sToken==bToken){
                    next()
                }else{
                    res.json({
                        code:401,
                        msg:'token不正确,需要重新登录得到token',
                        type:0
                    })
                }
            }else{
                res.json({
                    code:401,
                    msg:'服务器端没有token,需要重新登录得到token',
                    type:0
                })
            }
        }else{
            res.json({
                code:401,
                msg:'浏览器端没有token,需要重新登录得到token',
                type:0
            })
        }

    }