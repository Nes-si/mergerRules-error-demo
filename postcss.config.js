module.exports = ({file, options, env}) => {
  const res = {
    plugins: []
  };

  if (env == 'production')
    res.plugins.unshift(require('cssnano')({
      preset: ['default', {
        rawCache: false,
        calc: false,
        coromin: false,
        convertValues: false,
        discardComments: false,
        discardDuplicates: false,
        discardEmpty: false,
        discardOverridden: false,
        mergeLonghand: false,

        minifyFontValues: false,
        minifyGradients: false,
        minifyParams: false,
        minifySelectors: false,
        normalizeCharset: false,
        normalizeDisplayValues: false,
        normalizePositions: false,
        normalizeRepeatStyle: false,
        normalizeString: false,
        normalizeTimingFunctions: false,
        normalizeUnicode: false,
        normalizeUrl: false,
        normalizeWhitespace: false,
        orderedValues: false,
        reduceInitial: false,
        reduceTransforms: false,
        svgo: false,
        uniqueSelectors: false,

        mergeRules: true
      }]
    }));


  if (file.extname === '.sss') {
    res.parser = 'sugarss';
    res.plugins.push(require('precss'));
  }

  return res;
};