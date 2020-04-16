<template>
    <div>
        <p class="error">{{ error }}</p>
        <v-snackbar :timeout="3000" top v-model="snackbar">
            QRCode: {{ code }}
        </v-snackbar>
        <qrcode-stream @decode="onDecode" :camera="camera" @init="onInit" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';
import { RootState } from '@/store';
import { ScannerState } from '@/store/modules/scanner';
import { mapState } from 'vuex';
import { SET_QRCODE } from '@/mutation-types';

export default Vue.extend({
    components: { QrcodeStream },
    data() {
        return {
            snackbar: false,
            error: '',
            camera: 'auto',
        };
    },
    methods: {
        onDecode(result): void {
            const code = result;
            this.$store.commit(SET_QRCODE, code);
            this.snackbar = true;
            this.camera = 'off';
            setTimeout(() => {
                this.$data.camera = 'auto';
            }, 100);
        },

        async onInit(promise): Promise<any> {
            try {
                await promise;
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    this.error =
                        'ERROR: you need to grant camera access permisson';
                } else if (error.name === 'NotFoundError') {
                    this.error = 'ERROR: no camera on this device';
                } else if (error.name === 'NotSupportedError') {
                    this.error =
                        'ERROR: secure context required (HTTPS, localhost)';
                } else if (error.name === 'NotReadableError') {
                    this.error = 'ERROR: is the camera already in use?';
                } else if (error.name === 'OverconstrainedError') {
                    this.error = 'ERROR: installed cameras are not suitable';
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.error =
                        'ERROR: Stream API is not supported in this browser';
                }
            }
        },
    },
    computed: mapState<RootState>({
        code: (state: { scanner: ScannerState }) => state.scanner.qrcode,
    }),
});
</script>

<style scoped lang="scss">
.error {
    font-weight: bold;
    color: red;
}
</style>
