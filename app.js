var i18n = require('i18n');

i18n.configure({
    locales:['en', 'fr'],
    directory: './locales',
    defaultLocale: 'fr'
});

var greeting = require('./src/greeting');

console.log(greeting('Romain'));