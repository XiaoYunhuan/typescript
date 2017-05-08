/**
 * Created by xiaoyunhuan on 2017/5/8.
 */
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[Enum.A];
console.log(a);
console.log(nameOfA);
//# sourceMappingURL=Enums.js.map