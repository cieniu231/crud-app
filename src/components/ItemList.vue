<script >

import Item from './Item.vue';
import TutorialDataService from "../services/TutorialDataService.js"
import { ref, onUpdated, nextTick, watchEffect } from 'vue'


export default {
    name: "items-list",
    components: {'Item' : Item},
    props:['categoryItem'],
    
    data() {
        return {
            items: [],
            shoes: [],
            currentItem: null,
            currentIndex: -1,
            title: "",

        };
    },
    watch:{
        categoryItem (to, from){
            this.retrieveCategory(to);
            console.log("watcher")
            console.log(this.categoryItem)
            console.log(to)
            this.retrieveCategory(to);
            location.reload();

        }
    },
    methods: {
        
        retrieveItems(){
            TutorialDataService.getAll()
                .then(response => {
                    this.shoes = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });

        },
        retrieveCategory(category){
            TutorialDataService.getBycategory(category)
                .then(response => {
                    this.shoes = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },       
      
    },
    mounted() {
        this.retrieveCategory(this.categoryItem);
        console.log("mounted")
    },
    
        
    
};

</script>

<template>
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    
    <!--  <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> -->
    
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <Item v-for="item in this.shoes" :brand=item.brand :price= item.price :title=item.title :id=item.id :category=this.categoryItem /> 
    </div>
  </div>
</div>
    
</template>



