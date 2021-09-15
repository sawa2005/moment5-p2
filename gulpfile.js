const gulp = require("gulp");
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const { src, dest, series, watch, task } = require('gulp');
var browserSync = require('browser-sync').create();

// File directories
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/styles/*.css",
    jsPath: "src/scripts/*.js",
    imgPath: "src/images/*"
}

// HTML-task / Kopierar HTML-filerna
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

// CSS-task / Kopierar, konkatenerar och minimerar CSS-filerna
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('pub/styles'));
}

// JS-task / Kopierar, konkatenerar och minimerar JS-filerna
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('pub/scripts'));
}

// Image-task / Kopierar bildfilerna
function imgTask() {
    return src(files.imgPath)
    .pipe(dest('pub/images'));
}

// Browsersync / Ger webbsidan en livereload-funktion
function browsersyncServer(cb) {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch Task / Ser till att rätt task körs om någon fil ändras
function watchTask(){
    watch(files.htmlPath, browsersyncReload);
    watch([files.cssPath, files.jsPath], browsersyncReload);
    watch(files.htmlPath, copyHTML);
    watch(files.cssPath, cssTask);
    watch(files.jsPath, jsTask);
    watch(files.imgPath, imgTask);
}

// Exporterar alla tasks
exports.default = series(
    copyHTML, 
    cssTask, 
    jsTask, 
    imgTask,
    browsersyncServer, 
    browsersyncReload, 
    watchTask);