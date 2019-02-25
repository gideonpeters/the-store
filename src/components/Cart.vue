<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <div class="cart-title">My Cart</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" v-for="cartItem in cartItems" :key="cartItem.id">
                <cart-item :cartId="cartItem.id"
                            :cartItem="cartItem"
                            :cartName="cartItem.name"
                            :cartQty="cartItem.quantity"
                            :cartImg="cartItem.image"
                            :cartPrice="cartItem.price" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="bg-white p-4 rounded shadow-sm warning mt-4" v-if="cartItems.length == 0">
                    No product in the Cart yet.
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 ml-auto">
                <div class="total-price mt-4" v-if="itemPrices">
                    Total Price: &#8358; {{ itemPrices }},00
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
    components: {
        'cart-item': CartItem,
    },
    computed: {
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
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.total-price{
    font-size: 1.2rem;
    font-weight: bold;
}

.warning{
    font-weight: bold;
    font-size: 1.2rem;
}

.cart-title{
    font-weight: bold;
    font-size: 3rem;
}
</style>
