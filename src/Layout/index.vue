<template>
    <div class="layout">
        <navBar></navBar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup>
import navBar from './TopBar/navBar.vue';
import Footer from './Footer/index.vue';
</script>

<style lang="scss">
    .layout {
        .footer{
            margin-top: 30px;
        }
    }
</style>