check = ()=>{
    var empt1 = document.getElementById("input1").value
    var empt2 = document.getElementById("input2").value
    var empt3 =  document.getElementById("input3").value
    if(empt1 && empt2 && empt3){
        if(empt2 == "+"){
            var sum = Number(empt1) + Number(empt3)
            console.log(sum)
            document.getElementById("output").placeholder = sum
        }
        if(empt2 == "-"){
            var sub = Number(empt1) - Number(empt3)
            document.getElementById("output").placeholder = sub
        }
        if(empt2 == "*"){
            var mul = Number(empt1) * Number(empt3)
            document.getElementById("output").placeholder = mul
        }
        if(empt2 == "/"){
            var div = Number(empt1) / Number(empt3)
            document.getElementById("output").placeholder = div
        }
        

    }
}