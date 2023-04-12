const {src, dest, watch, lastRun} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {
    src("src/scss/app.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));    
    done();
}

// función que esta escuchando cada cambio en lo arhcivos scss
function dev(done) {
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.dev = dev;


