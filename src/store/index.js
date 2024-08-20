import { createStore } from "vuex";
import { auth } from "./auth.module";
import { cartStore } from "./cart.module";

const store = createStore({
  modules: {
    auth,
    cartStore,
  },
});

export default store;