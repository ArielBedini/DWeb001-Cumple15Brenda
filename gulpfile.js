const {src, dest, watch, lastRun, parallel} = require("gulp");

// dependencias para css
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//dependencias para imágenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

// funcion para compilar sass a css
function css(done) {
    src("src/scss/app.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));    
    done();
}

// función para optimizar imagenes
function imagenOptimizer(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("build/img"))

    done();
}

// funciones para convertir imagenes a webp
function conversorWebp(done) {
    const opciones = {
        quality: 50
    }
    src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))

    done();
}

// funciones para convertir imagenes a webp
function conversorAvif(done) {
    const opciones = {
        quality: 50
    }
    src("src/img/**/*.{png,jpg}")
        .pipe(avif(opciones))
        .pipe(dest("build/img"))

    done();
}


// función que esta escuchando cada cambio en lo arhcivos scss
function dev(done) {
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.imagenOptimizer = imagenOptimizer;
exports.conversorWebp = conversorWebp;
exports.conversorAvif = conversorAvif;
exports.dev = parallel(imagenOptimizer, conversorWebp, conversorAvif, dev);


