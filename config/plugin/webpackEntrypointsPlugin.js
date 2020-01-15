const { sortFilesByType } = require("../util/sort-files-by-type");
const fs = require('fs');

class WebpackEntryStatsPlugin {
  constructor(opts = {}) {
    this.path = opts.path;
    this.usePublicPath = opts.usePublicPath || true;
    this.publicPath = ''
  }

  apply(compiler) {
    compiler.plugin("emit", (comp, cb) => {
      const stats = comp.getStats().toJson({ publicPath: true });
      const entrypoints = Object.keys(stats.entrypoints);

      const files = entrypoints.reduce(
        (acc, entrypoint) => {
          let assets = stats.entrypoints[entrypoint].assets;
          // 添加 publicPath 前缀
          if (this.usePublicPath) {
            this.publicPath = stats.publicPath;
            assets = assets.map(asset => `${this.publicPath}${asset}`);
          }
          acc[entrypoint] = {
            files:sortFilesByType(assets)
          };
          return acc;
        },
        {}
      );

      const statsStr = JSON.stringify(files, null, 2);
      // comp.assets[this.filename] = {
      //   source: () => statsStr,
      //   size: () => statsStr.length
      // };
      this.path && fs.writeFileSync(this.path, statsStr);

      cb();
    });
  }
}

module.exports = WebpackEntryStatsPlugin;