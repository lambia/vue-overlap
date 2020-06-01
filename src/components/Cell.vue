<template>
    <component :is="type" @click="setActive()" :class="status ? 'active' : null">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: "Cell",
    props: {
        type: String
    },
    data: () => ({
        status: null
    }),
    created() {},
    updated() {},
    methods: {
        setActive() {
            this.status = !this.status;
        }
    }
};
</script>

<style scoped lang="scss">
#grid td {
    //ToDo: function from saved color
    border: solid 1px #555;
    color: #ddd;
}

.cell {
    display: inline-block;
    text-align: center;
    font-family: monospace; /* source-code-pro or roboto mono */
    text-transform: uppercase; /* from options */
    /* Make functions with argument, change class from app */
    padding: 4px; /*( fontSize / 3) */
    font-size: 14px; /* fontSize */
    width: 22px; /* (fontSize * chunkSize) - (fontSize / 3) */
}

.active {
    background: red;
}
</style>
