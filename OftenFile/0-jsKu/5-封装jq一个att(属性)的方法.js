


//构造一个对象 该对象的初始属性eles为获取到的元素的集合
function GetEle (str) {
    this.eles = document.querySelectorAll(str)
}

//将该对象封装成一个函数,可以方便创建该函数的实例

function $ (str){
    return new GetEle(str)
}

//给该原型对象继承一个方法 循环每一个元素并给他们相应的操作方法each

GetEle.prototype.each=function(fn){
    for(let i =0 ;i<this.eles.length;i++){
        fn(this.eles[i])
    }
}

//给该原型继承一个方法,给取到的this.eles的每一个属性设置自定义属性(一个或多个)
//或者取到this.eles中的第一个元素的属性

GetEle.prototype.attrs=function(){
    let agmlength = arguments.length;
    let argumentsList=arguments
        if(agmlength==1){
            let zhi = argumentsList[0]
            if(typeof zhi == 'object'){
                for(let i in zhi){
                    this.each(function(item){
                        item.setAttribute(i,zhi[i]) 
                    })
                }
            }else{
                return this.eles[0].getAttribute(zhi)
            }
        }else if(agmlength==2){
            let value = argumentsList[0]
            let key = argumentsList[1]
            this.each(function(item){
                item.setAttribute(value,key)
            })   
        }
    
    
}

//使用实例 传入一个对象 给所有获取的元素设置一组属性和值
// $('span').attrs({
//     adad:'daada',
//     adskhkhaf:'adad',
//     dajha:'ada',
//     asd:'李伟'
// })

//传入一个属性,获取对应的属性值
// $('span').attrs('data-id')

//传入一个属性和一个值,设置对应的属性和值
// $('span').attrs('data-id','1')
