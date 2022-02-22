"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8003],{28003:function(n,s,i){i.r(s),s.default='# \u63d2\u4ef6\n\n\u5f53\u524d\u63d2\u4ef6\u4e00\u822c\u4e3a\u5185\u7f6e\u63d2\u4ef6\n\n```bash\nnpm i @uiw-admin/plugins -D\n```\n\n## RematchWebpackPlugin\n\n> 1. \u81ea\u52a8\u52a0\u8f7d models\n\n### lazyLoad\n\n1. \u7c7b\u578b\uff1a`boolean`  \uff0c\u9ed8\u8ba4 `false`\uff0c\n\n```ts\n//kktrc.ts\nimport defaultConfig from "@uiw-admin/config"\nimport { RematchWebpackPlugin } from "@uiw-admin/plugins"\nexport default defaultConfig({\n  plugins: [RematchWebpackPlugin()],\n  // \u6216\u8005 plugins: [@uiw-admin/plugins/lib/rematch],\n```\n\n### \u7ea6\u5b9a\u5f0f\u7684 model \u7ec4\u7ec7\u65b9\u5f0f\n\n\u7b26\u5408\u4ee5\u4e0b\u89c4\u5219\u7684\u6587\u4ef6\u4f1a\u88ab\u8ba4\u4e3a\u662f model \u6587\u4ef6\uff0c\n\n  1. src/models \u4e0b\u7684\u6587\u4ef6\n  2. src/pages \u4e0b\uff0c\u5b50\u76ee\u5f55\u4e2d models \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n  3. src/pages \u4e0b\uff0c\u5b50\u76ee\u5f55\u4e2d models.ts \u6587\u4ef6\n\n```txt\n\nsrc\n  models/a.ts\n  pages\n    foo/models/b.ts\n    test/models.ts\n\n```\n\n## RoutesWebpackPlugin\n\n> 1. \u8def\u7531\u8f6c\u5316,\u83b7\u53d6\u9879\u76ee\u6839\u76ee\u5f55\u4e0b`congfig`\u6587\u4ef6\u5939\u4e0b\u7684`routes.json`\u6216`routes.ts`\u6216`routes.js`\u6587\u4ef6\n> 2. \u4f18\u5148\u7ea7  json > ts > js \n\n```ts\n//kktrc.ts\nimport defaultConfig from "@uiw-admin/config"\nimport { RoutesWebpackPlugin } from "@uiw-admin/plugins"\nexport default defaultConfig({\n  plugins: [RoutesWebpackPlugin()],\n  // \u6216\u8005 plugins: [@uiw-admin/plugins/lib/routes],\n```\n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">\n  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />\n</a>\n\n## License\n\nLicensed under the MIT License.'}}]);
//# sourceMappingURL=8003.63b4fede.chunk.js.map