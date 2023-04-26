console.log("Hago consulta - axios");
    console.log("Hago async consulta - axios")
    axios({
        method: 'get',
        url: 'https://dummyjson.com/products',
    })
    .then(res => {
        console.log("res", res)
        const productos = document.getElementById("productos");
        res.data.products.forEach(actual => {
            console.log(actual.title)
            const card = document.createElement("div")
            card.classList.add("card")
            card.classList.add("cardw")
            const imagen  = document.createElement("img")     
            imagen.src = actual.thumbnail
            imagen.classList.add("card-img-top")
            card.appendChild(imagen)
            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body")
            const cardText = document.createElement("p")
            cardText.classList.add("card-text")
            cardText.innerHTML = `Nombre: ${actual.title} - Descripcion: ${actual.description} `
            cardBody.appendChild(cardText)
            card.appendChild(cardBody)
            productos.appendChild(card)
    
             
        })
    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - axios")




/*

<div id="cards" class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="..." id="imagen">
<div class="card-body">
  <p class="card-text"></p>
</div>
</div>*/