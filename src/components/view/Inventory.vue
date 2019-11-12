<template>
<div class="row"  v-if="!loading">

<div v-for="(item,index) in items" :key="index" class="card" style="width: 18rem;">
  <router-link tag="div" :to="{path:'/item/'+item.id}">
  <img :src="item.photo" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">${{item.price}}</p>
  </div>
  </router-link>
  <div class="card-footer">
     <a @click="addToCard(item)" class="btn btn-success">Add</a>
  </div>
</div>

</div>
<div class="loader" v-else></div>
</template>

<script>
 import axios from 'axios'

export default {

data(){
  return{

loading: true
  }
},
computed: {
  items(){
    return this.$store.getters.getInventory
  }
},
mounted() {
  this.fetchItems()
},
methods:{

    addToCard(item){
       // this.$emit('newitemAdded',item)
       this.$store.dispatch('addToCart',item)

    },

    fetchItems(){

      var self = this
      axios.get('http://localhost:3000/items').then(response =>{
        setTimeout(() => {
        self.$store.commit('setInventory',response.data)
        self.loading = false
        }, 100);
        
      })
    }
}
    
}


</script>

<style>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>