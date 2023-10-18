export const renderedCards = (array, contenedor, cant=20) => {
    console.log (19);
    array.slice(0,cant).map ( item => {
        contenedor.innerHTML += `
      <div class="card">
          <img src='${item.image}' alt=${item.title}>
          <div class="card-content">
             <h3 class="card-title">${item.title}</h3>
             <p class="card-text">${item.price}</p>
             <button class="card-button" id='btn-add-${item.id}'>Agregar al carrito</button>
         </div>
      </div>
    `
    })
}

export const getAllProducts = async (url) => {
    const response = await fetch(url,{
        method: 'GET'
    })
const data = await response.json()
return data;
}


