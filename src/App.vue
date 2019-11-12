<template>
  <div id="app">
    <!-- <router-link :to="{path:'/'}">Home</router-link>
    <router-link :to="{path:'/test/1'}">Test1</router-link>
    <router-link :to="{path:'/test/2'}">Test2</router-link>
    <router-link :to="{path:'/test/3'}">Test3</router-link>
 -->

 <navbar @searchData="search"></navbar>
<div class="container">
<div class="row">
  <router-view></router-view>
<!-- <Inventory @newitemAdded="addCartItem" :items="items"></Inventory> -->
<Cart @itemRemove="reoveItem" :items="cart"></Cart>


</div>
  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Inventory from './components/Inventory'
import Cart from './components/Cart'
import data from './data.js'

export default {

  components: { Navbar, Cart },
  data(){
 return {
items: [],
cart: []

 }

  },
  mounted(){
   this.items = data
  },
  methods:{

    search(keyword){

      this.items = data.filter(item=>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },

    addCartItem(item){
this.cart.push(item)

    },

    reoveItem(index){

      this.cart.splice(index,1)
    }
  }
  
}
</script>

<style>
.container{
padding-top: 10px;

}
</style>
