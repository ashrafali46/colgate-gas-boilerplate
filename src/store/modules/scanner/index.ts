import { Module } from 'vuex';
import { RootState } from '@/store';
import { setBarcode, setQrcode } from './mutations';
import { SET_BARCODE, SET_QRCODE } from '@/mutation-types';

/**
 * Scanner Store State.
 *
 * @interface ScannerState
 */
export interface ScannerState {
    barcode: string | null;
    qrcode: string | null;
}

export default {
    state: {
        barcode: 'barcode',
        qrcode: 'qrcode',
    },
    mutations: {
        [SET_BARCODE]: setBarcode,
        [SET_QRCODE]: setQrcode,
    },
} as Module<ScannerState, RootState>;
