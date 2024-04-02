function myfun(e){
     var v = document.getElementsByClassName("accordion-content")
     for(let i=0;i<v.length;i++){
        v[i].style.display="none";
     }
     console.log(e)
   e.target.nextElementSibling.style.display="block"

}