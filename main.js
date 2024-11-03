let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
});

let modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        let modal = btn.getAttribute("data-modal");
        
        document.getElementById(modal).style.display = 'flex';

        let closeBtns = document.querySelectorAll(".close-btn");
        closeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                document.getElementById(modal).style.display = 'none';
            });
        });
    });
});

