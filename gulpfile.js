const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
    src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("build/css"));    
    done();
}

// función que esta escuchando cada cambio en lo arhcivos scss
function dev(done) {
    watch("src/scss/app.scss", css);

    done();
}

exports.css = css;
exports.dev = dev;


