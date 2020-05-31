<template>
    <!-- <span class="cellWrapper"> -->
    <span class="cell">{{data}}</span>
    <!-- </span> -->
</template>

<script>
export default {
    name: "Cell",
    props: {
        data: String
    }
};
</script>

<style scoped lang="scss">
.cell {
    display: inline-block;
    text-align: center;
    font-family: monospace; /* source-code-pro or roboto mono */
    text-transform: uppercase; /* from options */
    /* Make functions with argument, change class from app */
    padding: 5px; /*( fontSize / 3) */
    font-size: 15px; /* fontSize */
    width: 25px; /* (fontSize * chunkSize) - (fontSize / 3) */
}
</style>
