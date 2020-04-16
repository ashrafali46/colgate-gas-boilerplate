<template>
    <v-app>
        <router-view name="appbar"></router-view>
        <navigation-drawer :value="drawer" @input="updateDrawer" />
        <v-content>
            <router-view></router-view>
        </v-content>
        <router-view name="footer"></router-view>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationDrawer from '@/components/layout/NavigationDrawer.vue';
import { mapState, mapMutations } from 'vuex';
import { RootState } from './store';
import { SET_DRAWER } from './mutation-types';

export default Vue.extend({
    name: 'app',
    components: {
        NavigationDrawer,
    },
    computed: mapState<RootState>({ drawer: 'drawer' }),
    methods: mapMutations({ updateDrawer: SET_DRAWER }),
});
</script>
