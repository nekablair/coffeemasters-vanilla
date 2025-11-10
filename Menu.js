//must add .js to end or it will not work in browser(use full file name with extension)
import API from "./services/API.js";

//export single function to load menu
export async function loadData() {
    app.store.menu = await API.fetchMenu() 
}

