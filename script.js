const tooltip = document.getElementById("tooltip");
const icono = document.getElementById("icono");
const fraseElement = document.getElementById("frase");
const respuestaElement = document.getElementById("respuesta");
const preguntaElement = document.getElementById("pregunta");
const preguntarBoton = document.querySelector("#preguntar");
const reiniciarBoton = document.querySelector("#reiniciar");

//variables
let fraseSecreta = "Herto, por favor me gustaria que me respondas";
let respuestaSecreta = "";
let estadoTruco = false;

//tooltip
icono.addEventListener("mouseenter",()=>{
    tooltip.classList.toggle("escondido",false)
})

icono.addEventListener("mouseleave",()=>{
    tooltip.classList.toggle("escondido",true)
})

fraseElement.addEventListener("input",(e)=>{
    if(e.data === "-"){
        estadoTruco = !estadoTruco;
        escribirLetraCorrecta();
    };
    if(estadoTruco){
        respuestaSecreta += e.data;
        escribirLetraCorrecta();
        console.log(respuestaSecreta)
    }
    fraseElement.classList.toggle("correcta",fraseElement.value === fraseSecreta)
})

function escribirLetraCorrecta(){
    const letraAAregar = fraseSecreta[fraseElement.value.length-1];
    if(letraAAregar === undefined) return estadoTruco = false;
    fraseElement.value = fraseElement.value.substring(0, fraseElement.value.length-1)+letraAAregar;
}

preguntarBoton.addEventListener("click",()=>{
    if (preguntaElement.value === ""){
         return respuestaElement.innerText = "No puedo responder a una pregunta vacía";
    }
    if(
        fraseElement.value === fraseSecreta 
        && respuestaSecreta !== "" 
        && preguntaElement !== "" ){
        respuestaElement.innerText = respuestaSecreta;
    }else 
    {
        respuestaElement.innerText = "Mmmm, preferiria no responder esa pregunta";
    }
})

reiniciarBoton.addEventListener("click", ()=>{
    estadoTruco = false;
    //fraseSecreta = "";
    preguntaElement.value = "";
    fraseElement.value = "";
    respuestaSecreta = "";
    respuestaElement.innerText = "Hazme una pregunta" ;
    preguntaElement.focus();
})

        
preguntaElement.focus();
    


