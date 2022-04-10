import gulp from 'gulp';
import paths from "./gulp/config/paths.js";
import plugins from "./gulp/config/plugins.js";
import clear from "./gulp/tasks/clear.js";
import build from "./gulp/tasks/build.js";
import watch from "./gulp/tasks/watch.js";
import zip from "./gulp/tasks/zip.js";

global.app = {
    dev: process.argv.includes('--dev'),
    paths, plugins, gulp
}

export {zip, clear, build, watch};

export default gulp.series(clear, build, watch);
