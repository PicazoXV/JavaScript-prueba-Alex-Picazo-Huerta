let quien = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let accion = ['ate', 'peed', 'crushed', 'broke'];
let que = ['my homework', 'my phone', 'the car'];
let cuando = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generadorExcusa (quien, accion, que, cuando) {
    numWho = Math.floor(Math.random() * quien.length);
    numAction = Math.floor(Math.random() * accion.length);
    numWhat = Math.floor(Math.random() * que.length);
    numWhen = Math.floor(Math.random() * cuando.length);
    return quien[numWho] + " " + accion[numAction] + " " + que[numWhat] + " " + cuando[numWhen];
}

function onLoad() {
    var excusa = document.getElementById("excuse");
    excusa.innerHTML = generadorExcusa(quien, accion, que, cuando);
    
}

window.onload = onLoad;