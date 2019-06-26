
    function GetEle (str){
        if(typeof str == 'object'){
            this.eles = [str]
        }else{
            this.eles = document.querySelectorAll(str)
            this.bindIndex()
        }
    }

    GetEle.prototype.each = function(fn){
        for(let i =0;i<this.eles.length;i++){
            fn(this.eles[i])
        }
    }

    GetEle.prototype.bindIndex = function(){
        for(let i =0;i<this.eles.length;i++){
            this.eles[i].index=i
        }
    }

    GetEle.prototype.eq = function(index){
        this.eleList = this.eles //由于query获取的集合是死集合,所以这里相当于复制一份,后面该了也不影响已经复制的集合
        this.eles = [this.eles[index]]
        return this
    }

    GetEle.prototype.siblings = function(){
        var  that =  this 
        var list = Array.from(this.eleList).filter(function(item){
            return item != that.eles[0]
        })
        this.eles = list
        return this
    }

    GetEle.prototype.index = function(){
        return this.eles[0].index
    }



    //总结 该方法的几个重点
    //1 在封装index方法的时候 如果我们想取每个元素的index 那么我们必须在对象建立
    //实例初期就将index赋值于元素,所以我们需要另外封装一个建立Index的函数 为bindindex
    //该函数里面有个循环来给每个元素自定义数据属性index 就相当于下标了

    //2 在封装eq方法的时候 我们为了让该方法使用后还能继续使用对象的其他方法,我们必须
    //return this 并让this.eles变为当前元素 而且这个元素是装在集合中的,因为后面的方法都是
    //集合操作(each)

    //3 在封装sibling方法时,由于该方法一定是在eq使用后才会使用(逻辑关系,找兄弟节点之前一定要指定一个节点)
    //而由于eq使用后 我们的this.eles变为一个元素勒 所以我们不好找到该元素的兄弟节点,
    //故我们在封装eq方法的时候可以将this.eles先保存出来 然后再将其设置为那一个元素,
    //这样我们在sibling中就只需要将我们保存的集合拿出来,去掉那一个元素就是这个元素的兄弟
    //节点集合了 注:里面有一个that的灵活应用,可以看代码理解

    





    