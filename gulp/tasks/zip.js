import del from 'del';
import zipPlugin from 'gulp-zip';

const zipName = 'GoCorona';

function zip() {

    del(`./${zipName}.zip`);

    return app.gulp.src(`${app.paths.build.root}/**/*.*`)
        .pipe(zipPlugin(`${zipName}.zip`))
        .pipe(app.gulp.dest('./'));

}

export default zip;