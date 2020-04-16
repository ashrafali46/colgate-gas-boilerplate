import {
    doGet,
    getOAuthToken,
    getActiveUserProfile,
    getSettings,
} from './functions';

declare var global: any;

global.doGet = doGet;
global.getOAuthToken = getOAuthToken;
global.getActiveUserProfile = getActiveUserProfile;
global.getSettings = getSettings;
