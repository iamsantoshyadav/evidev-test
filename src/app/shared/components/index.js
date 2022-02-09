/**
 * Import all Global components here
 */
import CustomTable from "./CustomTable.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowDown,faArrowUp);


/**
 * This function is responsible for registering
 * all the global component to the root instance of
 * vue
 * @param {*} App
 */
const registerComponents = (App) => {
    App.component('custom-table', CustomTable);
    App.component("font-awesome-icon", FontAwesomeIcon)
}

export {
    registerComponents
}
