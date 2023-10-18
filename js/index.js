import { renderedCards } from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)
const selectorAll = (selector) => $.querySelectorAll(selector)

const section_products = id('products')

const getAllProducts = async () => {
 const response = await fetch('https://fakestoreapi.com/products',{
    method: 'GET'
   })
const data = await response.json ()
renderedCards (data, section_products, 5)
}

getAllProducts ()
.then ((products) => renderedCards(products, section_products, 5))