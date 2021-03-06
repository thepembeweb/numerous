(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('gv', function pluralize_gv(n /**/ ) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, "").length;
        if (typeof n === "string") n = parseInt(n, 10);
        if (v === 0 && i % 10 === 1) return "one";
        if (v === 0 && i % 10 === 2) return "two";
        if (v === 0 && (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80)) return "few";
        if (!(v === 0)) return "many";
        return "other"
    });
}).call(this);