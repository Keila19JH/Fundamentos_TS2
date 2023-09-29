// Las funciones encapsulan código que se utiliza
// frecuentemente

// Función Simple
function saludoTradicional(){
    console.log("Saludo Tradicional");
}

// Arrow Functions
const saludoArrowFunctions = () => {
    console.log("Saludo en función de flecha");
}


// saludoTradicional();
// saludoArrowFunctions();

// Argumentos y parametros
//argumento el que le enviamos a la function
//parametro variable que se declara dentro de las funciones


const nombre = 'Carlos';
/*const saludoPersonalizado = (nombre:string) => {
    console.log(`Hola ${nombre}`);
}*/

//Llamando a la funcion
//saludoPersonalizado(nombre);
//saludoPersonalizado( 'Keila');


//Función con return y parametros
const saludoPersonalizado1 = (nombre:string) => {
    return `Hola ${nombre}`;
}
let saludo:string = saludoPersonalizado1(nombre);

console.log(saludo);
