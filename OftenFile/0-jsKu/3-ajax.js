const $ = {
    ajax:function(json){
        let xhr = new XMLHttpRequest();
        let url = json.url;
        if(json.data){
            url+='?';
            for(let i in json.data){
                url+=i+'='+json.data[i]+'&'
            };
        }
        xhr.open(json.type,url,true);
        xhr.send()
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                let result = xhr.responseText;
                if(json.jparse){
                    result=JSON.parse(result)
                }
                json.success(result)
            }
        }
    }
}

//调用方法
// $.ajax({
//     type:'get', //请求方式
//     url:'denglu.php', //请求的路径
//     data:{ //请求的参数和参数值
//         userName:'waier', 
//         userPwd:'1234'
//     },
//     jparse:'json', //请求的结果是否使用JSON解析
//     success:function(data){ //操作请求结果的函数 ,函数内部自己写.
//         console.log(data)
//     }
// })
