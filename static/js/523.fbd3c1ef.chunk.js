"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[523],{81523:function(n,e,t){t.r(e),e.default="# \u57fa\u4e8euiw-form\u5c01\u88c5\u7684\u4e1a\u52a1\u8868\u5355\n\n## \u6ce8\u610f\n> [\u7ee7\u627f\u4e8euiw/form,\u8bf7\u53c2\u8003uiw/from\u4ee5\u53ca\u8868\u5355\u7ec4\u4ef6](https://uiwjs.github.io/#/components/form),\n \u9ed8\u8ba4\u96c6\u6210\u4e86`Input`,`Checkbox`,`Switch`,`Textarea`,`DateInput`,`TimePicker`,`MonthPicker`,`SearchSelect`,`Select`,`Radio`,`selectMultiple`,`Rate`\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\x3c!--ProForm--\x3e\n\n### \u57fa\u672c\u4f7f\u7528(\u4e0euiw/form\u4f7f\u7528\u4fdd\u6301\u4e00\u81f4)\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { ProForm } from '@uiw-admin/components'\nimport { Button,Notify,Slider } from 'uiw'\nconst Demo = () => {\n   const [option, setOption] = React.useState([])\n   const [loading, setLoading] = React.useState(false)\n  //  const form = useForm()\n   // \u6a21\u62df\u641c\u7d22\n  const handleSearch = ( type = '' , name = '' ) => {\n    if (type === 'selectMultiple') {\n      setLoading(true)\n      setTimeout(() => {\n        setOption([\n          { value: 1, label: '\u82f9\u679c' },\n          { value: 2, label: '\u897f\u74dc' },\n          { value: 3, label: '\u9999\u8549' },\n          { value: 4, label: '\u4e1c\u5317\u5927\u51bb\u68a8' },\n          { value: 5, label: '\u9999\u8549' },\n          { value: 6, label: '\u8461\u8404' },\n          { value: 6, label: '\u54c8\u5bc6\u74dc' },\n        ])\n        setLoading(false)\n      }, 2000)\n    }\n  }\n    return (\n       <ProForm\n        // form={form}\n         // \u8868\u5355\u7c7b\u578b\n         formType=\"collapse\"\n         title=\"\u57fa\u672c\u4f7f\u7528(\u4e0euiw/form\u4f7f\u7528\u4fdd\u6301\u4e00\u81f4)\"\n         // \u81ea\u5b9a\u4e49\u7ec4\u4ef6\n         customWidgetsList={{\n          slider: Slider,\n        }}\n         // \u662f\u5426\u5c55\u793auiw/form\u63d0\u4ea4\u6309\u94ae\n         showSaveButton\n         // \u662f\u5426\u5c55\u793auiw/form\u91cd\u7f6e\u6309\u94ae\n         showResetButton\n         // \u63d0\u4ea4\u540e\u9a8c\u8bc1\n         onSubmit={(initial, current) => {\n          const errorObj = {};\n          if (!current?.input) {\n            errorObj.input = 'input\u4e0d\u80fd\u4e3a\u7a7a';\n          }\n          if (Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01' });\n            throw err;\n          }\n          // \u8c03\u7528\u8bf7\u6c42\u63a5\u53e3\n        }}\n         // \u8868\u5355\u503c\u53d8\u5316 \n         onChange={(initial, current) => {}}\n         formDatas={[\n             {\n               label: 'input',\n               key: 'input',\n               widget: 'input',\n               initialValue: '',\n               widgetProps: {},\n               help:\"input\u4e0d\u80fd\u4e3a\u7a7a\"\n             },\n             {\n              label: 'textarea',\n              key: 'textarea',\n              widget: 'textarea',\n             },\n             {\n              label: 'select',\n              key: 'select',\n              widget: 'select',\n              option: [\n                { value: 1, label: '\u82f9\u679c' },\n                { value: 2, label: '\u897f\u74dc' },\n                { value: 3, label: '\u9999\u8549' },\n                { value: 4, label: '\u4e1c\u5317\u5927\u51bb\u68a8' }\n              ],\n            },\n            {\n              label: 'switch',\n              key: 'switch',\n              widget: 'switch',\n            },\n            {\n              label: 'radio',\n              widget: 'radio',\n              key: 'radio',\n              option: [\n                { label: '\u7537', value: 'man' },\n                { label: '\u5973', value: 'girl' }\n              ],\n            },\n            {\n              label: '\u591a\u9009\u6846',\n              widget: 'checkbox',\n              key: 'checkbox',\n              option: [\n                { label: '\u56db\u5ddd\u83dc', value: 'sichuan' },\n                { label: '\u6e56\u5317\u83dc', value: 'hubei' }\n              ],\n            },\n            {\n              label: '\u5e74\u6708\u65e5\u65f6\u5206\u79d2',\n              key: 'dateInputsecond',\n              widget: 'dateInput',\n              widgetProps: {\n                format: 'YYYY-MM-DD HH:mm:ss'\n              },\n            },\n            {\n              label: '\u5e74\u6708\u65e5',\n              key: 'dateInput',\n              widget: 'dateInput',\n            },\n            {\n              label: '\u5e74\u6708',\n              key: 'monthPicker',\n              widget: 'monthPicker',\n            },\n            {\n              label: '\u65f6\u5206\u79d2',\n              key: 'timePicker',\n              widget: 'timePicker',\n            },\n            {\n              label: 'selectMultiple',\n              key: 'selectMultiple',\n              widget: 'selectMultiple',\n              option: option,\n              widgetProps: {\n                onSearch: handleSearch.bind(this,'selectMultiple'),\n                onClear: (value) => console.log('clearvalue', value),\n                onChange: (value) => console.log('changevalue', value),\n                onSelect: (value) => console.log('selectvalue', value),\n                loading: loading,\n                allowClear: true,\n                showSearch: true,\n                maxCount:2\n              },\n            },\n            {\n              label: '\u8bc4\u5206',\n              key: 'rate',\n              widget: 'rate',\n            },\n            // \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u652f\u6301\u8bfb\u53d6React.ReactNode\n            {\n              label: '\u81ea\u5b9a\u4e49\u7ec4\u4ef6',\n              key: 'slider',\n              widget: 'slider',\n              readSpan: 2,\n              span:\"24\"\n            },\n          ]}\n       />\n  )\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u901a\u8fc7form api\u8fdb\u884c\u8868\u5355\u63d0\u4ea4\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState,useRef } from 'react';\nimport { ProForm,useForm } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n\n  const form = useForm()\n\n    return (\n     <div>\n       <ProForm\n         form={form}\n         title=\"\u901a\u8fc7form api\u8fdb\u884c\u8868\u5355\u63d0\u4ea4\"\n         formType=\"card\"\n         onSubmit={(initial, current) => {\n          const errorObj = {};\n          if (!current?.input) {\n            errorObj.input = 'input\u4e0d\u80fd\u4e3a\u7a7a';\n          }\n          if (Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            throw err;\n          }\n          // \u8c03\u7528\u8bf7\u6c42\u63a5\u53e3\n        }}\n         formDatas={ [\n             {\n               label: 'input',\n               key: 'input',\n               widget: 'input',\n               initialValue: '',\n               widgetProps: {},\n               span:\"24\"\n             },\n          ]}\n       />\n       <Button \n        style={{ marginTop:10,width:80 }} \n        type=\"primary\" \n        onClick={()=>{\n          // \u89e6\u53d1\u9a8c\u8bc1\n          form.submitvalidate();\n          // \u83b7\u53d6\u9519\u8bef\u4fe1\u606f\n          const errors =  form.formRef.current?.errors || {}\n          if(errors && Object.keys(errors).length > 0 ) return\n         // \u8c03\u7528\u8bf7\u6c42\u63a5\u53e3\n       }}\n       >\n        \u4fdd\u5b58\n      </Button>\n      <Button \n        style={{ marginTop:10,width:80 }} \n        type=\"primary\" \n        onClick={()=> form.resetForm() }\n       >\n        \u91cd\u7f6e\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u591a\u8868\u5355\u540c\u65f6\u8fdb\u884c\u63d0\u4ea4\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState,useRef } from 'react';\nimport { ProForm,useForm } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n  const [ queryInfo,setInfo ] = useState({})\n  const form = useForm()\n  const form2 = useForm()\n\n  return (\n     <div>\n       <ProForm\n         form={form}\n         title=\"\u8868\u5355\u4e00\"\n         formType=\"card\"\n         onChange={( initial, current) => setInfo({ ...queryInfo, ...current })}\n         onSubmit={(initial, current) => {\n          const errorObj = {};\n          if (!current?.input) {\n            errorObj.input = 'input\u4e0d\u80fd\u4e3a\u7a7a';\n          }\n          if (Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            throw err;\n          }\n        }}\n         formDatas={ [\n             {\n               label: 'input',\n               key: 'input',\n               widget: 'input',\n               initialValue: '',\n               widgetProps: {},\n               span:\"24\"\n             },\n          ]}\n       />\n        <div style={{ marginTop:15 }} />\n        <ProForm\n         form={form2}\n         title=\"\u8868\u5355\u4e8c\"\n         formType=\"card\"\n         onChange={( initial, current) => setInfo({ ...queryInfo, ...current })}\n         onSubmit={(initial, current) => {\n          const errorObj = {};\n          if (!current?.input2) {\n            errorObj.input2 = 'input\u4e0d\u80fd\u4e3a\u7a7a';\n          }\n          if (Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            throw err;\n          }\n        }}\n         formDatas={ [\n             {\n               label: 'input2',\n               key: 'input2',\n               widget: 'input',\n               initialValue: '',\n               widgetProps: {},\n               span:\"24\"\n             },\n          ]}\n       />\n       <Button \n        style={{ marginTop:10,width:80 }} \n        type=\"primary\" \n        onClick={ async ()=>{\n          // \u89e6\u53d1\u9a8c\u8bc1\n          await form?.submitvalidate()\n          await form2?.submitvalidate()\n          // \u83b7\u53d6\u9519\u8bef\u4fe1\u606f\n          const errors =  form.formRef.current?.errors || {}\n          const errors2 = form2.formRef.current?.errors || {}\n\n          if(errors && Object.keys(errors).length > 0 ) return\n          if(errors2 && Object.keys(errors2).length > 0 ) return\n          // \u8c03\u7528\u8bf7\u6c42\u63a5\u53e3\n       }}>\n        \u4fdd\u5b58\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u53ea\u8bfb\u6a21\u5f0f\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { ProForm,useForm } from '@uiw-admin/components'\nimport { formatter } from 'uiw'\nimport React, { useState } from 'react';\nconst Demo = () => {\n  const [ queryInfo ] = useState({\n    input:\"\u5468\u653f\",\n    textarea:\"\u5468\u653f\",\n    select:\"\u5468\u653f\",\n    dateInputsecond: '2021-1-21 23:59:59',\n    dateInput: '2021-1-21',\n    monthPicker: '2021-1-21',\n    timePicker: '2021-1-21 23:59:59',\n    selectMultiple:[{label:\"\u5468\u653f\",value:\"\u5468\u653f\"}],\n    rate:2\n  })\n  const form = useForm()\n    return (\n       <ProForm\n        form={form}\n         // \u8868\u5355\u7c7b\u578b\n         formType=\"pure\"\n         readOnly={true}\n         title=\"\u53ea\u8bfb\u6a21\u5f0f\"\n         // \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u8c03\u6574 \u4e00\u884c\u7684 DescriptionItems \u6570\u91cf,\u5176\u4f59\u53c2\u6570\u53c2\u8003uiw/Descriptions\n         readOnlyProps={{ column:2 }}\n         formDatas={\n           [\n             {\n               label: 'input',\n               key: 'input',\n               widget: 'input',\n               // \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u652f\u6301\u8bfb\u53d6React.ReactNode\n               initialValue: queryInfo?.input,\n             },\n             {\n               label: 'textarea',\n               key: 'textarea',\n               widget: 'textarea',\n               initialValue: queryInfo?.textarea,\n             },\n             {\n               label: 'select',\n               key: 'select',\n               widget: 'select',\n               option:[{label:\"\u5468\u653f\",value:\"\u5468\u653f\"}],\n               initialValue: queryInfo?.select,\n             },\n             {\n              label: 'dateInput',\n              key: 'dateInputsecond',\n              widget: 'dateInput',\n              widgetProps: {\n                // \u5e74\u6708\u65e5\u65f6\u5206\u79d2\n                format: 'YYYY-MM-DD HH:mm:ss'\n              },\n              initialValue: queryInfo.dateInputsecond && formatter('YYYY-MM-DD HH:mm:ss', new Date(queryInfo.dateInputsecond))\n            },\n            {\n              label: 'dateInput',\n              key: 'dateInput',\n              widget: 'dateInput',\n              initialValue: queryInfo.dateInput && formatter('YYYY-MM-DD', new Date(queryInfo.dateInput))\n            },\n            {\n              label: 'monthPicker',\n              key: 'monthPicker',\n              widget: 'monthPicker',\n              initialValue: queryInfo.monthPicker && formatter('YYYY-MM', new Date(queryInfo.monthPicker))\n            },\n            {\n              label: 'timePicker',\n              key: 'timePicker',\n              widget: 'timePicker',\n              initialValue: queryInfo.timePicker && new Date(queryInfo.timePicker)\n            },\n            {\n              label: 'selectMultiple',\n              key: 'selectMultiple',\n              widget: 'selectMultiple',\n              option:[{label:\"\u5468\u653f\",value:\"\u5468\u653f\"}],\n              initialValue:queryInfo.selectMultiple || []\n            },\n            {\n              label: '\u8bc4\u5206',\n              key: 'rate',\n              widget: 'rate',\n              initialValue:queryInfo.rate\n            },\n           ]}\n       />\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n## Porps  \u7ee7\u627fuiw-Form\n\n| \u53c2\u6570               | \u8bf4\u660e                                              | \u7c7b\u578b                                                                     | \u9ed8\u8ba4\u503c |\n| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------ | ------ |\n| formDatas          | \u8868\u5355\u9879\u96c6\u5408                                        | FormItemsProps[]                                                         | []     |\n| onSubmit           | \u63d0\u4ea4\u8868\u5355\u56de\u8c03 \u9700\u914d\u5408btns\uff0c\u7ee7\u627fuiw/form submit      | (initial: `Record<string, any>`, current: `Record<string, any>`) => void | -      |\n| onChange           | \u8868\u5355\u503c\u53d8\u5316\u56de\u8c03\uff0c\u7ee7\u627fuiw/form onChange             | (initial: `Record<string, any>`, current: `Record<string, any>`) => void | -      |\n| showSaveButton     | \u5c55\u793a\u63d0\u4ea4\u6309\u94ae                                      | boolean                                                                  | false  |\n| showResetButton    | \u5c55\u793a\u91cd\u7f6e\u6309\u94ae                                      | boolean                                                                  | false  |\n| saveButtonProps    | \u63d0\u4ea4\u6309\u94aeapi;\u7ee7\u627f\u4e8euiw/button                      | boolean                                                                  | false  |\n| resetButtonProps   | \u91cd\u7f6e\u6309\u94aeapi;\u7ee7\u627f\u4e8euiw/button                      | boolean                                                                  | false  |\n| buttonsContainer   | buttons\u5bb9\u5668\u6837\u5f0f(\u53ef\u8c03\u6574button\u5e03\u5c40)                 | React.CSSProperties                                                      | -      |\n| title              | \u6807\u9898                                              | string                                                                   | -      |\n| formType           | \u8868\u5355\u7c7b\u578b                                          | 'collapse' \u6216 'card' \u6216 'pure'                                           | 'card' |\n| form               | useForm\u8fd4\u56de\u503c,\u66ff\u6362\u539f\u6709submitRef\u4f5c\u7528\u53ef\u8fdb\u884c\u8868\u5355\u9a8c\u8bc1 | UseFormProps \u5fc5\u4f20                                                              | -      |\n| readOnly           | \u662f\u5426\u662f\u53ea\u8bfb\u6a21\u5f0f\u6a21\u5f0f                                | boolean                                                                  | false  |\n| readOnlyProps      | \u53ea\u8bfb\u6a21\u5f0f \u53c2\u8003Descriptions\u53c2\u6570                     | DescriptionsProps                                                        | {}     |\n| customWidgetsList  | \u53ef\u914d\u7f6e\u81ea\u5b9a\u4e49\u7ec4\u4ef6                                  | { [key: string]: any }                                                   | {}     |\n| cardProps          | uiw`Card` API                                     | CardProps                                                                | {}     |\n| collapseProps      | uiw`Collapse` API                                 | CollapseProps                                                            | {}     |\n| collapsePanelProps | uiw`Collapse.Panel` API                           | CollapsePanelProps                                                       | {}     |\n\n## FormItemsProps \u7ee7\u627fuiw-FormItem\n| \u53c2\u6570         | \u8bf4\u660e                                                          | \u7c7b\u578b                    | \u9ed8\u8ba4\u503c |\n| ------------ | ------------------------------------------------------------- | ----------------------- | ------ |\n| label        | \u8868\u5355\u9879\u540d\u79f0                                                    | string                  | -      |\n| key          | \u8868\u5355\u9879key                                                     | string                  | -      |\n| widget       | \u8868\u5355\u9879\u7c7b\u578b                                                    | sring                   | -      |\n| initialValue | \u8868\u5355\u9879\u503c\uff0c\u53ef\u4ee5\u662f\u9ed8\u8ba4\u503c                                        | any \u6216 any[]            | -      |\n| option       | \u6570\u636e\u5316\u9009\u9879\u5185\u5bb9, type\u4e3a radio\u3001checkbox\u3001select \u751f\u6548           | FormItemsOptionsProps[] | -      |\n| widgetProps  | \u8868\u5355\u7ec4\u4ef6\u5176\u4f59\u53c2\u6570,\u53c2\u8003uiw\u8868\u5355\u7ec4\u4ef6                              | any                     | -      |\n| hide         | \u662f\u5426\u663e\u793a                                                      | boolean                 | true   |\n| span         | \u975e\u53ea\u8bfb\u6a21\u5f0f\u4e0b,\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a 24 \u5217\u4e2d\u6bcf\u5217\u7684\u5bbd\u5ea6\u6765\u521b\u5efa\u57fa\u672c\u7f51\u683c\u7cfb\u7edf | string                  | '8'    |\n| readSpan     | \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u5305\u542b\u5217\u7684\u6570\u91cf \u53c2\u8003Descriptions.Item                  | number                  | 1      |\n| required     | \u662f\u5426\u5fc5\u586b                                                      | boolean                 | -      |\n\n\n## FormItemsOptionsProps\n| \u53c2\u6570     | \u8bf4\u660e     | \u7c7b\u578b                     | \u9ed8\u8ba4\u503c |\n| -------- | -------- | ------------------------ | ------ |\n| label    | \u540d\u79f0     | string(\u5fc5\u4f20\u503c)           | -      |\n| value    | key      | string \u6216 number(\u5fc5\u4f20\u503c) | -      |\n| disabled | \u662f\u5426\u7981\u7528 | boolean                  | -      |\n\n## UseFormProps\n| \u53c2\u6570     | \u8bf4\u660e     | \u7c7b\u578b                     | \u9ed8\u8ba4\u503c |\n| -------- | -------- | ------------------------ | ------ |\n| clickRef    | \u63d0\u4ea4\u6309\u94ae\u70b9\u51fbref     | any           | -      |\n| formRef    | \u8868\u5355\u4e8b\u4ef6\u548c\u503c\u96c6\u5408ref      | { [key: string]: any } | -      |\n| submitvalidate | \u8868\u5355\u9a8c\u8bc1 | ()=>void | - | \n| resetForm | \u91cd\u7f6e\u8868\u5355 | ()=>void | - |  \n| getFormValues | \u83b7\u53d6\u8868\u5355\u503c | ()=>void | - |      \n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href=\"https://github.com/uiwjs/uiw-admin/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg\" />\n</a>\n\n## License\n\nLicensed under the MIT License."}}]);
//# sourceMappingURL=523.fbd3c1ef.chunk.js.map