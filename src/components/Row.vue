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
.row {
    display: flex;
    justify-content: center;
}

/* todo: function from saved color */
.cell {
    border-left: solid 1px #555;
    border-top: solid 1px #555;
    color: #ddd;
}
.cell:last-of-type {
    border-right: solid 1px #555;
}
.row:last-of-type .cell {
    border-bottom: solid 1px #555;
}
</style>
