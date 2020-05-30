import Dictionaries from "@/resources";

export default {
  $app: {
    appName: "vue-overlap",
    lang: null,
    defaultLang: "it"
  },
  $res(name, resolvePath = true) {
    let constant = Dictionaries["constant"][name];
    let localized = Dictionaries[this.$app.lang][name];

    if (constant && resolvePath) {
      constant = require('@/' + constant);
    }

    return constant || localized;
  }
};
