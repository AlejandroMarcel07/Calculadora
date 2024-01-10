
//Creamos la funcion agregar que cumple la accion de agregar 
//valores al imput en el se mostrara los numeros seleccionados

function agregar(valor){ //parametro resivido valor

    //agregaremos consecutivamente los valores entrantes
    //al parametro
    document.getElementById('pantalla').value  += valor
}


//Funcion borrar
//Vaciar imput con la propiedad .value
function borrar(){
    document.getElementById('pantalla').value = ''
}

//Funcion calcular
function calcular(){
    //Constante en la que se almacena la operacion dada
    const valorPantalla = document.getElementById('pantalla').value
    //una ves teniendo, le aplicaremos la funcion eval la cual se encarga
    //de calcular matematicamente un cadena de caracter como si fueren enteros
    const resultado =eval(valorPantalla)
    //mostramos en pantalla mejor dicho el imput el resultado   
    document.getElementById('pantalla').value = resultado
}