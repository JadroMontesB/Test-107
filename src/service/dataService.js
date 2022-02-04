var catalog = [

    {   
        id: "01_Bit",
        title: "Bitcoin",
        img: "bitcoin.png",
        price: 36932.30,
        category: "cryptocurrencies"
    },

    {
        id: "02_Ethe",
        title: "Ethereum",
        img: "ethe.png",
        price: 2658.31,
        category: "cryptocurrencies"
    },

    {
        id: "03_Shiba",
        title: "Shiba Inu",
        img: "shiba.png",
        price: 0.00002060,
        category: "cryptocurrencies"
    },

    {
        id: "04_Dog",
        title: "Doge Coin",
        img: "dog.png",
        price: 0.14,
        category: "cryptocurrencies"
    },

    {
        id: "01_Shirt",
        title: "Crypto Shirt",
        img: "shirt.jpeg",
        price: 16.99,
        category: "clothing"
    },

    {
        id: "02_Swe",
        title: " Ethereum Sweatshirt",
        img: "swe.jpg",
        price: 25.99,
        category: "clothing"
    },

    
    {
        id: "01_te_Doge",
        title: "Doge Teddy",
        img: "teddy_Doge.jpg",
        price: 10,
        category: "Teddies"
    },

    {
        id: "02_te_Shiba",
        title: "Shiba Teddy",
        img: "teddy_Shiba.jpg",
        price: 10,
        category: "teddies"
    },

]

class  DataService {

    getCatalog(){


        return catalog;
    }
    
    registerProduct(){
        
    }
}

export default DataService;