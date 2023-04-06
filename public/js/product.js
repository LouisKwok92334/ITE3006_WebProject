// let productParams = new URLSearchParams(window.location.search);
// let productID = urlParams.get("id");

const product = document.querySelector(".product-box-display");
const userData = [
    {
        "name": "HappyCat",
        "shortName": "@C.A.T",
        "score": "★★★★✩"
    },
    {
        "name": "EnergeticKangaroo",
        "shortName": "@JumpMaster",
        "score": "★★★★★"
    },
    {
        "name": "FearlessTiger",
        "shortName": "@RoarLoud",
        "score": "★★★★✩"
    },
    {
        "name": "FriendlyDolphin",
        "shortName": "@SeaExplorer",
        "score": "★★★✩✩"
    }
]

const productData = [
    {
        "name": "Apple Macbook Air",
        "price": 1200,
        "photo": "Macbook.jpg",
        "type": "Electronics",
        "userID": 2
    },
    {
        "name": "Nike Running Shoes",
        "price": 100,
        "photo": "nikeShoes.jpg",
        "type": "Fashion",
        "userID": 1
    },
    {
        "name": "Home Cleaning Service",
        "price": 80,
        "photo": "cleaningService.jpg",
        "type": "Services",
        "userID": 3
    },
    {
        "name": "Toyota Corolla",
        "price": 18000,
        "photo": "toyotaCorolla.jpg",
        "type": "Cars",
        "userID": 4
    },
    {
        "name": "2 Bedroom Apartment",
        "price": 250000,
        "photo": "apartment.jpg",
        "type": "Property",
        "userID": 5
    },
    {
        "name": "Herschel Wallet",
        "price": 30,
        "photo": "herschelWallet.jpg",
        "type": "Fashion",
        "userID": 10
    },
    {
        "name": "Samsung Galaxy S22",
        "price": 900,
        "photo": "galaxyS22.jpg",
        "type": "Electronics",
        "userID": 7
    },
    {
        "name": "Gucci Handbag",
        "price": 1200,
        "photo": "gucciHandbag.jpg",
        "type": "Fashion",
        "userID": 8
    },
    {
        "name": "Personal Trainer",
        "price": 50,
        "photo": "personalTrainer.jpg",
        "type": "Services",
        "userID": 9
    },
    {
        "name": "Honda Civic",
        "price": 22000,
        "photo": "hondaCivic.jpg",
        "type": "Cars",
        "userID": 10
    }
]


function setProduct() {
    for (let i = 0; i < productData.length; i++) {
        
    }
}