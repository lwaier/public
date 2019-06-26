
//兼容ie8
//添加事件

function addEvtFn (obj,type,fn,flag=false){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,flag)
    }else{
        obj.attachEvent('on'+type,fn)
    }
}

//移出事件
function removEvtFn (obj,type,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn)
    }else{
        obj.detachEvent('on'+type,fn)
    }
}