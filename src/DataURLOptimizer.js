const { Optimizer } = require('@parcel/plugin');

module.exports = new Optimizer({
  async optimize({ contents }) {
    return {
      contents: contents.replace(/\(/g, '%28').replace(/\)/g, '%29'),
    };
  },
});
