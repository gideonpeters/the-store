<template>
    <div>
        <div class="jumbotron container">
            <h1 class="display-4">Welcome!</h1>
            <p class="lead">This is a simple product store designed by Gideon Peters.</p>
            <hr class="my-4">
            <p>It uses VueRouter and Bootstrap</p>
            <router-link class="btn btn-primary btn-lg">View All Products</router-link>
        </div>

        <div class="row">
            <div class="col">
                <div></div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: require(''),
        }
    }
}
</script>

