const consoleConfig = process.env.NODE_ENV;
const pluginConfit = [];
if (consoleConfig === 'production') {
  pluginConfit.push('transform-remove-console')
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: pluginConfit
};
