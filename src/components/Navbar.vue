<template>
    <div id="nav">
        <router-link to="/">Home</router-link>&nbsp;|&nbsp;
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style scoped lang="scss">
#nav {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
    background-color: #555;
    a {
        font-weight: bold;
        color: #eee;
        text-decoration: none;
        &.router-link-exact-active {
            color: crimson;
        }
    }
}
</style>
