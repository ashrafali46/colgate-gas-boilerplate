import { SpreadsheetState, Sheet } from '.';
import { RootState } from '@/store';
import SpreadsheetQuery from '@/google/SpreadsheetQuery';
import { ActionContext } from 'vuex';
import settings from '@/settings.json';
import {
    SET_SHEET_P1,
    SET_SHEET_TOTAL_DATA,
    SET_SHEET_P2,
    SET_SHEET_P3,
} from '@/mutation-types';
import { DataTableHeader } from 'vuetify';

/**
 * Query spread sheet
 *
 * @export
 * @param {ActionContext<RootState, RootState>} context
 * @returns {Promise<void>}
 */
export async function querySpreadsheet(
    context: ActionContext<SpreadsheetState, RootState>
): Promise<void> {
    try {
        if (!context.rootState.oauthToken) return;

        const query = new SpreadsheetQuery(
            context.rootState.oauthToken,
            settings.spreadsheetId
        );

        const sheetInfos = [
            {
                mutation: SET_SHEET_TOTAL_DATA,
                sheet: 'Data Total',
                range: 'A:BL',
            },
            {
                mutation: SET_SHEET_P1,
                sheet: 'P1',
                range: 'A:S',
            },
            {
                mutation: SET_SHEET_P2,
                sheet: 'P2',
                range: 'A:AE',
            },
            {
                mutation: SET_SHEET_P3,
                sheet: 'P3',
                range: 'A:M',
            },
        ];

        const datas = await Promise.all(
            sheetInfos.map(async (c) => {
                const result = await query.query(c.sheet, c.range, 'SELECT *');
                const final = [...SpreadsheetQuery.transform(result)];
                return {
                    mutation: c.mutation,
                    sheet: {
                        header: result.cols.map<DataTableHeader>((d) => ({
                            text: d.label,
                            value: d.label,
                            sortable: true,
                        })),
                        items: final,
                    } as Sheet,
                };
            })
        );

        for (const sheet of datas) {
            context.commit(sheet.mutation, sheet.sheet);
        }
    } catch (error) {
        console.log(error);
    }
}
