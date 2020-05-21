import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/user";
import Course from "./modules/course";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    Course
  }
});
