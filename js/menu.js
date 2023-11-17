const menu = document.querySelector(".js_menu");
const menu_open = document.querySelector(".js_menu_open");
const menu_close = document.querySelector(".js_menu_close");
const overlay = document.querySelector(".overlay");

menu_open.addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("active");
});

menu_close.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("active");
});
