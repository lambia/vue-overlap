export default {
  install: function (Vue, options) {
    Vue.prototype.$app = options.$app;

    Vue.prototype.$app.lang = options.$app.defaultLang;
    Vue.prototype.$res = options.$res;

    //ToDev: funzione per cambio lingua con callback customizzabile (es. vuetify)
    //ToDev: benchmark require in (globals vs in lang.js)
    //ToDev: require per oggetti e array se typeof===string
    //ToDev: integrare queste modifiche su vuetify-frontend

    Vue.prototype.$eventBus = new Vue();
    if (process.env.NODE_ENV === "development") {
      console.log("[ENV] Development. window.eventBus is available");
      window.eventBus = Vue.prototype.$eventBus;
    }
  }
};
