<template>
    <div class="main row">
        <nav class="col-3 col sidebar ">
            <h1>Vego</h1>
            <p>Vue based library which apply MVVM (Model–view–viewmodel) to HTML5 canvas 2D programing.</p>
            <div class="sidebar-header">
                <router-link to="introduction">Introduction</router-link>
            </div>
            <div class="sidebar-header">
                <router-link to="canvascomp">Canvas Components</router-link>
            </div>
            <div class="sidebar-header">
                <router-link to="spritesheet">Sprite Sheet</router-link>
            </div>
        </nav>
        <div class="col-9 col main"><router-view></router-view></div>
    </div>
</template>

<script>

export default {

};
</script>

<style>
html, body{
    height: 100%;
}
div{
    box-sizing: border-box;
}
.main{
    height: 100vh;
    overflow: scroll;
    margin-bottom: 0;
}
.sidebar{
    height: 100%;
    border-right: 2px solid #41403e;
    flex-direction: column;
    z-index: 1;
}
.sidebar-header{
    font-size: 1.5rem;
    text-align: center;
    margin: 1.5rem 0;
    align-self: flex-start;
}
canvas{
    border: 1px solid #41403e;
    margin: 10px;
}
</style>
