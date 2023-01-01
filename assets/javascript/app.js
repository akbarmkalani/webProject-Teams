let showMenu = document.querySelector(".drop-menu");
let subMenu = document.querySelector("#show-more-menu");
const btn = document.getElementById('btn');
const btnTop = document.getElementById('btn2');
let  homburgerIocn = document.querySelector(".humburge-icon")
let homburgerMenu = document.querySelector(".hamburger-menu")
//   console.log(homburgerMenu) 
let xB = document.getElementById('x')

subMenu.addEventListener("mouseenter", function(e){
    const ul = e.target.childNodes[3];
    //  console.log(e.target.childNodes)
    ul.style.animation = 'show 0.35s 1';
    ul.style.display = 'block';
})
subMenu.addEventListener("mouseleave", function(e) {
  const ul = e.target.childNodes[3];
  ul.style.display = 'none'
})

showMenu.addEventListener("mouseenter", function(e){
    const drop = e.target.childNodes[3];
    console.log(e.target.childNodes)
    drop.style.display = 'block'
})
showMenu.addEventListener("mouseleave", function(e) {
    const drop = e.target.childNodes[3];
    console.log(drop)
    drop.style.display = 'none'
})

btn.addEventListener('click', function () {
 // btn.style.backgroundColor = 'red';
  btn.classList.add("border-btn")
  btn.style.border= "3px solid #61a6de";
  console.log(btn)
});
btnTop.addEventListener('click', function () {
    // btn.style.backgroundColor = 'red';
     btnTop.classList.add("border-btn")
     btnTop.style.border= "3px solid #61a6de";
     console.log(btn)
   });


btn.addEventListener('mouseleave', function (){
    btn.style.border = 'none'
})
btnTop.addEventListener('mouseleave', function (){
    btnTop.style.border = 'none'
})


///// humburge-menu
homburgerIocn.addEventListener("click", function() {
    // console.log(homburgerMenu.style.transform)
    homburgerMenu.classList.add("show-menu-items")
    /* homburgerIocn.style.display = 'none'; */
/*     if(homburgerIocn ,'click'){
        
    } */
})
 
xB.addEventListener("click", function(){
    homburgerMenu.classList.remove('show-menu-items');
   /*  homburgerIocn.style.display = 'block'; */
})

/* 
const show = document.querySelector('.js-count'),
      number = Number(show.innerHTML) + 1;

let   counter = 0,
      delay = 1,
      x = number/2,
      y = 0;

counter_js();

function counter_js(){
      y ++;
      delay = (x-y);
      show.innerHTML = counter.toString();
      counter ++;
       if ( counter < number ) {
         setTimeout(function(){
             counter_js();
         }, delay)    
     } 
  } */