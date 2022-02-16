"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[476],{29476:function(n,e,t){t.r(e),e.default='\u8def\u7531\u63a7\u5236\n===\n\n> 1. \u8fdb\u884c\u8def\u7531\u5904\u7406\u8f6c\u6362\n> 2. \u8fdb\u884c\u8def\u7531\u6743\u9650\u5904\u7406\n\n## Installation\n\n```bash\nnpm i @uiw-admin/router-control --save\n```\n\n## \u53c2\u6570\n\n```ts\n\n// json\u6587\u4ef6\u683c\u5f0f\nexport interface RoutersJSON {\n  key?: string;\n  /** \u9ed8\u8ba4\u8df3\u8f6c */\n  index?: boolean;\n  /** \u8def\u5f84 */\n  path?: string;\n  /** \u540d\u79f0 */\n  name?: string;\n  /**  \u56fe\u6807 */\n  icon?: string;\n  /** \u91cd\u5b9a\u5411  \u5f53 index===true\u751f\u6548 */\n  redirect?: string;\n  /** \u7ec4\u4ef6\u5730\u5740 \u5982\u679c\u662f 403/404/500 \u7684\u9875\u9762\u76f4\u63a5\u5199 403/404/500 \u5c31\u53ef\u4ee5\u4e86\uff0c\u5185\u90e8\u76f4\u63a5\u505a\u8f6c\u5316*/\n  component?:string;\n  /** \u5b50\u96c6 \u8def\u7531 */\n  routes?: RoutersJSON[];\n  /** \u662f\u5426\u9690\u85cf\u83dc\u5355 */\n  hideInMenu?: boolean;\n  /** \u7528\u4e8e\u8def\u7531\u6821\u9a8c\u6743\u9650\uff0c \u6ce8\u610f\uff1a\u5982\u679c\u5b58\u5728\u8fd9\u4e2a\u5b57\u6bb5\u5219\u4ee5\u8fd9\u4e2a\u5b57\u6bb5\u6743\u9650\u4e3a\u51c6 */\n  isAuth?: boolean;\n}\n\nexport interface ControllerProps {\n  /** \u8def\u7531\u6a21\u5f0f   \u9ed8\u8ba4 history  */\n  routeType?: "history" | "hash" | "browser";\n  /** \u52a0\u8f7d model \u65b9\u6cd5\uff0c(\u89e3\u51b3import\u5f15\u7528\u5730\u5740\u95ee\u9898\u62a5\u9519) */ \n  addModels?: (path: string) => Promise<{ default: any }>;\n  /** \u662f\u5426\u81ea\u52a8\u6821\u9a8c "/" \u8def\u7531  token \u662f\u5426\u5b58\u5728   */\n  isAutoAuth?: boolean;\n}\n\n```\n\n## routeType\n\n\u8def\u7531\u6a21\u5f0f\uff1a"history" | "hash" | "browser"\uff0c  \u9ed8\u8ba4 history \n\n## addModels\n\n\u52a0\u8f7d model \u65b9\u6cd5\uff0c(\u89e3\u51b3import\u5f15\u7528\u5730\u5740\u95ee\u9898\u62a5\u9519)\n\n\n## routes.json \u6587\u4ef6\u6848\u4f8b\n\n> `@` \u6307\u5411 src \u76ee\u5f55\n\n```json\n[\n  {\n    "path": "/login",\n    "component": "@/layouts/UserLayout"\n  },\n  {\n    "path": "/",\n    "component": "@/layouts/BasicLayout",\n    "routes": [\n      {\n        "index": true,\n        "redirect": "/tableList"\n      },\n      {\n        "path": "/home",\n        "name": "\u9996\u9875",\n        "component": "@/pages/TableList",\n        "icon": "home"\n      },\n      {\n        "path": "/dom",\n        "name": "\u5b50\u9879",\n        "icon": "copy",\n        "routes": [\n          {\n            "path": "/dom/courses",\n            "name": "Dashboard",\n            "component": "@/pages/Dashboard"\n          }\n        ]\n      },\n      {\n        "path": "/403",\n        "name": "403",\n        "hideInMenu": true,\n        "component": "403"\n      },\n      {\n        "path": "/500",\n        "name": "500",\n        "hideInMenu": true,\n        "component": "500"\n      },\n      {\n        "path": "/404",\n        "name": "404",\n        "hideInMenu": true,\n        "component": "404"\n      },\n      {\n        "path": "*",\n        "name": "404",\n        "component": "404"\n      }\n    ]\n  }\n]\n```\n\n## \u6848\u4f8b\n\n```ts\nimport React from "react";\nimport Control from \'@uiw-admin/router-control\';\nexport default ()=>{\n  return (\n    <Control\n      routeType="hash"\n       // addModels={(path) => import(`${path}`)}\n    />\n  )\n}\n\n```\n\n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">\n  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />\n</a>\n\n## License\n\nLicensed under the MIT License.'}}]);
//# sourceMappingURL=476.9f9a1f67.chunk.js.map