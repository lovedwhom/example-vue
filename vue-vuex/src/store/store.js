import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
console.log()

//do not need "import app from './modules/app.js'"
//it will auto require all vuex modules from modules files


const modulesFiles =  require.context('./modules',true,/\.js$/);
const modules = modulesFiles.keys().reduce((modules,key)=>{
  //set "app.js" => "app"
  //Do not exceed two levels of directories
  //like ./modules/app/index.js
  //modules will be set app/index
  const moduleName = key.replace(/^\.\/(.*)\.\w+$/,'$1');

  modules[moduleName] = modulesFiles(key).default;
  return modules
},{});

export default new Vuex.Store({
  modules:modules,
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
