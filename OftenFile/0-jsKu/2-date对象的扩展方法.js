Date.prototype.MonthMaxDateNow=function(){
    var MonthMaxDate = new Date('2019-1-1')
    MonthMaxDate.setFullYear(this.getFullYear())
    MonthMaxDate.setMonth(this.getMonth()+1)
    MonthMaxDate.setDate(0)
    return MonthMaxDate.getDate()
}

Date.prototype.MonthFirstDateWeek=function(){
    var MonthFirstDate = new Date('2019-1-1')
    MonthFirstDate.setFullYear(this.getFullYear())
    MonthFirstDate.setMonth(this.getMonth())
    MonthFirstDate.setDate(1)
    var xingQi=['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
    return xingQi[MonthFirstDate.getDay()]
}

Date.prototype.MonthMaxDateLast=function(){
    var MonthMaxDate = new Date('2019-1-1')
    MonthMaxDate.setFullYear(this.getFullYear())
    MonthMaxDate.setMonth(this.getMonth())
    MonthMaxDate.setDate(0)
    return MonthMaxDate.getDate()
}