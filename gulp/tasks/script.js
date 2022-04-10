import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import sourcemaps from "gulp-sourcemaps";

function js(cb) {
    return app.gulp.src(app.paths.src.js)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(app.gulp.dest(app.paths.build.js));
}

export default js;