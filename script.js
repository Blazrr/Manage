var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  });


const mobileToggler = document.querySelector('#menuToggler')
const mobileMenu = document.querySelector('.mobile-menu')
const image = document.querySelector('#image')
const modal = document.querySelector('#modal')
const submit = document.querySelector('#submit')
const input = document.querySelector('#input')
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const invalid = document.querySelector('.invalid')

mobileToggler.addEventListener('click', () =>{
    if(!(mobileMenu.classList.contains('mobile-menu-active'))){
    mobileMenu.classList.add('mobile-menu-active')
    console.log('opened')
    image.src = 'images/icon-close.svg'
    modal.classList.add('modal-active')
    }
    else{
        mobileMenu.classList.remove('mobile-menu-active')
        console.log('closed')
        image.src = 'images/icon-hamburger.svg'
        modal.classList.remove('modal-active')
    }
})

modal.addEventListener('click', () =>{
    if (mobileMenu.classList.contains('mobile-menu-active')){
        mobileMenu.classList.remove('mobile-menu-active')
        console.log('closed')
        image.src = 'images/icon-hamburger.svg'
        modal.classList.remove('modal-active')
    }
})


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  

submit.addEventListener('click', () =>{

    if (!filter.test(input.value)) {
        input.focus;
        invalid.classList.add('invalid-active')
        return false;
        
     }
     else {
        invalid.classList.remove('invalid-active')
     }

})