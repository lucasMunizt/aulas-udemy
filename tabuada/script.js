 document.getElementById('calcular').addEventListener("click", function(){
   const tabuada = document.getElementById('tabuada').value
   const multiplicar = document.getElementById('multiplicar').value
   const tabuadan = document.getElementById('numero-multiplicar')
   const imprimir = document.getElementById('test')

    for (let index = 1; index <= multiplicar; index++) {
        let val = tabuada * index
        console.log(val)
        imprimir.innerHTML += `<p>${tabuada} x ${index} = ${val}</p> <br>`

    }
    tabuadan.innerHTML = tabuada
    tabuada = ''
    multiplicar = ''


})

