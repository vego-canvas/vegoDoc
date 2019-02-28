<template>
    <div class="text-center">
            <h2>Dispose Images</h2>
            <editor></editor>
            <div class="row flex-spaces tabs">
                <input id="tab1" type="radio" name="tabs" checked>
                <label for="tab1">Edit.vue</label>

                <input id="tab2" type="radio" name="tabs">
                <label for="tab2">paint-btn.vue</label>

                <input id="tab3" type="radio" name="tabs">
                <label for="tab3">paint-panel.vue</label>

                <input id="tab4" type="radio" name="tabs">
                <label for="tab4">paint-target.vue</label>

                <!-- <input id="tab5" type="radio" name="tabs">
                <label for="tab5">utils</label> -->

                <div class="content text-left markdown-max-width" id="content1">
                    <edit-m-d></edit-m-d>
                </div>
                <div class="content text-left markdown-max-width" id="content2">
                    <paint-btn-m-d></paint-btn-m-d>
                </div>
                <div class="content text-left markdown-max-width" id="content3">
                    <paint-panel-m-d></paint-panel-m-d>
                </div>
                <div class="content text-left markdown-max-width" id="content4">
                    <parint-target-m-d></parint-target-m-d>
                </div>
            </div>
        </div>
</template>

<script>
import editMD from '../../docs/demos/edit.md';
import paintBtnMD from '../../docs/demos/paint-btn.md';
import paintPanelMD from '../../docs/demos/paint-panel.md';
import parintTargetMD from '../../docs/demos/parint-target.md';
import utilsMD from '../../docs/demos/utils.md';
import editor from '../../components/paint/canvas-vego.vue';
export default {
    components: {
        editor,
        editMD,
        paintBtnMD,
        paintPanelMD,
        parintTargetMD,
        utilsMD
    }
}
</script>

<style>

</style>
