
 
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



// console.log("hi");
  
// function timeout(){
//     console.log("timeout");

// }
// setTimeout(timeout,2000);
// console.log("second");

// function filterbyAge(arr){
//    var newarr = arr.filter(item => {
//      return item.age > 18;
//    });
//   return newarr;
  
// }

// var arr=[ { name:"dharti",age:23,gender:"female"},{name:"swati",age:12,gender:"female"},
// {name:"ram",age:122,gender:"male"} ]

// console.log(filterbyAge(arr));


// class Rectangle {
//     constructor(width, height,color) {
//         this.width = width;
//         this.height = height;
//         this.color=color;
//     } 
//     area(){
//         const area= this.width*this.height;
//         return area;
//     }
//     paint() {
//         console.log(`Painting with color ${this.color}`);

//     }

// }
// const rect = new Rectangle(2,4,'red'); 
// console.log(rect.width*rect.height);
// const area = rect.area();
// const paint = rect.paint();
// console.log(area);


// const map = new Map();
// map.set('name','Dharti');
// map.set('age',24);
 
// console.log(map.get('name'));
// console.log(map.get('age'));

// const d= new Date();

// console.log(d.getFullYear());

// assignment
  // function setTimeoutPrormisified(ms){
  //   return new Promise(reslove => setTimeout(reslove,ms));
  // }
  // function callback()
  // {
  //   console.log("3 second have passed");
  // }
  // setTimeoutPrormisified(3000).then(callback);


  function random( reslove)
  {
     reslove();
  } 
  
  let p = new Promise(random);
  // console.log(p)
  function callback(){
    console.log("promise reolved");
  }
  p.then(callback);
  p.then(callback);