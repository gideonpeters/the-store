<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-mine bg-dark">
        <div class="container-fluid">
            <div class="row align-items-center mx-auto">
                <div class="col-md-12">
                    <div class="navbar-nav">
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.all'}">All Products</router-link>
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.phones'}">SmartPhones</router-link>
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.books'}">Notebooks</router-link>
                        <router-link class="btn btn-primary py-1" :to="{name: 'cart'}">Cart
                            <i class="mdi mdi-cart"></i>
                        </router-link>
                            <div class="btn btn-circle" v-if="numberInCart">{{ numberInCart }}</div>
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
     }
 }
}
</script>

<style lang="scss" scoped>
ul{
    display: inline;
}

.btn{
    margin-left: 20rem;
    display: inline-block;
}

.navbar-nav{
    display: flex;
    justify-content: center;
}

.nav-item{
    color: white;
}

.bell{
    position: relative;
    top: -0.2rem;
    right: 0.6rem;
    background-color: white;
    color: black;
    font-size: 0.6rem;
    font-weight: bold;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
}

.btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
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


