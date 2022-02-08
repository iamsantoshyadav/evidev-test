const {
    VUE_APP_API_BASE_URL, NODE_ENV = '',
    VUE_APP_APP_NAME='EviDevTest',
} = process.env;

const environment = NODE_ENV.toLowerCase();
const apiBaseUrl = VUE_APP_API_BASE_URL;
const appName = VUE_APP_APP_NAME;

export { environment, apiBaseUrl, appName };
