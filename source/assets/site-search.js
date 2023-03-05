/*!
 * Simple-Jekyll-Search
 * Copyright 2015-2020, Christian Fei * Licensed under the MIT License.
 * Modified by Olya VO (separated search in different languages; custom no-results page)
 */
! function() {
    "use strict";
    var t = document.querySelector(".navbar .lang [data-lang]").dataset.lang,
        e = window.location.origin,
        n = {
            en: ["Sorry, no results found...", "But in the footer of the <a href='/en/'>home page</a> lives a happy cat! Don’t even offer it any mice!"],
            uk: ["На жаль, результатів не знайдено...", "Проте на <a href='/'>головній сторінці</a> в підвалі живе щаслива кішка. Навіть не пропонуйте їй мишей!"],
            ru: ["К сожалению, ничего не найдено...", "Зато <a href='/ru/'>на главной</a> в футере живет счастливая кошка. Даже не предлагайте ей никаких мышей!"]
        },
        r = {
            compile: function(t) {
                return o.template.replace(o.pattern, (function(e, n) {
                    var r = o.middleware(n, t[n], o.template);
                    return void 0 !== r ? r : t[n] || e
                }))
            },
            setOptions: function(t) {
                o.pattern = t.pattern || o.pattern, o.template = t.template || o.template, "function" == typeof t.middleware && (o.middleware = t.middleware)
            }
        };
    const o = {
        pattern: /\{(.*?)\}/g,
        template: "",
        middleware: function() {}
    };
    var i = new function() {
            this.matches = function(t, e) {
                return function(t, e) {
                    var n = e.length,
                        r = t.length;
                    if (n < r) return !1;
                    if (r === n) return t === e;
                    t: for (var o = 0, i = 0; o < r; o++) {
                        for (var u = t.charCodeAt(o); i < n;)
                            if (e.charCodeAt(i++) === u) continue t;
                        return !1
                    }
                    return !0
                }(e.toLowerCase(), t.toLowerCase())
            }
        },
        u = new function() {
            this.matches = function(t, e) {
                return !!t && (t = t.trim().toLowerCase(), (e = e.trim().toLowerCase()).split(" ").filter((function(e) {
                    return 0 <= t.indexOf(e)
                })).length === e.split(" ").length)
            }
        },
        c = {
            put: function(t) {
                return d(t) ? p(t) : function(t) {
                    return Boolean(t) && "[object Array]" === Object.prototype.toString.call(t)
                }(t) ? function(t) {
                    const e = [];
                    f();
                    for (let n = 0, r = t.length; n < r; n++) d(t[n]) && e.push(p(t[n]));
                    return e
                }(t) : void 0
            },
            clear: f,
            search: function(t) {
                return t ? function(t, e, n, r) {
                    const o = [];
                    for (let u = 0; u < t.length && o.length < r.limit; u++) {
                        var i = function(t, e, n, r) {
                            for (const o in t)
                                if (! function(t, e) {
                                        for (let r = 0, o = e.length; r < o; r++) {
                                            var n = e[r];
                                            if (new RegExp(n).test(t)) return !0
                                        }
                                        return !1
                                    }(t[o], r.exclude) && n.matches(t[o], e)) return t
                        }(t[u], e, n, r);
                        i && o.push(i)
                    }
                    return o
                }(s, t, l.searchStrategy, l).sort(l.sort) : []
            },
            setOptions: function(t) {
                l = t || {}, l.fuzzy = t.fuzzy || !1, l.limit = t.limit || 10, l.searchStrategy = t.fuzzy ? i : u, l.sort = t.sort || a, l.exclude = t.exclude || []
            }
        };

    function a() {
        return 0
    }
    const s = [];
    let l = {};

    function f() {
        return s.length = 0, s
    }

    function d(t) {
        return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t)
    }

    function p(t) {
        return s.push(t), s
    }
    l.fuzzy = !1, l.limit = 100, l.searchStrategy = l.fuzzy ? i : u, l.sort = a, l.exclude = [];
    var h = function(t, e) {
        const n = window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        n.open("GET", t, !0), n.onreadystatechange = function(t, e) {
            return function() {
                if (4 === t.readyState && 200 === t.status) try {
                    e(null, JSON.parse(t.responseText))
                } catch (t) {
                    e(t, null)
                }
            }
        }(n, e), n.send()
    };
    var m = function t(e) {
            if (!(n = e) || !(void 0 !== n.required && n.required instanceof Array)) throw new Error("-- OptionsValidator: required options missing");
            var n;
            if (!(this instanceof t)) return new t(e);
            const r = e.required;
            this.getRequiredOptions = function() {
                return r
            }, this.validate = function(t) {
                const e = [];
                return r.forEach((function(n) {
                    void 0 === t[n] && e.push(n)
                })), e
            }
        },
        g = function(t, e) {
            const n = {};
            for (const r in t) n[r] = t[r], void 0 !== e[r] && (n[r] = e[r]);
            return n
        },
        w = function(t) {
            try {
                return !!(t instanceof Object && JSON.parse(JSON.stringify(t)))
            } catch (t) {
                return !1
            }
        };
    ! function(o) {
        let i, u = {
            searchInput: null,
            resultsContainer: null,
            json: [],
            success: Function.prototype,
            searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
            templateMiddleware: Function.prototype,
            sortMiddleware: function() {
                return 0
            },
            noResultsText: '<h1 class="txt-center">' + n[t][0] + '</h1><h3 class="txt-center">' + n[t][1] + '</h3><p class="txt-center"><image src="' + e + '/images/no-results-found.png"></p>',
            limit: 100,
            fuzzy: !1,
            debounceTime: null,
            exclude: []
        };
        const a = function(t, e) {
            e ? (clearTimeout(i), i = setTimeout(t, e)) : t.call()
        };
        var s = ["searchInput", "resultsContainer", "json"];
        const l = m({
            required: s
        });

        function f(t) {
            c.put(t), u.searchInput.addEventListener("input", (function(t) {
                -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(t.which) && (d(), a((function() {
                    y(t.target.value)
                }), u.debounceTime))
            }))
        }

        function d() {
            u.resultsContainer.innerHTML = ""
        }

        function p(t) {
            u.resultsContainer.innerHTML += t
        }

        function y(e) {
            var n;
            (n = e) && 0 < n.length && (d(), function(e, n) {
                var o = e.length;
                if (0 === o) return p(u.noResultsText);
                for (let i = 0; i < o; i++) e[i].query = n, t == e[i].lang && p(r.compile(e[i]))
            }(c.search(e), e))
        }

        function v(t) {
            throw new Error("SimpleJekyllSearch --- " + t)
        }
        o.SimpleJekyllSearch = function(t) {
            var e;
            return 0 < l.validate(t).length && v("You must specify the following required options: " + s), u = g(u, t), r.setOptions({
                template: u.searchResultTemplate,
                middleware: u.templateMiddleware
            }), c.setOptions({
                fuzzy: u.fuzzy,
                limit: u.limit,
                sort: u.sortMiddleware,
                exclude: u.exclude
            }), w(u.json) ? f(u.json) : (e = u.json, h(e, (function(t, n) {
                t && v("failed to get JSON (" + e + ")"), f(n)
            }))), t = {
                search: y
            }, "function" == typeof u.success && u.success.call(t), t
        }
    }(window)
}();