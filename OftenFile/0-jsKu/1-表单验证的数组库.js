  var upperCodeList = [];
  var lowerCodeList = [];
  var numCodeList = [];
  var otherCodeList = ["$", "_"];
  for (var i = 97; i < 97 + 26; i++) { //表示小写的编码 范围
      var code = String.fromCharCode(i); //把编码转成了对应小写字符
      lowerCodeList.push(code);
      var upperCode = String.fromCharCode(i - 32); //97 65
      upperCodeList.push(upperCode);
  }
  for (var i = 0; i < 10; i++) {
      numCodeList.push(String(i));
  }
  var bigList = otherCodeList.concat(upperCodeList, lowerCodeList, numCodeList);
  console.log(bigList)