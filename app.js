// const $ = function(args){ return document.querySelector(args);}
// const $$ = function(args){ return document.querySelectorAll(args);}

// HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
// HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
// HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
// HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }

import Store from './services/Store.js' 
import API from './services/API.js'
//since exported by one function, needs to use specific name in import
import { loadData } from './services/Menu.js'

//make Store globally available  
window.app = {}
app.store = Store

//wait for event then manipulate DOM
window.addEventListener("DOMContentLoaded", async () => {
    loadData() 
});
