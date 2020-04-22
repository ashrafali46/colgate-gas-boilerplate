<template>
    <v-navigation-drawer v-model="drawer" clipped temporary app>
        <v-list nav class="py-0">
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img src="@/assets/logo.svg" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-if="!title"
                        >Colgate Palmolive</v-list-item-title
                    >
                    <v-list-item-title v-if="!!title">{{
                        title
                    }}</v-list-item-title>
                    <v-list-item-subtitle>{{ subTitle }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
        <v-list dense>
            <list-menu icon="mdi-home" title="Trang chủ" to="/" />
            <list-menu
                icon="mdi-google-spreadsheet"
                title="Bảng tính"
                to="/spreadsheet"
            />
            <v-list-group prepend-icon="mdi-barcode-scan">
                <template v-slot:activator>
                    <v-list-item-title>Quét mã</v-list-item-title>
                </template>
                <list-menu title="Barcode" to="/barcode-scanner" />
                <list-menu title="QRCode" to="/qrcode-scanner" />
            </v-list-group>
            <list-menu icon="mdi-information" title="Thông tin" to="/about" />
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import ListMenu from './NavigationDrawer/ListMenu.vue';
import { RootState } from '@/store';

export default Vue.extend({
    name: 'navigation-drawer',
    components: {
        ListMenu,
    },
    props: {
        value: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        drawer: {
            get(): boolean {
                return this.value;
            },
            set(newValue: boolean): void {
                this.$emit('input', newValue);
            },
        },
        ...mapState<RootState>({
            title: (state: RootState) => state.activeUserProfile?.fullName,
            subTitle: (state: RootState) => state.activeUserProfile?.email,
        }),
    },
});
</script>

<style lang="scss">
.app-footer {
    justify-content: center;
}
</style>
