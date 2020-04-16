import settings from '../settings.json';

/**
 * Get settings.
 *
 * @export
 * @returns {string}
 */
export function getSettings(): Settings {
    // Make allow access to GoogleDrive.
    return settings;
}
