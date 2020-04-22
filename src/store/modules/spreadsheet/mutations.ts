import { SpreadsheetState, Sheet } from '.';

/**
 * Set sheet p1
 *
 * @export
 * @param {SpreadsheetState} state
 * @param {Sheet} data
 */
export function setSheetP1(state: SpreadsheetState, data: Sheet): void {
    state.p1 = data;
}

/**
 * Set sheet p2
 *
 * @export
 * @param {SpreadsheetState} state
 * @param {Sheet} data
 */
export function setSheetP2(state: SpreadsheetState, data: Sheet): void {
    state.p2 = data;
}

/**
 * Set sheet p3
 *
 * @export
 * @param {SpreadsheetState} state
 * @param {Sheet} data
 */
export function setSheetP3(state: SpreadsheetState, data: Sheet): void {
    state.p3 = data;
}

/**
 * Set sheet total data
 *
 * @export
 * @param {SpreadsheetState} state
 * @param {Sheet} data
 */
export function setSheetTotalData(state: SpreadsheetState, data: Sheet): void {
    state.totalData = data;
}
