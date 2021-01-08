<template>
    <div class="layout">
        <navBar></navBar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import navBar from './topBar/navBar.vue';
import Footer from './footer';

export default {
    components: {
        navBar,
        Footer
    }
}
</script>

<style lang="scss">
    .layout {
        .footer{
            margin-top: 30px;
        }
    }
</style>