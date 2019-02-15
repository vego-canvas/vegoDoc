<template>
    <div>
        <div>
            <h2>Donuts</h2>
            <donuts></donuts>
            <div class="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible">
                <label for="collapsible1">Donut.vue</label>
                <div class="collapsible-body" style="overflow: scroll;">
                    <donut-m-d></donut-m-d>
                </div>
            </div>
            <div class="collapsible">
                <input id="collapsible2" type="checkbox" name="Donuts">
                <label for="collapsible2">Donuts.vue</label>
                <div class="collapsible-body" style="overflow: scroll;">
                    <donuts-m-d></donuts-m-d>
                </div>
            </div>
        </div>
        <div>
            <h2>Dispose Images</h2>
            <editor></editor>
            <div class="collapsible">
                <input id="collapsible3" type="checkbox" name="editMD">
                <label for="collapsible3">Edit.vue</label>
                <div class="collapsible-body" style="overflow: scroll;">
                    <edit-m-d></edit-m-d>
                </div>
            </div>
            <div class="collapsible">
                <input id="collapsible4" type="checkbox" name="paintBtnMD">
                <label for="collapsible4">paint-btn.vue</label>
                <div class="collapsible-body" style="overflow: scroll;">
                    <paint-btn-m-d></paint-btn-m-d>
                </div>
            </div>
            <div class="collapsible">
                <input id="collapsible5" type="checkbox" name="paintPanelMD">
                <label for="collapsible5">paint-panel.vue</label>
                <div class="collapsible-body" style="overflow: scroll;">
                    <paint-panel-m-d></paint-panel-m-d>
                </div>
            </div>
            <div class="collapsible">
                <input id="collapsible6" type="checkbox" name="parintTargetMD">
                <label for="collapsible6">paint-target.vue</label>
                <div class="collapsible-body" style="overflow: scroll;">
                    <parint-target-m-d></parint-target-m-d>
                </div>
            </div>
            <div class="collapsible">
                <input id="collapsible7" type="checkbox" name="utilsMD">
                <label for="collapsible7">utils.vue</label>
                <div class="collapsible-body" style="overflow: scroll;">
                    <utils-m-d></utils-m-d>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import donutsMD from '../docs/demos/donuts.md';
import donutMD from '../docs/demos/donut.md';

import editMD from '../docs/demos/edit.md';
import paintBtnMD from '../docs/demos/paint-btn.md';
import paintPanelMD from '../docs/demos/paint-panel.md';
import parintTargetMD from '../docs/demos/parint-target.md';
import utilsMD from '../docs/demos/utils.md';

import donuts from './donuts.vue';
import editor from '../components/paint/canvas-vego.vue';

export default {
    components: {
        donuts,
        donutsMD,
        donutMD,
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
.scrollable{
    overflow: scroll;
}
</style>
