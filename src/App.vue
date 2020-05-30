<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "app",
    components: {
        Navbar
    }
};
</script>

<style lang="scss">
body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #333;
    color: white;
}
</style>
