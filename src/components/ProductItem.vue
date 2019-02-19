<template>
    <div class="product-card p-2 rounded shadow-sm mb-4">
        <div class="row">
            <div class="col">
                <div class="img m-2" :style="{backgroundImage: 'url('+productImg+')'}"></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="product-name mx-3 mt-3">
                    {{ productName }}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-7">
                <div class="product-price  pt-2 mx-3">
                    R$ {{ productPrice }}
                </div>
            </div>
            <div class="col-5">
                <div class="product-qty  pt-2 mx-3">
                    {{ productQty }}
                </div>
            </div>
        </div>
        <div class="row my-2 mx-3  justify-content-center">
            <button class="btn btn-primary btn-block py-2 px-5 mt-2"> Add to Cart <i class="mdi mdi-cart"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'productName',
        'productImg',
        'productPrice',
        'productQty',

    ],
}
</script>


<style lang="scss" scoped>
.img{
    min-height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center, center;
}

.product-card{
    background-color: white;

    .product-name{
        height: 50px;
        font-size: 0.95rem;
        font-weight: bold;
    }

    .product-price{
        font-size: 0.85rem;
        font-weight: bold;
    }

    .product-qty{
        font-size: 0.85rem;
        font-weight: bold;
    }
}

.btn{
    font-size: 0.9rem;
}

.btn-primary{
    background-color: rgb(61, 204, 61);
    border-color: rgb(61, 204, 61);
}
</style>
