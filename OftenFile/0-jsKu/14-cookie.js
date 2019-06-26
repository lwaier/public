function setCookie (value,key,days,path="/"){
    var date = new Date()
    date.setDate(date.getDate()+days)
    document.cookie=value+'='+key+';expires='+date+';path='+path
}

function getCookie (value){
    let valueKey=null
    let cookieShi = document.cookie
    if(cookieShi){
        let cookieArr = cookieShi.split('; ')
        for(let i = 0 ;i<cookieArr.length;i++){
            let item =cookieArr[i]
            let valueShi = item.split('=')[0]
            let valueKey = item.split('=')[1]
            if(value==valueShi){
                return valueKey
            }
        }
        return ""
    }else{
        return ""
    }
}