<script setup lang="ts">
import { SingletonMaptalksHelper } from '@/MaptalksUtils';
import { onMounted } from 'vue';

const emits = defineEmits(['inited'])
onMounted(() => {
    SingletonMaptalksHelper.initInstance("maptalksViewer");
    emits('inited');
})
</script>

<template>
    <div class="maptalks-viewer w-full h-full" id="maptalksViewer">
        
    </div>
</template>

<style lang="scss" scoped></style>
