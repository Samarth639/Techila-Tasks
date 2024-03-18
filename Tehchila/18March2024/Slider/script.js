console.log('Hi');
// const accordionItems = document.querySelector('.accordion-item');
const accordionItems = document.getElementsByClassName('.acc');
console.log('accordionItems', accordionItems);
accordionItems.forEach(item => {
    console.log('Inside loop');
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');

  title.addEventListener('click', () => {
    for (i = 0; i < accordionItems.length; i++) {
      if(accordionItems[i] != item){
        accordionItems[i].classList.remove('active');
      }else{
        item.classList.toggle('active');
      }
    }

  });
});