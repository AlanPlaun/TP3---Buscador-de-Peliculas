console.log("Hago consulta - fetch")
fetch("http://www.omdbapi.com/?apikey=[yourkey]&")
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("valores");
        res.forEach(actual => {
            if (actual.compra && actual.venta) {
                dolar = document.createElement("li")
                dolar.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                valores.appendChild(dolar)    
            }            
        })
    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")

