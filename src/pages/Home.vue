<template>
    <Navigation></Navigation>

    <!-- title -->
     <div class="flex font-bold text-base justify-center gap-x-10 mt-10">
        <div class="text-red-500">天猫</div>
        <div class="flex gap-x-1 text-red-500">
            <img src="../components/icons/title.gif" class="h-5">
            淘宝直播
        </div>
        <div class="flex gap-x-1 text-red-500">
            <img src="../components/icons/title1.png" class="h-5">
            淘宝企业购
        </div>
        <div class="text-red-500">司法拍卖</div>
        <div class="text-green-500">天猫超市</div>
        <div class="flex gap-x-1">
            <img src="../components/icons/title2.gif" class="h-5">
            闲鱼集市
        </div>
        <div>天猫国际</div>
     </div>

     <!-- banner -->
      <Banner></Banner>
      
      <!-- category -->
      <Category ></Category>

       <!-- footer -->
        <Footer></Footer>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import Banner from '@/components/Banner.vue';
import Category from '@/components/Category.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped></style>