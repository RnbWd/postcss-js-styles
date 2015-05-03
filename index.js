var postcss = require('postcss');
var styles = {};
module.exports = postcss.plugin('postcss-component', function (opts) {
  opts = opts || {};

  return function (css, result) {
    css.eachRule(function(rule) {
      var selector = rule.selector;
      if (rule.selector.startsWith('.') || rule.selector.startsWith('#')) {
        selector = rule.selector.slice(1);
      }
      var compRule = styles[selector] = {};
      rule.nodes.forEach(function(val) {
        if (val.type === 'decl') {
          compRule[val.prop] = val.value;
        }
      })
    });
    if (opts.to && typeof opts.to === 'string') {
      if (opts.to.substr(opts.to.lastIndexOf('.')+1) === 'js') {
        // detect js ext?
      }
    }
    result.toJS = function() {
      return styles;
    }
    result.messages.push({
      type:  'js-styles',
      plugin:  'postcss-component',
      styles: styles
    })

  };
});
