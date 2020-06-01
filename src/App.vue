<template>
    <div id="app">
        <Navbar />
        <keep-alive :include="cache">
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "app",
    components: {
        Navbar
    },
    data: () => ({
        cache: "home"
    }),
    created() {
        this.$eventBus.$on("app.settings.cache", value => {
            this.setCache(value);
        });
    },
    methods: {
        setCache(value) {
            this.cache = value ? "home" : [];
        }
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

/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
