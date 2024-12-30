let x =document.getElementById( 'icn') 
let y =document.getElementById( 'ln') 


x.addEventListener('click', () => {


  event.stopPropagation();

  if (y.style.display === 'none' || y.style.display === '') {
 
    y.style.display = 'block';
  } else {
   
    y.style.display = 'none';
  }
});
document.addEventListener('click', () => {





    y.style.display = 'none';
})






















