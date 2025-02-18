<template>
    <div class="flex justify-center mt-5">
    <div class="grid grid-cols-6 gap-x-10 gap-y-10 w-420">
    <div v-for="(product, index) in products[0].categories"
         :key="index">
         <RouterLink to="/categories">
         <div class="transition-all duration-400 hover:border-3 hover:border-orange-500 hover:rounded-xl">
         <img :src="product.image" class="w-65 rounded-xl border-gray-600 border-2">
         <div class="mt-2">{{ product.name }}</div>
         <div class="font-bold text-red-400 mt-3">{{ product.price }}</div>
        </div>
        </RouterLink>
    </div>
    </div>
    </div>
</template>

<script setup>
import sourceData from '../data.json'
import {ref} from 'vue'

const products = ref(sourceData.collections1)
</script>

<style scoped></style>