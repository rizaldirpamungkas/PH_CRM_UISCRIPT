const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    module: {
    rules: [{
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }, ],
    },
    resolve: {
    extensions: [".tsx", ".ts", ".js"],
    },
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "PH_UIScript.js",
    // Set this to your namespace e.g. cds.ClientHooks
    library: ["cds", "UIScript"],
    libraryTarget: "var",
    },
};