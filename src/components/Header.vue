<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-mine bg-dark">
        <div class="container">
            <div class="row justify-content-center ml-auto">
                <div class="col-md-12">
                    <div class="navbar-nav">
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.all'}">All Products</router-link>
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.phones'}">SmartPhones</router-link>
                        <router-link class="nav-item nav-link mr-5" active-class="active" exact :to="{name: 'product.books'}">Notebooks</router-link>
                        <router-link class="btn btn-primary py-1 mr-5" :to="{name: 'cart'}">Cart
                            <i class="mdi mdi-cart"></i>
                        </router-link>
                    </div>
                </div>    
            </div>  
        </div>
    </nav>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
ul{
    display: inline;
}

.btn{
    margin-left: 500px;
}

.nav-item{
    color: white;
}
</style>


