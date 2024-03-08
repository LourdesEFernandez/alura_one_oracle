// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
let alturaPersona = 1.50;
let pesoKilos = 50;
let imc = calcularIMC(alturaPersona,pesoKilos);
let mensaje = `El indice de masa muscular de una persona con altura ${alturaPersona}m y peso ${pesoKilos}k es ${imc}`;

function calcularIMC(altura,peso) {
    return peso / altura**2
}

console.log(mensaje);

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
let numero = 10;
let factorial = calcularFactorial(numero);

function calcularFactorial(numeroDeseado){
    let factorial = 1;
    for (i = 1; i <= numeroDeseado; i++ ){
        factorial += factorial * i;
    };
    return factorial;
}

console.log(`El factorial de ${numero} es ${factorial}`);

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

let dolares = 15;
let cambioReales = conversorReales(dolares);
function conversorReales(dolar) {
    let real = 4.80;
    let reales = dolar*real;
    return reales;
}

console.log(`$${dolares} equivale a ${cambioReales} reales`);


// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

let base = 14;
let altura = 18;
let areaRectangulo = base*altura;;
let perimetroRectangulo = 2*(base+altura);

function mostrarResultados(){
    console.log(`Para una sala rectangular de base ${base} y altura ${altura} tenemos un perimetro de ${perimetroRectangulo} y un area de ${areaRectangulo}`);
}

mostrarResultados();

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

let radio = 25;
const pi =3.14;
let areaCirculo = pi*radio**2;
let perimetroCirculo = 2*pi*radio;

function mostrarResultadosCirculo() {
    console.log(`Para una sala circular de radio ${radio} tenemos un perimetro de ${perimetroCirculo} y un area de ${areaCirculo}`);
}

mostrarResultadosCirculo();

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

let numeroMultiplar = 7;

function tablaDeMultiplicar(numero) {
    for (i = 0; i <= 10; i++){
        let resultado = i * numero;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
    return;
}

tablaDeMultiplicar(numeroMultiplar);

// Has sido encargado(a) de crear un pequeño programa para gestionar una lista de compras. El programa debe permitir que el usuario agregue elementos a la lista y luego mostrar el contenido de la lista en la pantalla. Además, el usuario debe poder ver un elemento específico de la lista ingresando el índice del elemento deseado.
