import Vue from 'vue';
import Vuex from 'vuex';
import {
    setOAuthToken,
    setActiveUserProfile,
    toggleDrawer,
    setDrawer,
} from './mutations';
import about from './modules/about';
import scanner from './modules/scanner';
import {
    SET_ACTIVE_USER_PROFILE,
    SET_OAUTH_TOKEN,
    TOGGLE_DRAWER,
    SET_DRAWER,
} from '@/mutation-types';
import { Initialize } from './actions';
import { INITIALIZE } from '@/action-types';

Vue.use(Vuex);

/**
 * Root Store State.
 *
 * @interface StoreState
 */
export interface RootState {
    drawer: boolean;
    oauthToken?: string;
    activeUserProfile?: UserProfile;
}

export default new Vuex.Store<RootState>({
    state: {
        drawer: false,
    },
    mutations: {
        [TOGGLE_DRAWER]: toggleDrawer,
        [SET_DRAWER]: setDrawer,
        [SET_OAUTH_TOKEN]: setOAuthToken,
        [SET_ACTIVE_USER_PROFILE]: setActiveUserProfile,
    },
    actions: {
        [INITIALIZE]: Initialize,
    },
    modules: {
        about: about,
        scanner: scanner,
    },
});
