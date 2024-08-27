const boton = document.getElementById('boton');
boton.addEventListener('click', function modificarH1(){
    let extra = document.getElementById('extra');
    let nuevoEl = document.createElement('h2');
    nuevoEl.innerHTML = 'Hola!';
    nuevoEl.setAttribute('class', 'extraH2');
    extra.append(nuevoEl);
});