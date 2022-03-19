
const botonHamburguesa = document.getElementById("hamburguesa");
const divMenuMovil = document.getElementById("menuMovil");


function iniciar(){


    botonHamburguesa.addEventListener("click",(event)=>{
        console.log(event);
        if (divMenuMovil.classList.contains('visible')){
            divMenuMovil.classList.remove('visible');
            botonHamburguesa.style.transform='rotate(-90deg)';
        }
        else{
            divMenuMovil.classList.add('visible');
            botonHamburguesa.style.transform='rotate(180deg)';
            
        }
    })


}