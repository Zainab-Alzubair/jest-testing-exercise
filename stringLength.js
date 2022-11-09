function stringLength(string) {
let arr = string.split('');
var count = 0;
for (let i = 0; i < arr.length; i++) {
count ++;
if(count<1 && count >10){
  console.log("error")
}
}
return count;
}

module.exports = stringLength;