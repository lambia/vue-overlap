<template>
    <div id="grid" v-if="rows.length">
        <!-- <Row v-for="(row, key) in rows" :key="key" :data="row" /> -->
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
        datas: [
            "00112233445566778899",
            "aabbccddeeffgghhjjkk",
            "00112233445566778899",
            "aabbccddeeffgghhjjkk"
        ],
        data:
            "00112233445566778899aabbccddeeffgghhjjkk00112233445566778899aabbccddeeffgghhjjkk",
        rows: []
    }),
    created() {
        this.splitData();
    },
    updated() {
        this.splitData();
    },
    methods: {
        splitString(data, chunkSize) {
            let chunks = [];

            for (let c = 0; c < data.length; c += chunkSize) {
                chunks.push(data.substring(c, c + chunkSize));
            }

            return chunks;
        },
        splitString2D(data, chunkSizeY, chunkSizeX) {
            let chunks = [];
            let write = { x: 0, y: 0 };
            let read = 0;

            while (read < data.length) {
                const element = data.substring(read, read + chunkSizeX);

                if (!chunks[write.y]) {
                    chunks[write.y] = [];
                }
                chunks[write.y][write.x] = element;

                if (write.x < chunkSizeY / chunkSizeX - 1) {
                    write.x++;
                } else {
                    write.x = 0;
                    write.y++;
                }

                read += chunkSizeX;
            }

            return chunks;
        },
        splitData() {
            let rowSize = 20;
            let cellSize = 2;

            let rows = this.splitString(this.data, rowSize);
            let final = [];

            for (let c = 0; c < rows.length; c++) {
                final.push(this.splitString(rows[c], cellSize));
            }

            final = this.splitString2D(this.data, 20, 2);

            //For each element in the array (= for each row)
            // let rowsCount = this.data.length;
            // for (let row = 0; row < rowsCount; row++) {
            //     //For each n-elements in the string (= for each cell)
            //     let rowLength = this.data[row].length;
            //     for (let i = 0; i < rowLength; i += cellSize) {
            //         this.rows[0][i] = this.data[row].substring(i, i + cellSize);
            //     }
            // }
            console.log(final);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#grid {
    padding: 10px;
}
</style>
