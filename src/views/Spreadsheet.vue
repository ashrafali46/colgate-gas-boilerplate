<template>
    <v-tabs background-color="red" class="elevation-2" centered>
        <v-tab>
            <v-icon left>mdi-table-large</v-icon>
            P1
        </v-tab>
        <v-tab>
            <v-icon left>mdi-table-large</v-icon>
            P2
        </v-tab>
        <v-tab>
            <v-icon left>mdi-table-large</v-icon>
            P3
        </v-tab>
        <v-tab>
            <v-icon left>mdi-table-large</v-icon>
            Total Data
        </v-tab>
        <v-tab-item>
            <v-data-table
                :headers="p1.header"
                :items="p1.items"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-tab-item>
        <v-tab-item>
            <v-data-table
                :headers="p2.header"
                :items="p2.items"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-tab-item>
        <v-tab-item>
            <v-data-table
                :headers="p3.header"
                :items="p3.items"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-tab-item>
        <v-tab-item>
            <v-data-table
                :headers="totalData.header"
                :items="totalData.items"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-tab-item>
    </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue';
import { RootState } from '@/store';
import { SpreadsheetState } from '@/store/modules/spreadsheet';
import { mapState } from 'vuex';
import { QUERY_SPREADSHEET } from '@/action-types';

export default Vue.extend({
    name: 'spreadsheet',
    components: {},
    computed: mapState<RootState>({
        p1: (state: { spreadsheet: SpreadsheetState }) => state.spreadsheet.p1,
        p2: (state: { spreadsheet: SpreadsheetState }) => state.spreadsheet.p2,
        p3: (state: { spreadsheet: SpreadsheetState }) => state.spreadsheet.p3,
        totalData: (state: { spreadsheet: SpreadsheetState }) =>
            state.spreadsheet.totalData,
    }),
    mounted() {
        this.$store.dispatch(QUERY_SPREADSHEET);
    },
});
</script>
