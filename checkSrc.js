'use strict';

module.exports = function check_src(md, options) {
  var base = options.base
  var defaultImageRenderer = md.renderer.rules.image || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var srcValue = token.attrGet('src');

    if (srcValue && srcValue.charAt(0) === '/' && !srcValue.startsWith(base)) {
      token.attrSet('src', base + srcValue.slice(1));
    }

    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};
