import stylus from "gulp-stylus";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import minifycss from "gulp-minify-css";
import concatcss from 'gulp-concat-css';

function css(cb) {
    return app.gulp.src(app.paths.src.css)
        .pipe(stylus())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(app.gulp.dest(app.paths.build.css));
}

export default css;