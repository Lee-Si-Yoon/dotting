/*! For license information please see useHandlers-stories-mdx.a7f50c31.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdotting=self.webpackChunkdotting||[]).push([[767],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/hooks/useHandlers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useHandlers(ref){return{addDataChangeListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current;null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.addDataChangeListener(listener)}),[ref]),removeDataChangeListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current2;null===(_ref$current2=ref.current)||void 0===_ref$current2||_ref$current2.removeDataChangeListener(listener)}),[ref]),addGridChangeListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current3;null===(_ref$current3=ref.current)||void 0===_ref$current3||_ref$current3.addGridChangeListener(listener)}),[ref]),removeGridChangeListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current4;null===(_ref$current4=ref.current)||void 0===_ref$current4||_ref$current4.removeGridChangeListener(listener)}),[ref]),addBrushChangeListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current5;null===(_ref$current5=ref.current)||void 0===_ref$current5||_ref$current5.addBrushChangeListener(listener)}),[ref]),removeBrushChangeListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current6;null===(_ref$current6=ref.current)||void 0===_ref$current6||_ref$current6.removeBrushChangeListener(listener)}),[ref]),addStrokeEndListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current7;null===(_ref$current7=ref.current)||void 0===_ref$current7||_ref$current7.addStrokeEndListener(listener)}),[ref]),removeStrokeEndListener:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(listener){var _ref$current8;null===(_ref$current8=ref.current)||void 0===_ref$current8||_ref$current8.removeStrokeEndListener(listener)}),[ref])}}},"./stories/useHandlers.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>useHandlers_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),stackalt=(__webpack_require__("./stories/assets/code-brackets.svg"),__webpack_require__("./stories/assets/colors.svg"),__webpack_require__("./stories/assets/comments.svg"),__webpack_require__("./stories/assets/direction.svg"),__webpack_require__("./stories/assets/flow.svg"),__webpack_require__("./stories/assets/plugin.svg"),__webpack_require__("./stories/assets/repo.svg"),__webpack_require__("./stories/assets/stackalt.svg")),Dotting=__webpack_require__("./src/components/Dotting.tsx"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),useHandlers=__webpack_require__("./src/hooks/useHandlers.ts");const useHandlersComponent_StrokeListener=function StrokeListener(){var ref=(0,react.useRef)(),_useHandlers=(0,useHandlers.Z)(ref),addStrokeEndListener=_useHandlers.addStrokeEndListener,removeStrokeEndListener=_useHandlers.removeStrokeEndListener,_useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),strokedPixels=_useState2[0],setStrokedPixels=_useState2[1],handleStrokeEnd=function handleStrokeEnd(strokedPixels,data){setStrokedPixels(strokedPixels)};return(0,react.useEffect)((function(){return addStrokeEndListener(handleStrokeEnd),function(){removeStrokeEndListener(handleStrokeEnd)}}),[]),react.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"}},react.createElement(Dotting.Z,{ref,width:"100%",height:300}),react.createElement("div",{style:{marginTop:25,display:"flex",alignItems:"center",flexDirection:"column"}},react.createElement("div",null,react.createElement("strong",null,"Stroked Pixels")),strokedPixels.map((function(item,index){return react.createElement("div",{key:index},"rowIndex: ",item.rowIndex,", columnIndex: ",item.columnIndex,", color:"," ",item.color)}))))};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Hooks/useHandlers",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",code:"code",p:"p",ul:"ul",li:"li",h4:"h4",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Hooks/useHandlers"}),"\n",(0,jsx_runtime.jsx)("style",{children:'\n  .subheading {\n    --mediumdark: \'#999999\';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n    font-family: \'Nunito Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n  \ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #cccccc;\n  margin: 15px auto;\n  margin-bottom: 80px;\n  background: white;\n  color: #333333;\n  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nthead {\n  border-bottom: 1px solid #cccccc;\n}\n\ntable .css-1p8ieni {\n  margin: 0;\n}\n\nh4 {\n  margin-top: 15px;\n}\n\nth {\n  background: steelblue;\n  height: 54px;\n  width: 25%;\n  font-weight: lighter;\n  text-shadow: 0 1px 0 #38678f;\n  color: white;\n  border: 1px solid black;\n  box-shadow: inset 0px 1px 2px #cccccc;\n  transition: all 0.2s;\n}\ntr {\n  border-bottom: 1px solid #cccccc;\n}\ntr:last-child {\n  border-bottom: 0px;\n}\ntd {\n  border-right: 1px solid #cccccc;\n  padding: 10px;\n  transition: all 0.2s;\n  font-size: 14px;\n}\ntd:first-child {\n  font-size: 12px;\n  font-family: monospace\n\n}\ntd:last-child {\n  border-right: 0px;\n}\ntd.selected {\n  background: #d7e4ef;\n  z-index: ;\n}\ntd input {\n  font-size: 14px;\n  background: none;\n  outline: none;\n  border: 0;\n  display: table-cell;\n  height: 100%;\n  width: 100%;\n}\ntd input:focus {\n  box-shadow: 0 1px 0 steelblue;\n  color: steelblue;\n}\n::-moz-selection {\n  background: steelblue;\n  color: white;\n}\n::selection {\n  background: steelblue;\n  color: white;\n}\n'}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"usehandlers",children:(0,jsx_runtime.jsx)(_components.code,{children:"useHandlers"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["With ",(0,jsx_runtime.jsx)(_components.code,{children:"useHandlers"}),", you can add event listeners to the canvas.\nThe events that you can listen to are:"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"data change"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"grid change"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"stroke end"})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"features-provided-by-usehandlers",children:["Features provided by ",(0,jsx_runtime.jsx)(_components.code,{children:"useHandlers"})]}),"\n",(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("strong",{children:"Description"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("strong",{children:"Parameters"})})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"addDataChangeListener(listener: CanvasDataChangeHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you to listen to data change events."})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.code,{children:"CanvasDataChangeHandler"})}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"export type CanvasDataChangeHandler = (data: DottingData) => void;\nexport type DottingData = Map<number, Map<number, PixelData>>;\nexport type PixelData = {\n    color: string;\n};\n"})})]})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"removeDataChangeListener(listener: CanvasDataChangeHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you the remove the attached listener to the data change event."})}),(0,jsx_runtime.jsx)("td",{})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"addGridChangeListener(listener: CanvasGridChangeHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you the listen to the grid change event."})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.code,{children:"CanvasGridChangeHandler"})}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"export type CanvasGridChangeHandler = (\n    dimensions: {\n        columnCount: number;\n        rowCount: number;\n    },\n    indices: {\n        topRowIndex: number;\n        bottomRowIndex: number;\n        leftColumnIndex: number;\n        rightColumnIndex: number;\n    }\n) => void;\n"})})]})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"removeGridChangeListener(listener: CanvasGridChangeHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you the remove the attached listener to the grid change event."})}),(0,jsx_runtime.jsx)("td",{})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"addBrushChangeListener(listener: CanvasBrushChangeHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you to listen to brush change events"})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.code,{children:"CanvasBrushChangeHandler"})}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:'export type CanvasBrushChangeHandler = (\n    brushColor: string,\n    brushMode: BrushMode\n) => void;\nexport enum BrushMode {\n    DOT = "dot",\n    ERASER = "eraser",\n}\n'})})]})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"removeBrushChangeListener(listener: CanvasBrushChangeHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you the remove the attached listener to the brush change event."})}),(0,jsx_runtime.jsx)("td",{})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"addStrokeEndListener(listener: CanvasStrokeEndHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you the the attached listener to the grid change event."})}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.code,{children:"CanvasStrokeEndHandler"})}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"export type CanvasStrokeEndHandler = (\n    strokedPixels: Array<PixelModifyItem>,\n    data: DottingData\n) => void;\nexport interface PixelModifyItem {\n    rowIndex: number;\n    columnIndex: number;\n    color: string;\n}\nexport type DottingData = Map<number, Map<number, PixelData>>;\nexport type PixelData = {\n    color: string;\n};\n"})})]})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.code,{children:"removeStrokeEndListener(listener: CanvasStrokeEndHandler)"})}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Allows you the remove the attached listener to the brush change event."})}),(0,jsx_runtime.jsx)("td",{})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"1-stroke-end-listener-addstrokeendlistener-removestrokeendlistener",children:["1. Stroke end listener ",(0,jsx_runtime.jsx)(_components.code,{children:"addStrokeEndListener"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"removeStrokeEndListener"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"With stroke end related listeners, you can observer the changes when the user ends the stroke."}),"\n",(0,jsx_runtime.jsx)(useHandlersComponent_StrokeListener,{}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Example Source Codes"}),"\n",(0,jsx_runtime.jsx)("div",{className:"link-list",children:(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/hunkim98/dotting/tree/main/stories/useHandlersComponent",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:stackalt,alt:"Build"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Github Source Code"}),"\nView the source code and contribute to the project!"]})})]})}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{})})]})}}};const useHandlers_stories=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/assets/code-brackets.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},"./stories/assets/colors.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},"./stories/assets/comments.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},"./stories/assets/direction.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},"./stories/assets/flow.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},"./stories/assets/plugin.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},"./stories/assets/repo.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},"./stories/assets/stackalt.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"}}]);