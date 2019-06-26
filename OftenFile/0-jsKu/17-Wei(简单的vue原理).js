    
    //封装一个对象Wei
    function Wei (json){
        //初始化作用域范围
        if(json.el){
            var el = document.querySelectorAll(json.el)
        }else{
            var el = document.querySelectorAll('body')
        }
        for(let i = 0 ; i<el.length ; i++){
            let html  = el[i].innerHTML;
            let data = json.data;
            for(let item in data){
                let regExpStr = new RegExp("{{"+item+"}}","gi")
                html=html.replace(regExpStr,data[item])
            }
            el[i].innerHTML= html
        }
        return this
    }
