
export default class {
  constructor ({
    plugins, caches, services, storages, modules
  }) {
    this.plugins = plugins;
    this.caches = caches;
    this.services = services;
    this.storages = storages;
    this.modules = modules;

    this.validator();
  }

  mount () {
    
  }

  validator () {
    if (typeof this.plugins != "object") {
      throw "plugins valdation failed";
    }

    if (typeof this.caches != "object") {
      throw "caches valdation failed";
    }

    if (typeof this.services != "object") {
      throw "services valdation failed";
    }

    if (typeof this.modules != "object") {
      throw "modules valdation failed";
    }

    if (typeof this.storages != "object") {
      throw "strages valdation failed";
    }
  }
}