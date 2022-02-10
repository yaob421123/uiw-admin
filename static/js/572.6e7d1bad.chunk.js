"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[572],{50572:function(n,e,t){t.r(e),e.default='models \u72b6\u6001\u7ba1\u7406\n===\n\n> 1. \u7b80\u5316 @rematch/* \u72b6\u6001\u7ba1\u7406\u516c\u5171\u8fdb\u884c\u521d\u59cb\u5316;\n> 2. \u4e3a\u4e86\u7b80\u5316 models \u4e66\u5199\u65b9\u5f0f\n> 3. [\u66f4\u591a @rematch/core api](https://rematchjs.org/docs/api-reference)\n\n## Installation\n\n```bash\nnpm i @uiw-admin/models --save\n```\n\n## store  \n\n> \u7531 @rematch/core \u7684 init \u521d\u59cb\u5316\u751f\u6210\u7684\u72b6\u6001\u5b58\u50a8\n\n## dispatch\n\n> \u66f4\u65b0\u72b6\u6001\u65b9\u6cd5\n\n## createModels \n\n> \u628a\u5355\u4e2a `model` \u6dfb\u52a0\u8fdb `store` \u4e2d\u7684 `models`\n\n```ts\nimport { createModels } from "@uiw-admin/models"\n\nconst demoModel = {\n  name: "demo",\n  state: {\n    drawerVisible: false,\n    current: 1,\n    pageSize: 20,\n    dataSource: [],\n    total: 0,\n    filter: {},\n    tableType: \'\'\n  },\n  reducers: {\n    updateState: (state: any, payload: any) => ({\n      ...state,\n      ...payload,\n    }),\n  },\n  effects: (dispatch: any) => ({}),\n}\n// \u628a model \u6dfb\u52a0 store \u7684 models \u4e2d \n//  "demo" \u4e3a demoModel \u4e2dname \u6709\u53ef\u80fd\u4e0d\u5199\u7684\u95ee\u9898\ncreateModels(demoModel,"demo")\n```\n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">\n  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />\n</a>\n\n## License\n\nLicensed under the MIT License.\n'}}]);
//# sourceMappingURL=572.6e7d1bad.chunk.js.map