//load all directives that is being registered
import registery from "./register";

export default {
  install: (app, options) => {
    for (const iterator of registery) {
      app.directive(iterator.name, iterator.directive);
    }
  }
};
