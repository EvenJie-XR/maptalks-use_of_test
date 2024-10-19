<script setup lang="ts">
import { SingletonMaptalksHelper } from '@/MaptalksUtils';
import { Geo3DTilesLayer, GroupGLLayer } from 'maptalks-gl';

const layer = new Geo3DTilesLayer("3dtiles", {
    services: [{
        // url: "http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json",
        url: "http://143.89.22.35/hkustdsd/datas/3dmodel/TST_test_3dtiles/tileset.json",
        // maximumScreenSpaceError: 16.0,
        heightOffset: 400
    }]
});
// @ts-ignore
const groupGLLayer = new GroupGLLayer("gl", [layer], {}).addTo(SingletonMaptalksHelper.getInstance().map);
layer.once("loadtileset", (e) => {
    console.log("loadtileset")
    if(!e) return;

    const extent = layer.getExtent(e.index);

    if (!extent) return;

    SingletonMaptalksHelper.getInstance().map.fitExtent(extent, 0);
});
</script>

<template>
    <div class="three-d-tiles">

    </div>
</template>

<style lang="scss" scoped></style>
