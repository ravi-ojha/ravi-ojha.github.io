$(function(){$(".fluidbox-trigger").fluidbox()}),window.sr=ScrollReveal({reset:!0}),sr.reveal(".reveal",{distance:"0",duration:500,easing:"ease-in-out",origin:"top",scale:1,reset:!1,viewFactor:0}),function(){var e=document.body,n=e.getElementsByClassName("menu-trigger")[0];"undefined"!=typeof n&&n.addEventListener("click",function(){e.className="menu-active"==e.className?"":"menu-active"})}.call(this);var myElement=document.querySelector(".menu-trigger"),headroom=new Headroom(myElement);headroom.init();