 function $(str) {
        return new GetEle(str);
    }

    function GetEle(str) {
        if (typeof str == "object") {
            this.eles = [str];
        } else {
            this.eles = document.querySelectorAll(str);
            this.bindIndex();
        }
    }
    GetEle.prototype.bindIndex = function () {
        this.each(function (item, index) {
            item.index = index;
        })
    }
    GetEle.prototype.each = function (fn) {
        for (var i = 0; i < this.eles.length; i++) {
            var item = this.eles[i];
            fn(item, i);
            //fn.call(item,i) call继承,方便函数内部的this指向,然后call的函数
            //内部的形参就将继承实参的第二个参数往后
        }
    }
    GetEle.prototype.html = function (content) {

        if (arguments.length == 0) {
            return this.eles[0].innerHTML;
        } else {
            this.each(function (item) {
                item.innerHTML = content;
                //this.innerHTML=content
            })
        }
        return this;
    }
    GetEle.prototype.val = function () {
        if (arguments.length == 0) {
            return this.eles[0].value;
        } else {
            var content = arguments[0];
            this.each(function (item) {
                item.value = content;
            })
        }
        return this;

    }


    GetEle.prototype.hide = function () {
        this.each(function (item) {
            item.style.display = "none";
        })
    }
    GetEle.prototype.show = function () {
        this.each(function (item) {
            item.style.display = "block";
        })
        return this;
    }
    GetEle.prototype.click = function (fn) {
        this.each(function (item) {
            item.onclick = fn
        })
    }
    GetEle.prototype.className = function () {
        if (arguments.length == 0) {
            return this.eles[0].className;
        } else {
            var content = arguments[0]
            this.each(function (item) {
                item.className = content;
            })
        }
        return this;
    }
    GetEle.prototype.attr = function () {
        var argsLen = arguments.length;
        if (argsLen == 1) {
            var args = arguments[0];
            if (typeof args == "string") {
                return this.eles[0].getAttribute(args);
            } else if (typeof args == "object") {
                for (var key in args) {
                    this.each(function (item) {
                        item.setAttribute(key, args[key]);
                    });
                }
            }
        } else if (argsLen == 2) {
            var key = arguments[0]; //data-id
            var value = arguments[1]; //1
            this.each(function (item) {
                item.setAttribute(key, value);
            })

        }

    }
    GetEle.prototype.color = function () {
        if (arguments.length == 0) {
            return this.getStyleAttr(this.eles[0], "color");
        } else {
            var content = arguments[0];
            this.each(function (item) {
                item.style["color"] = content;
            })
        }
    }
    GetEle.prototype.width = function () {
        if (arguments.length == 0) {
            return this.getStyleAttr(this.eles[0], "width");
        } else {
            var content = arguments[0];
            this.each(function (item) {
                item.style["width"] = content + "px";
            })
        }
    }
    GetEle.prototype.getStyleAttr = function (obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
    GetEle.prototype.css = function () {
        if (arguments.length == 1) {
            var arg = arguments[0];
            if (typeof arg == "string") {
                return this.getStyleAttr(this.eles[0], arg);
            } else if (typeof arg == "object") {
                for (var attr in arg) {
                    this.each(function (item) {
                        item.style[attr] = arg[attr];
                    })
                }
            }

        } else if (arguments.length == 2) {
            var key = arguments[0];
            var value = arguments[1];
            this.each(function (item) {
                item.style[key] = value;
            })

        }

    }

    GetEle.prototype.on = function (type, fn) {
        this.each(function (item) {
            item.addEventListener(type, fn);
        })
    }
    GetEle.prototype.eq = function (index) {
        this.default = this.eles; //[1,2,3,4,5]

        this.eles = [this.eles[index]]; // [2]
        return this;
    }
    GetEle.prototype.siblings = function () {
        // this.eles = [1,3,4,5];
        var that = this;
        var list = Array.from(this.default).filter(function (item) {
            return item != that.eles[0];
        }); //伪数组 转 真数组  真数组才可以用数组的扩展方法
        this.eles = list;
        return this;
    }
    GetEle.prototype.index = function () {
        return this.eles[0].index;
    }