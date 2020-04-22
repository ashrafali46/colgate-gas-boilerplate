import settings from '@/settings.json';

export function getOAuthToken(): Promise<string> {
    if (typeof google === 'undefined' || google.script === undefined)
        return Promise.resolve(settings.oauthToken);

    return run(`getOAuthToken`);
}

export function getActiveUserProfile(): Promise<GoogleAppScript.UserProfile> {
    if (typeof google === 'undefined' || google.script === undefined)
        return new Promise<GoogleAppScript.UserProfile>((resolve) => {
            resolve({
                email: 'colgate_palmolive@colpal.com',
                familyName: 'Colgate',
                fullName: 'Colgate Palmolive',
                givenName: 'Palmolive',
            });
        });

    return run(`getActiveUserProfile`);
}

function run(functionName: string, ...args: any[]): Promise<any> {
    if (typeof google === 'undefined' || google.script === undefined)
        return Promise.resolve();

    return new Promise((resolve, reject) =>
        google.script.run
            .withSuccessHandler(resolve)
            .withFailureHandler(reject)
            [functionName](args)
    );
}
