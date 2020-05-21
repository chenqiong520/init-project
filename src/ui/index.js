import Vue from "vue";
import "./custom-theme.scss";
import "./overwrite.scss";
import { Input, Button, Select, Popover, Badge } from "element-ui";

Vue.component("gp-input", Input);
Vue.component("gp-button", Button);
Vue.component("gp-select", Select);
Vue.component("gp-popover", Popover);
Vue.component("gp-badge", Badge);
