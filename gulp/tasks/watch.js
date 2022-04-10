import css from "./css.js";
import img from "./img.js";
import fonts from "./fonts.js";
import script from "./script.js";

function watch() {
    app.gulp.watch(app.paths.watch.img, img);
    app.gulp.watch(app.paths.watch.css, css);
    app.gulp.watch(app.paths.watch.js, script);
    app.gulp.watch(app.paths.watch.fonts, fonts);
}

export default watch;