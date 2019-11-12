<template>

<div v-if='item' class="row">
<div class="card">
	<div class="row">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="#"><img :src="item.photo"></a></div>
</div> <!-- slider-product.// -->

</article> <!-- gallery-wrap .end// -->
		</aside>
		<aside class="col-sm-7">
<article class="card-body p-5">
	<h3 class="title mb-3">{{item.title}}</h3>

<p class="price-detail-wrap"> 
	<span class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">{{item.price}}</span>
	</span>  
</p> <!-- price-detail-wrap .// -->
<dl class="item-property">
  <dt>Description</dt>
  <dd><p>{{item.description}} </p></dd>
</dl>


	<a href="#" class="btn btn-lg btn-primary text-uppercase"> Buy now </a>
	<a @click="addToCard(item)" class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Add to cart </a>
</article> <!-- card-body.// -->
		</aside> <!-- col.// -->
	</div> <!-- row.// -->
</div>

</div>

<div class="loader" v-else></div>

</template>

<script>
import axios from "axios"
export default {
    data( ) {
        return{
            item: null,
            loading: true,
        }
    },
      mounted: function() {
            this.fetchItem()
        },
    methods: {
        fetchItem(){
            var self = this
            axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response => {
               setTimeout(() => {
        self.item = response.data,
        self.loading = false
        }, 100);
            })
        },
        addToCard(item){
       // this.$emit('newitemAdded',item)
       this.$store.dispatch('addToCart',item)

    },
    },
      
}
</script>

<style>
.gallery-wrap .img-big-wrap img {
    height: 450px;
    width: auto;
    display: inline-block;
    cursor: zoom-in;
}


.gallery-wrap .img-small-wrap .item-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden;
}

.gallery-wrap .img-small-wrap {
    text-align: center;
}
.gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
    cursor: zoom-in;
}
</style>