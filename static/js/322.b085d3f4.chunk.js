"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[322],{72322:function(n,i,t){t.r(i),i.default='UIW Admin Project\n---\n\n\u4e00\u4e2a\u57fa\u4e8e [uiw](https://github.com/uiwjs/uiw/) \u548c [kkt](https://github.com/kktjs/kkt) \u7684\u521d\u59cb\u7ea7\u522b\u9879\u76ee\u3002\n## \u67e5\u770b\u5b9e\u4f8b\n\n[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/uiwjs/uiw-admin/tree/master/examples/base)\n[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?logo=)](https://stackblitz.com/github/uiwjs/uiw-admin/tree/master/examples/base?embed=1&hideNavigation=0&hidedevtools=0)\n\n\n\u76f4\u63a5\u4e0b\u8f7d\u5b9e\u4f8b\uff0c\u672c\u5730\u9884\u89c8: [`uiw-admin-ts.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-ts.zip) [`uiw-admin-js.zip`](https://uiwjs.github.io/uiw-admin/zip/uiw-admin-js.zip)\n\n## \u2728 \u7279\u6027\n\n- \ud83c\udf08 \u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u7684\u4ea4\u4e92\u8bed\u8a00\u548c\u89c6\u89c9\u98ce\u683c\u3002\n- \ud83d\udce6 \u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u8d28\u91cf React \u540e\u53f0\u7ba1\u7406\u6846\u67b6\u3002\n- \ud83d\udee1 \u4f7f\u7528 TypeScript \u5f00\u53d1\u3002\n- \u2699\ufe0f \u96c6\u6210\u8def\u7531\u3001Redux\u3001\u9009\u9879\u5361\u7b49\u7279\u6027\u3002\n### \ud83d\udee1 TypeScript\n\n\u53c2\u8003 [\u5728 TypeScript \u4e2d\u4f7f\u7528](https://ant.design/docs/react/use-in-typescript-cn)\u3002\n\n## \ud83d\udd17 \u76f8\u5173\u4f9d\u8d56\n\n| Package                                                                                | Version                                                                                                                                   | Description                                               |\n| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |\n| [`@uiw-admin/basic-layouts`](https://www.npmjs.com/package/@uiw-admin/basic-layouts)   | [![npm](https://img.shields.io/npm/v/@uiw-admin/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/basic-layouts)   | \u7528\u4e8e\u5e03\u5c40\u7684\u7ec4\u4ef6                                            |\n| [`@uiw-admin/document-title`](https://www.npmjs.com/package/@uiw-admin/document-title) | [![npm](https://img.shields.io/npm/v/@uiw-admin/document-title.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/document-title) | \u8bbe\u7f6e\u9875\u9762\u6807\u9898                                              |\n| [`@uiw-admin/router-control`](https://www.npmjs.com/package/@uiw-admin/router-control) | [![npm](https://img.shields.io/npm/v/@uiw-admin/router-control.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/router-control) | \u8def\u7531\u7ba1\u7406                                                  |\n| [`@uiw-admin/user-login`](https://www.npmjs.com/package/@uiw-admin/user-login)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/user-login)         | \u767b\u5f55\u754c\u9762                                                  |\n| [`@uiw-admin/components`](https://www.npmjs.com/package/@uiw-admin/components)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/components.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/components)         | \u5e38\u89c1\u7684\u4e1a\u52a1\u7ec4\u4ef6                                            |\n| [`@uiw-admin/models`](https://www.npmjs.com/package/@uiw-admin/models)                 | [![npm](https://img.shields.io/npm/v/@uiw-admin/models.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/models)                 | \u7b80\u5316 [`rematch`](https://github.com/rematch/rematch) \u914d\u7f6e |\n| [`@uiw-admin/exceptions`](https://www.npmjs.com/package/@uiw-admin/exceptions)         | [![npm](https://img.shields.io/npm/v/@uiw-admin/exceptions.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/exceptions)         | \u516c\u5171\u5f02\u5e38\u7ec4\u4ef6                                              |\n| [`@uiw-admin/config`](https://www.npmjs.com/package/@uiw-admin/config)                 | [![npm](https://img.shields.io/npm/v/@uiw-admin/config.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/config)                 | \u7b80\u5316 [`kkt`](https://github.com/kktjs/kkt) \u914d\u7f6e           |\n| [`@uiw-admin/plugins`](https://www.npmjs.com/package/@uiw-admin/plugins)               | [![npm](https://img.shields.io/npm/v/@uiw-admin/plugins.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw-admin/plugins)               | [`kkt`](https://github.com/kktjs/kkt) \u63d2\u4ef6                |\n\n\n##  \u2328\ufe0f \u5feb\u901f\u5f00\u59cb\n> \u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a[`uiw-admin`](https://github.com/uiwjs/uiw-admin) \n```shell\n# npm 6.x\n$ npm init uiw-admin my-app --example uiw-admin-ts\n# npm 7+, extra double-dash is needed:\n$ npm init uiw-admin my-app -- --example uiw-admin-ts\n\n$ yarn create uiw-admin [appName]\n# or npm\n$ npm create uiw-admin my-app\n# or npx\n$ npx create-uiw-admin my-app\n```\n## \ud83d\udce6 \u5f00\u53d1\u542f\u52a8\n\n> \u4f7f\u7528 [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces) \u7ba1\u7406 `node_modules`\n\n```bash\n$ cd uiw-admin\n\n$ yarn install\n\n$ yarn start\n\n```\n\n## \ud83d\udd28 \u751f\u4ea7\u6784\u5efa\n```bash\n$ cd uiw-admin\n\n$ yarn build\n```\n\n##  \u2764\ufe0f \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">\n  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />\n</a>\n\n'}}]);
//# sourceMappingURL=322.b085d3f4.chunk.js.map