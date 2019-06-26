   //获取调用的日期当月有多少天
   Date.prototype.getMonthDays = function () {
       var tempDate = new Date("2000-1-1");
       tempDate.setFullYear(this.getFullYear());
       tempDate.setMonth(this.getMonth() + 1);
       tempDate.setDate(0);
       return tempDate.getDate();
   }

   //获取该日期的第一天是星期几
   Date.prototype.getMonthFirstDayWeek = function () {
       var tempDate = new Date("2000-1-1");
       tempDate.setFullYear(this.getFullYear());
       tempDate.setMonth(this.getMonth());
       return tempDate.getDay(); //0表示星期天
   }
   //获取该日期的上一个月有多少天
   Date.prototype.getPrevMonthDays = function () {
       var tempDate = new Date("2000-1-1");
       tempDate.setFullYear(this.getFullYear());
       tempDate.setMonth(this.getMonth());
       tempDate.setDate(0);
       return tempDate.getDate();
   }