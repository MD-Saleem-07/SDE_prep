function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function devide(a,b){
    return a+b;
}

function op(a,b,op){
    return op(a,b);
}
console.log(op(10,5,sum));
