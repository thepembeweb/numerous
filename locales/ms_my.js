(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ms_my', function pluralize_ms_my(n /**/ ) {
        return "other"
    });
}).call(this);