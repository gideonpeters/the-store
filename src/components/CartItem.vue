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
            <div class="col-3">
                <div class="font-weight-bold">
                    &#8358; {{ cartPrice }},00
                </div>
            </div>
            <div class="col-1">
                <div class="icon" @click="removeFromCart">
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
    ],
    methods: {
        removeFromCart() {
            return this.$store.dispatch('removeFromCart', this.cartId);
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
    }
}
</style>

