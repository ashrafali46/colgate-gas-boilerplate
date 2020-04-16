import { ScannerState } from '.';

/**
 * Set barcode.
 *
 * @export
 * @param {RootState} state
 * @param {string} oauthToken
 */
export function setBarcode(state: ScannerState, code: string): void {
    state.barcode = code;
}
/**
 * Set qr-code
 * .
 *
 * @export
 * @param {RootState} state
 * @param {string} oauthToken
 */
export function setQrcode(state: ScannerState, code: string): void {
    state.qrcode = code;
}
