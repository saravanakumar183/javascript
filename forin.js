a=new Set([5,6,7,8])
a.add(1)
a.add(2)
a.add(3)
a.add(4)
for(x of a ){
console.log(x)
}
a.forEach(i=>console.log(i))

const person = { name: 'John', age: 30 };

for (let key in person) {
  console.log(key, person[key]);
}
