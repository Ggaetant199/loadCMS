import Core from "../core/index.js";
import caches from "../caches/index.js";
import modules from "../modules/index.js";
import plugins from "../plugins/index.js";
import storages from "../storages/index.js";
import services from "../services/index.js";

export default () => {
  try {
    const core = new Core({
      caches: caches(), modules: modules(),
      plugins: plugins(), storages: storages(),
      services: services()
    });  

    core.mount();
  } catch (error) {
    console.log("build cms failed : " + error);
  }
}