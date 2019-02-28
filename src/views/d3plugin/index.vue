<template>
    <div style="position:relative">
        <button class="navBtn toPrev" @click="toPrev"><</button>
        <button class="navBtn toNext" @click="toNext">></button>
        <router-view></router-view>
    </div>
</template>

<script>
const routes = ['linechart', 'areachart', 'piechart', 'geochart'];
export default {
    data(){
        return {
            currentPage: 0
        }
    },
    watch: {
        currentPage(val){
            this.$router.push({path: routes[val]});
        }
    },
    methods: {
        toPrev(){
            if(this.currentPage > 0) this.currentPage --;
        },
        toNext(){
            if(this.currentPage < routes.length-1) this.currentPage ++;
        }
    }
}
</script>

<style>
.scrollable{
    overflow: scroll;
}
.navBtn{
    position: absolute;
    top: 50px;
}
.toNext{
    right: 0;
}
.toPrev{
    left: 0;
}
</style>
