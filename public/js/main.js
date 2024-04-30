
const boton = document.createElement('button')

boton.textContent = 'mi Botón'

document.body.append(boton)

boton.addEventListener('click', ()=> {
    fetch('/api/users')
        .then(response => response.json())
        .then(data => console.log(data.payload))
})
