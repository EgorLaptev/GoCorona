const paths = {
    src: {
        root: 'src',
        css: 'src/stylus/style.styl',
        img: 'src/img/**/*',
        js: 'src/js/**/*',
        fonts: 'src/fonts/**/*.+(ttf|woff|woff2|eot)'
    },
    build: {
        root: 'dist',
        css: 'dist/css',
        img: 'dist/img',
        js: 'dist/js',
        fonts: 'dist/fonts'
    },
    watch: {
        root: 'src',
        css: 'src/stylus/**/*',
        img: 'src/img/**/*',
        js: 'src/js/**/*',
        fonts: 'src/fonts/**/*'
    },
    clear: 'dist'
}

export default paths;