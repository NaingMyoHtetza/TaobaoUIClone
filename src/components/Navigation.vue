<template>
  <div class="nav">
      <!-- first -->
      <div class="flex justify-between mt-5 ml-40">
      <div class="flex gap-x-5 text-sm">
          <div>亲，请登录免费注册</div>

          <div class="group">
          <div class="text-orange-400">网页无障碍</div>

          <div class="absolute hidden group-hover:block bg-gray-100">
            <ul class="text-xs space-y-2 text-gray-500 my-2 mx-2 max-h-40 overflow-y-auto">
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
                <li>网页无障碍</li>
            </ul>
          </div>
          </div>

          <div>切换企业版</div>

          <div class="group">
          <div>选择主题</div>

          <div class="absolute z-20 hidden group-hover:block bg-gray-100 rounded-xl">
            <ul class="space-y-2 text-gray-500 my-2 mx-2 max-h-40 overflow-y-auto">
                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover1.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover2.avif" class="w-40"></li>
                </div>

                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover3.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover4.avif" class="w-40"></li>
                </div>

                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover5.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover6.avif" class="w-40"></li>
                </div>

                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover7.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover8.avif" class="w-40"></li>
                </div>

                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover9.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover10.avif" class="w-40"></li>
                </div>

                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover11.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover12.avif" class="w-40"></li>
                </div>

                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover13.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover14.avif" class="w-40"></li>
                </div>

                <div class="flex gap-x-3">
                <li><img src="/public/images/navigation/hover15.avif" class="w-40"></li>
                <li><img src="/public/images/navigation/hover16.avif" class="w-40"></li>
                </div>
            </ul>
          </div>
          </div>
      </div>

      <div class="grid grid-cols-7 text-sm mr-40 gap-x-5">
          <div>已买到的宝贝</div>
          <div>我的淘宝</div>
          <div class="flex gap-x-1">
              <img src="./icons/shopping-cart (1).png" class="w-5">
              购物车
          </div>
          <div class="flex gap-x-1">
              <img src="./icons/star.png" class="w-4 h-4">
              收藏夹
          </div>
          <div>免费开店</div>
          <div>千牛卖家中心</div>
          <div>帮助中心</div>
      </div>
      </div>

      <!-- second -->
      <div class="flex mt-10 gap-x-25 justify-center">
    <RouterLink to="/">
      <div>
          <img src="/public/images/nav1.gif" class="w-40">
      </div>
    </RouterLink>
      <!-- Search -->
       <Search @search="handelSearch"></Search>
    
      <!-- camera -->
      <div>
          <div class="flex gap-x-1 bg-orange-200 p-2 rounded-xl">
              <img src="./icons/camera.png" class="w-7">
              搜同款
          </div>
      </div>

      <!-- gif -->
      <div>
          <img src="/public/images/nav.gif" class="w-60">
      </div>

      </div>

      <div class="flex gap-x-2 text-sm ml-105 text-gray-500">
          <div>乒乓世界</div>
          <div>中老年时尚女装</div>
          <div>钻石</div>
          <div>木灵动漫</div>
          <div>锦瑟闻香图书专营店</div>
          <div>锦瑟闻香图书专营店</div>
          <div>冬季连衣裙</div>
          <div>木灵动漫</div>
          <div>jennie专辑</div>
          <div>泡脚药包</div>
      </div>
  </div>
</template>

<script setup>
import Search from '@/components/Search.vue'
const emit = defineEmits(['search'])

const handelSearch = (value) => {
    
    emit('search', value)
}

</script>
