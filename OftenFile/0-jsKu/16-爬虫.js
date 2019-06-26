const url = "http://www.mobiletrain.org/teacher/";
const fs = require('fs')
var fileWriteStream = fs.createWriteStream("data-3.json",{encoding:"utf8"})


const http = require('http');
const query= require('querystring')
const cheerio = require('cheerio')
const hostname ="localhost"
const port = 3500

http.get(url,(res)=>{
    console.log(res.statusCode)
    console.log(query.stringify(res.headers))
    res.setEncoding('utf8')
    var html =""
    var count = 0 ;

    res.on('data',(chunk)=>{
        html+=chunk;
        count++
        
    })

    

    let List = []
    res.on('end',()=>{

        var $ = cheerio.load(html)
        var teacher = $('.clear li')
        
        teacher.each((index,value)=>{

            let teacherName = $(value).find('h6').text()
            let teacherJianjie = $(value).find('h3').text()
            let teacherImg = $(value).find('img').attr('src')
            let teacherJieShao = $(value).find('.jieshao').text()
            
            
            let obj = {
                teacherName,
                teacherInfo:{
                    teacherJianjie,
                    teacherImg,
                    teacherJieShao
                }
            }
            // console.log(obj)

            List.push(obj)
            

        })
        //console.log(List)
        initServer(List)

      

    })


    res.on('error',()=>{
        console.log('获取数据失败')
    })


    function initServer(data){
        http.createServer((req,res)=>{
            
                res.writeHead(200,{'content-Type':'application/json'});
                data=JSON.stringify(data)
                res.write(data);
                res.end()
                
            
        }).listen(port,hostname,()=>{
    
        })
    }

})



