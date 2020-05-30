<template>
    <div id="grid">
        <Row v-for="(row, key) in data" :key="key" :data="row" />
    </div>
</template>

<script>
import Row from "@/components/Row.vue";

export default {
    name: "Grid",
    components: {
        Row
    },
    data: () => ({
        base:
            "00112233445566778899aabbccddeeffgghhjjkk00112233445566778899aabbccddeeffgghhjjkk",
        data: []
    }),
    created() {
        this.createMatrix();
    },
    updated() {
        this.createMatrix();
    },
    methods: {
        splitData(data, rowSize, cellSize) {
            //jsPerf -> 86% faster than other low-level code (much faster than .map o regex)
            //https://jsperf.com/string-to-matrix
            let rowsCount = data.length / rowSize;
            let result = [];

            for (let y = 0; y < rowsCount; y++) {
                let yy = y * rowSize;
                let row = data.substring(yy, yy + rowSize);
                let rowLength = row.length;

                if (!result[y]) {
                    result[y] = [];
                }

                for (let x = 0; x * cellSize < rowLength; x++) {
                    let xx = x * cellSize;
                    result[y][x] = row.substring(xx, xx + cellSize);
                }
            }
            return result;
        },
        createMatrix() {
            let rowSize = 20;
            let cellSize = 2;
            this.data = this.splitData(this.base, rowSize, cellSize);
        }
    }
};
</script>

<style scoped lang="scss">
#grid {
    padding: 10px;
}
</style>
