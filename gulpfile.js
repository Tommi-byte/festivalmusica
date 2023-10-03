const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css ( done ){
    // Identificar el archivo SASS
    src('src/scss/**/*.scss')
        // Compilarlo
        .pipe( plumber() )
        .pipe( sass() )
        // Almacenar
        .pipe( dest('build/css') )
    done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev( done ){
    watch('src/scss/**/*.scss', css)
    done();
}

exports.css = css;
exports.dev = dev;