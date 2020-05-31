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
    border: solid 1px #555; /* function from saved color */
    color: #ddd; /* function from saved color */
    border-radius: 4px;
    font-family: monospace; /* source-code-pro or roboto mono */
    text-transform: uppercase; /* from options */
    /* Make functions with argument, change class from app */
    padding: 4px; /*( fontSize / 4) */
    font-size: 12px; /* fontSize */
    width: 20px; /* (fontSize * chunkSize) - (fontSize / 4) */
}
</style>
