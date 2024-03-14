let a = [2,3,4,5,[6,7,8],9];
let b= [];
a.forEach((n)=>{
    if(typeof n === "number"){
        b.push(n);
    }
    else if(typeof n === "object"){
        n.forEach((c)=>{
            b.push(c);
        })
    }
})

console.log(b)