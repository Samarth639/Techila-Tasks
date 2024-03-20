disp = (i)=>{
if(i==0){
    console.log("Hii")
if(document.getElementsByClassName("content")[0].style.display === "block"){
    document.getElementsByClassName("content")[0].style.display= "none";    
    console.log("1")
}else{
    document.getElementsByClassName("content")[0].style.display= "block";
    console.log('2')
}

}else if(i==1){
    if(document.getElementsByClassName("content")[1].style.display === "block"){
        document.getElementsByClassName("content")[1].style.display= "none";
        console.log("3")
    }else{
        document.getElementsByClassName("content")[1].style.display= "block";
        console.log('4')
    }

    
}else if(i==2){
    if(document.getElementsByClassName("content")[2].style.display === "block"){
        document.getElementsByClassName("content")[2].style.display= "none";
        console.log("5")
    }else{
        document.getElementsByClassName("content")[2].style.display= "block";
        console.log('6')
    }
    }
}

