import { renderedCards, getAllProducts } from "./funciones.js"
const $ = document
const id = (id) => $.getElementById(id)
const selectorAll = (selector) => $.querySelectorAll(selector)

const container_allproducts = id('products')

getAllProducts('http://fakestoreapi.com/products')
.then(products => renderedCards(products, container_allproducts))
