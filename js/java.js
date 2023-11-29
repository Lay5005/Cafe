console.log("Se carga el código");
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM completamente cargado y procesado");

    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector("header nav");
    const body = document.querySelector("body");

    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        nav.classList.toggle("no-scroll");
    });
});


/***************/
