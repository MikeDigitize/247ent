var gulp = require("gulp");
var sass = require("gulp-sass");
var minimise = require("gulp-cssnano");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var webpack = require("webpack-stream");
var sassSource = "./src/styles/sass/**/*.scss";
var cssSource = "./src/styles/css/*.css";
var stylesDest = "./build/css";

var jsSource = "./src/js/app.js";
var jsDest = "./build/js";

var htmlSource = "./src/*.html";
var htmlDest = "./build";

var fontSource = "./src/styles/fonts/*";
var fontDest = "./build/fonts";

gulp.task("js", () => {
    return gulp.src(jsSource)
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest(jsDest));
});

gulp.task("styles", () => {
    return gulp.src([cssSource, sassSource])
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minimise())
        .pipe(concat("styles.css"))
        .pipe(gulp.dest(stylesDest));
});

gulp.task("html", () => {
    return gulp.src(htmlSource)
        .pipe(gulp.dest(htmlDest));
});

gulp.task("fonts", () => {
    return gulp.src(fontSource)
        .pipe(gulp.dest(fontDest));
});


gulp.task("watch", function() {
    gulp.watch([sassSource, cssSource], ["styles"]);
    gulp.watch(htmlSource, ["html"]);
    gulp.watch(jsSource, ["js"]);
});

gulp.task("default", ["fonts", "styles", "html", "js", "watch"]);