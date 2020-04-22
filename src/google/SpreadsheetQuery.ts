/**
 * Spreadsheet query.
 *
 * https://stackoverflow.com/a/56737759
 * @export
 * @class SpreadsheetQuery
 */
export default class SpreadsheetQuery {
    /**
     *Creates an instance of SpreadsheetQuery.
     * @param {string} _oauthToken
     * @param {string} _spreadsheetId
     * @param {string} _range
     * @memberof SpreadsheetQuery
     */
    constructor(private _oauthToken: string, private _spreadsheetId: string) {}

    /**
     * Run query base on sheet & statement.
     *
     * @param {string} sheet
     * @param {string} statement
     * @returns {Promise<any>}
     * @memberof SpreadsheetQuery
     */
    public async query(
        sheet: string,
        range: string,
        statement: string
    ): Promise<QueryResponse.Table> {
        // the query URL
        // don't provide last row in range selection
        const qvizURL =
            'https://docs.google.com/spreadsheets/d/' +
            this._spreadsheetId +
            '/gviz/tq?tqx=out:json&headers=1&sheet=' +
            sheet +
            '&range=' +
            range;
        '&tq=' + encodeURIComponent(statement);

        // fetch the data
        const ret = await fetch(qvizURL, {
            headers: { Authorization: 'Bearer ' + this._oauthToken },
        });

        const jsonData = await ret.text();

        // remove some crap from the return string
        const result: QueryResponse.Result = JSON.parse(
            jsonData
                .replace('/*O_o*/', '')
                .replace('google.visualization.Query.setResponse(', '')
                .slice(0, -2)
        );

        if (result.status != 'ok') throw new Error(JSON.stringify(result));

        return result.table;
    }

    /**
     * Tranform table to object array.
     *
     * @static
     * @param {QueryResponse.Table} table
     * @returns {{ [column: string]: any }}
     * @memberof SpreadsheetQuery
     */
    public static *transform(
        table: QueryResponse.Table
    ): Generator<{ [column: string]: any }> {
        for (const row of table.rows) {
            const result = {};
            for (let index = 0; index < table.cols.length; ++index) {
                const col = table.cols[index];
                result[col.label] = row.c[index]?.f || row.c[index]?.v;
            }
            yield result;
        }
    }
}
