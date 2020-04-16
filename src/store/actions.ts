import { RootState } from '.';
import { ActionContext } from 'vuex';
import { getOAuthToken, getActiveUserProfile } from '@/google/script';
import { SET_ACTIVE_USER_PROFILE, SET_OAUTH_TOKEN } from '@/mutation-types';

/**
 * Initialize
 *
 * @export
 * @param {ActionContext<RootState, RootState>} context
 * @returns {Promise<void>}
 */
export async function Initialize(
    context: ActionContext<RootState, RootState>
): Promise<void> {
    try {
        const [oauthToken, activeUserProfile] = await Promise.all([
            getOAuthToken(),
            getActiveUserProfile(),
        ]);

        context.commit(SET_ACTIVE_USER_PROFILE, activeUserProfile);
        context.commit(SET_OAUTH_TOKEN, oauthToken);
    } catch (error) {
        console.error(error);
        throw error;
    }
}
