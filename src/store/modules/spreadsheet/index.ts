import { Module } from 'vuex';
import { RootState } from '@/store';
import {
    setSheetP1,
    setSheetP2,
    setSheetP3,
    setSheetTotalData,
} from './mutations';
import {
    SET_SHEET_P1,
    SET_SHEET_P2,
    SET_SHEET_P3,
    SET_SHEET_TOTAL_DATA,
} from '@/mutation-types';

import { DataTableHeader } from 'vuetify';
import { querySpreadsheet } from './actions';
import { QUERY_SPREADSHEET } from '@/action-types';

export interface Sheet {
    header?: DataTableHeader[];
    items?: { [column: string]: any }[];
}

/**
 * Spreadsheet Store State.
 *
 * @interface SpreadsheetState
 */
export interface SpreadsheetState {
    p1: Sheet;
    p2: Sheet;
    p3: Sheet;
    totalData?: Sheet;
}

export default {
    state: {
        p1: {},
        p2: {},
        p3: {},
        totalData: {},
    },
    mutations: {
        [SET_SHEET_P1]: setSheetP1,
        [SET_SHEET_P2]: setSheetP2,
        [SET_SHEET_P3]: setSheetP3,
        [SET_SHEET_TOTAL_DATA]: setSheetTotalData,
    },
    actions: {
        [QUERY_SPREADSHEET]: querySpreadsheet,
    },
} as Module<SpreadsheetState, RootState>;
