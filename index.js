
function filterbyAge(arr){
   var newarr = arr.filter(item => {
     return item.age > 18;
   });
  return newarr;
  
}

var arr=[ { name:"dharti",age:23,gender:"female"},{name:"swati",age:12,gender:"female"},
{name:"ram",age:122,gender:"male"} ]

console.log(filterbyAge(arr));