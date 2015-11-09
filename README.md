# gulp-i18n-static

This is just a proof of concept for demonstrating localized browser builds, using gulp + browserify and i18n.
Working on a isomorphic JS webapp, I didn't want to:

- bundle the whole i18n library
- retrieve the translations files in an AJAX call
- serve all the translations keys if a user is going to use 5% of them

I had the idea to use gulp-replace to replace every `i18n.__` calls in the source files by the localized string.

Of course, as a proof-of-concept, this has still major flaws (like it doesn't handle plurals), but I've got that working for me, which is nice.
