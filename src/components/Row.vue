<template>
    <div class="row">
        <Cell v-for="(cell, key) in data" :key="key" :data="cell" />
    </div>
</template>

<script>
import Cell from "@/components/Cell.vue";

export default {
    name: "Toolbox",
    props: {
        data: Array
    },
    components: {
        Cell
    }
};
</script>

<style scoped lang="scss">
#toolbox {
    padding: 10px;
}
</style>
