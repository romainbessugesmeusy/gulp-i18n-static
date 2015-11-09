var gulp = require('gulp');
var replace = require('gulp-replace');
var i18n = require('i18n');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var through2 = require('through2');
var clean = require('gulp-clean');

var locales = ['en', 'fr'];

i18n.configure({
    locales: locales,
    directory: './locales'
});

var replaceI18N = function (locale) {
    return replace(/i18n\.__\(['"]([^'"]*)['"]\)/g, function (matches, key) {
        return "'" + i18n.__.call({scope: {locale: locale}}, key).replace("'", "\'") + "'";
    });
};

gulp.task('replaceTranslations', function () {
    locales.forEach(function (locale) {
        gulp.src('./src/**/*.js')
            .pipe(replaceI18N(locale))
            .pipe(gulp.dest('./tmp/' + locale));
    });
});

gulp.task('browserify', function () {
    locales.forEach(function (locale) {
        var b = browserify('./tmp/' + locale + '/app.js', {
            bundleExternals: false
        });
        b.ignore('i18n');
        b.bundle()
            .pipe(source('build.' + locale + '.js'))
            .pipe(gulp.dest('./dist/localized'));
    });
});

gulp.task('clean', function(){
    return gulp.src('./tmp').pipe(clean({force: true}))
});

gulp.task('default', ['replaceTranslations', 'browserify', 'clean']);
