<template>
    <div class="cart-card shadow-sm rounded mt-3">
        <div class="row align-items-center">
            <div class="col-1">
                <div class="img ml-2 my-2" :style="{backgroundImage: 'url('+cartImg+')'}"></div>
            </div>
            <div class="col-7">
                <div class="font-weight-bold">
                    {{ cartName }}
                </div>
            </div>
            <div class="col-1">
                <div class="font-weight-bold">
                    <i class="mdi mdi-plus-circle grey-icon" @click="addToCart" ></i>  {{ cartQty }}  <i class="mdi mdi-minus-circle grey-icon" @click="removeFromCart"></i>
                </div>
            </div>
            <div class="col-2">
                <div class="font-weight-bold">
                    &#8358; {{ cartPrice }},00
                </div>
            </div>
            <div class="col-1">
                <div class="icon" @click="closeUp">
                    <i class="mdi mdi-close"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'cartId',
        'cartName',
        'cartPrice',
        'cartImg',
        'cartItem',
        'cartQty',
    ],
    computed: {
        indistinctCart(){
            return this.$store.getters.allCartItems;
        },
    },
    methods: {
        removeFromCart() {
            return this.$store.dispatch('removeFromCart', this.cartItem);
        },
        addToCart() {
            return this.$store.dispatch('addToCart', this.cartItem);
        },
        closeUp(){
            return this.$store.dispatch('closeUp', this.cartItem);
        }
    }
}
</script>


<style lang="scss" scoped>
.cart-card{
    background-color: white;

    .img{
    height: 50px;
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center, center;
    }

    .grey-icon{
        color: rgb(224, 221, 221);
        cursor: pointer;
    }

    .icon{
        height: 19px;
        width: 19px;
        display: flex;
        justify-content: center;
        border-radius: 50%;
        background-color: rgb(224, 221, 221);
        font-size: 0.9rem;
        font-weight: bold;
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
}
</style>

