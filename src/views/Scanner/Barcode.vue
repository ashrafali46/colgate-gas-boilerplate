<template>
    <div>
        <v-snackbar :timeout="3000" top v-model="snackbar"> </v-snackbar>
        <v-quagga
            :onDetected="onDetected"
            :readerTypes="['code_128_reader']"
        ></v-quagga>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueQuagga from 'vue-quaggajs';
import { mapState } from 'vuex';
import { RootState } from '@/store';
import { ScannerState } from '@/store/modules/scanner';
import { SET_BARCODE } from '../../mutation-types';

// register component 'v-quagga'
Vue.use(VueQuagga);

export default Vue.extend({
    data() {
        return {
            snackbar: false,
        };
    },
    methods: {
        onDetected(data: { [key: string]: any }): void {
            const code = data.codeResult.code;
            this.snackbar = true;
            this.$store.commit(SET_BARCODE, code);
        },
    },
    computed: mapState<RootState>({
        code: (state: { scanner: ScannerState }) => state.scanner.barcode,
    }),
});
</script>

<style scoped lang="scss">
.error {
    font-weight: bold;
    color: red;
}
</style>
