myClick = ()=>{
    alert("You clicked Successfully")
    document.getElementById("myButton").style.display="none"
}
myChange = ()=>{
    var inputValue = document.getElementById("input").value
    document.getElementById("output").innerText = inputValue
}