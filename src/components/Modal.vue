<template>
  <div class="box" v-if="showModal">
    <span v-if="cartItems.length == 0">No products :/</span>
    <div class="row mt-2">
        <div class="col-md-12" v-for="cartItem in cartItems" :key="cartItem.id">
            <div class="popup-item bg-white rounded mb-2 py-2">
                <div class="row">
                    <div class="col-3">
                        <div class="img-mine ml-1" :style="{backgroundImage: 'url('+cartItem.image+')'}"></div>
                    </div>
                    <div class="col py-1 ml-3">
                        <div class="cart-item">{{ cartItem.name }}</div>
                        <span class="mr-5 grey">Amount: {{ cartItem.quantity }}</span>
                        <span class="ml-4"> &#8358; {{ cartItem.price }},00</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="row align-items-center">
        <div class="col-8">
            <div class="price mt-2" v-if="itemPrices">
                Total Price: &#8358; {{ itemPrices }},00
            </div>
        </div>
        <div class="col">
            <div class="btn btn-primary mt-2 px-3 py-1" @click="gotoCart"> View cart</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        showModal() {
            return this.$store.getters.getShowModal;
        },
        cartItems() {
            return this.$store.getters.cartItems;
        },
        indistinctCart(){
            return this.$store.getters.allCartItems;
        },
        itemPrices() {
            let totalPrice = 0;
            this.indistinctCart.forEach(item => {
                totalPrice += item.price;
            })
            return totalPrice;
        }
    },
    methods: {
        showOrHideModal() {
            return this.$store.dispatch('showOrHideModal');
        },
        removeFromCart(cartItem) {
            return this.$store.dispatch('removeFromCart', cartItem);
        },
        addToCart(cartItem) {
            return this.$store.dispatch('addToCart', cartItem);
        },
        closeUp(cartItem){
            return this.$store.dispatch('closeUp', cartItem);
        }, 
        gotoCart() {
            this.$store.dispatch('showOrHideModal');
            return this.$router.push({name: 'cart'})
        }
    }
}
</script>

<style lang="scss">
.img-mine{
    height: 100px;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center, center;
    }

.box {
    width: 400px;
    height: auto;
    background-color: #fafafa;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1em .5em;
    position: absolute;
    right: 12rem;
    z-index: 100;
  }

  .box:after {
    content: '';
    z-index: 100;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    background: inherit;
    position: absolute;
    top: -15px;
    right: 15px;
  }

  .popup-item{
    font-size: 1rem;
    font-weight: bold;
    // height: 60px;
  }

  .cart-item{
      height: 70px;
  }

  .price{
      font-size: 1rem;
    //   font-weight: bold;
  }

  .grey {
      color: #cac8c8;
  }
</style>
