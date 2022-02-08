/**
 * Import all Global components here
 */
import CustomTable from "./CustomTable.vue";


/**
 * This function is responsible for registering
 * all the global component to the root instance of
 * vue
 * @param {*} App
 */
const registerComponents = (App) => {
    App.component('custom-table', CustomTable);
}

export {
    registerComponents
}
