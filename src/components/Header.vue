<template>
  <div class="that-nav">
    <nav class="navbar navbar-expand-lg navbar-mine bg-dark">
        <div class="container-fluid">
            <div class="row align-items-center mx-auto">
                <div class="col-md-12">
                    <div class="navbar-nav">
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.all'}">All Products</router-link>
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.phones'}">SmartPhones</router-link>
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.books'}">Notebooks</router-link>
                        <div class="btn btn-primary py-1" @click="showOrHideModal">Cart
                            <i class="mdi mdi-cart"></i>
                            <div class="btn btn-circle" v-if="numberInCart">{{ numberInCart }}</div>
                        </div>
                    </div>
                </div>    
            </div>  
        </div>
    </nav>
  </div>
</template>

<script>
export default {
 computed: {
     numberInCart() {
         let cartNumber = this.$store.getters.cartItems.length;
         return cartNumber;
     },
     showModal() {
         return this.$store.getters.getShowModal;
     }
 },
 methods: {
    showOrHideModal() {
        // console.log(this.showModal)
        return this.$store.dispatch('showOrHideModal');
    }
 }
}
</script>

<style lang="scss" scoped>
.that-nav{
    z-index: 90;
}

ul{
    display: inline;
}

.btn{
    margin-left: 20rem;
    display: inline-block;
    z-index: 95;
}

.navbar-nav{
    display: flex;
    justify-content: center;
}

.nav-item{
    color: white;
}

.btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: 2px;
    background-color: #fff;
    color: #000;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
}
</style>


