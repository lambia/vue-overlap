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
    display: flex;
    flex-flow: row wrap;
    justify-content: safe space-evenly; /* meglio safe center per compatibilità */
    align-items: stretch;
    align-content: stretch;
}
#grid {
    flex-grow: 3;
}
#toolbox {
    flex-grow: 1;
}
</style>
