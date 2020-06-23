import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);
let storeModules = {}
const files = require.context('./modules/', false, /\.js$/);
files.keys().forEach(v => {
    if (v == './index.js') return;
    const reg=/\.\/(.*)\.js/ig;
    storeModules[v.replace(reg, '$1')] = files(v).default
})
const store = new vuex.Store({
    state:{
        blurShow:false
    },
    mutations:{
        setBlur(state,val){
            state.blurShow=val;
        }
    },
    modules:storeModules
})
export default store;