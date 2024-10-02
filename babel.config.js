module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "72",
          // Tambahkan target browser lain sesuai kebutuhan
        },
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
  ],
};
