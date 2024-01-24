/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const filterEvens=(arr)=>{
const even=[]
for(let i=0;i<numbers.length;i++)
{
  if(numbers[i]%2==0)
  {
    even.push(numbers[i]);
  }
}
return even
}
const evenNumbers = filterEvens(numbers);
console.log(evenNumbers);


const numbers = [10, 20, 30, 40, 50];

const calculateAverage=(arr)=>{
  var a=0
  for(let i=0;i<numbers.length;i++){
    a=a+numbers[i];
  }
  return (a/numbers.length)
}
const average = calculateAverage(numbers);
console.log(average);*/





const numbers = [1, 2, 3, 4, -1, -2, -3];

const findMaxProduct=(arr)=>{
  var a=1;
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]>0)
    {
      a=a*numbers[i]
    }
  }
  return a
}
const maxProduct = findMaxProduct(numbers);
console.log(maxProduct);



