/**
 * Get OAuth token.
 *
 * @export
 * @returns {string}
 */
export function getOAuthToken(): string {
    // Make allow access to GoogleDrive.
    return ScriptApp.getOAuthToken();
}
