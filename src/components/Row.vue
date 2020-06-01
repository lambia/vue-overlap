<template>
    <tr>
        <Cell v-for="(cell, key) in data" :key="key" :data="cell" />
    </tr>
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
