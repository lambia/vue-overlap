<template>
    <div id="home">
        <Grid />
        <Toolbox />
    </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import Toolbox from "@/components/Toolbox.vue";

export default {
    name: "home",
    components: {
        Grid,
        Toolbox
    }
};
</script>

<style scoped lang="scss">
#home {
    padding: 10px;
    font-size: 14px;
    display: inline-block;
    width: 773px;
    box-sizing: border-box;
    // display: flex;
    // flex-flow: row wrap;
    // justify-content: space-evenly; /* meglio safe center per compatibilità */
    // align-items: stretch;
    // align-content: stretch;
}
#grid {
    // flex-grow: 3;
    display: inline-block;
    padding: 10px;
    widthto: 530px;
    float: left;
}
#toolbox {
    // flex-grow: 1;
    max-width: 210px;
    display: inline-block;
}
</style>
