var i18n = require('i18n');

module.exports = function(firstname){
    return i18n.__('hello') + ' ' + firstname + ' \n' + i18n.__("how are you ?");
};