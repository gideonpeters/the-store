import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
        {
            id: 1,
            name: 'Smartphone Xiaomi Mi A1 dual Andriod one 7.1',
            price: 1199,
            category: 'phone',
            quantity: 10,
            image: 'https://i.gadgets360cdn.com/products/large/1532429104_635_xiaomi_mi_a2.jpg',
        },
        {
            id: 2,
            name: 'Smartphone Samsung Galaxy s7 Edge',
            price: 1943,
            category: 'phone',
            quantity: 10,
            image: 'https://images-na.ssl-images-amazon.com/images/I/71a5okghrPL._SY550_.jpg',
        },
        {
            id: 3,
            name: 'Smartphone Moto G 5S Dual Chip Andriod 7.0',
            price: 929,
            category: 'phone',
            quantity: 10,
            image: 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/11519589/835611259/smartphone-motorola-moto-g5-plus-tv-xt1683-azul-com-32gb-tela-5-2-dual-chip-android-7-0-4g-camera-12mp-processador-octa-core-e-2gb-de-ram-11519589.jpg',
        },
        {
            id: 4,
            name: 'iPhone 8 Dourado 64GB Tela 4.7" iOS 11',
            price: 3949,
            category: 'phone',
            quantity: 10,
            image: 'https://http2.mlstatic.com/iphone-8-dourado-64gb-tela-47-ios-11-4g-wi-fi-cmera-12mp-D_NQ_NP_988008-MLB27067186327_032018-F.jpg',
        },
        {
            id: 5,
            name: 'Smartphone Motorola Moto G6 Plus',
            price: 1699,
            category: 'phone',
            quantity: 10,
            image: 'https://zdnet3.cbsistatic.com/hub/i/r/2018/05/14/08fb60b2-2a50-4e72-97d9-904dda2b8b5b/thumbnail/770x433/aca450e62396972ebf3b6cba079939e7/moto-g6-plus-header.jpg',
        },
        {
            id: 6,
            name: 'Smartphone Motorola Moto Z3 Play',
            price: 2999,
            category: 'phone',
            quantity: 10,
            image: 'https://www.bhphotovideo.com/images/images500x500/moto_pa9s0000us_moto_z3_play_64gb_1406219.jpg',
        },
        {
            id: 7,
            name: 'Notebook Lenovo Ideapad 320 Intel Core i5-7200u 8GB',
            price: 1199,
            category: 'notebook',
            quantity: 10,
            image: 'https://d3d71ba2asa5oz.cloudfront.net/50000171/images/80xm0000us-fb-rca1.jpg',
        },
        {
          id: 8,
            name: 'Notebook Dell Inspironi15-3567-A30P Intel Core 7a i5 4GB',
            price: 1499,
            category: 'notebook',
            quantity: 10,
            image: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133276/5/133276561SZ.jpg',  
        },
        {
            id: 9,
            name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
            price: 1399,
            category: 'notebook',
            quantity: 10,
            image: 'https://images-na.ssl-images-amazon.com/images/I/51eKsdLRrYL._SY355_.jpg',
        },
        {
            id: 10,
            name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
            price: 999,
            category: 'notebook',
            quantity: 10,
            image: 'https://images-na.ssl-images-amazon.com/images/I/81AhD58b0EL._SL1500_.jpg',
        },
        {
            id: 11,
            name: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
            price: 1199,
            category: 'notebook',
            quantity: 10,
            image: 'https://a-static.mlcdn.com.br/618x463/notebook-vaio-fit-15s-intel-core-i7-8gb-1tb-led-156-windows-10/magazineluiza/217301400/f5e5316a987670f2e3d5b433c151b471.jpg',
        },
        {
            id: 12,
            name: 'Notebook Dell Alienware -i7 16GB',
            price: 1199,
            category: 'notebook',
            quantity: 10,
            image: 'https://images.yaoota.com/WSFoC5I6dcPXLMDtBfw6lBdZteI=/trim/yaootaweb-production-ng/media/crawledproductimages/c47c5ac55cba90dd219ca9c90f1e46382b7602e2.jpg',
        }
    ],
    cartItems: [],
  },
  getters: {
    allProducts: state => {
        return state.products;
    },
    smartphoneProducts: state => {
        var smartphoneProducts = state.products.filter(product => {
            return product.category == 'phone'
        })

        return smartphoneProducts;
    },
    notebookProducts: state => {
        var notebookProducts = state.products.filter(product => {
            return product.category == 'notebook'
        })

        return notebookProducts;
    },
    cartItems: state => {
        var cartItems = state.cartItems;

        return cartItems;
    }
  },
  mutations: {
      addToCart: (state, payload) => {
          var cartItem = state.products.find(product => {
              return product == payload;
          })

          return state.cartItems.unshift(cartItem);
      },
      removeFromCart: (state, payload) => {
          var cartItem = state.products.find(product => {
            return product == payload;
          })
          var items = state.cartItems;
          return items.splice(items.indexOf(cartItem), 1)
      },
  },
  actions: {
    addToCart: ({ commit }, payload) => {
        commit('addToCart', payload);
    },
    removeFromCart: ({ commit }, payload) => {
        commit('removeFromCart', payload);
    },
  }
})