const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");
// module.exports = {
//   plugins: [
//     {
//       plugin: CracoLessPlugin,
//       options: {
//         lessLoaderOptions: {
//           lessOptions: {
//             modifyVars: { "@primary-color": "#52c41a" },
//             javascriptEnabled: true,
//           },
//         },
//       },
//     },
//   ],
// };

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true, // Enable dark mode
              compact: false, // Enable compact mode
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

// lessOptions: {
//   modifyVars: { "@primary-color": "#1DA57A" },
//   javascriptEnabled: true,
// }
