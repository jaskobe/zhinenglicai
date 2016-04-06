!
    function() {
        var n = function(n) {
            return n
        };
        $R && ($R.dom = function(n) {
            return new $R.Dom(n)
        }, $R.Dom = function(n) {
            this.el = $(n)
        }, $R.Dom.prototype = {
            bindAttributeTo: function(t, i, u) {
                return u = u || n, $R(function(n) {
                    this.el[0] && (this.el[0][t] = u(n))
                }, this).bindTo(i), this
            },
            bindInputTo: function(n, t) {
                return this.bindAttributeTo("value", n, t), this
            },
            linkInput: function(n, t, i) {
                return this.bindInputTo(n, t), n.bindToInput(this.el, i), this
            }
        }, $R.extend($R.pluginExtensions, {
            bindToInput: function(t, i) {
                i = i || n;
                var u = this;
                return $(t).on("change", function() {
                    u(i(this.value))
                }), this
            }
        }))
    }();