// import Swiper from 'swiper';
import "./scss/styles.scss";
// import 'swiper/swiper-bundle.css';
import $ from "jquery";

let burger = document.querySelector('.burger')
let mobileMenu = document.querySelector('.mobileMenu')
let overLay = document.querySelector('.overLay')
let close = document.querySelector('.close')
let navBarListItem = document.querySelectorAll('.nav-list__item')
let innerList = document.querySelectorAll('.inner-list')
let mobileOpenMore = document.querySelectorAll('.open-more')

for(let i of navBarListItem) {
    i.addEventListener('mouseover', openInnerList)
}

// for(let i of innerList) {
//     i.addEventListener('mouseout', closeInnerList)
// }

burger.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
overLay.addEventListener('click', closeMenu)
function openMenu() {
    mobileMenu.style.transform = 'translateX(0%)'
    overLay.style.display = 'block'
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(-100%)'
    overLay.style.display = 'none'
}

function openInnerList(event) {
    let innerList = event.target.querySelector('.inner-list')
    innerList.style.display = 'block'
}

// function closeInnerList(event) {
//     let innerList = event.target.parentElement
//     innerList.style.display = 'none'
// }

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.swiper-service', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


let mobile =  $('.open-more')
let innerList2 = $('.inner-list2')
let innerList3 = $('.inner-list3')

mobile.on('click', openMobileMore)
let mobileList = mobile.parent().parent()
function openMobileMore(event) {
    console.log(event.target.parentElement.parentElement)
    let text = event.target.parentElement.parentElement.querySelector('a').innerText
    let innerList = $('<div></div>')
    innerList.text(text)
    $(`<p><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.61143 15L0 7.5L7.61143 0L8.57143 0.945946L1.95429 7.5L8.57143 14.0541L7.61143 15Z" fill="#333333"/>
    </svg></p>
    `).prependTo(innerList).on('click', closeInnerList)
    innerList.addClass('inner-list-item')
    
    if(text == 'Tierklinik') {
        mobileList.after(innerList)
        innerList.after(innerList2)
        mobileList.animate({
            left:'-100%'
        })
    }
    if(text == "Tiervermittlung")
        mobileList.after(innerList)
        innerList.after(innerList3)
        mobileList.animate({
            left:'-100%'
        })
    
 

}

function closeInnerList() {
    $('.inner-list-item').fadeOut(300, function(){ $(this).remove();})
    $('.inner-list').remove()

    mobileList.animate({
        left:'0%'
    })
}

