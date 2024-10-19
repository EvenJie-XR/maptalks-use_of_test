<script setup lang="ts">
import MaptalksViewer from '@/components/MaptalksViewer.vue';
import { ref } from 'vue';

const inited = ref(false);
</script>

<template>
    <div class="map-layout w-full h-full">
        <MaptalksViewer @inited="inited = true"></MaptalksViewer>
        <div class="ui-container absolute left-0 top-0 bottom-0 right-0 pointer-events-none" v-if="inited">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
