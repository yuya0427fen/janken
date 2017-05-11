
const GU = 0;
const CHOKI = 1;
const PA = 2;


let matches = 0;
function action(oppornent){
  matches = matches + 1;
  const remainder = matches % 2;
  const isEven = remainder == 0;
  console.log(`${matches} % 2 = ${remainder} : ${isEven}`);
  if(isEven){
  	return GU
}
return PA
}

function abs(value){
  let result = value;
  if(result < 0){
    result = result * -1;
  }
  return result;
}
 function distance(value1, value2){
   let result = 0;
   result= value2 - value1;
   result =abs(result);
   return resurt;
 }

