var gulp = require("gulp");
var sass = require("gulp-sass");
var minimise = require("gulp-cssnano");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var sassSource = "./src/styles/sass/**/*.scss";
var cssSource = "./src/styles/css/*.css";
var stylesDest = "./build/css";

var htmlSource = "./src/*.html";
var htmlDest = "./build";

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

gulp.task("watch", function() {
    gulp.watch([sassSource, cssSource], ["styles"]);
    gulp.watch(htmlSource, ["html"]);
});

gulp.task("default", ["styles", "html", "watch"]);