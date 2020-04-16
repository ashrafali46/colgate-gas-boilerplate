import { RootState } from '.';

/**
 * Toggle Drawer.
 *
 * @export
 * @param {RootState} state
 */
export function toggleDrawer(state: RootState): void {
    state.drawer = !state.drawer;
}

/**
 * Set Drawer.
 *
 * @export
 * @param {RootState} state
 * @param {boolean} drawer
 */
export function setDrawer(state: RootState, drawer: boolean): void {
    state.drawer = drawer;
}

/**
 * Set Oauth Token.
 *
 * @export
 * @param {RootState} state
 * @param {string} oauthToken
 */
export function setOAuthToken(state: RootState, oauthToken: string): void {
    state.oauthToken = oauthToken;
}

/**
 * Set active user profile.
 *
 * @export
 * @param {RootState} state
 * @param {UserProfile} userProfile
 */
export function setActiveUserProfile(
    state: RootState,
    userProfile: UserProfile
): void {
    state.activeUserProfile = userProfile;
}
