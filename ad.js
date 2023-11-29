let numero = Math.floor( Math.random() * 100);

let jugador = prompt("Adivina el número");
jugador = parseInt(jugador);
let intentos = 0
let resultado = jugador - numero;

while (jugador !== numero ) {
    while (jugador > 101 && jugador !==111){
        alert("solo se puede selecionar numeros de l al 100")
        jugador = prompt ("Adivina el numero")
    }
if (jugador <100){
if (Math.abs(resultado) < 2) {
        alert("Estás extremadamente cerca");
    } else if (Math.abs(resultado) <= 5) {
        alert("Estás muy cerca.");
} else if (Math.abs(resultado) <= 10) {
    alert("Estás cerca.");
    } else if (Math.abs(resultado) <= 15) {
        alert("Te falta un poco para estar cerca.");
} else if (Math.abs(resultado) <= 20) {
    alert("Estás en un punto intermedio.");
    } else if (Math.abs(resultado) <= 30) {
        alert("Estás bastante lejos.");
} else if (Math.abs(resultado) <= 40) {
    alert("Estás lejos.");
    } else if (Math.abs(resultado) <= 50) {
        alert("Estás muy lejos.");
    }else if (Math.abs(resultado) > 50 ){
    alert ("Estas extremadamente lejos.")
}}
if (jugador ===111){
    alert(numero);
    break
}
    intentos ++
    jugador = prompt("Adivina el número");
    jugador = parseInt(jugador);
    resultado = jugador - numero;

if (jugador === numero) {
    break;    }
}
if (jugador === numero){
    alert("¡Ganaste! en "+intentos+" intentos.")
}
