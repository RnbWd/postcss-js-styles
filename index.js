var postcss = require('postcss');
var styles = {};
module.exports = postcss.plugin('postcss-component', function (opts) {
  opts = opts || {};

  return function (css, result) {
    // css.eachAtRule('component', function (component) {
      var compStyle = {};
      css.eachRule(function(rule) {
        var selector = rule.selector;
        if (rule.selector.startsWith('.') || rule.selector.startsWith('#')) {
          selector = rule.selector.slice(1);
        }
        var compRule = compStyle[selector] = {};
        rule.nodes.forEach(function(val) {
          if (val.type === 'decl') {
            compRule[val.prop] = val.value;
          }
        })
      // })
      css.removeSelf();
    });
    if (opts.to && typeof opts.to === 'string') {
      if (opts.to.substr(opts.to.lastIndexOf('.')+1) === 'js') {
        result.css = styles;
      }
    }
    result.messages.push({
      type:  'js-styles',
      plugin:  'postcss-component',
      styles: styles
    })
  };
});
