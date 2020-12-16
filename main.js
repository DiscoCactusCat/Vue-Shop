const app = new Vue({
    el: "#app",
    data:  function(){
        return {
            pageTitle: "Cat shop",
            productHeadTitle: "I'm so proud !",
            productBodyTitle: "My Products",

            products: [
                {
                    price: 20,
                    title: "Bouteille isotherme",
                    description: "Gardez vos boissons bien chaudes toute la journée",
                    stock: 100,
                    image: "./products/bouteille-isotherme-monbento-cuivre-orange.png",
                    hovered: null,
                    tags: {
                        Type: "Luxe",
                        Material: "Inox"
                    }
                },
                {
                    price: 50,
                    title: "Bento rose simple",
                    description: "Description",
                    stock: 1,
                    image: "./products/mb-original-rose-flamingo.jpg",
                    hovered: null,
                    tags: {
                        Type: "Basic",
                        Material: "Inox"
                    }
                },
                {
                    price: 70.5,
                    title: "Bento deluxe en bois",
                    description: "Description",
                    stock: 0,
                    image: "./products/square-bois-iso.png",
                    imageHover: "./products/square-bois-exploded.png",
                    hovered: null,
                    tags: {
                        Type: "Luxe",
                        Material: "Wood"
                    }
                }
            ],

            cart: [

            ],
            cartTotal: 0,
           
            discountCode: '',
            cartIsShowed: true,
            
        }

    },

    methods: {
       addToCart(product){
           this.cart.push(product);
           this.cartTotal += product.price;
       },
      
      
    },

    computed: {
        
        cartWithSale(){
            return (this.cartTotal * this.saleAmount).toFixed(2);
        },
        saleAmount(){
            return this.discountCode === "noel2020" ? 0.8 : 1;
        },
        animated(){
            return this.cartIsShowed ? 'animateIn' : 'animateOut';
        }
    },
})