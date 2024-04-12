
const menuMobile = document.getElementById("menu");
const btnClose = document.getElementById("btn-close");
const btnOpen = document.getElementById("btn-open");



function closeMenu()
{
    menuMobile.classList.remove("flex");
    menuMobile.classList.add("hidden");
}

function openMenu()
{
    menuMobile.classList.remove("hidden");
    menuMobile.classList.add("flex");
}