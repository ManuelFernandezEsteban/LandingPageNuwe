
const botonHamburguesa = document.getElementById("hamburguesa");
const divMenuMovil = document.getElementById("menuMovil");
const liMenu = document.querySelectorAll(".menu > li");
const botonesRegistro = document.querySelectorAll("registro");
const popUp = document.getElementById("popUp");
const botonEsMv=document.getElementById("idiomaEsM");
const botonEnMv=document.getElementById("idiomaEnM");
const botonEsD=document.getElementById("idiomaEsD");
const botonEnD=document.getElementById("idiomaEnD");



function iniciar() { 


    liMenu.forEach(li => {
        li.addEventListener("click", (event) => {
            console.log(li)
            setTimeout(() => {
                const subMenu = li.nextSibling.nextSibling;
                console.log(subMenu);
                const flecha = li.children[1];
                if (subMenu.classList.contains('visible')) {
                    subMenu.classList.remove('visible');
                    flecha.style.transform = 'rotate(180deg)'

                } else {
                    subMenu.classList.add('visible');
                    flecha.style.transform = 'rotate(360deg)';
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

    botonEnD.addEventListener('click',cambiarIdiomaEn);
    botonEsD.addEventListener('click',cambiarIdiomaEn);
    botonEnMv.addEventListener('click',cambiarIdiomaEn);
    botonEsMv.addEventListener('click',cambiarIdiomaEn);
   
}

function registro() {    
    
    if(popUp.classList.contains('visible')){
        
        popUp.classList.remove('visible');
    }

}

function cerrarPopUp(){
    popUp.classList.add('visible');
}

function cambiarIdiomaEn(){

    console.log('ingles');
}
function cambiarIdiomaEs(){
    console.log('español');

}
