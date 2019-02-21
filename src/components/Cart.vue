<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12" v-for="cartItem in cartItems" :key="cartItem.id">
                <cart-item :cartId="cartItem.id"
                            :cartItem="cartItem"
                            :cartName="cartItem.name"
                            :cartImg="cartItem.image"
                            :cartPrice="cartItem.price" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="bg-white p-4 rounded shadow-sm warning" v-if="cartItems.length == 0">
                    No product in the Cart yet.
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3 ml-auto">
                <div class="total-price mt-4" v-if="itemPrices">
                    Total Price: R$ {{ itemPrices }},00
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
        itemPrices() {
            let totalPrice = 0;
            this.cartItems.forEach(item => {
                totalPrice += item.price;
            })
            return totalPrice;
        }
    },
}
</script>

<style lang="scss">
.total-price{
    font-size: 1.2rem;
    font-weight: bold;
}

.warning{
    font-weight: bold;
    font-size: 1.2rem;
}
</style>
