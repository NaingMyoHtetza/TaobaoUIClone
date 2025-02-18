<template>
    <Navigation></Navigation>
    <div>
      
      <div class="flex gap-x-3 ml-30 mt-5">
      <img src="/public/images/details/detail.webp" class="w-15">
      <span class="text-xl font-bold tracking-wider">甄选生活汇</span>
      </div>
      
      <div class="flex justify-between">
      <div class="flex gap-x-5 text-gray-400 ml-50">
        <img src="/public/images/details/details1.png" class="w-20 h-5">
        <div class="flex gap-x-1">
        <img src="/public/images/details/star.png" class="w-4 h-5">
        <img src="/public/images/details/star.png" class="w-4 h-5">
        <img src="/public/images/details/star.png" class="w-4 h-5">
        <img src="/public/images/details/star.png" class="w-4 h-5">
        <img src="/public/images/details/star.png" class="w-4 h-5">
        <span class="text-yellow-300">4.7</span>
        </div>
        <span>客服平均58秒回复</span>
        <span>商品体验优秀</span>
        <span>服务体验良好</span>
      </div>

      <div class="flex gap-x-5 mr-50">
        <div class="border border-gray-300 rounded-xl">
            <div class="flex py-2 px-5 gap-x-2">
            <img src="/public/images/details/chat-message.png" class="w-5">
            <span>联系客服</span>
            </div>
        </div>
        <div class="border border-gray-300 rounded-xl">
            <div class="flex py-2 px-5 gap-x-2">
            <img src="/public/images/details/shop.png" class="w-5">
            <span>进入店铺</span>
            </div>
        </div>
      </div>
      </div>

      <div v-if="item">
        <div class="flex gap-x-20 justify-center mt-10">
            <div>
                <img :src="item.image" class="w-20 border-orange-300 border-1 rounded-xl duration-400 hover:border-red-300 hover:border-2 hover:rounded-xl">
            </div>
            
            <div>
            <img :src="item.image" class="w-150 border-red-300 border-2 rounded-xl duration-400 hover:border-3 hover:border-orange-300 hover:rounded-xl">
           </div>

            <div>
                <span class="text-xl font-bold tracking-widest">DQ电子缤纷卡DQ冰淇淋蛋糕缤纷卡优惠券30 50 100元电子卡密秒发</span>
                <p class="text-red-400 text-sm  tracking-wider w-150 mt-10">
                    今天是一个阳光明媚的日子，公园里的人们在散步、跑步，享受着温暖的阳光。树叶在微风中轻轻摇曳，空气清新，充满了生机。这个美好的日子让人感到放松和愉快。
                    秋天的晚上，天渐渐变凉，街道两旁的银杏树叶已变成金黄色。空气中弥漫着秋天特有的清香，偶尔有几片落叶轻轻飘落，仿佛在跳着最后一支舞。人们穿上了厚衣服，享受着这个季节的宁静和美丽。
                </p>

            <div class="mt-15">
            <div class="flex gap-x-10">
                <img :src="item.icon1" class="w-15 h-5">
                <span class="text-orange-500 tracking-widest">{{ item.name1 }}</span>
                <span class="font-bold tracking-widest">{{ item.name2 }}</span>
             </div>
             
             <div class="flex gap-x-2 mt-10">
             <img :src="item.icon2" class="w-3">
             <span class="text-orange-700 text-xl">{{ item.name3 }}</span>
             </div>
             <div class="mt-10 text-gray-500 font-bold">{{ item.name4 }}</div>
             <div class="mt-10 flex gap-x-25 bg-red-50 w-60 p-1">
                <div class="text-xl font-bold text-red-500 tracking-wider">{{ item.price }}</div>
                <img :src="item.icon3" class="w-8">
             </div>
            </div>

            <!-- button -->
            <div class="flex gap-x-5  mt-20">
            <div class="inline-flex">
               <button class="bg-orange-500 hover:bg-gray-400 text-white font-bold py-2 px-10 rounded-l"> 秋天的晚上</button>
               <button class="bg-orange-300 hover:bg-gray-400 text-white font-bold py-2 px-10 rounded-r">天渐渐变凉</button>
           </div>

           <div>
            <img src="/public/images/details/star1.png" class="w-5">
            <span class="text-sm">清新</span>
           </div>
           </div>    

            </div>
        </div>
      </div>

      <div v-else>
        <p>No item data available</p>
      </div>

    </div>

    <!-- footer -->
     <Footer></Footer>
  </template>
  
  <script setup>
  import Navigation from '@/components/Navigation.vue'
  import Footer from '@/components/Footer.vue'
  import {ref, onMounted} from 'vue'
  import {useRoute} from 'vue-router'

  const item = ref(null)
  const route = useRoute()

  onMounted(() => {
    if (route.query.item) {
      item.value = JSON.parse(route.query.item)
    }
  })
  // import { ref, onMounted } from 'vue'
  // import { useRoute } from 'vue-router'
  
  // const route = useRoute()
  // const item = ref(null)
  
  // onMounted(() => {
  //   // Parse the passed data from query string
  //   if (route.query.item) {
  //     item.value = JSON.parse(route.query.item)
  //   }
  // })
  </script>
   