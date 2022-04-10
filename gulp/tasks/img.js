import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

function img(cb) {
    return app.gulp.src(app.paths.src.img)
        .pipe(imagemin())
        .pipe(
            app.plugins.if( !app.dev, webp() )
        )
        .pipe(app.gulp.dest(app.paths.build.img));
}

export default img;