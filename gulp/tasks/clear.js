import clean from 'gulp-clean';

function clear(cb) {
    return app.gulp.src(app.paths.clear, { read: false }).pipe(clean());
}

export default clear;