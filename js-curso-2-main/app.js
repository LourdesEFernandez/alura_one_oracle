let title = document.querySelector('h1');
title.innerHTML = 'Hora del desafío';

function buttonConsole(){
    console.log('El boton fue clickeado.');
};


function buttonAlerts(){
    alert('Yo amo js.');
};

function buttonPrompt(){
    let ciudad = prompt('Dime el nombre de una ciudad de Brasil: ');

    alert(`Estuve en ${ciudad} y me acorde de ti.`);
};

function buttonSuma(){
    let num1 = parseInt(prompt('Introduce el primer número para la operación: '));
    let num2 = parseInt(prompt('Introduce el segundo número para la operación: '));
    suma = num1+num2;
    alert(`El resultado de la suma es ${suma}`);
};