
 
//  Syndronous code 
 // let fs=require('fs');
// const data=fs.readFileSync('a.txt','utf-8');
// console.log(data);
// const data1=fs.readFileSync('b.txt','utf-8');
// console.log(data1);

// Asysndronous code



// function print(err,data){
//     if(err){
//         console.log("File not found");

//     } else{
//         console.log(data);
//     }
// }
// let fs=require('fs');
// fs.readFile('a.txt','utf-8',print); //asyncronous function
//  console.log("done!");



console.log("hi");
  
function timeout(){
    console.log("timeout");

}
setTimeout(timeout,2000);
console.log("second");

function filterbyAge(arr){
   var newarr = arr.filter(item => {
     return item.age > 18;
   });
  return newarr;
  
}

var arr=[ { name:"dharti",age:23,gender:"female"},{name:"swati",age:12,gender:"female"},
{name:"ram",age:122,gender:"male"} ]

console.log(filterbyAge(arr));
