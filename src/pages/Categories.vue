<template>
    <Navigation @search="handelSearch"></Navigation>
    <!-- products -->
     
      <div v-if="items">
     <!-- <div class="grid grid-cols-6 gap-y-10 place-items-center mt-10 mx-10">
        <div v-for="(item, index) in items[0].foods"
             :key="index">
             <div class="all-transition duration-400 hover:border-3 hover:border-red-300 hover:rounded-xl">
             <div class="bg-gray-100 w-60 rounded-xl flex justify-center py-3">
             <img :src="item.image" class="w-55">
            </div>
             <div class="flex gap-x-2 mt-3">
                <img :src="item.icon1" class="w-15 h-5">
                <span class="text-orange-500">{{ item.name1 }}</span>
                <span class="font-bold">{{ item.name2 }}</span>
             </div>
             
             <div class="flex gap-x-2 mt-2">
             <img :src="item.icon2" class="w-3">
             <span class="text-orange-700 text-sm">{{ item.name3 }}</span>
             </div>
             <div class="mt-3 text-gray-500 font-bold text-sm">{{ item.name4 }}</div>
             <div class="mt-3 flex gap-x-25 bg-red-50 w-60 p-1">
                <div class="text-xl font-bold text-red-500 tracking-wider">{{ item.price }}</div>
                <img :src="item.icon3" class="w-8">
             </div>
            </div>
            
        </div>
    </div> -->
   
    <!-- food -->
    <div class="grid grid-cols-6 gap-y-10 place-items-center mt-10 mx-10">
        <RouterLink :to="{name: 'details', query: {item: JSON.stringify(item)}}"
             v-for="(item, index) in items[0].foods"
             :key="index">
             <div class="all-transition duration-400 hover:border-3 hover:border-red-300 hover:rounded-xl">
             <div class="bg-gray-100 w-60 rounded-xl flex justify-center py-3">
             <img :src="item.image" class="w-55">
            </div>
             <div class="flex gap-x-2 mt-3">
                <img :src="item.icon1" class="w-15 h-5">
                <span class="text-orange-500">{{ item.name1 }}</span>
                <span class="font-bold">{{ item.name2 }}</span>
             </div>
             
             <div class="flex gap-x-2 mt-2">
             <img :src="item.icon2" class="w-3">
             <span class="text-orange-700 text-sm">{{ item.name3 }}</span>
             </div>
             <div class="mt-3 text-gray-500 font-bold text-sm">{{ item.name4 }}</div>
             <div class="mt-3 flex gap-x-25 bg-red-50 w-60 p-1">
                <div class="text-xl font-bold text-red-500 tracking-wider">{{ item.price }}</div>
                <img :src="item.icon3" class="w-8">
             </div>
            </div>
        </RouterLink> 
    </div>


    <!-- kitchen -->
    <div class="grid grid-cols-6 gap-y-10 place-items-center mt-10 mx-10">
        <RouterLink :to="{name: 'details', query: {item: JSON.stringify(item)}}"
        v-for="(item, index) in items[0].kitchen"
             :key="index">
             <div class="all-transition duration-400 hover:border-3 hover:border-red-300 hover:rounded-xl">
             <div class="bg-gray-100 w-60 rounded-xl flex justify-center py-3">
             <img :src="item.image" class="w-55">
             </div>
             <div class="flex gap-x-2">
                <img :src="item.icon1" class="w-15 h-5">
                <span class="text-orange-500">{{ item.name1 }}</span>
                <span class="font-bold">{{ item.name2 }}</span>
             </div>
             
             <div class="flex gap-x-2 mt-2">
             <img :src="item.icon2" class="w-3">
             <span class="text-orange-700 text-sm">{{ item.name3 }}</span>
             </div>
             <div class="mt-3 text-gray-500 font-bold text-sm">{{ item.name4 }}</div>
             <div class="mt-3 flex gap-x-25 bg-red-50 w-60 p-1">
                <div class="text-xl font-bold text-red-500 tracking-wider">{{ item.price }}</div>
                <img :src="item.icon3" class="w-8">
             </div>
            </div>
            
        </RouterLink>
    </div>
    
    <!-- menproducts -->
    <div class="grid grid-cols-6 gap-y-10 place-items-center mt-10 mx-10">
        <RouterLink :to="{name: 'details', query: {item: JSON.stringify(item)}}"
        v-for="(item, index) in items[0].menproducts"
             :key="index">
             <div class="all-transition duration-400 hover:border-3 hover:border-red-300 hover:rounded-xl">
             <div class="bg-gray-100 w-60 rounded-xl flex justify-center py-3">
             <img :src="item.image" class="w-55">
             </div>
             <div class="flex gap-x-2">
                <img :src="item.icon1" class="w-15 h-5">
                <span class="text-orange-500">{{ item.name1 }}</span>
                <span class="font-bold">{{ item.name2 }}</span>
             </div>
             
             <div class="flex gap-x-2 mt-2">
             <img :src="item.icon2" class="w-3">
             <span class="text-orange-700 text-sm">{{ item.name3 }}</span>
             </div>
             <div class="mt-3 text-gray-500 font-bold text-sm">{{ item.name4 }}</div>
             <div class="mt-3 flex gap-x-25 bg-red-50 w-60 p-1">
                <div class="text-xl font-bold text-red-500 tracking-wider">{{ item.price }}</div>
                <img :src="item.icon3" class="w-8">
             </div>
            </div>
            
        </RouterLink>
    </div>

    <!-- game -->
    <div class="grid grid-cols-6 gap-y-10 place-items-center mt-10 mx-10">
        <RouterLink :to="{name: 'details', query: {item: JSON.stringify(item)}}"
         v-for="(item, index) in items[0].game"
             :key="index">
             <div class="all-transition duration-400 hover:border-3 hover:border-red-300 hover:rounded-xl">
             <div class="bg-gray-100 w-60 rounded-xl flex justify-center py-3">
             <img :src="item.image" class="w-55">
             </div>
             <div class="flex gap-x-2">
                <img :src="item.icon1" class="w-15 h-5">
                <span class="text-orange-500">{{ item.name1 }}</span>
                <span class="font-bold">{{ item.name2 }}</span>
             </div>
             
             <div class="flex gap-x-2 mt-2">
             <img :src="item.icon2" class="w-3">
             <span class="text-orange-700 text-sm">{{ item.name3 }}</span>
             </div>
             <div class="mt-3 text-gray-500 font-bold text-sm">{{ item.name4 }}</div>
             <div class="mt-3 flex gap-x-25 bg-red-50 w-60 p-1">
                <div class="text-xl font-bold text-red-500 tracking-wider">{{ item.price }}</div>
                <img :src="item.icon3" class="w-8">
             </div>
            </div>
            
        </RouterLink>
    </div>
   
   </div>

   <div v-else>
      <div class="grid grid-cols-6 gap-y-10 place-items-center mt-10 mx-10">
        <div v-for="(item, index) in updatedItems"
             :key="index">
             <div class="all-transition duration-400 hover:border-3 hover:border-red-300 hover:rounded-xl">
             <div class="bg-gray-100 w-60 rounded-xl flex justify-center py-3">
             <img :src="item.image" class="w-55">
            </div>
             <div class="flex gap-x-2 mt-3">
                <img :src="item.icon1" class="w-15 h-5">
                <span class="text-orange-500">{{ item.name1 }}</span>
                <span class="font-bold">{{ item.name2 }}</span>
             </div>
             
             <div class="flex gap-x-2 mt-2">
             <img :src="item.icon2" class="w-3">
             <span class="text-orange-700 text-sm">{{ item.name3 }}</span>
             </div>
             <div class="mt-3 text-gray-500 font-bold text-sm">{{ item.name4 }}</div>
             <div class="mt-3 flex gap-x-25 bg-red-50 w-60 p-1">
                <div class="text-xl font-bold text-red-500 tracking-wider">{{ item.price }}</div>
                <img :src="item.icon3" class="w-8">
             </div>
            </div>
            
        </div>
    </div>
   </div>

    <!-- footer -->
     <Footer></Footer>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import sourceData from '../data.json'
import {ref} from 'vue'

const items = ref(sourceData.products)
const updatedItems = ref();
const handelSearch = (search) => {
   updatedItems.value = sourceData.products[0][search]

if(updatedItems.value) {
   items.value = null
}

else {
   items.value = sourceData.products
}
}
// const updatedItems = ref();
// const handelSearch = (search) => {
//   updatedItems.value = sourceData.products[0][search]

//   if(updatedItems.value) {
//    items.value = null
//   } 
//   else {
//    items.value = sourceData.products
//   }
// }
</script>

<style scoped></style>