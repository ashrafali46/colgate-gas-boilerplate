export function getOAuthToken(): Promise<string> {
    return run(`getOAuthToken`);
}

export function getActiveUserProfile(): Promise<UserProfile> {
    if (typeof google === 'undefined' || google.script === undefined)
        return new Promise<UserProfile>((resolve) => {
            setTimeout(function () {
                resolve({
                    email: 'colgate_palmolive@colpal.com',
                    familyName: 'Colgate',
                    fullName: 'Colgate Palmolive',
                    givenName: 'Palmolive',
                });
            }, 1000);
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
