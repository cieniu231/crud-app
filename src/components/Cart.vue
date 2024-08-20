<script>

import Cartitem from "./Cartitem.vue"
import CartService from "../services/cart.service.js"


  export default{
    name: 'cart',
    components: {'Cartitem': Cartitem},

    data() {
      return {  
        items: [],
        totalPrice: 0,
      };
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      itemsInCart () {
        return this.$store.state.cartStore.count
      }
    },
    methods: {
      removeItem(itemId,userId, itemPrice){
        CartService.deleteItem(itemId, userId);
        this.$store.commit("cartStore/decrement");

        if(itemPrice > 0){
         this.totalPrice = Number(this.totalPrice) - Number(itemPrice); 
         console.log(typeof(this.totalPrice)) 
        }
        
      },
      retrieveItems(id){
        CartService.getCart(id)
        .then(response => {
          console.log(response.data.length);
          this.$store.commit("cartStore/setValue", response.data.length);
          
          response.data.forEach((item,index) => {
            console.log(item.itemPrice);
            this.totalPrice += parseInt(item.itemPrice);
            console.log(this.totalPrice);
            if(this.items.length == 0){
              let itemId;
              let quantity;
              let itemPrice;
              let itemName;
              itemId = response.data[0].itemId;
              quantity = 1;
              itemPrice = response.data[0].itemPrice;
              itemName = response.data[0].itemName;
              this.items.push({"itemId":itemId, "quantity":quantity, "itemPrice":itemPrice, "itemName":itemName});
            }else{
              var found = 0;
              this.items.forEach((sortedItem) => {
                if(sortedItem.itemId == item.itemId){
                  sortedItem.quantity++;
                  found = 1;
                  
                }                  
              })
              if(found == 0){
                  let itemId;
                  let quantity;
                  let itemPrice;
                  let itemName;
                  itemId = item.itemId;
                  quantity = 1;
                  itemPrice = item.itemPrice;
                  itemName = item.itemName;
                  this.items.push({"itemId":itemId, "quantity":quantity, "itemPrice":itemPrice, "itemName":itemName});                  
              }
            }
            
          })
          console.log(this.items);
          console.log("totalPrice: ", this.totalPrice)
          console.log(typeof(this.totalPrice))

        }
      )
        .catch(e => {
          console.log(e);
        });
      }
    },
    mounted() {
      
      this.retrieveItems(this.currentUser.id);
      
    }
  }
</script>

<template>
    <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->
    
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>
    
          <div class="mt-8">
            <ul class="space-y-4">
              <Cartitem v-for="item in this.items" :price=item.itemPrice :quantity=item.quantity :name=item.itemName :itemId="item.itemId" @removeItem="removeItem(item.itemId, this.currentUser.id, item.itemPrice)" />
              
              
            </ul>
    
            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">

                <dl class="space-y-0.5 text-sm text-gray-700">
                <!--
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>
    
                  <div class="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>
    
                  <div class="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>
                -->
                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{{this.totalPrice}} PLN</dd>
                  </div>
                </dl>
                <!--
                <div class="flex justify-end">
                  <span
                    class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
    
                    <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
                  </span>
                </div>
    
                <div class="flex justify-end">
                  <a
                    href="#"
                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

