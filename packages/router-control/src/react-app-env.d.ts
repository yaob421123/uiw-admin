/// <reference types="react-scripts" />

declare module '@@/routes' {
  const routers: Routers[];
  export default routers;
}

declare module '@@/routeMapModels.json' {
  const src: { [k: string]: { name: string; path: string }[] };
  export default src;
}

declare var BINDPAGR: boolean | undefined;
declare var TOKEN_NAME: string | undefined;
declare var TOKEN_STORAGE: 'local' | 'session' | 'cookie' | string;
declare var STORAGE: 'local' | 'session' | string;
declare var AUTH: boolean | undefined;
declare var BASE_NAME: string;