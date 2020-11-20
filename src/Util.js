const format = function(number, n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = parseFloat(number).toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

const formatCount = function(number) {
    return format(number, 0, 3, ' ', ',');
};

const formatPercentage = function(number) {
    return format(100 * number, 2, 3, ' ', ',');
};

module.exports = {
    formatCount,
    formatPercentage,
};