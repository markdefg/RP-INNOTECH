let argument = process.argv.slice(2);
let sum = 0;
let finalarg = argument.toString().replace(".","");

let finalargconv = finalarg.toString().length;
for(let x = 0; x<finalargconv; x++){
  sum += Number(finalarg[x]);
}
console.log("OUTPUT = " + sum);
return sum;
