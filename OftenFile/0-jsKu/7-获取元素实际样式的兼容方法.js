function getAttribute (obj,att){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[att]
    }else{
        return obj.currentStyle[att]
    }
}

//传入第一个参数为元素  第二个参数为该元素的属性  即可得到返回的属性值