import js from './script.js';
import css from "./css.js";
import img from "./img.js";
import fonts from "./fonts.js";

function build(cb) {
    fonts(cb);
    img(cb);
    css(cb);
    js(cb);
    cb()
}

export default build;