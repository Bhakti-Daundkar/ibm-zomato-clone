let location_box=document.getElementById('location_box');
let search_arrow=document.getElementById('search_arrow');
let search_address=document.getElementById('search_address');

search_address.addEventListener('focusin', ()=>{
    location_box.style.visibility='visible';
    search_arrow.style.transform = "rotate(180deg)";
    location_box.style.opacity=1;
})
search_address.addEventListener('focusout', ()=>{
    location_box.style.visibility="hidden";
    search_arrow.style.transform = "rotate(0deg)";
    location_box.style.opacity=0;
})

let email = document.getElementById('email');
let phone = document.getElementById('phone');
let emails = document.getElementById('emails');
let phones = document.getElementById('phones');
let emails_phones = document.getElementById('emails_phones');
phone.addEventListener('click',()=>{
    emails_phones.classList.add('show_more');
    email.checked = false;
})
email.addEventListener('click',()=>{
    emails_phones.classList.remove('show_more');
    phone.checked = false;
})