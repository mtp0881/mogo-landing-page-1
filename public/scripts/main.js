"use strict";var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),expandClass="is-expand";menuToggle.addEventListener("click",function(){menuHeader.classList.add("is-expand")}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)});