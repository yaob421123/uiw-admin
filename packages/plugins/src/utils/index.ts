import { parse } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';
import { RoutersProps } from './interface';

type NodeFun =
  | t.Expression
  | t.FunctionDeclaration
  | t.TSDeclareFunction
  | t.ClassDeclaration;

function getVarInit(node: NodeFun, path: NodePath<t.ExportDefaultDeclaration>) {
  // 判断  默认导出变量的方式
  if (t.isIdentifier(node) && path.scope.hasBinding(node.name)) {
    // 导出变量的方式 从 path scope 取值 bindings 里面对应  node.name 的变量内容
    let bindingNode = path.scope.getBinding(node.name)!.path.node;
    // 判断对象类型 是否是 VariableDeclarator
    if (t.isVariableDeclarator(bindingNode)) {
      // 取 这个里面的 init 对象
      bindingNode = bindingNode.init!;
    }
    return bindingNode as NodeFun;
  }
  return node;
}

// 使用 ts 判断
function getTSNode(node: any) {
  if (t.isTSTypeAssertion(node) || t.isTSAsExpression(node)) {
    return node.expression;
  } else {
    return node;
  }
}

export const IsModel = (content: string) => {
  let isModels = false;
  let modelNames;
  let isCreateModel = false;
  const ast = parse(content, {
    // 在严格模式下解析并允许模块声明
    sourceType: 'module',
    plugins: [
      'jsx',
      'typescript',
      'classProperties',
      'dynamicImport',
      'exportDefaultFrom',
      'exportNamespaceFrom',
      'functionBind',
      'nullishCoalescingOperator',
      'objectRestSpread',
      'optionalChaining',
      'decorators-legacy',
    ],
  });

  traverse(ast, {
    ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
      let node = path.node.declaration;
      node = getTSNode(node);
      node = getVarInit(node, path);
      node = getTSNode(node);
      if (t.isCallExpression(node) && node.arguments) {
        node = node.arguments[0] as NodeFun;
        isCreateModel = true;
      }

      // 如果 node 是一个对象
      // 并且 子集存在 state reducers, subscriptions, effects, name 则是一个 model 返回true
      if (
        t.isObjectExpression(node) &&
        node.properties.some((property) => {
          return [
            'state',
            'reducers',
            'subscriptions',
            'effects',
            'name',
          ].includes((property as any).key.name);
        })
      ) {
        isModels = true;
        const modeObj = node.properties.find(
          (property) => (property as any).key.name === 'name',
        );
        if (t.isObjectProperty(modeObj) && t.isStringLiteral(modeObj.value)) {
          modelNames = modeObj.value.value;
        }
      }
    },
  });
  return {
    isModels,
    modelNames,
    isCreateModel,
  };
};

// 转换成对象
export const stringToJson = (str: string) => {
  const json = new Function('return ' + str)();
  return json;
};
// ts/js 文件获取里面的 默认导出内容
export const getJSONData = (content: string) => {
  let isJSON = false;
  let jsonArr: RoutersProps[] = [];
  const ast = parse(content, {
    // 在严格模式下解析并允许模块声明
    sourceType: 'module',
    plugins: [
      'jsx',
      'typescript',
      'classProperties',
      'dynamicImport',
      'exportDefaultFrom',
      'exportNamespaceFrom',
      'functionBind',
      'nullishCoalescingOperator',
      'objectRestSpread',
      'optionalChaining',
      'decorators-legacy',
    ],
  });

  traverse(ast, {
    ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
      let node = path.node.declaration;
      node = getTSNode(node);
      node = getVarInit(node, path);
      node = getTSNode(node);
      // 如果 node 是一个数组
      if (t.isArrayExpression(node)) {
        isJSON = true;
        const code = generate(node, {
          jsonCompatibleStrings: true,
          // 输出中包含注释
          comments: false,
          jsescOption: {
            quotes: 'double',
            json: true,
          },
        }).code;
        jsonArr = stringToJson(code);
      }
    },
  });
  return {
    isJSON,
    jsonArr,
  };
};
