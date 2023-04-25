const {src, dest, watch, lastRun, parallel} = require("gulp");

// dependencias para css
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");


//dependencias para imágenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
//const avif = require("gulp-avif");

//dependencias para JAvascript
const terser = require("gulp-terser-js");

// funcion para compilar sass a css
function css(done) {
    src("src/scss/app.scss")
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write("."))
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


// funcion para llevar todo nuestro codigo javacript a nuestro deployment en la carpeta 'build'
function javascript(done) {
    src("src/js/**/*.js")
        .pipe(terser())
        .pipe(dest("build/js"));
    
    done();
}

// función que esta escuchando cada cambio en lo arhcivos scss
function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);

    done();
}

exports.css = css;
exports.javascript = javascript;
exports.imagenOptimizer = imagenOptimizer;
exports.conversorWebp = conversorWebp;
exports.conversorAvif = conversorAvif;
exports.dev = parallel(imagenOptimizer, conversorWebp, javascript, dev);
//exports.dev = parallel(imagenOptimizer, conversorWebp, conversorAvif, javascript, dev);


