import Router from 'vue-router';

export default (router: Router): void => {
    if (typeof google === 'undefined' || google.script === undefined) {
        return;
    }

    router.afterEach(({ path, query }) => {
        google.script.history.replace(null, query as any, path);
    });

    google.script.url.getLocation(({ hash: path, parameter: query }) => {
        router.replace({ path, query });
    });
};
