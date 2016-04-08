;var w;
w = w || {}, w.nuggets = w.nuggets || {}, $(function() {
    function t(a) {
        this.$table = a, this.layers = $R.state(), this.column = $R.state(), this.columnFromLayers = $R(t.columnFromLayers).bindTo(this.column, this.layers), this.investmentAmount = $R.state(1e5),this.testAmount = $R(t.columnLayer).bindTo(this.columnFromLayers, 5), this.indexFundsOverMutualFundsAmount = $R(t.columnLayer).bindTo(this.columnFromLayers, 4), this.taxLossHarvestingAmount = $R(t.columnLayer).bindTo(this.columnFromLayers, 3), this.optimalAllocationAmount = $R(t.columnLayer).bindTo(this.columnFromLayers, 2), this.automaticRebalancingAmount = $R(t.columnLayer).bindTo(this.columnFromLayers, 1), this.taxAwareAllocationAmount = $R(t.columnLayer).bindTo(this.columnFromLayers, 0), this.totalEstimatedReturnAmount = $R(t.totalEstimatedReturnAmount).bindTo(this.indexFundsOverMutualFundsAmount,this.testAmount, this.taxLossHarvestingAmount, this.optimalAllocationAmount, this.automaticRebalancingAmount, this.taxAwareAllocationAmount), $R.dom(".hp-performance-nugget-table-index-funds-over-mutual-funds-row .hp-performance-nugget-table-amount").bindAttributeTo("innerHTML", this.indexFundsOverMutualFundsAmount, t.amountFormatter),$R.dom(".hp-performance-nugget-table-test-row .hp-performance-nugget-table-amount").bindAttributeTo("innerHTML", this.testAmount, t.amountFormatter), $R.dom(".hp-performance-nugget-table-tax-loss-harvesting-row .hp-performance-nugget-table-amount").bindAttributeTo("innerHTML", this.taxLossHarvestingAmount, t.amountFormatter), $R.dom(".hp-performance-nugget-table-optimal-allocation-row .hp-performance-nugget-table-amount").bindAttributeTo("innerHTML", this.optimalAllocationAmount, t.amountFormatter), $R.dom(".hp-performance-nugget-table-automatic-rebalancing-row .hp-performance-nugget-table-amount").bindAttributeTo("innerHTML", this.automaticRebalancingAmount, t.amountFormatter), $R.dom(".hp-performance-nugget-table-tax-aware-allocation-row .hp-performance-nugget-table-amount").bindAttributeTo("innerHTML", this.taxAwareAllocationAmount, t.amountFormatter), $R.dom(".hp-performance-nugget-table-total-estimated-return-amount").bindAttributeTo("innerHTML", this.totalEstimatedReturnAmount, t.amountFormatter)
    }
    function a(t, n) {
        var e = {
                left: 15,
                right: 48,
                top: 0,
                bottom: 35
            },
            i = {
                marginLeft: 3,
                marginRight: 8
            },
            r = {
                maxYMultiplier: 1.1
            },
            o = ["hp-performance-graph-tax-aware-allocation-fill", "hp-performance-graph-automatic-rebalancing-fill", "hp-performance-graph-optimal-allocation-fill", "hp-performance-graph-tax-loss-harvesting-fill", "hp-performance-graph-index-funds-over-mutual-funds-fill","test_fill"],
            s = d3.select(t[0]);
        this.xAxisContainer = s.append("g").classed("hp-performance-graph-axis-container", !0), this.xLabelContainer = s.append("g").classed("hp-performance-graph-label-container", !0), this.yAxisContainer = s.append("g").classed("hp-performance-graph-axis-container", !0), this.barsContainer = s.append("g").attr("transform", "translate(" + e.left + ",0)"), this.yTicks = $R.state(4), this.width = $R.state(t.width()), this.widthNoMargins = $R(a.widthNoMargins, this).bindTo(this.width, e.left, e.right), this.height = $R.state(t.height()), this.heightNoMargins = $R(a.heightNoMargins, this).bindTo(this.height, e.top, e.bottom), this.data = $R.state(), this.stack = $R(a.stack, this), this.layers = $R(a.layers, this).bindTo(this.stack, this.data), this.layersByColumn = $R(a.layersByColumn, this).bindTo(this.layers), this.maxY = $R(a.maxY, this).bindTo(this.layers, r.maxYMultiplier), this.x = $R(a.x, this).bindTo(this.widthNoMargins, this.data), this.y = $R(a.y, this).bindTo(this.heightNoMargins, this.maxY), this.axisXScale = $R(a.axisXScale, this).bindTo(this.widthNoMargins, i.marginLeft, i.marginRight), this.xAxis = $R(a.xAxis, this).bindTo(this.axisXScale), this.xLabel = $R(a.xLabel, this).bindTo(this.axisXScale), this.xAxisSvg = $R(a.xAxisSvg, this).bindTo(this.xAxis, this.heightNoMargins, e.left, this.xAxisContainer), this.xLabelSvg = $R(a.xLabelSvg, this).bindTo(this.xLabel, this.heightNoMargins, e.left, this.xLabelContainer), this.axisYScale = $R(a.axisYScale, this).bindTo(this.heightNoMargins, this.maxY), this.yAxis = $R(a.yAxis, this).bindTo(this.axisYScale, this.widthNoMargins, this.yTicks), this.yAxisSvg = $R(a.yAxisSvg, this).bindTo(this.yAxis, e.left, this.yAxisContainer), this.bars = $R(a.bars, this).bindTo(this.x, this.y, this.heightNoMargins, this.widthNoMargins, this.layersByColumn, o, n)
    }
    function n(t, a) {
        this.$container = t, this.callback = a, this.width = $R.state(this.$container.width()), this.dataSet = $R(n.dataSet, this).bindTo(this.width), $R(n.dataSetCallback).bindTo(this.dataSet, this.callback)
    }
    function e(i, r, o) {
        var s = this;
        this.$frame = i, this.$svg = this.$frame.find("svg"), this.$svg.on("mouseleave", function() {
            e.columnMouseoverCallback(s.$svg[0], s.performanceTable)
        }), this.$table = this.$frame.find(".hp-performance-nugget-table"), this.$table.on("click", function() {
            e.columnMouseoverCallback(s.$svg[0], s.performanceTable)
        }), this.$disclosureControls = r.find(".hp-performance-nugget-disclosure-button"), this.$disclosureContent = o, this.$window = $(window), this.dynamicDataSet = new n(this.$frame, w.bind(this.dataSetChanged, this)), this.performanceTable = new t(this.$table), this.performanceGraph = new a(this.$svg, function() {
            e.columnMouseoverCallback(this, s.performanceTable)
        }), this._svgLastWidth = null, this.$window.on("resize", w.bind(this.windowResized, this)), this.$disclosureControls.on("click", w.bind(this.toggleDisclosure, this)), this.performanceGraph.data(this.dynamicDataSet.dataSet()), this.windowResized()
    }
    t.columnFromLayers = function(t, a) {
        return (null == t || 0 > t || t >= a[0].length) && (t = a[0].length - 1), _.map(a, function(a) {
            return a[t]
        })
    }, t.columnLayer = function(t, a) {
        return t[a].y
    }, t.totalEstimatedReturnAmount = function(t, a, n, e, i) {
        return t + a + n + e + i
    }, t.amountFormatter = function(t) {
        return "+" + w.wholeDollarAmount(t)
    }, a.maxY = function(t, a) {
        return d3.max(t[t.length - 1], function(t) {
                return t.y0 + t.y
            }) * a
    }, a.stack = function() {
        return d3.layout.stack()
    }, a.layers = function(t, a) {
        return t(a)
    }, a.heightNoMargins = function(t, a, n) {
        return t - a - n
    }, a.widthNoMargins = function(t, a, n) {
        return t - a - n
    }, a.x = function(t, a) {
        return d3.scale.ordinal().domain(d3.range(0, a[0].length)).rangeBands([0, t], .3, 0)
    }, a.y = function(t, a) {
        return d3.scale.linear().domain([0, a]).range([0, t]).nice()
    }, a.xAxis = function(t) {
        return d3.svg.axis().scale(t).ticks(3).tickSize(0).tickPadding(7).orient("bottom")
    }, a.xLabel = function(t) {
        return d3.svg.axis().scale(t).ticks(3).tickSize(0).tickPadding(20).tickFormat(function(t) {
            return 10 == t ? "YEARS" : ""
        }).orient("bottom")
    }, a.xAxisSvg = function(t, a, n, e) {
        e.attr("transform", "translate(" + n + "," + a + ")").call(t)
    }, a.xLabelSvg = function(t, a, n, e) {
        e.attr("transform", "translate(" + n + "," + a + ")").call(t)
    }, a.axisXScale = function(t, a, n) {
        return d3.scale.linear().domain([0, 20]).range([a, t - n])
    }, a.yAxis = function(t, n, e) {
        return d3.svg.axis().scale(t).ticks(e).tickFormat(a.yAxisTickFormatter).tickPadding(7).tickSize(n).orient("right")
    }, a.yAxisSvg = function(t, a, n) {
        n.attr("transform", "translate(" + a + ",0)").call(t)
    }, a.axisYScale = function(t, a) {
        return d3.scale.linear().domain([0, a]).range([t, 0]).nice()
    }, a.yAxisTickFormatter = function(t) {
        return t > 1e4 && 7e5 > t ? "+" + t / 1e3 + "k" : ""
    }, a.yTicks = function(t) {
        return t(1) / 1e5
    }, a.layersByColumn = function(t) {
        var a = [];
        return t.forEach(function(t) {
            t.forEach(function(t) {
                a[t.x] = a[t.x] || [], a[t.x].push(t)
            })
        }), a
    }, a.bars = function(t, a, n, e, i, r, o) {
        var s = this.barsContainer.selectAll(".hp-performance-graph-column").data(i);
        s.attr("opacity", 1), s.enter().append("g").classed("hp-performance-graph-column", !0).attr("data-column", function(t, a) {
            return a
        }).on("mouseover", o).on("vclick", o), s.exit().remove();
        var l = s.selectAll(".hp-performance-graph-grid-left").data(Object);
        l.enter().append("line").classed("hp-performance-graph-grid-left", !0), l.exit().remove(), l.attr("x1", function(a) {
            return Math.floor(t(a.x))
        }).attr("y1", function(t) {
            return 0
        }).attr("x2", function(a) {
            return Math.floor(t(a.x))
        }).attr("y2", function(t) {
            return n
        });
        var h = s.selectAll(".hp-performance-graph-grid-right").data(Object);
        h.enter().append("line").classed("hp-performance-graph-grid-right", !0), h.exit().remove(), h.attr("x1", function(a) {
            return t(a.x) + t.rangeBand()
        }).attr("y1", function(t) {
            return 0
        }).attr("x2", function(a) {
            return t(a.x) + t.rangeBand()
        }).attr("y2", function(t) {
            return n
        });
        var c = s.selectAll(".hp-performance-graph-rect").data(Object);
        c.enter().append("rect").attr("class", function(t, a) {
            return "hp-performance-graph-rect " + r[a]
        }), c.exit().remove(), c.attr("x", function(a) {
            return t(a.x);
        }).attr("y", function(t) {


            return n - a(t.y0) - a(t.y)
        }).attr("height", function(t) {



            return a(t.y)
        }).attr("width", function(a) {


            return t.rangeBand()
        })
    }, n.dataSet = function(t) {
        var a;
        return a = 480 >= t ? {
            tax_aware_allocation: [0, 600, 1246.62, 1943.48, 2694.49, 3503.85, 4376.1, 5316.13, 6329.19, 7420.97, 8597.58, 9865.61, 11232.16, 12704.9, 14292.07, 16002.57, 17845.97, 19832.6, 21973.59, 24280.94, 26767.57],
            automatic_rebalancing: [0, 400, 831.08, 1295.65, 1796.33, 2335.9, 2917.4, 3544.08, 4219.46, 4947.31, 5731.72, 6577.07, 7488.11, 8469.94, 9528.05, 10668.38, 11897.31, 13221.73, 14649.06, 16187.29, 17845.05],
            optimal_allocation: [0, 500, 1038.85, 1619.57, 2245.41, 2919.88, 3646.75, 4430.1, 5274.32, 6184.14, 7164.65, 8221.34, 9360.14, 10587.42, 11910.06, 13335.47, 14871.64, 16527.17, 18311.33, 20234.12, 22306.31],
            tax_loss_harvesting: [0, 1e3, 2077.7, 3239.14, 4490.82, 5839.75, 7293.5, 8860.21, 10548.65, 12368.28, 14329.29, 16442.68, 18720.27, 21174.84, 23820.12, 26670.95, 29743.28, 33054.33, 36622.66, 40468.24, 44612.62],
            index_funds_over_mutual_funds: [0, 2100, 4363.17, 6802.19, 9430.72, 12263.49, 15316.36, 18606.44, 22152.16, 25973.38, 30091.51, 34529.62, 39312.58, 44467.16, 50022.26, 56008.99, 62460.89, 69414.1, 76907.58, 84983.3, 93686.5],
            test: [100, 2100, 4363.17, 6802.19, 9430.72, 12263.49, 15316.36, 18606.44, 22152.16, 25973.38, 30091.51, 34529.62, 39312.58, 44467.16, 50022.26, 56008.99, 62460.89, 69414.1, 76907.58, 84983.3, 93686.5]
        } : 800 > t ? {
            tax_aware_allocation: [0, 300, 600, 923.31, 1246.62, 1595.05, 1943.48, 2318.985, 2694.49, 3099.17, 3503.85, 3939.975, 4376.1, 4846.115, 5316.13, 5822.66, 6329.19, 6875.08, 7420.97, 8009.275, 8597.58, 9231.595, 9865.61, 10548.885, 11232.16, 11968.53, 12704.9, 13498.485, 14292.07, 15147.32, 16002.57, 16924.27, 17845.97, 18839.285, 19832.6, 20903.095, 21973.59, 23127.265, 24280.94, 25524.255, 26767.57],
            automatic_rebalancing: [0, 200, 400, 615.54, 831.08, 1063.365, 1295.65, 1545.99, 1796.33, 2066.115, 2335.9, 2626.65, 2917.4, 3230.74, 3544.08, 3881.77, 4219.46, 4583.385, 4947.31, 5339.515, 5731.72, 6154.395, 6577.07, 7032.59, 7488.11, 7979.025, 8469.94, 8998.995, 9528.05, 10098.215, 10668.38, 11282.845, 11897.31, 12559.52, 13221.73, 13935.395, 14649.06, 15418.175, 16187.29, 17016.17, 17845.05],
            optimal_allocation: [0, 250, 500, 769.425, 1038.85, 1329.21, 1619.57, 1932.49, 2245.41, 2582.645, 2919.88, 3283.315, 3646.75, 4038.425, 4430.1, 4852.21, 5274.32, 5729.23, 6184.14, 6674.395, 7164.65, 7692.995, 8221.34, 8790.74, 9360.14, 9973.78, 10587.42, 11248.74, 11910.06, 12622.765, 13335.47, 14103.555, 14871.64, 15699.405, 16527.17, 17419.25, 18311.33, 19272.725, 20234.12, 21270.215, 22306.31],
            tax_loss_harvesting: [0, 500, 1e3, 1538.85, 2077.7, 2658.42, 3239.14, 3864.98, 4490.82, 5165.285, 5839.75, 6566.625, 7293.5, 8076.855, 8860.21, 9704.43, 10548.65, 11458.465, 12368.28, 13348.785, 14329.29, 15385.985, 16442.68, 17581.475, 18720.27, 19947.555, 21174.84, 22497.48, 23820.12, 25245.535, 26670.95, 28207.115, 29743.28, 31398.805, 33054.33, 34838.495, 36622.66, 38545.45, 40468.24, 42540.43, 44612.62],
            index_funds_over_mutual_funds: [0, 1050, 2100, 3231.585, 4363.17, 5582.68, 6802.19, 8116.455, 9430.72, 10847.105, 12263.49, 13789.925, 15316.36, 16961.4, 18606.44, 20379.3, 22152.16, 24062.77, 25973.38, 28032.445, 30091.51, 32310.565, 34529.62, 36921.1, 39312.58, 41889.87, 44467.16, 47244.71, 50022.26, 53015.625, 56008.99, 59234.94, 62460.89, 65937.495, 69414.1, 73160.84, 76907.58, 80945.44, 84983.3, 89334.9, 93686.5],
            test: [100, 1050, 2100, 3231.585, 4363.17, 5582.68, 6802.19, 8116.455, 9430.72, 10847.105, 12263.49, 13789.925, 15316.36, 16961.4, 18606.44, 20379.3, 22152.16, 24062.77, 25973.38, 28032.445, 30091.51, 32310.565, 34529.62, 36921.1, 39312.58, 41889.87, 44467.16, 47244.71, 50022.26, 53015.625, 56008.99, 59234.94, 62460.89, 65937.495, 69414.1, 73160.84, 76907.58, 80945.44, 84983.3, 89334.9, 93686.5]
        } : {
            tax_aware_allocation: [0, 150, 300, 450, 600, 761.655, 923.31, 1084.965, 1246.62, 1420.835, 1595.05, 1769.265, 1943.48, 2131.2325, 2318.985, 2506.7375, 2694.49, 2896.83, 3099.17, 3301.51, 3503.85, 3721.9125, 3939.975, 4158.0375, 4376.1, 4611.1075, 4846.115, 5081.1225, 5316.13, 5569.395, 5822.66, 6075.925, 6329.19, 6602.135, 6875.08, 7148.025, 7420.97, 7715.1225, 8009.275, 8303.4275, 8597.58, 8914.5875, 9231.595, 9548.6025, 9865.61, 10207.2475, 10548.885, 10890.5225, 11232.16, 11600.345, 11968.53, 12336.715, 12704.9, 13101.6925, 13498.485, 13895.2775, 14292.07, 14719.695, 15147.32, 15574.945, 16002.57, 16463.42, 16924.27, 17385.12, 17845.97, 18342.6275, 18839.285, 19335.9425, 19832.6, 20367.8475, 20903.095, 21438.3425, 21973.59, 22550.4275, 23127.265, 23704.1025, 24280.94, 24902.5975, 25524.255, 26145.9125, 26767.57],
            automatic_rebalancing: [0, 100, 200, 300, 400, 507.77, 615.54, 723.31, 831.08, 947.2225, 1063.365, 1179.5075, 1295.65, 1420.82, 1545.99, 1671.16, 1796.33, 1931.2225, 2066.115, 2201.0075, 2335.9, 2481.275, 2626.65, 2772.025, 2917.4, 3074.07, 3230.74, 3387.41, 3544.08, 3712.925, 3881.77, 4050.615, 4219.46, 4401.4225, 4583.385, 4765.3475, 4947.31, 5143.4125, 5339.515, 5535.6175, 5731.72, 5943.0575, 6154.395, 6365.7325, 6577.07, 6804.83, 7032.59, 7260.35, 7488.11, 7733.5675, 7979.025, 8224.4825, 8469.94, 8734.4675, 8998.995, 9263.5225, 9528.05, 9813.1325, 10098.215, 10383.2975, 10668.38, 10975.6125, 11282.845, 11590.0775, 11897.31, 12228.415, 12559.52, 12890.625, 13221.73, 13578.5625, 13935.395, 14292.2275, 14649.06, 15033.6175, 15418.175, 15802.7325, 16187.29, 16601.73, 17016.17, 17430.61, 17845.05],
            optimal_allocation: [0, 125, 250, 375, 500, 634.7125, 769.425, 904.1375, 1038.85, 1184.03, 1329.21, 1474.39, 1619.57, 1776.03, 1932.49, 2088.95, 2245.41, 2414.0275, 2582.645, 2751.2625, 2919.88, 3101.5975, 3283.315, 3465.0325, 3646.75, 3842.5875, 4038.425, 4234.2625, 4430.1, 4641.155, 4852.21, 5063.265, 5274.32, 5501.775, 5729.23, 5956.685, 6184.14, 6429.2675, 6674.395, 6919.5225, 7164.65, 7428.8225, 7692.995, 7957.1675, 8221.34, 8506.04, 8790.74, 9075.44, 9360.14, 9666.96, 9973.78, 10280.6, 10587.42, 10918.08, 11248.74, 11579.4, 11910.06, 12266.4125, 12622.765, 12979.1175, 13335.47, 13719.5125, 14103.555, 14487.5975, 14871.64, 15285.5225, 15699.405, 16113.2875, 16527.17, 16973.21, 17419.25, 17865.29, 18311.33, 18792.0275, 19272.725, 19753.4225, 20234.12, 20752.1675, 21270.215, 21788.2625, 22306.31],
            tax_loss_harvesting: [0, 250, 500, 750, 1e3, 1269.425, 1538.85, 1808.275, 2077.7, 2368.06, 2658.42, 2948.78, 3239.14, 3552.06, 3864.98, 4177.9, 4490.82, 4828.0525, 5165.285, 5502.5175, 5839.75, 6203.1875, 6566.625, 6930.0625, 7293.5, 7685.1775, 8076.855, 8468.5325, 8860.21, 9282.32, 9704.43, 10126.54, 10548.65, 11003.5575, 11458.465, 11913.3725, 12368.28, 12858.5325, 13348.785, 13839.0375, 14329.29, 14857.6375, 15385.985, 15914.3325, 16442.68, 17012.0775, 17581.475, 18150.8725, 18720.27, 19333.9125, 19947.555, 20561.1975, 21174.84, 21836.16, 22497.48, 23158.8, 23820.12, 24532.8275, 25245.535, 25958.2425, 26670.95, 27439.0325, 28207.115, 28975.1975, 29743.28, 30571.0425, 31398.805, 32226.5675, 33054.33, 33946.4125, 34838.495, 35730.5775, 36622.66, 37584.055, 38545.45, 39506.845, 40468.24, 41504.335, 42540.43, 43576.525, 44612.62],
            index_funds_over_mutual_funds: [0, 525, 1050, 1575, 2100, 2665.7925, 3231.585, 3797.3775, 4363.17, 4972.925, 5582.68, 6192.435, 6802.19, 7459.3225, 8116.455, 8773.5875, 9430.72, 10138.9125, 10847.105, 11555.2975, 12263.49, 13026.7075, 13789.925, 14553.1425, 15316.36, 16138.88, 16961.4, 17783.92, 18606.44, 19492.87, 20379.3, 21265.73, 22152.16, 23107.465, 24062.77, 25018.075, 25973.38, 27002.9125, 28032.445, 29061.9775, 30091.51, 31201.0375, 32310.565, 33420.0925, 34529.62, 35725.36, 36921.1, 38116.84, 39312.58, 40601.225, 41889.87, 43178.515, 44467.16, 45855.935, 47244.71, 48633.485, 50022.26, 51518.9425, 53015.625, 54512.3075, 56008.99, 57621.965, 59234.94, 60847.915, 62460.89, 64199.1925, 65937.495, 67675.7975, 69414.1, 71287.47, 73160.84, 75034.21, 76907.58, 78926.51, 80945.44, 82964.37, 84983.3, 87159.1, 89334.9, 91510.7, 93686.5],
            test:[500, 1150, 1800, 2450, 3600, 4761.655, 5923.31, 6084.965, 7246.62, 8420.835, 9595.05, 10769.265, 11043.48, 11131.2325, 12318.985, 13506.7375, 13694.49, 13896.83, 14099.17, 14301.51, 14503.85, 14721.9125, 14939.975, 15158.0375, 15376.1, 15611.1075, 15846.115, 16081.1225, 16316.13, 16569.395,16822.66, 17075.925, 17329.19, 17602.135, 17875.08, 18148.025, 18420.97, 18715.1225, 19009.275, 19303.4275, 19597.58, 19914.5875, 20231.595, 20548.6025, 20865.61, 20207.2475, 20548.885, 20890.5225, 21232.16, 21600.345, 21968.53, 22336.715, 22704.9, 23101.6925, 23498.485, 23895.2775, 24292.07,24719.695, 25147.32, 25574.945, 26002.57, 26463.42, 26924.27, 27385.12, 27845.97, 28342.6275, 28839.285, 29335.9425, 29832.6, 30367.8475, 30903.095, 31438.3425, 31973.59, 32550.4275, 33127.265, 33704.1025, 34280.94, 34902.5975, 35524.255, 36145.9125, 36767.57]
        }, [n.formatRawDataSet(a.tax_aware_allocation), n.formatRawDataSet(a.automatic_rebalancing), n.formatRawDataSet(a.optimal_allocation), n.formatRawDataSet(a.tax_loss_harvesting), n.formatRawDataSet(a.index_funds_over_mutual_funds),n.formatRawDataSet(a.test)]
    }, n.dataSetCallback = function(t, a) {
        a(t)
    }, n.formatRawDataSet = function(t) {
        return t.map(function(t, a) {
            return {
                x: a,
                y: Math.round(t)
            }
        })
    }, e.columnMouseoverCallback = function(t, a) {
        var n = d3.select(t);
        if (n.classed("hp-performance-graph-column")) {
            var e = n.attr("data-column");
            d3.select(n.node().parentNode).selectAll(".hp-performance-graph-column").attr("opacity", function(t, a) {
                return a == e ? 1 : .2
            }), a.column(n.attr("data-column"))
        } else d3.select(n.node().parentNode).selectAll(".hp-performance-graph-column").attr("opacity", 1), a.column(null)
    }, e.prototype.dataSetChanged = function(t) {
        this.performanceGraph.data(t), this.performanceTable.layers(t), this.performanceTable.column(null)
    }, e.prototype.toggleDisclosure = function() {
        this.$disclosureControls.toggle(), this.$disclosureContent.fadeToggle()
    }, e.prototype.windowResized = function() {
        var t = this.$svg.width();
        t !== this._svgLastWidth && (this._svgLastWidth = t, this.performanceGraph.width(t), this.performanceGraph.height(this.$svg.height()), this.dynamicDataSet.width(t))
    }, w.nuggets.PerformanceChart = e;
    new w.nuggets.PerformanceChart($(".hp-performance-nugget-frame"), $(".hp-performance-nugget-disclosure"), $(".hp-performance-nugget-disclosure-content"))
});