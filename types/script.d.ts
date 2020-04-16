/**
 * User profile information.
 *
 * @interface UserProfile
 */
declare interface UserProfile {
    email: string;
    fullName?: string;
    familyName?: string;
    givenName?: string;
}

/**
 * Setting instance.
 *
 * @interface Settings
 */
declare interface Settings {
    [key: string]: undefined | number | string | Settings;
}
