import { Module } from 'vuex';
import { RootState } from '@/store';

/**
 * About Store State.
 *
 * @interface AboutState
 */
export interface AboutState {
    msg: string;
}

export default {
    state: { msg: 'Hello to Colgate Palmolive' },
} as Module<AboutState, RootState>;
