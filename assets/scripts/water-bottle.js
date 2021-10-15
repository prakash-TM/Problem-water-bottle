var numBo = 2; // 15 4 19
var numEx = 4; // 17 3 25 

var res = numBo;

while (numBo >= numEx) {
    var a = parseInt(numBo / numEx); // parseInt or Math.floor
    res += a;
    console.log((numBo % numEx))
    numBo = a + (numBo % numEx)
        // console.log(numBo)
}
console.log(res)