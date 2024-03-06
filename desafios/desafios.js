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
    for (i = 1; i < numeroDeseado; i++ ){
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
let area = calcularArea(base,altura);
let perimetro = calcularPerimetro(base,altura);

function calcularArea(base,altura) {
    return base*altura;
}

function calcularPerimetro(base,altura) {
    return 2*(base+altura);
}

function mostrarResultados(){
    alert(`Para una sala rectangular de base ${base} y altura ${altura} tenemos un perimetro de ${perimetro} y un area de ${area}`)
}

mostrarResultados();

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

let radio = 25;
const pi =3.14;
let areaCirculo = calcularAreaCircular(radio);
let perimetroCirculo = calcularPerimetroCircular(radio);

function calcularAreaCircular(radio) {
    return pi*radio**2
}

function calcularPerimetroCircular(radio) {
    return 2*pi*radio;
}

function mostrarResultadosCirculo() {
    alert(`Para una sala circular de radio ${radio} tenemos un perimetro de ${perimetroCirculo} y un area de ${areaCirculo}`)
}

mostrarResultadosCirculo();

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

let numeroMultiplar = 4;

function tablaDeMultiplicar(numero) {
    for (i = 0; i < 11; i++){
        let resultado = i * numero;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
    return;
}

tablaDeMultiplicar(numeroMultiplar);

