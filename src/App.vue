<script setup>
import StoreNavigation from './components/StoreNavigation.vue'
import ItemList from './components/ItemList.vue'
import ItemDetail from './components/ItemDetail.vue'
import Item from './components/Item.vue'
import Cart from './components/Cart.vue'
import SignIn from './components/SignIn.vue'
import CreateAccount from './components/CreateAccount.vue'
</script>

<template>
  
  
  <header>

   
  </header>

  <main> 
    <StoreNavigation />
    
    <ItemList/>
  



  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
