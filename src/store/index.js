export const storage={
    state: {
        inventory:[],
        cart:[]
    },
    getters:{
        getInventory(state){
            return state.inventory
        },
        getCart(state){
            return state.cart
        },
        
    },
    mutations:{
        setInventory(state,payload){
            state.inventory = payload
        },
      addToCart(state, payload){
          state.cart.push(payload)
      },
      itemRemove(state,payload){
          state.cart.splice(payload,1)
      },
      clearcart(state){
          state.cart=[]
      }
    },
    actions:{
        addToCart(context,payload){
            context.commit('addToCart',payload)
        }
    }
}