<template>
    <div>
        <div class="row m-4">
            <div class="col-3">
                <div class="">
                    <product-item :productName="product.name"
                            :theProduct="product"
                            :productId="product.id"
                            :productImg="product.image"
                            :productPrice="product.price"
                            :productStock="product.stock" />
                </div>
            </div>
            <div class="col">
                <div class="">
                    Buy
                </div>
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
        product(){
            var id = this.$route.params.id;
            return this.$store.getters.getProductById(id);
        }
    }
}
</script>

