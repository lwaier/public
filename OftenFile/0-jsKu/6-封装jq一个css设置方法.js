function GetEle (str){
    this.eles = document.querySelectorAll(str)
}

function $ (str){
    return new GetEle(str)
}

GetEle.prototype.each=function(fn){
    for(let i =0 ;i<this.eles.length;i++){
        fn(this.eles[i])
    }
}

GetEle.prototype.css = function (){
    let args = arguments.length;
    let argList = arguments;
    if(args==1){
        let value = argList[0]
        if(typeof value == 'object'){
            for(var i in value){
                this.each(function(item){
                    item.style[i]=value[i]
                })
            }
        }else{
            return getAttribute(this.eles[0],value)
        }
    }else if(args==2){
        let value = argList[0];
        let key = argList[1];
        this.each(function(item){
            item.style[value]=key
        })
    }
}

function getAttribute (obj,att){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[att]
    }else{
        return obj.currentStyle[att]
    }
}

//使用实例 传入一个对象 给所有获取的元素设置一组属性和值
// $('span').css({
//     color:'red',
//     fontSize:'100px',
//     textAlign:'center',
// })

//传入一个属性,获取对应的属性值
// $('span').css('width')

//传入一个属性和一个值,设置对应的属性和值
// $('span').css('color','red')