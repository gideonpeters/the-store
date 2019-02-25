<template>
    <div class=" container p-5">
        <div class="row justify-content-center">
            <div class="col-md-4" v-for="product in notebooks" :key="product.id">
                <product-item :productName="product.name"
                            :theProduct="product"
                            :productId="product.id"
                            :productImg="product.image"
                            :productPrice="product.price"
                            :productStock="product.stock" />
            </div>
        </div>
    </div>
</template>


<script>
import ProductItem from "./ProductItem";

export default {
    components: {
        'product-item': ProductItem,
    },
    data() {
        return {
            
        }
    },
    computed: {
        notebooks() {
            return this.$store.getters.notebookProducts;
        }
    }
}
</script>
