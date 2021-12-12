// var link = "sdf.html?a=34&sd=sdfs&ds=8234&dfs=sdfsdf&a=jjj &a=";
const parseFn = (str, type = "last") => {
  var paramsString = str.split("?")[1];
  var paramItem = paramsString.split("&");
  var obj = {};
  for (var i = 0; i < paramItem.length; i++) {
    var [label, value] = paramItem[i].split("=");
    switch (type) {
      case "first":
        obj[label] = obj.hasOwnProperty(label) ? obj[label] : value;
        break;
      case "arr":
        obj[label] = obj.hasOwnProperty(label)
          ? obj[label] + "," + value
          : value;
        break;
      default:
        obj[label] = value;
    }
  }
  return obj;
}
// let a = parseFn(link, "arr");
// console.log(a);

const stringifyFn = (param, key, encode) => {
  if (param == null) return "";
  var paramStr = "";
  var t = typeof param;
  if (t == "string" || t == "number" || t == "boolean") {
    paramStr += "&" + key + "=" + (encode == null || encode ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
      paramStr += stringifyFn(param[i], k, encode);
    }
  }
  return paramStr;
}

// var obj = {
//   name: "tom",
//   class: { className: "class1" },
//   classMates: [{ name: "lily" }],
// };

// console.log(stringifyFn(obj));
// console.log(stringifyFn(obj, "stu"));
module.export = {
    parseFn,
    stringifyFn
}
