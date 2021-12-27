const { arrclap } = require("../arrClap/arr_clap");

function classNames() {
  let len = arguments.length;
  let classes = [];
  for (let i = 0; i < len; i++) {
    const argItem = arguments[i];
    if (!argItem) continue;

    const argType = typeof argItem;
    if (argType === "string" || argType === "number") {
      classes.push(argItem);
    } else if (Array.isArray(argItem)) {
      if (argItem.length) {
        let res = classNames(...arrclap(argItem));
        if (res) {
          classes.push(res);
        }
      }
    } else if (Object.prototype.toString.call(argItem) === "[object Object]") {
      for (const key in argItem) {
        if (argItem[key]) {
          classes.push(key);
        }
        // if (
        //   Object.prototype.toString.call(argItem[key]) === "[object Function]"
        // ) {
        //   console.log(key, "key");
        //   console.log(argItem[key]())
        //   classes.push(argItem[key]() ? argItem[key]() : key);
        // } else if (argItem[key]) {
        //   classes.push(key);
        // }
      }
    }
  }
  return classes.join(" ");
}
// console.log( classNames('a', 0, null, undefined, true, false, 1, 'b') );
// console.log(classNames(["bar", null, undefined, true, false, 1337]));
// console.log(classNames([["bar", null, undefined, true, false, [], 1337]]));
// console.log( classNames(classNames,{},{
//   a: true,
//   b: false,
//   c: 0,
//   d: null,
//   e: undefined,
//   f: 1,
// },
// 9,
// "p") )
// console.log(classNames({
//   // falsy:
//   null: null,
//   emptyString: "",
//   noNumber: NaN,
//   zero: 0,
//   negativeZero: -0,
//   false: false,
//   undefined: undefined,

//   // truthy (literally anything else):
//   nonEmptyString: "foobar",
//   whitespace: " ",
//   function: () => {}, //Object.prototype.toString,
//   emptyObject: {},
//   nonEmptyObject: { a: 1, b: 2 },
//   emptyList: [],
//   nonEmptyList: [1, 2, 3],
//   greaterZero: 1,
// }),9999)
// console.log(
//   classNames({
//     toString: () => {
//       return "classFromMethod";
//     }, //function () { return 'classFromMethod'; }
//   }),
//   "123"
// );

function prefixCls() {
  let res = "";
  if (arguments.length) {
    classNames(...arguments)
      .split(" ")
      .forEach((el) => {
        res += arguments[0] === el ? `${el} ` : `${arguments[0]}-${el} `;
      });
    return res.trim();
  }
  return "";
}
console.log(prefixCls());

module.exports = { classNames, prefixCls };
