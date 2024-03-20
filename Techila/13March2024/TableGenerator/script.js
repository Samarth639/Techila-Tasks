// console.log("Hello")
// var arr = [{
//     name: "Name",
//     email: "Email",
//     phone: "Phone",
//     remark: "Remark"
// }]

var newArr = [];

addData = ()=>{
    object = {
    SerialNo: newArr.length,
    name: "Name",
    email: "Email",
    phone: "Phone",
    remark: "Remark"
    }
    newArr.push(object);

    console.log(newArr)

    
    var table = document.getElementById("table");
    var row = table.insertRow();
    var Element1 = row.insertCell(0);
    var Element2 = row.insertCell(1);
    var Element3 = row.insertCell(2);
    var Element4 = row.insertCell(3);
    var Element5 = row.insertCell(4);

    Element1.innerHTML = newArr.length;
    Element2.innerHTML = "Name";
    Element3.innerHTML = "Email";
    Element4.innerHTML = "Phone";
    Element5.innerHTML = "Remark";
    
}

deleteData = ()=>{
    newArr.pop();
    console.log(newArr);

    
}


