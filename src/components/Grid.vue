<template>
    <div id="grid">
        <table>
            <tr v-for="(row, rowKey) in data" :key="rowKey">
                <Cell v-for="(cell, cellKey) in row" :key="cellKey" type="td">
                    <span class="cell">{{cell}}</span>
                </Cell>
            </tr>
        </table>
    </div>
</template>

<script>
import Cell from "@/components/Cell.vue";

export default {
    name: "Grid",
    components: {
        Cell
    },
    data: () => ({
        base: "",
        data: []
    }),
    created() {
        this.createData(16 * 2 * 16 * 4);
        this.createMatrix();
    },
    updated() {
        this.createMatrix();
    },
    methods: {
        createData(len) {
            for (let i = 0; i < len; ++i) {
                this.base += Math.floor(Math.random() * 16).toString(16);
            }
        },
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
            let rowSize = 32;
            let cellSize = 2;
            this.data = this.splitData(this.base, rowSize, cellSize);
        }
    }
};
</script>

<style scoped lang="scss">
#grid table {
    border-collapse: collapse;
    // width: 530px;
}
</style>
