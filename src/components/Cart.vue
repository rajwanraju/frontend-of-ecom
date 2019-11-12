<template>

<div clas="col-md-3">

 <ul class="list-group">
<li class="list-group-item">
 <span class="item-name"> Item </span>
 
 <span class="item-price float-right">Price</span>
</li>
<li v-for="(item,index) in items" :key="index" class="list-group-item">
  <span class="item-name">{{item.title}}</span>
  <span class="item-price float-right">${{item.price}}</span>
 <button class="btn btn-sm btn-danger" @click="removeItem(index)">-</button>
</li>
<li class="list-group-item">
 <span class="item-name"> Totall </span>
 
 <span class="item-price float-right">${{ totalPrice }}</span>
</li>

<li class="list-group-item" v-if="items.length > 0">
<button @click="checkOut" class="btn btn-sn btn-success">Checkout</button>
</li>
 </ul>
</div>

</template>

<script>
export default{

// props: ['items'],
computed:{

    items(){

       return this.$store.getters.getCart
    },

    totalPrice(){
        var total = 0
        this.items.forEach(item => {

            total += parseInt(item.price);
            
        })
        return total
    }
},
methods:{

    removeItem(index){

        this.$store.commit('itemRemove',index)
    },
    checkOut(){
        if(confirm('Are You Sure to checkout?')){
            this.$store.commit('clearcart')
        }
    }
}

}


</script>

<style>


</style>