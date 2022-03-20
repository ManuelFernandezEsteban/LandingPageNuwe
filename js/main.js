
const botonHamburguesa = document.getElementById("hamburguesa");
const divMenuMovil = document.getElementById("menuMovil");
const liMenu = document.querySelectorAll(".menu > li");



function iniciar() {

    liMenu.forEach(li => {
        li.addEventListener("click", (event) => {
            setTimeout(() => {
                const subMenu = li.nextSibling.nextSibling;
                const flecha = li.children[1];
                if (subMenu.classList.contains('visible')) {
                    subMenu.classList.remove('visible');                    
                    flecha.style.transform='rotate(180deg)'
                    
                } else {
                    subMenu.classList.add('visible');
                    flecha.style.transform='rotate(360deg)';                    
                }
            }, 150);

        })
    });

    botonHamburguesa.addEventListener("click", (event) => {

        setTimeout(() => {
            if (divMenuMovil.classList.contains('visible')) {
                divMenuMovil.classList.remove('visible');
                botonHamburguesa.style.transform = 'rotate(-90deg)';
            }
            else {
                divMenuMovil.classList.add('visible');
                botonHamburguesa.style.transform = 'rotate(180deg)';               

            }
        }, 150);


    })


}