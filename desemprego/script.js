/* =================================
   MENU MOBILE
================================= */

const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

        menu.style.flexDirection = "column";

        menu.style.position = "absolute";

        menu.style.top = "75px";

        menu.style.right = "5%";

        menu.style.background = "#f7f3e9";

        menu.style.padding = "25px";

        menu.style.border = "1px solid #25201d";

    }

});


/* =================================
   FECHAR MENU AO CLICAR
================================= */

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 900) {

            menu.style.display = "none";

        }

    });

});


/* =================================
   ANIMAÇÃO AO APARECER
================================= */

const elements = document.querySelectorAll(
    ".info-card, .impact-item, .solution, .visual-section"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    observer.observe(element);

});