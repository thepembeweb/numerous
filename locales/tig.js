var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_tig(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    return "other"
};
numerous.addLocale('tig', pluralize);