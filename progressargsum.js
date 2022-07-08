let x = 0;
let i = 2;
while(isNaN(+process.argv[i+1]) == false) {
  x = +process.argv[i] + +process.argv[i+1];
  
  i++;
}
console.log(x);