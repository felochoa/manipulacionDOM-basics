const h1 = document.querySelector("h1");
const form = document.querySelector("#form")
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const result_p = document.querySelector('#result')

//ahora debemos escuchar los eventos 

//una forma es agregar onclick en html

//la mejor forma es añadiendo funciones aqui 

//añadiendo event listener -primer argumento es el nombre del evento y segundo el codigo que queremos ejecutar
//cuando se cumpla el evento

//btn.addEventListener('click', btnOnClick ); //no se ponen los parentesis de la funcion porque solo manda a llamar la funcion

//se cambia a etiqueta form
form.addEventListener('submit', sumarInputValues);

// se puede prevenir el submit cambiandole el type del ultimo boton del form
// a tipo button, en vez de hacer tanta guevonada

function sumarInputValues(event){
    console.log({event})
    event.preventDefault() //previene el default del submit del form
    presult= input1.value + input2.value;
    result_p.innerText = "Resultado: " + presult;
}

