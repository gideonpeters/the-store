<template>
    <div class="container p-5">
        <div class="row justify-content-center">
            <div class="col-md-4" v-for="product in allProducts" :key="product.id">
                <product-item :productName="product.name"
                            :theProduct="product"
                            :productId="product.id"
                            :productImg="product.image"
                            :productPrice="product.price"
                            :productQty="product.quantity" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    components: {
        'product-item': ProductItem,
    },
    computed: {
        allProducts() {
            return this.$store.getters.allProducts;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


