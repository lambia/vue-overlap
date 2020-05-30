export default {
  install: function (Vue, options) {
    Vue.prototype.$app = options.$app;

    Vue.prototype.$app.lang = options.$app.defaultLang;
    Vue.prototype.$res = options.$res;

    //ToDev: funzione per cambio lingua con callback customizzabile (es. vuetify)
    //ToDev: test per risorse in array e in array di oggetti per uso in v-for
    //ToDev: integrare queste modifiche su vuetify-frontend

    Vue.prototype.$eventBus = new Vue();
    if (process.env.NODE_ENV === "development") {
      console.log("[ENV] Development. window.eventBus is available");
      window.eventBus = Vue.prototype.$eventBus;
    }
  }
};
