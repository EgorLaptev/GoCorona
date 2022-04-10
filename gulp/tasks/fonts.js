import ttf2woff2 from "gulp-ttf2woff2";
import fonter from "gulp-fonter";

function fonts(cb) {
    return app.gulp.src(app.paths.src.fonts)
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.paths.build.fonts));
}

export default fonts;