declare namespace GoogleAppScript {
    /**
     * User profile information.
     *
     * @interface UserProfile
     */
    export interface UserProfile {
        email: string;
        fullName?: string;
        familyName?: string;
        givenName?: string;
    }
}

/**
 * Setting instance.
 *
 * @interface Settings
 */
declare interface Settings {
    [key: string]: undefined | number | string | Settings;
}

declare namespace QueryResponse {
    export interface Col {
        id: string;
        label: string;
        type: string;
        pattern: string;
    }

    export interface C {
        v: string;
        f: string;
    }

    export interface Row {
        c: C[];
    }

    export interface Table {
        cols: Col[];
        rows: Row[];
        parsedNumHeaders: number;
    }

    export interface Result {
        version: string;
        reqId: string;
        status: string;
        sig: string;
        table: Table;
    }
}
