/**
 * Get active user profile.
 *
 * @export
 * @returns {UserProfile}
 */
export function getActiveUserProfile(): UserProfile {
    var email = Session.getEffectiveUser().getEmail();

    var contact = ContactsApp.getContact(email);

    const fullName = contact?.getFullName();

    const familyName = contact?.getFamilyName();

    const givenName = contact?.getGivenName();

    return {
        fullName,
        email,
        familyName,
        givenName,
    };
}
