module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
};
