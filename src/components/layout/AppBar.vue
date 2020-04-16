<template>
    <v-app-bar app color="red" flat clipped-left dark>
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
        <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { TOGGLE_DRAWER } from '../../mutation-types';
import { mapMutations } from 'vuex';
export default Vue.extend({
    methods: mapMutations({
        toggleDrawer: TOGGLE_DRAWER,
    }),
});
</script>
