
//css部分

// *{margin: 0;padding: 0;list-style: none;}
// .page{margin: 100px auto;color: white;
// height: 40px;width: 700px;text-align: center} 
// .page #prevPage{float: left;width: 100px;background-color: blue;
// height: 40px;line-height: 40px;font-size: 16px;text-align: center;}
// .page #nextPage{float: left;width: 100px;background-color: blue;
// height: 40px;line-height: 40px;font-size: 16px;text-align: center;
// margin-left: 10px;}
// .page #prevPage.selectd{background-color: #666;}
// .page #nextPage.selectd{background-color: #666;}
// .page #contentPage{float: left;height: 40px;}
// .page #contentPage li{width: 50px;height: 40px;line-height: 40px;font-size: 16px;
// background-color: pink;float: left;margin-left: 10px;}
// .page #contentPage li.selectd{background-color: red;}

//css部分结束


function pageChajian (idSrt,jsonArr){
    this.target = document.getElementById(idSrt)
    this.target.className='page'
    this.pageIndex=1
    this.data={
        dataAll:100,    //一共的数据
        dataEveryPage:5,  //每一页显示多少数据
        showPage:5   //显示的页码长度
    }
    for(let i in jsonArr){
        this.data[i]=jsonArr[i]
    }
    this.allPage = Math.ceil(this.data.dataAll/this.data.dataEveryPage)
    this.create()
    this.createData()
}

pageChajian.prototype.createData=function(){
    
    let start = 1
    let end = this.allPage>this.data.showPage?this.data.showPage:this.allPage
    let middle = Math.floor(this.data.showPage/2)
    
    if(this.pageIndex>middle){
        start = this.pageIndex-middle
        end = this.pageIndex+middle
    }

    if(this.pageIndex>this.allPage-middle){
        start=this.allPage-this.data.showPage+1
        end=this.allPage
    }
    start=start<1?1:start
    this.ul.innerHTML=""
    let that = this
    for(let i = start ;i<=end;i++){
        
        let li = document.createElement('li')
        if(i==this.pageIndex){
            li.className='selectd'
        }
        li.innerHTML=i;
        li.index=i;
        this.ul.appendChild(li)
        li.onclick=function(){
            that.pageIndex=this.index
            that.createData()
        }
    }
    this.span.className=""
    this.spanTwo.className=""
    if(this.pageIndex==1){
        this.span.className="selectd"
    }
    if(this.pageIndex==this.allPage){
        this.spanTwo.className="selectd"
    }

    this.span.onclick=function(){
        that.pageIndex--;
        if(that.pageIndex<1){
            that.pageIndex=1
        }
        that.createData()
    }
    this.spanTwo.onclick=function(){
        that.pageIndex++;
        if(that.pageIndex>that.allPage){
            that.pageIndex=that.allPage
        }
        that.createData()
    }

    this.data.callback(this.pageIndex)
}

pageChajian.prototype.create=function(){
    this.span = document.createElement('span')
    this.span.innerHTML='上一页'
    this.span.setAttribute('id','prevPage')
    this.target.appendChild(this.span)

    this.ul = document.createElement('ul')
    this.ul.setAttribute('id','contentPage')
    this.target.appendChild(this.ul)

    this.spanTwo = document.createElement('span')
    this.spanTwo.innerHTML='下一页'
    this.spanTwo.setAttribute('id','nextPage')
    this.target.appendChild(this.spanTwo)
}


//使用方法 随便新建一个div 设置一个id 然后new一个对象 里面传入该id即可
//第二个参数是插件参数的设置,传入一个对象即可 属性值就是对应的值
// {
//     dataAll:100,    //一共的数据
//     dataEveryPage:5,  //每一页显示多少数据
//     showPage:5   //显示的页码长度
// }
//由于我们的数据肯定是动态数据 所以我么的dataAll最好是在ajax请求到后台的数据总数量后
//传入此参数 然后里面还可以传入一个函数 callback 该函数接受一个参数 pageIndex
// 在插件内部,每次pageIndex发生改变时都会调用此函数,我们在外面写的callback接受到此参数
// 进行一些操作即可 配合后台的limit我们很容易写出分页的实际功能,后台的接口可以接受
// 两个参数,一个是我们的pageIndex 一个是我们自己定义的dataEveryPage,这样每次分页pageIndex
// 改变时,函数callback重新调用,pageIndex的改变导致后台请求的数据对应发生改变,这样既可
// 将插件与数据同步,用到生产中去





