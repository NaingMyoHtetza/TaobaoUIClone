<template>
    <div class="flex mt-10 justify-center">
    <!-- first -->
    <div class="first bg-gray-200 w-70 text-center rounded-xl py-3">
        <div class="flex font-bold gap-x-3 ml-10">
            <h3>分类</h3>
            <h3 class="text-red-500">淘宝企业购</h3>
        </div>

        <div class="text-gray-500 tracking-widest space-y-2 mt-3">
        <div>每满200减20 / 回家过年</div>
        <div>电脑 / 配件 / 办公 / 文具</div>
        <div>家电 / 手机 / 通信 / 数码</div>
        <div>工业品 / 商业 / 农业 / 定制</div>
        <div>家具 / 家装 / 家居 / 厨具</div>
        <div>女装 / 男装 / 内衣 / 配饰</div>
        <div>女鞋 / 男鞋 / 运动 / 户外</div>
        <div>汽车 / 珠宝 / 文玩 / 箱包</div>
        <div>食品 / 生鲜 / 酒类 / 健康</div>
        <div>母婴 / 童装 / 玩具 / 宠物</div>
        <div>美妆 / 个护 / 娱乐 / 图书</div>
        </div>
    </div>

    <!-- second -->
    <div>
     <AutoCarousel></AutoCarousel>

    <div class="flex gap-x-5 mt-5 ml-7">
    <div class="bg-gray-200 w-65 rounded-xl">
        <div class="flex justify-between py-2">
        <div class="flex font-bold gap-x-1 ml-1">
            淘宝企业购
            <img src="../components/icons/square1.avif" class="w-15 h-5">
        </div>
        <div class="mr-2 text-sm">></div>
        </div>

        <p class="text-gray-500 px-1 text-sm">
            淘江湖春节聊天室上线，万元奖金等你瓜分！<br>
            快来领！省钱利器淘金币频道上线！<br>
            乡村振兴第五期—河北张北县甘肃礼县：<br>
            “小”苹果迎来“大”升级【冬日暖意通勤】
            探索你的冬日
        </p>
    </div>
     
    <div class="bg-gray-200 w-65 rounded-xl">
    <div class="flex ml-1 py-2 justify-between">
        <div class="flex font-bold gap-x-1">
            淘宝企业购
            <img src="../components/icons/square.avif" class="w-15 h-5">
        </div>
        <div class="mr-2 text-sm">></div>
    </div>
     <div class="flex gap-x-3  justify-center">
        <div v-for="(item, index) in items[0].products"
             v-show="index < 2"
             :key="index">

             <div class="relative">
             <img :src="item.image" class="w-30 h-35">
             <div class="absolute inset-0">
                <img src="../components/icons/voice.gif" class="w-5">
                <div class="text-sm text-white font-bold text-center pt-25">{{ item.name }}</div>
             </div>
            </div>

        </div>
     </div>
    </div>
    </div>

    </div>

    <!-- third -->
     <div>
     <div class="bg-gray-200 w-130 h-50 rounded-xl">
        <div class="flex gap-x-2 ml-2">
        <div v-for="(item, index) in items[0].title"
             :key="index"
             v-show="index === 0">
             <div class="text-sm font-bold mt-2 ml-2">{{ item.head }}</div>
        </div>

        <img src="../components/icons/square3.png" class="w-15 h-5 mt-2">
       </div>

        <div class="flex gap-x-5 justify-center mt-5">
        <div v-for="(item, index) in items[0].products"
             :key="index"
             v-show="index > 1 && index < 6"
             class="w-25">
             <img :src="item.image">
             <div class="text-sm font-bold text-center text-orange-400 mt-2">{{ item.price }}</div>
             <div class="text-xs text-center text-orange-400">{{ item.name }}</div>
        </div>
        </div>
     </div>
    
    <div class="flex gap-x-5">
     <div class="bg-gray-200 w-62 h-45 mt-5 rounded-xl">
        <div v-for="(item, index) in items[0].title"
             :key="index"
             v-show="index === 1">
             <div class="text-sm font-bold mt-2 ml-2">{{ item.head }}</div>
        </div>

        <div class="flex justify-center gap-x-3 mt-2">
        <div v-for="(item, index) in items[0].products"
             :key="index"
             v-show="index > 5 && index < 8"
             class="w-25">
            <img :src="item.image">
            <div class="text-sm font-bold text-center text-orange-400 mt-2">{{ item.price }}</div>
             <div class="text-xs text-center text-orange-400">{{ item.name }}</div>
        </div>
        </div>
     </div>

     <div class="bg-gray-200 w-62 h-45 mt-5 rounded-xl">
        <div v-for="(item, index) in items[0].title"
             :key="index"
             v-show="index === 2">
             <div class="flex gap-x-2 ml-2">
             <div class="text-sm font-bold mt-2">{{ item.head }}</div>
             <img src="../components/icons/square3.png" class="w-15 h-5 mt-2">
            </div>
        </div>

        <div class="flex justify-center gap-x-3 mt-2">
        <div v-for="(item, index) in items[0].products"
             :key="index"
             v-show="index > 5 && index < 8"
             class="w-25">
            <img :src="item.image">
            <div class="text-sm font-bold text-center text-orange-400 mt-2">{{ item.price }}</div>
             <div class="text-xs text-center text-orange-400">{{ item.name }}</div>
        </div>
        </div>
     </div>
    </div>

    </div>

     <!-- fouth -->
      <div class="bg-gray-200 w-65 rounded-xl ml-5">
         <div class="flex gap-x-3 ml-4 mt-4">
            <img src="/public/images/toy.jpg" class="w-15 rounded-full">
            <div>
            <div class="font-bold">上午好</div>
            <div class="text-xs text-gray-400">注册 | 开店</div>
            </div>
         </div>

         <div class="text-center mt-5">
            <p class="font-bold">登录淘宝后更多精彩</p>
            <p class="text-xs text-gray-400">嘿！更懂你的推荐，更便捷的搜索</p>
         </div>
         
         <div class="flex justify-center mt-5">
            <button class="bg-orange-500 py-3 px-15 text-white text-center rounded-xl tracking-widest">更便捷的搜</button>
         </div>

         <div class="flex justify-center gap-x-3 mt-5">
            <div>
                <img src="./icons/star.png" class="w-5">
                <span class="text-sm text-gray-500">乒乓世</span>
            </div>
            <div>
                <img src="./icons/shopping-bag.png" class="w-5">
                <span class="text-sm text-gray-500">乒乓世</span>
            </div>
            <div>
                <img src="./icons/shop.png" class="w-5">
                <span class="text-sm text-gray-500">乒乓世</span>
            </div>
            <div>
                <img src="./icons/clock.png" class="w-5">
                <span class="text-sm text-gray-500">乒乓世</span>
            </div>
         </div>

         <div>
            <img src="/public/images/coin.png">
         </div>
         
      </div>
     
    <!-- end -->
    </div>

    <div class="flex gap-x-5 ml-30 mt-5 text-orange-400">
        <div class="flex gap-x-1">
            <img src="../components/icons/i1.png" class="w-5">
            <span>猜你喜欢</span>
        </div>
        <div class="flex gap-x-1">
            <img src="../components/icons/i2.avif" class="w-5">
            <span>猜你喜欢</span>
        </div>
        <div class="flex gap-x-1">
            <img src="../components/icons/i3.avif" class="w-5">
            <span>猜你喜欢</span>
        </div>
        <div class="flex gap-x-1">
            <img src="../components/icons/i4.avif" class="w-5">
            <span>猜你喜欢</span>
        </div>
        <div class="flex gap-x-1">
            <img src="../components/icons/i5.avif" class="w-5">
            <span>猜你喜欢</span>
        </div>
        <div class="flex gap-x-1">
            <img src="../components/icons/i6.avif" class="w-5">
            <span>猜你喜欢</span>
        </div>
        <div class="flex gap-x-1">
            <img src="../components/icons/i7.avif" class="w-5">
            <span>猜你喜欢</span>
        </div>
    </div>
</template>

<script setup>
import AutoCarousel from './AutoCarousel.vue';
import soureData from '../data.json'
import {ref} from 'vue'

const items = ref(soureData.collections)
</script>

<style scoped></style>