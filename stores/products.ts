import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {

    const products = [
        { 'name': 'Uniforme Stellae Gaming', 'price': '115,00', 'link': 'https://rasquigg.com.br/produtos/uniforme-stellae-gaming/', 'image': 'https://acdn.mitiendanube.com/stores/004/239/509/products/marcadaguasitefrente-e58cc86208b03e0ca517082067827427-640-0.webp' },
        { 'name': 'Manguito Stellae Gaming', 'price': '50,00', 'link': 'https://rasquigg.com.br/produtos/manguito-stellae-gaming/', 'image': 'https://acdn.mitiendanube.com/stores/004/239/509/products/30-b05cbbc65f9f21aeb217082070862263-640-0.webp' },
    ]

    return {
        products
    }
})