import htmlWebpackPlugin from "html-webpack-plugin";
import LiveReloadPlugin from "webpack-livereload-plugin";

export default {
  entry: "./src/client/index.js",
  output: {
    path: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader", // va a usar babel-loader para procesar los archivos
        test: /\.js$/, // los archivos a procesar, seran todos los .js
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"], // va a usar css-loader para procesar los archivos .css y style-loader para poder requerirlo en los .js
        test: /\.css$/ // va a procesar todos los archivos .css
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // va a usar style-loader para procesar los styles
          },
          {
            loader: "css-loader", // si son .css va a procesarlos con css-loader
            options: {
              sourceMap: true // si hay algun error nos lo mostrará
            }
          },
          {
            loader: "sass-loader", // si son .sass va a procesarlos con sass-loader
            options: {
              sourceMap: true // si hay algun error nos lo mostrará
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/client/index.html" // va a tomar index.html para procesarlo
    }),
    new LiveReloadPlugin() // refresca automaticamente index.html con el navegador
  ]
};
