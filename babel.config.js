module.exports = ({cache, env}) => {
  cache.using(() => process.env.NODE_ENV);

  const res = {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "usage",
          corejs: {
            version: '3.3',
            proposals: true
          }
        }
      ],
      "@babel/preset-react"
    ],

    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",

      ["@babel/plugin-proposal-class-properties", {loose: true}],

      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",

      ["@babel/plugin-transform-runtime", {useESModules: true}]
    ]
  };

  if (!env("production"))
    res.plugins.push('@babel/plugin-transform-react-jsx-source');

  return res;
};
