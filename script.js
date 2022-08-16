// const menuToggle =  document.querySelector('.toggle')
// const showcase=  document.querySelector('.showcase')

// menuToggle.addEventListener('click', ()=>{
//     menuToggle.classList.toggle('active')
//     showcase.classList.toggle('active')
// })


// scroll


window.addEventListener('scroll', ()=>{
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    
})

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1
    }
},7000);

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

// LOADER

// CLASSLIST


// let home = document.querySelector('#home'),
//     about = document.querySelector('#about'),
//     whybughunter = document.querySelector('#whybughunter');
// console.log(about);

// home.addEventListener('click', ()=>{
//     home.style.transition = "3s ease";
// })
// about.addEventListener('click', ()=>{
//     about.classList.toggle('active');
// })
