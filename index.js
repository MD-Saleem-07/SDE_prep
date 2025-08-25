 
 
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