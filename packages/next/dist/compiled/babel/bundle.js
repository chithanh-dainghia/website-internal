(()=>{var e={9905:e=>{function webpackEmptyAsyncContext(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");t.code="MODULE_NOT_FOUND";throw t}))}webpackEmptyAsyncContext.keys=()=>[];webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext;webpackEmptyAsyncContext.id=9905;e.exports=webpackEmptyAsyncContext},6143:function(e,t,r){(function(t,n){true?e.exports=n(r(4614)):0})(this,(function(e){"use strict";class OriginalSource{constructor(e,t){this.source=e;this.content=t}originalPositionFor(e,t,r){return{column:t,line:e,name:r,source:this.source,content:this.content}}}let t;class FastStringArray{constructor(){this.indexes=Object.create(null);this.array=[]}}(()=>{t=(e,t)=>{const{array:r,indexes:n}=e;let s=n[t];if(s===undefined){s=n[t]=r.length;r.push(t)}return s}})();const r=undefined;const n=null;let s;class SourceMapTree{constructor(e,t){this.map=e;this.sources=t}originalPositionFor(t,s,i){const a=e.traceSegment(this.map,t,s);if(a==null)return r;if(a.length===1)return n;const o=this.sources[a[1]];return o.originalPositionFor(a[2],a[3],a.length===5?this.map.names[a[4]]:i)}}(()=>{s=s=>{const i=[];const a=new FastStringArray;const o=new FastStringArray;const l=[];const{sources:c,map:u}=s;const p=u.names;const f=e.decodedMappings(u);let d=-1;for(let e=0;e<f.length;e++){const s=f[e];const u=[];let h=-1;let m=-1;let y=-1;for(let i=0;i<s.length;i++){const f=s[i];let g=n;if(f.length!==1){const e=c[f[1]];g=e.originalPositionFor(f[2],f[3],f.length===5?p[f[4]]:"");if(g===r)continue}const b=f[0];if(g===n){if(h===-1){continue}h=m=y=-1;u.push([b]);continue}const{column:T,line:S,name:E,content:x,source:P}=g;const v=t(o,P);l[v]=x;if(h===v&&m===S&&y===T){continue}d=e;h=v;m=S;y=T;u.push(E?[b,v,S,T,t(a,E)]:[b,v,S,T])}i.push(u)}if(i.length>d+1){i.length=d+1}return e.presortedDecodedMap(Object.assign({},s.map,{mappings:i,sourceRoot:undefined,names:a.array,sources:o.array,sourcesContent:l}))}})();function asArray(e){if(Array.isArray(e))return e;return[e]}function buildSourceMapTree(t,r){const n=asArray(t).map((t=>new e.TraceMap(t,"")));const s=n.pop();for(let e=0;e<n.length;e++){if(n[e].sources.length>1){throw new Error(`Transformation map ${e} must have exactly one source file.\n`+"Did you specify these with the most recent transformation maps first?")}}let i=build(s,r,"",0);for(let e=n.length-1;e>=0;e--){i=new SourceMapTree(n[e],[i])}return i}function build(t,r,n,s){const{resolvedSources:i,sourcesContent:a}=t;const o=s+1;const l=i.map(((t,s)=>{const i={importer:n,depth:o,source:t||"",content:undefined};const l=r(i.source,i);const{source:c,content:u}=i;if(!l){const e=u!==undefined?u:a?a[s]:null;return new OriginalSource(c,e)}return build(new e.TraceMap(l,c),r,c,o)}));return new SourceMapTree(t,l)}class SourceMap{constructor(t,r){this.version=3;this.file=t.file;this.mappings=r.decodedMappings?e.decodedMappings(t):e.encodedMappings(t);this.names=t.names;this.sourceRoot=t.sourceRoot;this.sources=t.sources;if(!r.excludeContent&&"sourcesContent"in t){this.sourcesContent=t.sourcesContent}}toString(){return JSON.stringify(this)}}function remapping(e,t,r){const n=typeof r==="object"?r:{excludeContent:!!r,decodedMappings:false};const i=buildSourceMapTree(e,t);return new SourceMap(s(i),n)}return remapping}))},5395:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.codeFrameColumns=codeFrameColumns;t["default"]=_default;var n=_interopRequireWildcard(r(9038));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var e=new WeakMap;_getRequireWildcardCache=function(){return e};return e}function _interopRequireWildcard(e){if(e&&e.__esModule){return e}if(e===null||typeof e!=="object"&&typeof e!=="function"){return{default:e}}var t=_getRequireWildcardCache();if(t&&t.has(e)){return t.get(e)}var r={};var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e){if(Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;if(i&&(i.get||i.set)){Object.defineProperty(r,s,i)}else{r[s]=e[s]}}}r.default=e;if(t){t.set(e,r)}return r}let s=false;function getDefs(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}const i=/\r\n|[\n\r\u2028\u2029]/;function getMarkerLines(e,t,r){const n=Object.assign({column:0,line:-1},e.start);const s=Object.assign({},n,e.end);const{linesAbove:i=2,linesBelow:a=3}=r||{};const o=n.line;const l=n.column;const c=s.line;const u=s.column;let p=Math.max(o-(i+1),0);let f=Math.min(t.length,c+a);if(o===-1){p=0}if(c===-1){f=t.length}const d=c-o;const h={};if(d){for(let e=0;e<=d;e++){const r=e+o;if(!l){h[r]=true}else if(e===0){const e=t[r-1].length;h[r]=[l,e-l+1]}else if(e===d){h[r]=[0,u]}else{const n=t[r-e].length;h[r]=[0,n]}}}else{if(l===u){if(l){h[o]=[l,0]}else{h[o]=true}}else{h[o]=[l,u-l]}}return{start:p,end:f,markerLines:h}}function codeFrameColumns(e,t,r={}){const s=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r);const a=(0,n.getChalk)(r);const o=getDefs(a);const maybeHighlight=(e,t)=>s?e(t):t;const l=e.split(i);const{start:c,end:u,markerLines:p}=getMarkerLines(t,l,r);const f=t.start&&typeof t.start.column==="number";const d=String(u).length;const h=s?(0,n.default)(e,r):e;let m=h.split(i).slice(c,u).map(((e,t)=>{const n=c+1+t;const s=` ${n}`.slice(-d);const i=` ${s} | `;const a=p[n];const l=!p[n+1];if(a){let t="";if(Array.isArray(a)){const n=e.slice(0,Math.max(a[0]-1,0)).replace(/[^\t]/g," ");const s=a[1]||1;t=["\n ",maybeHighlight(o.gutter,i.replace(/\d/g," ")),n,maybeHighlight(o.marker,"^").repeat(s)].join("");if(l&&r.message){t+=" "+maybeHighlight(o.message,r.message)}}return[maybeHighlight(o.marker,">"),maybeHighlight(o.gutter,i),e,t].join("")}else{return` ${maybeHighlight(o.gutter,i)}${e}`}})).join("\n");if(r.message&&!f){m=`${" ".repeat(d+1)}${r.message}\n${m}`}if(s){return a.reset(m)}else{return m}}function _default(e,t,r,n={}){if(!s){s=true;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(process.emitWarning){process.emitWarning(e,"DeprecationWarning")}else{const t=new Error(e);t.name="DeprecationWarning";console.warn(new Error(e))}}r=Math.max(r,0);const i={start:{column:r,line:t}};return codeFrameColumns(e,i,n)}},4234:(e,t,r)=>{e.exports=r(9009)},9974:(e,t,r)=>{e.exports=r(7385)},7120:()=>{},7613:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.assertSimpleType=assertSimpleType;t.makeStrongCache=makeStrongCache;t.makeStrongCacheSync=makeStrongCacheSync;t.makeWeakCache=makeWeakCache;t.makeWeakCacheSync=makeWeakCacheSync;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(5398);var s=r(8499);const synchronize=e=>_gensync()(e).sync;function*genTrue(){return true}function makeWeakCache(e){return makeCachedFunction(WeakMap,e)}function makeWeakCacheSync(e){return synchronize(makeWeakCache(e))}function makeStrongCache(e){return makeCachedFunction(Map,e)}function makeStrongCacheSync(e){return synchronize(makeStrongCache(e))}function makeCachedFunction(e,t){const r=new e;const i=new e;const a=new e;return function*cachedFunction(e,o){const l=yield*(0,n.isAsync)();const c=l?i:r;const u=yield*getCachedValueOrWait(l,c,a,e,o);if(u.valid)return u.value;const p=new CacheConfigurator(o);const f=t(e,p);let d;let h;if((0,s.isIterableIterator)(f)){const t=f;h=yield*(0,n.onFirstPause)(t,(()=>{d=setupAsyncLocks(p,a,e)}))}else{h=f}updateFunctionCache(c,p,e,h);if(d){a.delete(e);d.release(h)}return h}}function*getCachedValue(e,t,r){const n=e.get(t);if(n){for(const{value:e,valid:t}of n){if(yield*t(r))return{valid:true,value:e}}}return{valid:false,value:null}}function*getCachedValueOrWait(e,t,r,s,i){const a=yield*getCachedValue(t,s,i);if(a.valid){return a}if(e){const e=yield*getCachedValue(r,s,i);if(e.valid){const t=yield*(0,n.waitFor)(e.value.promise);return{valid:true,value:t}}}return{valid:false,value:null}}function setupAsyncLocks(e,t,r){const n=new Lock;updateFunctionCache(t,e,r,n);return n}function updateFunctionCache(e,t,r,n){if(!t.configured())t.forever();let s=e.get(r);t.deactivate();switch(t.mode()){case"forever":s=[{value:n,valid:genTrue}];e.set(r,s);break;case"invalidate":s=[{value:n,valid:t.validator()}];e.set(r,s);break;case"valid":if(s){s.push({value:n,valid:t.validator()})}else{s=[{value:n,valid:t.validator()}];e.set(r,s)}}}class CacheConfigurator{constructor(e){this._active=true;this._never=false;this._forever=false;this._invalidate=false;this._configured=false;this._pairs=[];this._data=void 0;this._data=e}simple(){return makeSimpleConfigurator(this)}mode(){if(this._never)return"never";if(this._forever)return"forever";if(this._invalidate)return"invalidate";return"valid"}forever(){if(!this._active){throw new Error("Cannot change caching after evaluation has completed.")}if(this._never){throw new Error("Caching has already been configured with .never()")}this._forever=true;this._configured=true}never(){if(!this._active){throw new Error("Cannot change caching after evaluation has completed.")}if(this._forever){throw new Error("Caching has already been configured with .forever()")}this._never=true;this._configured=true}using(e){if(!this._active){throw new Error("Cannot change caching after evaluation has completed.")}if(this._never||this._forever){throw new Error("Caching has already been configured with .never or .forever()")}this._configured=true;const t=e(this._data);const r=(0,n.maybeAsync)(e,`You appear to be using an async cache handler, but Babel has been called synchronously`);if((0,n.isThenable)(t)){return t.then((e=>{this._pairs.push([e,r]);return e}))}this._pairs.push([t,r]);return t}invalidate(e){this._invalidate=true;return this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[r,n]of e){if(r!==(yield*n(t)))return false}return true}}deactivate(){this._active=false}configured(){return this._configured}}function makeSimpleConfigurator(e){function cacheFn(t){if(typeof t==="boolean"){if(t)e.forever();else e.never();return}return e.using((()=>assertSimpleType(t())))}cacheFn.forever=()=>e.forever();cacheFn.never=()=>e.never();cacheFn.using=t=>e.using((()=>assertSimpleType(t())));cacheFn.invalidate=t=>e.invalidate((()=>assertSimpleType(t())));return cacheFn}function assertSimpleType(e){if((0,n.isThenable)(e)){throw new Error(`You appear to be using an async cache handler, `+`which your current version of Babel does not support. `+`We may add support for this in the future, `+`but if you're on the most recent version of @babel/core and still `+`seeing this error, then you'll need to synchronously handle your caching logic.`)}if(e!=null&&typeof e!=="string"&&typeof e!=="boolean"&&typeof e!=="number"){throw new Error("Cache keys must be either string, boolean, number, null, or undefined.")}return e}class Lock{constructor(){this.released=false;this.promise=void 0;this._resolve=void 0;this.promise=new Promise((e=>{this._resolve=e}))}release(e){this.released=true;this._resolve(e)}}},6539:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.buildPresetChain=buildPresetChain;t.buildPresetChainWalker=void 0;t.buildRootChain=buildRootChain;function _path(){const e=r(1017);_path=function(){return e};return e}function _debug(){const e=r(6937);_debug=function(){return e};return e}var n=r(1157);var s=r(6209);var i=r(2806);var a=r(6936);var o=r(7613);var l=r(7088);const c=_debug()("babel:config:config-chain");function*buildPresetChain(e,t){const r=yield*u(e,t);if(!r)return null;return{plugins:dedupDescriptors(r.plugins),presets:dedupDescriptors(r.presets),options:r.options.map((e=>normalizeOptions(e))),files:new Set}}const u=makeChainWalker({root:e=>p(e),env:(e,t)=>f(e)(t),overrides:(e,t)=>d(e)(t),overridesEnv:(e,t,r)=>h(e)(t)(r),createLogger:()=>()=>{}});t.buildPresetChainWalker=u;const p=(0,o.makeWeakCacheSync)((e=>buildRootDescriptors(e,e.alias,l.createUncachedDescriptors)));const f=(0,o.makeWeakCacheSync)((e=>(0,o.makeStrongCacheSync)((t=>buildEnvDescriptors(e,e.alias,l.createUncachedDescriptors,t)))));const d=(0,o.makeWeakCacheSync)((e=>(0,o.makeStrongCacheSync)((t=>buildOverrideDescriptors(e,e.alias,l.createUncachedDescriptors,t)))));const h=(0,o.makeWeakCacheSync)((e=>(0,o.makeStrongCacheSync)((t=>(0,o.makeStrongCacheSync)((r=>buildOverrideEnvDescriptors(e,e.alias,l.createUncachedDescriptors,t,r)))))));function*buildRootChain(e,t){let r,n;const s=new i.ConfigPrinter;const o=yield*b({options:e,dirname:t.cwd},t,undefined,s);if(!o)return null;const l=yield*s.output();let c;if(typeof e.configFile==="string"){c=yield*(0,a.loadConfig)(e.configFile,t.cwd,t.envName,t.caller)}else if(e.configFile!==false){c=yield*(0,a.findRootConfig)(t.root,t.envName,t.caller)}let{babelrc:u,babelrcRoots:p}=e;let f=t.cwd;const d=emptyChain();const h=new i.ConfigPrinter;if(c){const e=m(c);const n=yield*loadFileChain(e,t,undefined,h);if(!n)return null;r=yield*h.output();if(u===undefined){u=e.options.babelrc}if(p===undefined){f=e.dirname;p=e.options.babelrcRoots}mergeChain(d,n)}let g,T;let S=false;const E=emptyChain();if((u===true||u===undefined)&&typeof t.filename==="string"){const e=yield*(0,a.findPackageData)(t.filename);if(e&&babelrcLoadEnabled(t,e,p,f)){({ignore:g,config:T}=yield*(0,a.findRelativeConfig)(e,t.envName,t.caller));if(g){E.files.add(g.filepath)}if(g&&shouldIgnore(t,g.ignore,null,g.dirname)){S=true}if(T&&!S){const e=y(T);const r=new i.ConfigPrinter;const s=yield*loadFileChain(e,t,undefined,r);if(!s){S=true}else{n=yield*r.output();mergeChain(E,s)}}if(T&&S){E.files.add(T.filepath)}}}if(t.showConfig){console.log(`Babel configs on "${t.filename}" (ascending priority):\n`+[r,n,l].filter((e=>!!e)).join("\n\n")+"\n-----End Babel configs-----")}const x=mergeChain(mergeChain(mergeChain(emptyChain(),d),E),o);return{plugins:S?[]:dedupDescriptors(x.plugins),presets:S?[]:dedupDescriptors(x.presets),options:S?[]:x.options.map((e=>normalizeOptions(e))),fileHandling:S?"ignored":"transpile",ignore:g||undefined,babelrc:T||undefined,config:c||undefined,files:x.files}}function babelrcLoadEnabled(e,t,r,n){if(typeof r==="boolean")return r;const i=e.root;if(r===undefined){return t.directories.indexOf(i)!==-1}let a=r;if(!Array.isArray(a)){a=[a]}a=a.map((e=>typeof e==="string"?_path().resolve(n,e):e));if(a.length===1&&a[0]===i){return t.directories.indexOf(i)!==-1}return a.some((r=>{if(typeof r==="string"){r=(0,s.default)(r,n)}return t.directories.some((t=>matchPattern(r,n,t,e)))}))}const m=(0,o.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,n.validate)("configfile",e.options)})));const y=(0,o.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,n.validate)("babelrcfile",e.options)})));const g=(0,o.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,n.validate)("extendsfile",e.options)})));const b=makeChainWalker({root:e=>buildRootDescriptors(e,"base",l.createCachedDescriptors),env:(e,t)=>buildEnvDescriptors(e,"base",l.createCachedDescriptors,t),overrides:(e,t)=>buildOverrideDescriptors(e,"base",l.createCachedDescriptors,t),overridesEnv:(e,t,r)=>buildOverrideEnvDescriptors(e,"base",l.createCachedDescriptors,t,r),createLogger:(e,t,r)=>buildProgrammaticLogger(e,t,r)});const T=makeChainWalker({root:e=>S(e),env:(e,t)=>E(e)(t),overrides:(e,t)=>x(e)(t),overridesEnv:(e,t,r)=>P(e)(t)(r),createLogger:(e,t,r)=>buildFileLogger(e.filepath,t,r)});function*loadFileChain(e,t,r,n){const s=yield*T(e,t,r,n);if(s){s.files.add(e.filepath)}return s}const S=(0,o.makeWeakCacheSync)((e=>buildRootDescriptors(e,e.filepath,l.createUncachedDescriptors)));const E=(0,o.makeWeakCacheSync)((e=>(0,o.makeStrongCacheSync)((t=>buildEnvDescriptors(e,e.filepath,l.createUncachedDescriptors,t)))));const x=(0,o.makeWeakCacheSync)((e=>(0,o.makeStrongCacheSync)((t=>buildOverrideDescriptors(e,e.filepath,l.createUncachedDescriptors,t)))));const P=(0,o.makeWeakCacheSync)((e=>(0,o.makeStrongCacheSync)((t=>(0,o.makeStrongCacheSync)((r=>buildOverrideEnvDescriptors(e,e.filepath,l.createUncachedDescriptors,t,r)))))));function buildFileLogger(e,t,r){if(!r){return()=>{}}return r.configure(t.showConfig,i.ChainFormatter.Config,{filepath:e})}function buildRootDescriptors({dirname:e,options:t},r,n){return n(e,t,r)}function buildProgrammaticLogger(e,t,r){var n;if(!r){return()=>{}}return r.configure(t.showConfig,i.ChainFormatter.Programmatic,{callerName:(n=t.caller)==null?void 0:n.name})}function buildEnvDescriptors({dirname:e,options:t},r,n,s){const i=t.env&&t.env[s];return i?n(e,i,`${r}.env["${s}"]`):null}function buildOverrideDescriptors({dirname:e,options:t},r,n,s){const i=t.overrides&&t.overrides[s];if(!i)throw new Error("Assertion failure - missing override");return n(e,i,`${r}.overrides[${s}]`)}function buildOverrideEnvDescriptors({dirname:e,options:t},r,n,s,i){const a=t.overrides&&t.overrides[s];if(!a)throw new Error("Assertion failure - missing override");const o=a.env&&a.env[i];return o?n(e,o,`${r}.overrides[${s}].env["${i}"]`):null}function makeChainWalker({root:e,env:t,overrides:r,overridesEnv:n,createLogger:s}){return function*(i,a,o=new Set,l){const{dirname:c}=i;const u=[];const p=e(i);if(configIsApplicable(p,c,a)){u.push({config:p,envName:undefined,index:undefined});const e=t(i,a.envName);if(e&&configIsApplicable(e,c,a)){u.push({config:e,envName:a.envName,index:undefined})}(p.options.overrides||[]).forEach(((e,t)=>{const s=r(i,t);if(configIsApplicable(s,c,a)){u.push({config:s,index:t,envName:undefined});const e=n(i,t,a.envName);if(e&&configIsApplicable(e,c,a)){u.push({config:e,index:t,envName:a.envName})}}}))}if(u.some((({config:{options:{ignore:e,only:t}}})=>shouldIgnore(a,e,t,c)))){return null}const f=emptyChain();const d=s(i,a,l);for(const{config:e,index:t,envName:r}of u){if(!(yield*mergeExtendsChain(f,e.options,c,a,o,l))){return null}d(e,t,r);yield*mergeChainOpts(f,e)}return f}}function*mergeExtendsChain(e,t,r,n,s,i){if(t.extends===undefined)return true;const o=yield*(0,a.loadConfig)(t.extends,r,n.envName,n.caller);if(s.has(o)){throw new Error(`Configuration cycle detected loading ${o.filepath}.\n`+`File already loaded following the config chain:\n`+Array.from(s,(e=>` - ${e.filepath}`)).join("\n"))}s.add(o);const l=yield*loadFileChain(g(o),n,s,i);s.delete(o);if(!l)return false;mergeChain(e,l);return true}function mergeChain(e,t){e.options.push(...t.options);e.plugins.push(...t.plugins);e.presets.push(...t.presets);for(const r of t.files){e.files.add(r)}return e}function*mergeChainOpts(e,{options:t,plugins:r,presets:n}){e.options.push(t);e.plugins.push(...yield*r());e.presets.push(...yield*n());return e}function emptyChain(){return{options:[],presets:[],plugins:[],files:new Set}}function normalizeOptions(e){const t=Object.assign({},e);delete t.extends;delete t.env;delete t.overrides;delete t.plugins;delete t.presets;delete t.passPerPreset;delete t.ignore;delete t.only;delete t.test;delete t.include;delete t.exclude;if(Object.prototype.hasOwnProperty.call(t,"sourceMap")){t.sourceMaps=t.sourceMap;delete t.sourceMap}return t}function dedupDescriptors(e){const t=new Map;const r=[];for(const n of e){if(typeof n.value==="function"){const e=n.value;let s=t.get(e);if(!s){s=new Map;t.set(e,s)}let i=s.get(n.name);if(!i){i={value:n};r.push(i);if(!n.ownPass)s.set(n.name,i)}else{i.value=n}}else{r.push({value:n})}}return r.reduce(((e,t)=>{e.push(t.value);return e}),[])}function configIsApplicable({options:e},t,r){return(e.test===undefined||configFieldIsApplicable(r,e.test,t))&&(e.include===undefined||configFieldIsApplicable(r,e.include,t))&&(e.exclude===undefined||!configFieldIsApplicable(r,e.exclude,t))}function configFieldIsApplicable(e,t,r){const n=Array.isArray(t)?t:[t];return matchesPatterns(e,n,r)}function ignoreListReplacer(e,t){if(t instanceof RegExp){return String(t)}return t}function shouldIgnore(e,t,r,n){if(t&&matchesPatterns(e,t,n)){var s;const r=`No config is applied to "${(s=e.filename)!=null?s:"(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t,ignoreListReplacer)}\` from "${n}"`;c(r);if(e.showConfig){console.log(r)}return true}if(r&&!matchesPatterns(e,r,n)){var i;const t=`No config is applied to "${(i=e.filename)!=null?i:"(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(r,ignoreListReplacer)}\` from "${n}"`;c(t);if(e.showConfig){console.log(t)}return true}return false}function matchesPatterns(e,t,r){return t.some((t=>matchPattern(t,r,e.filename,e)))}function matchPattern(e,t,r,n){if(typeof e==="function"){return!!e(r,{dirname:t,envName:n.envName,caller:n.caller})}if(typeof r!=="string"){throw new Error(`Configuration contains string/RegExp pattern, but no filename was passed to Babel`)}if(typeof e==="string"){e=(0,s.default)(e,t)}return e.test(r)}},7088:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.createCachedDescriptors=createCachedDescriptors;t.createDescriptor=createDescriptor;t.createUncachedDescriptors=createUncachedDescriptors;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(6936);var s=r(8869);var i=r(7613);var a=r(8595);function isEqualDescriptor(e,t){return e.name===t.name&&e.value===t.value&&e.options===t.options&&e.dirname===t.dirname&&e.alias===t.alias&&e.ownPass===t.ownPass&&(e.file&&e.file.request)===(t.file&&t.file.request)&&(e.file&&e.file.resolved)===(t.file&&t.file.resolved)}function*handlerOf(e){return e}function optionsWithResolvedBrowserslistConfigFile(e,t){if(typeof e.browserslistConfigFile==="string"){e.browserslistConfigFile=(0,a.resolveBrowserslistConfigFile)(e.browserslistConfigFile,t)}return e}function createCachedDescriptors(e,t,r){const{plugins:n,presets:s,passPerPreset:i}=t;return{options:optionsWithResolvedBrowserslistConfigFile(t,e),plugins:n?()=>u(n,e)(r):()=>handlerOf([]),presets:s?()=>l(s,e)(r)(!!i):()=>handlerOf([])}}function createUncachedDescriptors(e,t,r){let n;let s;return{options:optionsWithResolvedBrowserslistConfigFile(t,e),*plugins(){if(!n){n=yield*createPluginDescriptors(t.plugins||[],e,r)}return n},*presets(){if(!s){s=yield*createPresetDescriptors(t.presets||[],e,r,!!t.passPerPreset)}return s}}}const o=new WeakMap;const l=(0,i.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,i.makeStrongCacheSync)((t=>(0,i.makeStrongCache)((function*(n){const s=yield*createPresetDescriptors(e,r,t,n);return s.map((e=>loadCachedDescriptor(o,e)))}))))}));const c=new WeakMap;const u=(0,i.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,i.makeStrongCache)((function*(t){const n=yield*createPluginDescriptors(e,r,t);return n.map((e=>loadCachedDescriptor(c,e)))}))}));const p={};function loadCachedDescriptor(e,t){const{value:r,options:n=p}=t;if(n===false)return t;let s=e.get(r);if(!s){s=new WeakMap;e.set(r,s)}let i=s.get(n);if(!i){i=[];s.set(n,i)}if(i.indexOf(t)===-1){const e=i.filter((e=>isEqualDescriptor(e,t)));if(e.length>0){return e[0]}i.push(t)}return t}function*createPresetDescriptors(e,t,r,n){return yield*createDescriptors("preset",e,t,r,n)}function*createPluginDescriptors(e,t,r){return yield*createDescriptors("plugin",e,t,r)}function*createDescriptors(e,t,r,n,s){const i=yield*_gensync().all(t.map(((t,i)=>createDescriptor(t,r,{type:e,alias:`${n}$${i}`,ownPass:!!s}))));assertNoDuplicates(i);return i}function*createDescriptor(e,t,{type:r,alias:i,ownPass:a}){const o=(0,s.getItemDescriptor)(e);if(o){return o}let l;let c;let u=e;if(Array.isArray(u)){if(u.length===3){[u,c,l]=u}else{[u,c]=u}}let p=undefined;let f=null;if(typeof u==="string"){if(typeof r!=="string"){throw new Error("To resolve a string-based item, the type of item must be given")}const e=r==="plugin"?n.loadPlugin:n.loadPreset;const s=u;({filepath:f,value:u}=yield*e(u,t));p={request:s,resolved:f}}if(!u){throw new Error(`Unexpected falsy value: ${String(u)}`)}if(typeof u==="object"&&u.__esModule){if(u.default){u=u.default}else{throw new Error("Must export a default export when using ES6 modules.")}}if(typeof u!=="object"&&typeof u!=="function"){throw new Error(`Unsupported format: ${typeof u}. Expected an object or a function.`)}if(f!==null&&typeof u==="object"&&u){throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${f}`)}return{name:l,alias:f||i,value:u,options:c,dirname:t,ownPass:a,file:p}}function assertNoDuplicates(e){const t=new Map;for(const r of e){if(typeof r.value!=="function")continue;let n=t.get(r.value);if(!n){n=new Set;t.set(r.value,n)}if(n.has(r.name)){const t=e.filter((e=>e.value===r.value));throw new Error([`Duplicate plugin/preset detected.`,`If you'd like to use two separate instances of a plugin,`,`they need separate names, e.g.`,``,`  plugins: [`,`    ['some-plugin', {}],`,`    ['some-plugin', {}, 'some unique name'],`,`  ]`,``,`Duplicates detected are:`,`${JSON.stringify(t,null,2)}`].join("\n"))}n.add(r.name)}}},7061:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.ROOT_CONFIG_FILENAMES=void 0;t.findConfigUpwards=findConfigUpwards;t.findRelativeConfig=findRelativeConfig;t.findRootConfig=findRootConfig;t.loadConfig=loadConfig;t.resolveShowConfigPath=resolveShowConfigPath;function _debug(){const e=r(6937);_debug=function(){return e};return e}function _fs(){const e=r(7147);_fs=function(){return e};return e}function _path(){const e=r(1017);_path=function(){return e};return e}function _json(){const e=r(8310);_json=function(){return e};return e}function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(7613);var s=r(62);var i=r(3918);var a=r(9933);var o=r(6209);var l=r(3575);function _module(){const e=r(8188);_module=function(){return e};return e}const c=_debug()("babel:config:loading:files:configuration");const u=["babel.config.js","babel.config.cjs","babel.config.mjs","babel.config.json"];t.ROOT_CONFIG_FILENAMES=u;const p=[".babelrc",".babelrc.js",".babelrc.cjs",".babelrc.mjs",".babelrc.json"];const f=".babelignore";function findConfigUpwards(e){let t=e;for(;;){for(const e of u){if(_fs().existsSync(_path().join(t,e))){return t}}const e=_path().dirname(t);if(t===e)break;t=e}return null}function*findRelativeConfig(e,t,r){let n=null;let s=null;const i=_path().dirname(e.filepath);for(const o of e.directories){if(!n){var a;n=yield*loadOneConfig(p,o,t,r,((a=e.pkg)==null?void 0:a.dirname)===o?m(e.pkg):null)}if(!s){const e=_path().join(o,f);s=yield*g(e);if(s){c("Found ignore %o from %o.",s.filepath,i)}}}return{config:n,ignore:s}}function findRootConfig(e,t,r){return loadOneConfig(u,e,t,r)}function*loadOneConfig(e,t,r,n,s=null){const i=yield*_gensync().all(e.map((e=>readConfig(_path().join(t,e),r,n))));const a=i.reduce(((e,r)=>{if(r&&e){throw new Error(`Multiple configuration files found. Please remove one:\n`+` - ${_path().basename(e.filepath)}\n`+` - ${r.filepath}\n`+`from ${t}`)}return r||e}),s);if(a){c("Found configuration %o from %o.",a.filepath,t)}return a}function*loadConfig(e,t,n,s){const i=(((e,t)=>(e=e.split("."),t=t.split("."),+e[0]>+t[0]||e[0]==t[0]&&+e[1]>=+t[1]))(process.versions.node,"8.9")?require.resolve:(e,{paths:[t]},n=r(8188))=>{let s=n._findPath(e,n._nodeModulePaths(t).concat(t));if(s)return s;s=new Error(`Cannot resolve module '${e}'`);s.code="MODULE_NOT_FOUND";throw s})(e,{paths:[t]});const a=yield*readConfig(i,n,s);if(!a){throw new Error(`Config file ${i} contains no configuration data`)}c("Loaded config %o from %o.",e,t);return a}function readConfig(e,t,r){const n=_path().extname(e);return n===".js"||n===".cjs"||n===".mjs"?h(e,{envName:t,caller:r}):y(e)}const d=new Set;const h=(0,n.makeStrongCache)((function*readConfigJS(e,t){if(!_fs().existsSync(e)){t.never();return null}if(d.has(e)){t.never();c("Auto-ignoring usage of config %o.",e);return{filepath:e,dirname:_path().dirname(e),options:{}}}let r;try{d.add(e);r=yield*(0,a.default)(e,"You appear to be using a native ECMAScript module configuration "+"file, which is only supported when running Babel asynchronously.")}catch(t){t.message=`${e}: Error while loading config - ${t.message}`;throw t}finally{d.delete(e)}let n=false;if(typeof r==="function"){yield*[];r=r((0,s.makeConfigAPI)(t));n=true}if(!r||typeof r!=="object"||Array.isArray(r)){throw new Error(`${e}: Configuration should be an exported JavaScript object.`)}if(typeof r.then==="function"){throw new Error(`You appear to be using an async configuration, `+`which your current version of Babel does not support. `+`We may add support for this in the future, `+`but if you're on the most recent version of @babel/core and still `+`seeing this error, then you'll need to synchronously return your config.`)}if(n&&!t.configured())throwConfigError();return{filepath:e,dirname:_path().dirname(e),options:r}}));const m=(0,n.makeWeakCacheSync)((e=>{const t=e.options["babel"];if(typeof t==="undefined")return null;if(typeof t!=="object"||Array.isArray(t)||t===null){throw new Error(`${e.filepath}: .babel property must be an object`)}return{filepath:e.filepath,dirname:e.dirname,options:t}}));const y=(0,i.makeStaticFileCache)(((e,t)=>{let r;try{r=_json().parse(t)}catch(t){t.message=`${e}: Error while parsing config - ${t.message}`;throw t}if(!r)throw new Error(`${e}: No config detected`);if(typeof r!=="object"){throw new Error(`${e}: Config returned typeof ${typeof r}`)}if(Array.isArray(r)){throw new Error(`${e}: Expected config object but found array`)}delete r["$schema"];return{filepath:e,dirname:_path().dirname(e),options:r}}));const g=(0,i.makeStaticFileCache)(((e,t)=>{const r=_path().dirname(e);const n=t.split("\n").map((e=>e.replace(/#(.*?)$/,"").trim())).filter((e=>!!e));for(const e of n){if(e[0]==="!"){throw new Error(`Negation of file paths is not supported.`)}}return{filepath:e,dirname:_path().dirname(e),ignore:n.map((e=>(0,o.default)(e,r)))}}));function*resolveShowConfigPath(e){const t=process.env.BABEL_SHOW_CONFIG_FOR;if(t!=null){const r=_path().resolve(e,t);const n=yield*l.stat(r);if(!n.isFile()){throw new Error(`${r}: BABEL_SHOW_CONFIG_FOR must refer to a regular file, directories are not supported.`)}return r}return null}function throwConfigError(){throw new Error(`Caching was left unconfigured. Babel's plugins, presets, and .babelrc.js files can be configured\nfor various types of caching, using the first param of their handler functions:\n\nmodule.exports = function(api) {\n  // The API exposes the following:\n\n  // Cache the returned value forever and don't call this function again.\n  api.cache(true);\n\n  // Don't cache at all. Not recommended because it will be very slow.\n  api.cache(false);\n\n  // Cached based on the value of some function. If this function returns a value different from\n  // a previously-encountered value, the plugins will re-evaluate.\n  var env = api.cache(() => process.env.NODE_ENV);\n\n  // If testing for a specific env, we recommend specifics to avoid instantiating a plugin for\n  // any possible NODE_ENV value that might come up during plugin execution.\n  var isProd = api.cache(() => process.env.NODE_ENV === "production");\n\n  // .cache(fn) will perform a linear search though instances to find the matching plugin based\n  // based on previous instantiated plugins. If you want to recreate the plugin and discard the\n  // previous instance whenever something changes, you may use:\n  var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");\n\n  // Note, we also expose the following more-verbose versions of the above examples:\n  api.cache.forever(); // api.cache(true)\n  api.cache.never();   // api.cache(false)\n  api.cache.using(fn); // api.cache(fn)\n\n  // Return the value that will be cached.\n  return { };\n};`)}},2295:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=resolve;function _module(){const e=r(8188);_module=function(){return e};return e}var n=r(6833);function asyncGeneratorStep(e,t,r,n,s,i,a){try{var o=e[i](a);var l=o.value}catch(e){r(e);return}if(o.done){t(l)}else{Promise.resolve(l).then(n,s)}}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,n,s,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,s,_next,_throw,"throw",e)}_next(undefined)}))}}let s;try{s=r(8073).Z}catch(e){}const i=s&&process.execArgv.includes("--experimental-import-meta-resolve")?s("data:text/javascript,export default import.meta.resolve").then((e=>e.default||n.resolve),(()=>n.resolve)):Promise.resolve(n.resolve);function resolve(e,t){return _resolve.apply(this,arguments)}function _resolve(){_resolve=_asyncToGenerator((function*(e,t){return(yield i)(e,t)}));return _resolve.apply(this,arguments)}},8073:(e,t,r)=>{"use strict";var n;n={value:true};t.Z=import_;function import_(e){return r(9905)(e)}},6936:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"ROOT_CONFIG_FILENAMES",{enumerable:true,get:function(){return s.ROOT_CONFIG_FILENAMES}});Object.defineProperty(t,"findConfigUpwards",{enumerable:true,get:function(){return s.findConfigUpwards}});Object.defineProperty(t,"findPackageData",{enumerable:true,get:function(){return n.findPackageData}});Object.defineProperty(t,"findRelativeConfig",{enumerable:true,get:function(){return s.findRelativeConfig}});Object.defineProperty(t,"findRootConfig",{enumerable:true,get:function(){return s.findRootConfig}});Object.defineProperty(t,"loadConfig",{enumerable:true,get:function(){return s.loadConfig}});Object.defineProperty(t,"loadPlugin",{enumerable:true,get:function(){return i.loadPlugin}});Object.defineProperty(t,"loadPreset",{enumerable:true,get:function(){return i.loadPreset}});t.resolvePreset=t.resolvePlugin=void 0;Object.defineProperty(t,"resolveShowConfigPath",{enumerable:true,get:function(){return s.resolveShowConfigPath}});var n=r(480);var s=r(7061);var i=r(5561);function _gensync(){const e=r(6433);_gensync=function(){return e};return e}({});const a=_gensync()(i.resolvePlugin).sync;t.resolvePlugin=a;const o=_gensync()(i.resolvePreset).sync;t.resolvePreset=o},9933:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=loadCjsOrMjsDefault;t.supportsESM=void 0;var n=r(5398);function _path(){const e=r(1017);_path=function(){return e};return e}function _url(){const e=r(7310);_url=function(){return e};return e}function _module(){const e=r(8188);_module=function(){return e};return e}function asyncGeneratorStep(e,t,r,n,s,i,a){try{var o=e[i](a);var l=o.value}catch(e){r(e);return}if(o.done){t(l)}else{Promise.resolve(l).then(n,s)}}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,n,s,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,s,_next,_throw,"throw",e)}_next(undefined)}))}}let s;try{s=r(8073).Z}catch(e){}const i=!!s;t.supportsESM=i;function*loadCjsOrMjsDefault(e,t,r=false){switch(guessJSModuleType(e)){case"cjs":return loadCjsDefault(e,r);case"unknown":try{return loadCjsDefault(e,r)}catch(e){if(e.code!=="ERR_REQUIRE_ESM")throw e}case"mjs":if(yield*(0,n.isAsync)()){return yield*(0,n.waitFor)(loadMjsDefault(e))}throw new Error(t)}}function guessJSModuleType(e){switch(_path().extname(e)){case".cjs":return"cjs";case".mjs":return"mjs";default:return"unknown"}}function loadCjsDefault(e,t){const r=require(e);return r!=null&&r.__esModule?r.default||(t?r:undefined):r}function loadMjsDefault(e){return _loadMjsDefault.apply(this,arguments)}function _loadMjsDefault(){_loadMjsDefault=_asyncToGenerator((function*(e){if(!s){throw new Error("Internal error: Native ECMAScript modules aren't supported"+" by this platform.\n")}const t=yield s((0,_url().pathToFileURL)(e));return t.default}));return _loadMjsDefault.apply(this,arguments)}},480:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.findPackageData=findPackageData;function _path(){const e=r(1017);_path=function(){return e};return e}var n=r(3918);const s="package.json";function*findPackageData(e){let t=null;const r=[];let n=true;let a=_path().dirname(e);while(!t&&_path().basename(a)!=="node_modules"){r.push(a);t=yield*i(_path().join(a,s));const e=_path().dirname(a);if(a===e){n=false;break}a=e}return{filepath:e,directories:r,pkg:t,isPackage:n}}const i=(0,n.makeStaticFileCache)(((e,t)=>{let r;try{r=JSON.parse(t)}catch(t){t.message=`${e}: Error while parsing JSON - ${t.message}`;throw t}if(!r)throw new Error(`${e}: No config detected`);if(typeof r!=="object"){throw new Error(`${e}: Config returned typeof ${typeof r}`)}if(Array.isArray(r)){throw new Error(`${e}: Expected config object but found array`)}return{filepath:e,dirname:_path().dirname(e),options:r}}))},5561:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.loadPlugin=loadPlugin;t.loadPreset=loadPreset;t.resolvePlugin=resolvePlugin;t.resolvePreset=resolvePreset;function _debug(){const e=r(6937);_debug=function(){return e};return e}function _path(){const e=r(1017);_path=function(){return e};return e}function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(5398);var s=r(9933);function _url(){const e=r(7310);_url=function(){return e};return e}var i=r(2295);function _module(){const e=r(8188);_module=function(){return e};return e}function asyncGeneratorStep(e,t,r,n,s,i,a){try{var o=e[i](a);var l=o.value}catch(e){r(e);return}if(o.done){t(l)}else{Promise.resolve(l).then(n,s)}}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,n,s,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,s,_next,_throw,"throw",e)}_next(undefined)}))}}const a=_debug()("babel:config:loading:files:plugins");const o=/^module:/;const l=/^(?!@|module:|[^/]+\/|babel-plugin-)/;const c=/^(?!@|module:|[^/]+\/|babel-preset-)/;const u=/^(@babel\/)(?!plugin-|[^/]+\/)/;const p=/^(@babel\/)(?!preset-|[^/]+\/)/;const f=/^(@(?!babel\/)[^/]+\/)(?![^/]*babel-plugin(?:-|\/|$)|[^/]+\/)/;const d=/^(@(?!babel\/)[^/]+\/)(?![^/]*babel-preset(?:-|\/|$)|[^/]+\/)/;const h=/^(@(?!babel$)[^/]+)$/;function*resolvePlugin(e,t){return yield*m("plugin",e,t)}function*resolvePreset(e,t){return yield*m("preset",e,t)}function*loadPlugin(e,t){const r=yield*resolvePlugin(e,t);const n=yield*requireModule("plugin",r);a("Loaded plugin %o from %o.",e,t);return{filepath:r,value:n}}function*loadPreset(e,t){const r=yield*resolvePreset(e,t);const n=yield*requireModule("preset",r);a("Loaded preset %o from %o.",e,t);return{filepath:r,value:n}}function standardizeName(e,t){if(_path().isAbsolute(t))return t;const r=e==="preset";return t.replace(r?c:l,`babel-${e}-`).replace(r?p:u,`$1${e}-`).replace(r?d:f,`$1babel-${e}-`).replace(h,`$1/babel-${e}`).replace(o,"")}function*resolveAlternativesHelper(e,t){const r=standardizeName(e,t);const{error:n,value:s}=yield r;if(!n)return s;if(n.code!=="MODULE_NOT_FOUND")throw n;if(r!==t&&!(yield t).error){n.message+=`\n- If you want to resolve "${t}", use "module:${t}"`}if(!(yield standardizeName(e,"@babel/"+t)).error){n.message+=`\n- Did you mean "@babel/${t}"?`}const i=e==="preset"?"plugin":"preset";if(!(yield standardizeName(i,t)).error){n.message+=`\n- Did you accidentally pass a ${i} as a ${e}?`}throw n}function tryRequireResolve(e,{paths:[t]}){try{return{error:null,value:(((e,t)=>(e=e.split("."),t=t.split("."),+e[0]>+t[0]||e[0]==t[0]&&+e[1]>=+t[1]))(process.versions.node,"8.9")?require.resolve:(e,{paths:[t]},n=r(8188))=>{let s=n._findPath(e,n._nodeModulePaths(t).concat(t));if(s)return s;s=new Error(`Cannot resolve module '${e}'`);s.code="MODULE_NOT_FOUND";throw s})(e,{paths:[t]})}}catch(e){return{error:e,value:null}}}function tryImportMetaResolve(e,t){return _tryImportMetaResolve.apply(this,arguments)}function _tryImportMetaResolve(){_tryImportMetaResolve=_asyncToGenerator((function*(e,t){try{return{error:null,value:yield(0,i.default)(e,t)}}catch(e){return{error:e,value:null}}}));return _tryImportMetaResolve.apply(this,arguments)}function resolveStandardizedNameForRequire(e,t,r){const n=resolveAlternativesHelper(e,t);let s=n.next();while(!s.done){s=n.next(tryRequireResolve(s.value,{paths:[r]}))}return s.value}function resolveStandardizedNameForImport(e,t,r){return _resolveStandardizedNameForImport.apply(this,arguments)}function _resolveStandardizedNameForImport(){_resolveStandardizedNameForImport=_asyncToGenerator((function*(e,t,r){const n=(0,_url().pathToFileURL)(_path().join(r,"./babel-virtual-resolve-base.js")).href;const s=resolveAlternativesHelper(e,t);let i=s.next();while(!i.done){i=s.next(yield tryImportMetaResolve(i.value,n))}return(0,_url().fileURLToPath)(i.value)}));return _resolveStandardizedNameForImport.apply(this,arguments)}const m=_gensync()({sync(e,t,r=process.cwd()){return resolveStandardizedNameForRequire(e,t,r)},async(e,t,r=process.cwd()){return _asyncToGenerator((function*(){if(!s.supportsESM){return resolveStandardizedNameForRequire(e,t,r)}try{return yield resolveStandardizedNameForImport(e,t,r)}catch(n){try{return resolveStandardizedNameForRequire(e,t,r)}catch(e){if(n.type==="MODULE_NOT_FOUND")throw n;if(e.type==="MODULE_NOT_FOUND")throw e;throw n}}}))()}});{var y=new Set}function*requireModule(e,t){{if(!(yield*(0,n.isAsync)())&&y.has(t)){throw new Error(`Reentrant ${e} detected trying to load "${t}". This module is not ignored `+"and is trying to load itself while compiling itself, leading to a dependency cycle. "+'We recommend adding it to your "ignore" list in your babelrc, or to a .babelignore.')}}try{{y.add(t)}return yield*(0,s.default)(t,`You appear to be using a native ECMAScript module ${e}, `+"which is only supported when running Babel asynchronously.",true)}catch(e){e.message=`[BABEL]: ${e.message} (While processing: ${t})`;throw e}finally{{y.delete(t)}}}},3918:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.makeStaticFileCache=makeStaticFileCache;var n=r(7613);var s=r(3575);function _fs2(){const e=r(7147);_fs2=function(){return e};return e}function makeStaticFileCache(e){return(0,n.makeStrongCache)((function*(t,r){const n=r.invalidate((()=>fileMtime(t)));if(n===null){return null}return e(t,yield*s.readFile(t,"utf8"))}))}function fileMtime(e){if(!_fs2().existsSync(e))return null;try{return+_fs2().statSync(e).mtime}catch(e){if(e.code!=="ENOENT"&&e.code!=="ENOTDIR")throw e}return null}},5958:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(5398);var s=r(8499);var i=r(7782);var a=r(5775);var o=r(8869);var l=r(6539);var c=r(6861);function _traverse(){const e=r(7734);_traverse=function(){return e};return e}var u=r(7613);var p=r(1157);var f=r(5918);var d=r(62);var h=r(3525);var m=r(7120);var y=_gensync()((function*loadFullConfig(e){var t;const r=yield*(0,h.default)(e);if(!r){return null}const{options:n,context:i,fileHandling:a}=r;if(a==="ignored"){return null}const l={};const{plugins:u,presets:f}=n;if(!u||!f){throw new Error("Assertion failure - plugins and presets exist")}const d=Object.assign({},i,{targets:n.targets});const toDescriptor=e=>{const t=(0,o.getItemDescriptor)(e);if(!t){throw new Error("Assertion failure - must be config item")}return t};const m=f.map(toDescriptor);const y=u.map(toDescriptor);const g=[[]];const b=[];const T=[];const S=yield*enhanceError(i,(function*recursePresetDescriptors(e,t){const r=[];for(let s=0;s<e.length;s++){const i=e[s];if(i.options!==false){try{var n=yield*loadPresetDescriptor(i,d)}catch(t){if(t.code==="BABEL_UNKNOWN_OPTION"){(0,p.checkNoUnwrappedItemOptionPairs)(e,s,"preset",t)}throw t}T.push(n.externalDependencies);if(i.ownPass){r.push({preset:n.chain,pass:[]})}else{r.unshift({preset:n.chain,pass:t})}}}if(r.length>0){g.splice(1,0,...r.map((e=>e.pass)).filter((e=>e!==t)));for(const{preset:e,pass:t}of r){if(!e)return true;t.push(...e.plugins);const r=yield*recursePresetDescriptors(e.presets,t);if(r)return true;e.options.forEach((e=>{(0,s.mergeOptions)(l,e)}))}}}))(m,g[0]);if(S)return null;const E=l;(0,s.mergeOptions)(E,n);const x=Object.assign({},d,{assumptions:(t=E.assumptions)!=null?t:{}});yield*enhanceError(i,(function*loadPluginDescriptors(){g[0].unshift(...y);for(const t of g){const r=[];b.push(r);for(let n=0;n<t.length;n++){const s=t[n];if(s.options!==false){try{var e=yield*loadPluginDescriptor(s,x)}catch(e){if(e.code==="BABEL_UNKNOWN_PLUGIN_PROPERTY"){(0,p.checkNoUnwrappedItemOptionPairs)(t,n,"plugin",e)}throw e}r.push(e);T.push(e.externalDependencies)}}}}))();E.plugins=b[0];E.presets=b.slice(1).filter((e=>e.length>0)).map((e=>({plugins:e})));E.passPerPreset=E.presets.length>0;return{options:E,passes:b,externalDependencies:(0,c.finalize)(T)}}));t["default"]=y;function enhanceError(e,t){return function*(r,n){try{return yield*t(r,n)}catch(t){if(!/^\[BABEL\]/.test(t.message)){t.message=`[BABEL] ${e.filename||"unknown"}: ${t.message}`}throw t}}}const makeDescriptorLoader=e=>(0,u.makeWeakCache)((function*({value:t,options:r,dirname:s,alias:a},o){if(r===false)throw new Error("Assertion failure");r=r||{};const l=[];let u=t;if(typeof t==="function"){const c=(0,n.maybeAsync)(t,`You appear to be using an async plugin/preset, but Babel has been called synchronously`);const p=Object.assign({},i,e(o,l));try{u=yield*c(p,r,s)}catch(e){if(a){e.message+=` (While processing: ${JSON.stringify(a)})`}throw e}}if(!u||typeof u!=="object"){throw new Error("Plugin/Preset did not return an object.")}if((0,n.isThenable)(u)){yield*[];throw new Error(`You appear to be using a promise as a plugin, `+`which your current version of Babel does not support. `+`If you're using a published plugin, `+`you may need to upgrade your @babel/core version. `+`As an alternative, you can prefix the promise with "await". `+`(While processing: ${JSON.stringify(a)})`)}if(l.length>0&&(!o.configured()||o.mode()==="forever")){let e=`A plugin/preset has external untracked dependencies `+`(${l[0]}), but the cache `;if(!o.configured()){e+=`has not been configured to be invalidated when the external dependencies change. `}else{e+=` has been configured to never be invalidated. `}e+=`Plugins/presets should configure their cache to be invalidated when the external `+`dependencies change, for example using \`api.cache.invalidate(() => `+`statSync(filepath).mtimeMs)\` or \`api.cache.never()\`\n`+`(While processing: ${JSON.stringify(a)})`;throw new Error(e)}return{value:u,options:r,dirname:s,alias:a,externalDependencies:(0,c.finalize)(l)}}));const g=makeDescriptorLoader(d.makePluginAPI);const b=makeDescriptorLoader(d.makePresetAPI);function*loadPluginDescriptor(e,t){if(e.value instanceof a.default){if(e.options){throw new Error("Passed options to an existing Plugin instance will not work.")}return e.value}return yield*T(yield*g(e,t),t)}const T=(0,u.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:s,externalDependencies:i},o){const l=(0,f.validatePluginObject)(e);const u=Object.assign({},l);if(u.visitor){u.visitor=_traverse().default.explode(Object.assign({},u.visitor))}if(u.inherits){const e={name:undefined,alias:`${s}$inherits`,value:u.inherits,options:t,dirname:r};const a=yield*(0,n.forwardAsync)(loadPluginDescriptor,(t=>o.invalidate((r=>t(e,r)))));u.pre=chain(a.pre,u.pre);u.post=chain(a.post,u.post);u.manipulateOptions=chain(a.manipulateOptions,u.manipulateOptions);u.visitor=_traverse().default.visitors.merge([a.visitor||{},u.visitor||{}]);if(a.externalDependencies.length>0){if(i.length===0){i=a.externalDependencies}else{i=(0,c.finalize)([i,a.externalDependencies])}}}return new a.default(u,t,s,i)}));const validateIfOptionNeedsFilename=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,`\`\`\``,`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,`\`\`\``,`See https://babeljs.io/docs/en/options#filename for more information.`].join("\n"))}};const validatePreset=(e,t,r)=>{if(!t.filename){const{options:t}=e;validateIfOptionNeedsFilename(t,r);if(t.overrides){t.overrides.forEach((e=>validateIfOptionNeedsFilename(e,r)))}}};function*loadPresetDescriptor(e,t){const r=S(yield*b(e,t));validatePreset(r,t,e);return{chain:yield*(0,l.buildPresetChain)(r,t),externalDependencies:r.externalDependencies}}const S=(0,u.makeWeakCacheSync)((({value:e,dirname:t,alias:r,externalDependencies:n})=>({options:(0,p.validate)("preset",e),alias:r,dirname:t,externalDependencies:n})));function chain(e,t){const r=[e,t].filter(Boolean);if(r.length<=1)return r[0];return function(...e){for(const t of r){t.apply(this,e)}}}},62:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.makeConfigAPI=makeConfigAPI;t.makePluginAPI=makePluginAPI;t.makePresetAPI=makePresetAPI;function _semver(){const e=r(7849);_semver=function(){return e};return e}var n=r(7782);var s=r(7613);var i=r(7120);function makeConfigAPI(e){const env=t=>e.using((e=>{if(typeof t==="undefined")return e.envName;if(typeof t==="function"){return(0,s.assertSimpleType)(t(e.envName))}if(!Array.isArray(t))t=[t];return t.some((t=>{if(typeof t!=="string"){throw new Error("Unexpected non-string value")}return t===e.envName}))}));const caller=t=>e.using((e=>(0,s.assertSimpleType)(t(e.caller))));return{version:n.version,cache:e.simple(),env:env,async:()=>false,caller:caller,assertVersion:assertVersion}}function makePresetAPI(e,t){const targets=()=>JSON.parse(e.using((e=>JSON.stringify(e.targets))));const addExternalDependency=e=>{t.push(e)};return Object.assign({},makeConfigAPI(e),{targets:targets,addExternalDependency:addExternalDependency})}function makePluginAPI(e,t){const assumption=t=>e.using((e=>e.assumptions[t]));return Object.assign({},makePresetAPI(e,t),{assumption:assumption})}function assertVersion(e){if(typeof e==="number"){if(!Number.isInteger(e)){throw new Error("Expected string or integer value.")}e=`^${e}.0.0-0`}if(typeof e!=="string"){throw new Error("Expected string or integer value.")}if(_semver().satisfies(n.version,e))return;const t=Error.stackTraceLimit;if(typeof t==="number"&&t<25){Error.stackTraceLimit=25}const r=new Error(`Requires Babel "${e}", but was loaded with "${n.version}". `+`If you are sure you have a compatible version of @babel/core, `+`it is likely that something in your build process is loading the `+`wrong version. Inspect the stack trace of this error to look for `+`the first entry that doesn't mention "@babel/core" or "babel-core" `+`to see what is calling Babel.`);if(typeof t==="number"){Error.stackTraceLimit=t}throw Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:n.version,range:e})}},6861:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.finalize=finalize;t.flattenToSet=flattenToSet;function finalize(e){return Object.freeze(e)}function flattenToSet(e){const t=new Set;const r=[e];while(r.length>0){for(const e of r.pop()){if(Array.isArray(e))r.push(e);else t.add(e)}}return t}},876:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getEnv=getEnv;function getEnv(e="development"){return process.env.BABEL_ENV||process.env.NODE_ENV||e}},4198:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.createConfigItem=createConfigItem;t.createConfigItemSync=t.createConfigItemAsync=void 0;Object.defineProperty(t,"default",{enumerable:true,get:function(){return n.default}});t.loadPartialConfigSync=t.loadPartialConfigAsync=t.loadPartialConfig=t.loadOptionsSync=t.loadOptionsAsync=t.loadOptions=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(5958);var s=r(3525);var i=r(8869);const a=_gensync()((function*(e){var t;const r=yield*(0,n.default)(e);return(t=r==null?void 0:r.options)!=null?t:null}));const o=_gensync()(i.createConfigItem);const maybeErrback=e=>(t,r)=>{if(r===undefined&&typeof t==="function"){r=t;t=undefined}return r?e.errback(t,r):e.sync(t)};const l=maybeErrback(s.loadPartialConfig);t.loadPartialConfig=l;const c=s.loadPartialConfig.sync;t.loadPartialConfigSync=c;const u=s.loadPartialConfig.async;t.loadPartialConfigAsync=u;const p=maybeErrback(a);t.loadOptions=p;const f=a.sync;t.loadOptionsSync=f;const d=a.async;t.loadOptionsAsync=d;const h=o.sync;t.createConfigItemSync=h;const m=o.async;t.createConfigItemAsync=m;function createConfigItem(e,t,r){if(r!==undefined){return o.errback(e,t,r)}else if(typeof t==="function"){return o.errback(e,undefined,r)}else{return o.sync(e,t)}}},8869:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.createConfigItem=createConfigItem;t.createItemFromDescriptor=createItemFromDescriptor;t.getItemDescriptor=getItemDescriptor;function _path(){const e=r(1017);_path=function(){return e};return e}var n=r(7088);function createItemFromDescriptor(e){return new ConfigItem(e)}function*createConfigItem(e,{dirname:t=".",type:r}={}){const s=yield*(0,n.createDescriptor)(e,_path().resolve(t),{type:r,alias:"programmatic item"});return createItemFromDescriptor(s)}function getItemDescriptor(e){if(e!=null&&e[s]){return e._descriptor}return undefined}const s=Symbol.for("@babel/core@7 - ConfigItem");class ConfigItem{constructor(e){this._descriptor=void 0;this[s]=true;this.value=void 0;this.options=void 0;this.dirname=void 0;this.name=void 0;this.file=void 0;this._descriptor=e;Object.defineProperty(this,"_descriptor",{enumerable:false});Object.defineProperty(this,s,{enumerable:false});this.value=this._descriptor.value;this.options=this._descriptor.options;this.dirname=this._descriptor.dirname;this.name=this._descriptor.name;this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:undefined;Object.freeze(this)}}Object.freeze(ConfigItem.prototype)},3525:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=loadPrivatePartialConfig;t.loadPartialConfig=void 0;function _path(){const e=r(1017);_path=function(){return e};return e}function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(5775);var s=r(8499);var i=r(8869);var a=r(6539);var o=r(876);var l=r(1157);var c=r(6936);var u=r(8595);const p=["showIgnoredFiles"];function _objectWithoutPropertiesLoose(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var s,i;for(i=0;i<n.length;i++){s=n[i];if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}function resolveRootMode(e,t){switch(t){case"root":return e;case"upward-optional":{const t=(0,c.findConfigUpwards)(e);return t===null?e:t}case"upward":{const t=(0,c.findConfigUpwards)(e);if(t!==null)return t;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not `+`be found when searching upward from "${e}".\n`+`One of the following config files must be in the directory tree: `+`"${c.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error(`Assertion failure - unknown rootMode value.`)}}function*loadPrivatePartialConfig(e){if(e!=null&&(typeof e!=="object"||Array.isArray(e))){throw new Error("Babel options must be an object, null, or undefined")}const t=e?(0,l.validate)("arguments",e):{};const{envName:r=(0,o.getEnv)(),cwd:n=".",root:p=".",rootMode:f="root",caller:d,cloneInputAst:h=true}=t;const m=_path().resolve(n);const y=resolveRootMode(_path().resolve(m,p),f);const g=typeof t.filename==="string"?_path().resolve(n,t.filename):undefined;const b=yield*(0,c.resolveShowConfigPath)(m);const T={filename:g,cwd:m,root:y,envName:r,caller:d,showConfig:b===g};const S=yield*(0,a.buildRootChain)(t,T);if(!S)return null;const E={assumptions:{}};S.options.forEach((e=>{(0,s.mergeOptions)(E,e)}));const x=Object.assign({},E,{targets:(0,u.resolveTargets)(E,y),cloneInputAst:h,babelrc:false,configFile:false,browserslistConfigFile:false,passPerPreset:false,envName:T.envName,cwd:T.cwd,root:T.root,rootMode:"root",filename:typeof T.filename==="string"?T.filename:undefined,plugins:S.plugins.map((e=>(0,i.createItemFromDescriptor)(e))),presets:S.presets.map((e=>(0,i.createItemFromDescriptor)(e)))});return{options:x,context:T,fileHandling:S.fileHandling,ignore:S.ignore,babelrc:S.babelrc,config:S.config,files:S.files}}const f=_gensync()((function*(e){let t=false;if(typeof e==="object"&&e!==null&&!Array.isArray(e)){var r=e;({showIgnoredFiles:t}=r);e=_objectWithoutPropertiesLoose(r,p);r}const s=yield*loadPrivatePartialConfig(e);if(!s)return null;const{options:i,babelrc:a,ignore:o,config:l,fileHandling:c,files:u}=s;if(c==="ignored"&&!t){return null}(i.plugins||[]).forEach((e=>{if(e.value instanceof n.default){throw new Error("Passing cached plugin instances is not supported in "+"babel.loadPartialConfig()")}}));return new PartialConfig(i,a?a.filepath:undefined,o?o.filepath:undefined,l?l.filepath:undefined,c,u)}));t.loadPartialConfig=f;class PartialConfig{constructor(e,t,r,n,s,i){this.options=void 0;this.babelrc=void 0;this.babelignore=void 0;this.config=void 0;this.fileHandling=void 0;this.files=void 0;this.options=e;this.babelignore=r;this.babelrc=t;this.config=n;this.fileHandling=s;this.files=i;Object.freeze(this)}hasFilesystemConfig(){return this.babelrc!==undefined||this.config!==undefined}}Object.freeze(PartialConfig.prototype)},6209:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=pathToPattern;function _path(){const e=r(1017);_path=function(){return e};return e}const n=`\\${_path().sep}`;const s=`(?:${n}|$)`;const i=`[^${n}]+`;const a=`(?:${i}${n})`;const o=`(?:${i}${s})`;const l=`${a}*?`;const c=`${a}*?${o}?`;function escapeRegExp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}function pathToPattern(e,t){const r=_path().resolve(t,e).split(_path().sep);return new RegExp(["^",...r.map(((e,t)=>{const u=t===r.length-1;if(e==="**")return u?c:l;if(e==="*")return u?o:a;if(e.indexOf("*.")===0){return i+escapeRegExp(e.slice(1))+(u?s:n)}return escapeRegExp(e)+(u?s:n)}))].join(""))}},5775:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(6861);class Plugin{constructor(e,t,r,s=(0,n.finalize)([])){this.key=void 0;this.manipulateOptions=void 0;this.post=void 0;this.pre=void 0;this.visitor=void 0;this.parserOverride=void 0;this.generatorOverride=void 0;this.options=void 0;this.externalDependencies=void 0;this.key=e.name||r;this.manipulateOptions=e.manipulateOptions;this.post=e.post;this.pre=e.pre;this.visitor=e.visitor||{};this.parserOverride=e.parserOverride;this.generatorOverride=e.generatorOverride;this.options=t;this.externalDependencies=s}}t["default"]=Plugin},2806:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.ConfigPrinter=t.ChainFormatter=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}const n={Programmatic:0,Config:1};t.ChainFormatter=n;const s={title(e,t,r){let s="";if(e===n.Programmatic){s="programmatic options";if(t){s+=" from "+t}}else{s="config "+r}return s},loc(e,t){let r="";if(e!=null){r+=`.overrides[${e}]`}if(t!=null){r+=`.env["${t}"]`}return r},*optionsAndDescriptors(e){const t=Object.assign({},e.options);delete t.overrides;delete t.env;const r=[...yield*e.plugins()];if(r.length){t.plugins=r.map((e=>descriptorToConfig(e)))}const n=[...yield*e.presets()];if(n.length){t.presets=[...n].map((e=>descriptorToConfig(e)))}return JSON.stringify(t,undefined,2)}};function descriptorToConfig(e){var t;let r=(t=e.file)==null?void 0:t.request;if(r==null){if(typeof e.value==="object"){r=e.value}else if(typeof e.value==="function"){r=`[Function: ${e.value.toString().slice(0,50)} ... ]`}}if(r==null){r="[Unknown]"}if(e.options===undefined){return r}else if(e.name==null){return[r,e.options]}else{return[r,e.options,e.name]}}class ConfigPrinter{constructor(){this._stack=[]}configure(e,t,{callerName:r,filepath:n}){if(!e)return()=>{};return(e,s,i)=>{this._stack.push({type:t,callerName:r,filepath:n,content:e,index:s,envName:i})}}static*format(e){let t=s.title(e.type,e.callerName,e.filepath);const r=s.loc(e.index,e.envName);if(r)t+=` ${r}`;const n=yield*s.optionsAndDescriptors(e.content);return`${t}\n${n}`}*output(){if(this._stack.length===0)return"";const e=yield*_gensync().all(this._stack.map((e=>ConfigPrinter.format(e))));return e.join("\n\n")}}t.ConfigPrinter=ConfigPrinter},8595:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.resolveBrowserslistConfigFile=resolveBrowserslistConfigFile;t.resolveTargets=resolveTargets;function _path(){const e=r(1017);_path=function(){return e};return e}function _helperCompilationTargets(){const e=r(8479);_helperCompilationTargets=function(){return e};return e}({});function resolveBrowserslistConfigFile(e,t){return _path().resolve(t,e)}function resolveTargets(e,t){let r=e.targets;if(typeof r==="string"||Array.isArray(r)){r={browsers:r}}if(r&&r.esmodules){r=Object.assign({},r,{esmodules:"intersect"})}const{browserslistConfigFile:n}=e;let s;let i=false;if(typeof n==="string"){s=n}else{i=n===false}return(0,_helperCompilationTargets().default)(r,{ignoreBrowserslistConfig:i,configFile:s,configPath:t,browserslistEnv:e.browserslistEnv})}},8499:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isIterableIterator=isIterableIterator;t.mergeOptions=mergeOptions;function mergeOptions(e,t){for(const r of Object.keys(t)){if((r==="parserOpts"||r==="generatorOpts"||r==="assumptions")&&t[r]){const n=t[r];const s=e[r]||(e[r]={});mergeDefaultFields(s,n)}else{const n=t[r];if(n!==undefined)e[r]=n}}}function mergeDefaultFields(e,t){for(const r of Object.keys(t)){const n=t[r];if(n!==undefined)e[r]=n}}function isIterableIterator(e){return!!e&&typeof e.next==="function"&&typeof e[Symbol.iterator]==="function"}},5183:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.access=access;t.assertArray=assertArray;t.assertAssumptions=assertAssumptions;t.assertBabelrcSearch=assertBabelrcSearch;t.assertBoolean=assertBoolean;t.assertCallerMetadata=assertCallerMetadata;t.assertCompact=assertCompact;t.assertConfigApplicableTest=assertConfigApplicableTest;t.assertConfigFileSearch=assertConfigFileSearch;t.assertFunction=assertFunction;t.assertIgnoreList=assertIgnoreList;t.assertInputSourceMap=assertInputSourceMap;t.assertObject=assertObject;t.assertPluginList=assertPluginList;t.assertRootMode=assertRootMode;t.assertSourceMaps=assertSourceMaps;t.assertSourceType=assertSourceType;t.assertString=assertString;t.assertTargets=assertTargets;t.msg=msg;function _helperCompilationTargets(){const e=r(8479);_helperCompilationTargets=function(){return e};return e}var n=r(1157);function msg(e){switch(e.type){case"root":return``;case"env":return`${msg(e.parent)}.env["${e.name}"]`;case"overrides":return`${msg(e.parent)}.overrides[${e.index}]`;case"option":return`${msg(e.parent)}.${e.name}`;case"access":return`${msg(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function access(e,t){return{type:"access",name:t,parent:e}}function assertRootMode(e,t){if(t!==undefined&&t!=="root"&&t!=="upward"&&t!=="upward-optional"){throw new Error(`${msg(e)} must be a "root", "upward", "upward-optional" or undefined`)}return t}function assertSourceMaps(e,t){if(t!==undefined&&typeof t!=="boolean"&&t!=="inline"&&t!=="both"){throw new Error(`${msg(e)} must be a boolean, "inline", "both", or undefined`)}return t}function assertCompact(e,t){if(t!==undefined&&typeof t!=="boolean"&&t!=="auto"){throw new Error(`${msg(e)} must be a boolean, "auto", or undefined`)}return t}function assertSourceType(e,t){if(t!==undefined&&t!=="module"&&t!=="script"&&t!=="unambiguous"){throw new Error(`${msg(e)} must be "module", "script", "unambiguous", or undefined`)}return t}function assertCallerMetadata(e,t){const r=assertObject(e,t);if(r){if(typeof r.name!=="string"){throw new Error(`${msg(e)} set but does not contain "name" property string`)}for(const t of Object.keys(r)){const n=access(e,t);const s=r[t];if(s!=null&&typeof s!=="boolean"&&typeof s!=="string"&&typeof s!=="number"){throw new Error(`${msg(n)} must be null, undefined, a boolean, a string, or a number.`)}}}return t}function assertInputSourceMap(e,t){if(t!==undefined&&typeof t!=="boolean"&&(typeof t!=="object"||!t)){throw new Error(`${msg(e)} must be a boolean, object, or undefined`)}return t}function assertString(e,t){if(t!==undefined&&typeof t!=="string"){throw new Error(`${msg(e)} must be a string, or undefined`)}return t}function assertFunction(e,t){if(t!==undefined&&typeof t!=="function"){throw new Error(`${msg(e)} must be a function, or undefined`)}return t}function assertBoolean(e,t){if(t!==undefined&&typeof t!=="boolean"){throw new Error(`${msg(e)} must be a boolean, or undefined`)}return t}function assertObject(e,t){if(t!==undefined&&(typeof t!=="object"||Array.isArray(t)||!t)){throw new Error(`${msg(e)} must be an object, or undefined`)}return t}function assertArray(e,t){if(t!=null&&!Array.isArray(t)){throw new Error(`${msg(e)} must be an array, or undefined`)}return t}function assertIgnoreList(e,t){const r=assertArray(e,t);if(r){r.forEach(((t,r)=>assertIgnoreItem(access(e,r),t)))}return r}function assertIgnoreItem(e,t){if(typeof t!=="string"&&typeof t!=="function"&&!(t instanceof RegExp)){throw new Error(`${msg(e)} must be an array of string/Function/RegExp values, or undefined`)}return t}function assertConfigApplicableTest(e,t){if(t===undefined)return t;if(Array.isArray(t)){t.forEach(((t,r)=>{if(!checkValidTest(t)){throw new Error(`${msg(access(e,r))} must be a string/Function/RegExp.`)}}))}else if(!checkValidTest(t)){throw new Error(`${msg(e)} must be a string/Function/RegExp, or an array of those`)}return t}function checkValidTest(e){return typeof e==="string"||typeof e==="function"||e instanceof RegExp}function assertConfigFileSearch(e,t){if(t!==undefined&&typeof t!=="boolean"&&typeof t!=="string"){throw new Error(`${msg(e)} must be a undefined, a boolean, a string, `+`got ${JSON.stringify(t)}`)}return t}function assertBabelrcSearch(e,t){if(t===undefined||typeof t==="boolean")return t;if(Array.isArray(t)){t.forEach(((t,r)=>{if(!checkValidTest(t)){throw new Error(`${msg(access(e,r))} must be a string/Function/RegExp.`)}}))}else if(!checkValidTest(t)){throw new Error(`${msg(e)} must be a undefined, a boolean, a string/Function/RegExp `+`or an array of those, got ${JSON.stringify(t)}`)}return t}function assertPluginList(e,t){const r=assertArray(e,t);if(r){r.forEach(((t,r)=>assertPluginItem(access(e,r),t)))}return r}function assertPluginItem(e,t){if(Array.isArray(t)){if(t.length===0){throw new Error(`${msg(e)} must include an object`)}if(t.length>3){throw new Error(`${msg(e)} may only be a two-tuple or three-tuple`)}assertPluginTarget(access(e,0),t[0]);if(t.length>1){const r=t[1];if(r!==undefined&&r!==false&&(typeof r!=="object"||Array.isArray(r)||r===null)){throw new Error(`${msg(access(e,1))} must be an object, false, or undefined`)}}if(t.length===3){const r=t[2];if(r!==undefined&&typeof r!=="string"){throw new Error(`${msg(access(e,2))} must be a string, or undefined`)}}}else{assertPluginTarget(e,t)}return t}function assertPluginTarget(e,t){if((typeof t!=="object"||!t)&&typeof t!=="string"&&typeof t!=="function"){throw new Error(`${msg(e)} must be a string, object, function`)}return t}function assertTargets(e,t){if((0,_helperCompilationTargets().isBrowsersQueryValid)(t))return t;if(typeof t!=="object"||!t||Array.isArray(t)){throw new Error(`${msg(e)} must be a string, an array of strings or an object`)}const r=access(e,"browsers");const n=access(e,"esmodules");assertBrowsersList(r,t.browsers);assertBoolean(n,t.esmodules);for(const r of Object.keys(t)){const n=t[r];const s=access(e,r);if(r==="esmodules")assertBoolean(s,n);else if(r==="browsers")assertBrowsersList(s,n);else if(!Object.hasOwnProperty.call(_helperCompilationTargets().TargetNames,r)){const e=Object.keys(_helperCompilationTargets().TargetNames).join(", ");throw new Error(`${msg(s)} is not a valid target. Supported targets are ${e}`)}else assertBrowserVersion(s,n)}return t}function assertBrowsersList(e,t){if(t!==undefined&&!(0,_helperCompilationTargets().isBrowsersQueryValid)(t)){throw new Error(`${msg(e)} must be undefined, a string or an array of strings`)}}function assertBrowserVersion(e,t){if(typeof t==="number"&&Math.round(t)===t)return;if(typeof t==="string")return;throw new Error(`${msg(e)} must be a string or an integer number`)}function assertAssumptions(e,t){if(t===undefined)return;if(typeof t!=="object"||t===null){throw new Error(`${msg(e)} must be an object or undefined.`)}let r=e;do{r=r.parent}while(r.type!=="root");const s=r.source==="preset";for(const r of Object.keys(t)){const i=access(e,r);if(!n.assumptionsNames.has(r)){throw new Error(`${msg(i)} is not a supported assumption.`)}if(typeof t[r]!=="boolean"){throw new Error(`${msg(i)} must be a boolean.`)}if(s&&t[r]===false){throw new Error(`${msg(i)} cannot be set to 'false' inside presets.`)}}return t}},1157:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.assumptionsNames=void 0;t.checkNoUnwrappedItemOptionPairs=checkNoUnwrappedItemOptionPairs;t.validate=validate;var n=r(5775);var s=r(7419);var i=r(5183);const a={cwd:i.assertString,root:i.assertString,rootMode:i.assertRootMode,configFile:i.assertConfigFileSearch,caller:i.assertCallerMetadata,filename:i.assertString,filenameRelative:i.assertString,code:i.assertBoolean,ast:i.assertBoolean,cloneInputAst:i.assertBoolean,envName:i.assertString};const o={babelrc:i.assertBoolean,babelrcRoots:i.assertBabelrcSearch};const l={extends:i.assertString,ignore:i.assertIgnoreList,only:i.assertIgnoreList,targets:i.assertTargets,browserslistConfigFile:i.assertConfigFileSearch,browserslistEnv:i.assertString};const c={inputSourceMap:i.assertInputSourceMap,presets:i.assertPluginList,plugins:i.assertPluginList,passPerPreset:i.assertBoolean,assumptions:i.assertAssumptions,env:assertEnvSet,overrides:assertOverridesList,test:i.assertConfigApplicableTest,include:i.assertConfigApplicableTest,exclude:i.assertConfigApplicableTest,retainLines:i.assertBoolean,comments:i.assertBoolean,shouldPrintComment:i.assertFunction,compact:i.assertCompact,minified:i.assertBoolean,auxiliaryCommentBefore:i.assertString,auxiliaryCommentAfter:i.assertString,sourceType:i.assertSourceType,wrapPluginVisitorMethod:i.assertFunction,highlightCode:i.assertBoolean,sourceMaps:i.assertSourceMaps,sourceMap:i.assertSourceMaps,sourceFileName:i.assertString,sourceRoot:i.assertString,parserOpts:i.assertObject,generatorOpts:i.assertObject};{Object.assign(c,{getModuleId:i.assertFunction,moduleRoot:i.assertString,moduleIds:i.assertBoolean,moduleId:i.assertString})}const u=["arrayLikeIsIterable","constantReexports","constantSuper","enumerableModuleMeta","ignoreFunctionLength","ignoreToPrimitiveHint","iterableIsArray","mutableTemplateObject","noClassCalls","noDocumentAll","noIncompleteNsImportDetection","noNewArrows","objectRestNoSymbols","privateFieldsAsProperties","pureGetters","setClassMethods","setComputedProperties","setPublicClassFields","setSpreadProperties","skipForOfIteratorClosing","superIsCallableConstructor"];const p=new Set(u);t.assumptionsNames=p;function getSource(e){return e.type==="root"?e.source:getSource(e.parent)}function validate(e,t){return validateNested({type:"root",source:e},t)}function validateNested(e,t){const r=getSource(e);assertNoDuplicateSourcemap(t);Object.keys(t).forEach((n=>{const s={type:"option",name:n,parent:e};if(r==="preset"&&l[n]){throw new Error(`${(0,i.msg)(s)} is not allowed in preset options`)}if(r!=="arguments"&&a[n]){throw new Error(`${(0,i.msg)(s)} is only allowed in root programmatic options`)}if(r!=="arguments"&&r!=="configfile"&&o[n]){if(r==="babelrcfile"||r==="extendsfile"){throw new Error(`${(0,i.msg)(s)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, `+`or babel.config.js/config file options`)}throw new Error(`${(0,i.msg)(s)} is only allowed in root programmatic options, or babel.config.js/config file options`)}const u=c[n]||l[n]||o[n]||a[n]||throwUnknownError;u(s,t[n])}));return t}function throwUnknownError(e){const t=e.name;if(s.default[t]){const{message:r,version:n=5}=s.default[t];throw new Error(`Using removed Babel ${n} option: ${(0,i.msg)(e)} - ${r}`)}else{const t=new Error(`Unknown option: ${(0,i.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);t.code="BABEL_UNKNOWN_OPTION";throw t}}function has(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function assertNoDuplicateSourcemap(e){if(has(e,"sourceMap")&&has(e,"sourceMaps")){throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}}function assertEnvSet(e,t){if(e.parent.type==="env"){throw new Error(`${(0,i.msg)(e)} is not allowed inside of another .env block`)}const r=e.parent;const n=(0,i.assertObject)(e,t);if(n){for(const t of Object.keys(n)){const s=(0,i.assertObject)((0,i.access)(e,t),n[t]);if(!s)continue;const a={type:"env",name:t,parent:r};validateNested(a,s)}}return n}function assertOverridesList(e,t){if(e.parent.type==="env"){throw new Error(`${(0,i.msg)(e)} is not allowed inside an .env block`)}if(e.parent.type==="overrides"){throw new Error(`${(0,i.msg)(e)} is not allowed inside an .overrides block`)}const r=e.parent;const n=(0,i.assertArray)(e,t);if(n){for(const[t,s]of n.entries()){const n=(0,i.access)(e,t);const a=(0,i.assertObject)(n,s);if(!a)throw new Error(`${(0,i.msg)(n)} must be an object`);const o={type:"overrides",index:t,parent:r};validateNested(o,a)}}return n}function checkNoUnwrappedItemOptionPairs(e,t,r,n){if(t===0)return;const s=e[t-1];const i=e[t];if(s.file&&s.options===undefined&&typeof i.value==="object"){n.message+=`\n- Maybe you meant to use\n`+`"${r}s": [\n  ["${s.file.request}", ${JSON.stringify(i.value,undefined,2)}]\n]\n`+`To be a valid ${r}, its name and options should be wrapped in a pair of brackets`}}},5918:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.validatePluginObject=validatePluginObject;var n=r(5183);const s={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:assertVisitorMap,parserOverride:n.assertFunction,generatorOverride:n.assertFunction};function assertVisitorMap(e,t){const r=(0,n.assertObject)(e,t);if(r){Object.keys(r).forEach((e=>assertVisitorHandler(e,r[e])));if(r.enter||r.exit){throw new Error(`${(0,n.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`)}}return r}function assertVisitorHandler(e,t){if(t&&typeof t==="object"){Object.keys(t).forEach((t=>{if(t!=="enter"&&t!=="exit"){throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)}}))}else if(typeof t!=="function"){throw new Error(`.visitor["${e}"] must be a function`)}return t}function validatePluginObject(e){const t={type:"root",source:"plugin"};Object.keys(e).forEach((r=>{const n=s[r];if(n){const s={type:"option",name:r,parent:t};n(s,e[r])}else{const e=new Error(`.${r} is not a valid Plugin property`);e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY";throw e}}));return e}},7419:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var r={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. "+"Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. "+"Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using "+"or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. "+"Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. "+"Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the "+"tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling "+"that calls Babel to assign `map.file` themselves."}};t["default"]=r},5398:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.forwardAsync=forwardAsync;t.isAsync=void 0;t.isThenable=isThenable;t.maybeAsync=maybeAsync;t.waitFor=t.onFirstPause=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}const id=e=>e;const n=_gensync()((function*(e){return yield*e}));const s=_gensync()({sync:()=>false,errback:e=>e(null,true)});t.isAsync=s;function maybeAsync(e,t){return _gensync()({sync(...r){const n=e.apply(this,r);if(isThenable(n))throw new Error(t);return n},async(...t){return Promise.resolve(e.apply(this,t))}})}const i=_gensync()({sync:e=>e("sync"),async:e=>e("async")});function forwardAsync(e,t){const r=_gensync()(e);return i((e=>{const n=r[e];return t(n)}))}const a=_gensync()({name:"onFirstPause",arity:2,sync:function(e){return n.sync(e)},errback:function(e,t,r){let s=false;n.errback(e,((e,t)=>{s=true;r(e,t)}));if(!s){t()}}});t.onFirstPause=a;const o=_gensync()({sync:id,async:id});t.waitFor=o;function isThenable(e){return!!e&&(typeof e==="object"||typeof e==="function")&&!!e.then&&typeof e.then==="function"}},3575:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.stat=t.readFile=void 0;function _fs(){const e=r(7147);_fs=function(){return e};return e}function _gensync(){const e=r(6433);_gensync=function(){return e};return e}const n=_gensync()({sync:_fs().readFileSync,errback:_fs().readFile});t.readFile=n;const s=_gensync()({sync:_fs().statSync,errback:_fs().stat});t.stat=s},7782:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.DEFAULT_EXTENSIONS=void 0;Object.defineProperty(t,"File",{enumerable:true,get:function(){return n.default}});t.OptionManager=void 0;t.Plugin=Plugin;Object.defineProperty(t,"buildExternalHelpers",{enumerable:true,get:function(){return s.default}});Object.defineProperty(t,"createConfigItem",{enumerable:true,get:function(){return o.createConfigItem}});Object.defineProperty(t,"createConfigItemAsync",{enumerable:true,get:function(){return o.createConfigItemAsync}});Object.defineProperty(t,"createConfigItemSync",{enumerable:true,get:function(){return o.createConfigItemSync}});Object.defineProperty(t,"getEnv",{enumerable:true,get:function(){return a.getEnv}});Object.defineProperty(t,"loadOptions",{enumerable:true,get:function(){return o.loadOptions}});Object.defineProperty(t,"loadOptionsAsync",{enumerable:true,get:function(){return o.loadOptionsAsync}});Object.defineProperty(t,"loadOptionsSync",{enumerable:true,get:function(){return o.loadOptionsSync}});Object.defineProperty(t,"loadPartialConfig",{enumerable:true,get:function(){return o.loadPartialConfig}});Object.defineProperty(t,"loadPartialConfigAsync",{enumerable:true,get:function(){return o.loadPartialConfigAsync}});Object.defineProperty(t,"loadPartialConfigSync",{enumerable:true,get:function(){return o.loadPartialConfigSync}});Object.defineProperty(t,"parse",{enumerable:true,get:function(){return p.parse}});Object.defineProperty(t,"parseAsync",{enumerable:true,get:function(){return p.parseAsync}});Object.defineProperty(t,"parseSync",{enumerable:true,get:function(){return p.parseSync}});Object.defineProperty(t,"resolvePlugin",{enumerable:true,get:function(){return i.resolvePlugin}});Object.defineProperty(t,"resolvePreset",{enumerable:true,get:function(){return i.resolvePreset}});Object.defineProperty(t,"template",{enumerable:true,get:function(){return _template().default}});Object.defineProperty(t,"tokTypes",{enumerable:true,get:function(){return _parser().tokTypes}});Object.defineProperty(t,"transform",{enumerable:true,get:function(){return l.transform}});Object.defineProperty(t,"transformAsync",{enumerable:true,get:function(){return l.transformAsync}});Object.defineProperty(t,"transformFile",{enumerable:true,get:function(){return c.transformFile}});Object.defineProperty(t,"transformFileAsync",{enumerable:true,get:function(){return c.transformFileAsync}});Object.defineProperty(t,"transformFileSync",{enumerable:true,get:function(){return c.transformFileSync}});Object.defineProperty(t,"transformFromAst",{enumerable:true,get:function(){return u.transformFromAst}});Object.defineProperty(t,"transformFromAstAsync",{enumerable:true,get:function(){return u.transformFromAstAsync}});Object.defineProperty(t,"transformFromAstSync",{enumerable:true,get:function(){return u.transformFromAstSync}});Object.defineProperty(t,"transformSync",{enumerable:true,get:function(){return l.transformSync}});Object.defineProperty(t,"traverse",{enumerable:true,get:function(){return _traverse().default}});t.version=t.types=void 0;var n=r(8290);var s=r(7598);var i=r(6936);var a=r(876);function _types(){const e=r(6953);_types=function(){return e};return e}Object.defineProperty(t,"types",{enumerable:true,get:function(){return _types()}});function _parser(){const e=r(9113);_parser=function(){return e};return e}function _traverse(){const e=r(7734);_traverse=function(){return e};return e}function _template(){const e=r(5292);_template=function(){return e};return e}var o=r(4198);var l=r(99);var c=r(8914);var u=r(1120);var p=r(7505);const f="7.18.0";t.version=f;const d=Object.freeze([".js",".jsx",".es6",".es",".mjs",".cjs"]);t.DEFAULT_EXTENSIONS=d;class OptionManager{init(e){return(0,o.loadOptions)(e)}}t.OptionManager=OptionManager;function Plugin(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)}},7505:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.parseSync=t.parseAsync=t.parse=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(4198);var s=r(9722);var i=r(9838);const a=_gensync()((function*parse(e,t){const r=yield*(0,n.default)(t);if(r===null){return null}return yield*(0,s.default)(r.passes,(0,i.default)(r),e)}));const o=function parse(e,t,r){if(typeof t==="function"){r=t;t=undefined}if(r===undefined)return a.sync(e,t);a.errback(e,t,r)};t.parse=o;const l=a.sync;t.parseSync=l;const c=a.async;t.parseAsync=c},9722:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=parser;function _parser(){const e=r(9113);_parser=function(){return e};return e}function _codeFrame(){const e=r(1811);_codeFrame=function(){return e};return e}var n=r(831);function*parser(e,{parserOpts:t,highlightCode:r=true,filename:s="unknown"},i){try{const r=[];for(const n of e){for(const e of n){const{parserOverride:n}=e;if(n){const e=n(i,t,_parser().parse);if(e!==undefined)r.push(e)}}}if(r.length===0){return(0,_parser().parse)(i,t)}else if(r.length===1){yield*[];if(typeof r[0].then==="function"){throw new Error(`You appear to be using an async parser plugin, `+`which your current version of Babel does not support. `+`If you're using a published plugin, you may need to upgrade `+`your @babel/core version.`)}return r[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){if(e.code==="BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"){e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module "+"or sourceType:unambiguous in your Babel config for this file."}const{loc:t,missingPlugin:a}=e;if(t){const o=(0,_codeFrame().codeFrameColumns)(i,{start:{line:t.line,column:t.column+1}},{highlightCode:r});if(a){e.message=`${s}: `+(0,n.default)(a[0],t,o)}else{e.message=`${s}: ${e.message}\n\n`+o}e.code="BABEL_PARSE_ERROR"}throw e}}},831:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=generateMissingPluginMessage;const r={asyncDoExpressions:{syntax:{name:"@babel/plugin-syntax-async-do-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-do-expressions"}},classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-methods"}},classStaticBlock:{syntax:{name:"@babel/plugin-syntax-class-static-block",url:"https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-syntax-class-static-block"},transform:{name:"@babel/plugin-proposal-class-static-block",url:"https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-proposal-class-static-block"}},decimal:{syntax:{name:"@babel/plugin-syntax-decimal",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decimal"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decorators"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-decorators"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-do-expressions"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-do-expressions"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-dynamic-import"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-default-from"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-default-from"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-namespace-from"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-namespace-from"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-flow"},transform:{name:"@babel/preset-flow",url:"https://github.com/babel/babel/tree/main/packages/babel-preset-flow"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-bind"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-bind"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-sent"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-sent"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-meta"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx"},transform:{name:"@babel/preset-react",url:"https://github.com/babel/babel/tree/main/packages/babel-preset-react"}},importAssertions:{syntax:{name:"@babel/plugin-syntax-import-assertions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions"}},moduleStringNames:{syntax:{name:"@babel/plugin-syntax-module-string-names",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-module-string-names"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-numeric-separator"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-numeric-separator"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-chaining"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-chaining"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-pipeline-operator"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-pipeline-operator"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-private-property-in-object"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-property-in-object"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-record-and-tuple"}},regexpUnicodeSets:{syntax:{name:"@babel/plugin-syntax-unicode-sets-regex",url:"https://github.com/babel/babel/blob/main/packages/babel-plugin-syntax-unicode-sets-regex/README.md"},transform:{name:"@babel/plugin-proposal-unicode-sets-regex",url:"https://github.com/babel/babel/blob/main/packages/babel-plugin-proposalunicode-sets-regex/README.md"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-throw-expressions"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-throw-expressions"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-typescript"},transform:{name:"@babel/preset-typescript",url:"https://github.com/babel/babel/tree/main/packages/babel-preset-typescript"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-generators"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-async-generator-functions"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-logical-assignment-operators"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-logical-assignment-operators"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-nullish-coalescing-operator"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-nullish-coalescing-opearator"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-object-rest-spread"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-object-rest-spread"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-catch-binding"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-catch-binding"}}};r.privateIn.syntax=r.privateIn.transform;const getNameURLCombination=({name:e,url:t})=>`${e} (${t})`;function generateMissingPluginMessage(e,t,n){let s=`Support for the experimental syntax '${e}' isn't currently enabled `+`(${t.line}:${t.column+1}):\n\n`+n;const i=r[e];if(i){const{syntax:e,transform:t}=i;if(e){const r=getNameURLCombination(e);if(t){const e=getNameURLCombination(t);const n=t.name.startsWith("@babel/plugin")?"plugins":"presets";s+=`\n\nAdd ${e} to the '${n}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${r} to the 'plugins' section to enable parsing.`}else{s+=`\n\nAdd ${r} to the 'plugins' section of your Babel config `+`to enable parsing.`}}}return s}},7598:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=_default;function helpers(){const e=r(5262);helpers=function(){return e};return e}function _generator(){const e=r(3136);_generator=function(){return e};return e}function _template(){const e=r(5292);_template=function(){return e};return e}function _t(){const e=r(6953);_t=function(){return e};return e}var n=r(8290);const{arrayExpression:s,assignmentExpression:i,binaryExpression:a,blockStatement:o,callExpression:l,cloneNode:c,conditionalExpression:u,exportNamedDeclaration:p,exportSpecifier:f,expressionStatement:d,functionExpression:h,identifier:m,memberExpression:y,objectExpression:g,program:b,stringLiteral:T,unaryExpression:S,variableDeclaration:E,variableDeclarator:x}=_t();const buildUmdWrapper=e=>_template().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);function buildGlobal(e){const t=m("babelHelpers");const r=[];const n=h(null,[m("global")],o(r));const s=b([d(l(n,[u(a("===",S("typeof",m("global")),T("undefined")),m("self"),m("global"))]))]);r.push(E("var",[x(t,i("=",y(m("global"),t),g([])))]));buildHelpers(r,t,e);return s}function buildModule(e){const t=[];const r=buildHelpers(t,null,e);t.unshift(p(null,Object.keys(r).map((e=>f(c(r[e]),m(e))))));return b(t,[],"module")}function buildUmd(e){const t=m("babelHelpers");const r=[];r.push(E("var",[x(t,m("global"))]));buildHelpers(r,t,e);return b([buildUmdWrapper({FACTORY_PARAMETERS:m("global"),BROWSER_ARGUMENTS:i("=",y(m("root"),t),g([])),COMMON_ARGUMENTS:m("exports"),AMD_ARGUMENTS:s([T("exports")]),FACTORY_BODY:r,UMD_ROOT:m("this")})])}function buildVar(e){const t=m("babelHelpers");const r=[];r.push(E("var",[x(t,g([]))]));const n=b(r);buildHelpers(r,t,e);r.push(d(t));return n}function buildHelpers(e,t,r){const getHelperReference=e=>t?y(t,m(e)):m(`_${e}`);const s={};helpers().list.forEach((function(t){if(r&&r.indexOf(t)<0)return;const i=s[t]=getHelperReference(t);helpers().ensure(t,n.default);const{nodes:a}=helpers().get(t,getHelperReference,i);e.push(...a)}));return s}function _default(e,t="global"){let r;const n={global:buildGlobal,module:buildModule,umd:buildUmd,var:buildVar}[t];if(n){r=n(e)}else{throw new Error(`Unsupported output type ${t}`)}return(0,_generator().default)(r).code}},1120:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.transformFromAstSync=t.transformFromAstAsync=t.transformFromAst=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(4198);var s=r(7423);const i=_gensync()((function*(e,t,r){const i=yield*(0,n.default)(r);if(i===null)return null;if(!e)throw new Error("No AST given");return yield*(0,s.run)(i,t,e)}));const a=function transformFromAst(e,t,r,n){if(typeof r==="function"){n=r;r=undefined}if(n===undefined){return i.sync(e,t,r)}i.errback(e,t,r,n)};t.transformFromAst=a;const o=i.sync;t.transformFromAstSync=o;const l=i.async;t.transformFromAstAsync=l},8914:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.transformFileSync=t.transformFileAsync=t.transformFile=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(4198);var s=r(7423);var i=r(3575);({});const a=_gensync()((function*(e,t){const r=Object.assign({},t,{filename:e});const a=yield*(0,n.default)(r);if(a===null)return null;const o=yield*i.readFile(e,"utf8");return yield*(0,s.run)(a,o)}));const o=a.errback;t.transformFile=o;const l=a.sync;t.transformFileSync=l;const c=a.async;t.transformFileAsync=c},99:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.transformSync=t.transformAsync=t.transform=void 0;function _gensync(){const e=r(6433);_gensync=function(){return e};return e}var n=r(4198);var s=r(7423);const i=_gensync()((function*transform(e,t){const r=yield*(0,n.default)(t);if(r===null)return null;return yield*(0,s.run)(r,e)}));const a=function transform(e,t,r){if(typeof t==="function"){r=t;t=undefined}if(r===undefined)return i.sync(e,t);i.errback(e,t,r)};t.transform=a;const o=i.sync;t.transformSync=o;const l=i.async;t.transformAsync=l},1674:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=loadBlockHoistPlugin;function _traverse(){const e=r(7734);_traverse=function(){return e};return e}var n=r(5775);let s;function loadBlockHoistPlugin(){if(!s){s=new n.default(Object.assign({},i,{visitor:_traverse().default.explode(i.visitor)}),{})}return s}function priority(e){const t=e==null?void 0:e._blockHoist;if(t==null)return 1;if(t===true)return 2;return t}function stableSort(e){const t=Object.create(null);for(let r=0;r<e.length;r++){const n=e[r];const s=priority(n);const i=t[s]||(t[s]=[]);i.push(n)}const r=Object.keys(t).map((e=>+e)).sort(((e,t)=>t-e));let n=0;for(const s of r){const r=t[s];for(const t of r){e[n++]=t}}return e}const i={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:t}=e;let r=Math.pow(2,30)-1;let n=false;for(let e=0;e<t.length;e++){const s=t[e];const i=priority(s);if(i>r){n=true;break}r=i}if(!n)return;e.body=stableSort(t.slice())}}}}},8290:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;function helpers(){const e=r(5262);helpers=function(){return e};return e}function _traverse(){const e=r(7734);_traverse=function(){return e};return e}function _codeFrame(){const e=r(1811);_codeFrame=function(){return e};return e}function _t(){const e=r(6953);_t=function(){return e};return e}function _helperModuleTransforms(){const e=r(1914);_helperModuleTransforms=function(){return e};return e}function _semver(){const e=r(7849);_semver=function(){return e};return e}const{cloneNode:n,interpreterDirective:s}=_t();const i={enter(e,t){const r=e.node.loc;if(r){t.loc=r;e.stop()}}};class File{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map;this.opts=void 0;this.declarations={};this.path=null;this.ast={};this.scope=void 0;this.metadata={};this.code="";this.inputMap=null;this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)};this.opts=e;this.code=t;this.ast=r;this.inputMap=n;this.path=_traverse().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext();this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){if(e){this.path.get("interpreter").replaceWith(s(e))}else{this.path.get("interpreter").remove()}}set(e,t){if(e==="helpersNamespace"){throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility."+"If you are using @babel/plugin-external-helpers you will need to use a newer "+"version than the one you currently have installed. "+"If you have your own implementation, you'll want to explore using 'helperGenerator' "+"alongside 'file.availableHelper()'.")}this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,_helperModuleTransforms().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this "+"functionality in Babel 7, you should import the "+"'@babel/helper-module-imports' module and use the functions exposed "+" from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=helpers().minVersion(e)}catch(e){if(e.code!=="BABEL_HELPER_UNKNOWN")throw e;return false}if(typeof t!=="string")return true;if(_semver().valid(t))t=`^${t}`;return!_semver().intersects(`<${r}`,t)&&!_semver().intersects(`>=8.0.0`,t)}addHelper(e){const t=this.declarations[e];if(t)return n(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}helpers().ensure(e,File);const s=this.declarations[e]=this.scope.generateUidIdentifier(e);const i={};for(const t of helpers().getDependencies(e)){i[t]=this.addHelper(t)}const{nodes:a,globals:o}=helpers().get(e,(e=>i[e]),s,Object.keys(this.scope.getAllBindings()));o.forEach((e=>{if(this.path.scope.hasBinding(e,true)){this.path.scope.rename(e)}}));a.forEach((e=>{e._compact=true}));this.path.unshiftContainer("body",a);this.path.get("body").forEach((e=>{if(a.indexOf(e.node)===-1)return;if(e.isVariableDeclaration())this.scope.registerDeclaration(e)}));return s}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(!n&&e){const r={loc:null};(0,_traverse().default)(e,i,this.scope,r);n=r.loc;let s="This is an error on an internal node. Probably an internal error.";if(n)s+=" Location has been estimated.";t+=` (${s})`}if(n){const{highlightCode:e=true}=this.opts;t+="\n"+(0,_codeFrame().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1},end:n.end&&n.start.line===n.end.line?{line:n.end.line,column:n.end.column+1}:undefined},{highlightCode:e})}return new r(t)}}t["default"]=File},9544:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=generateCode;function _convertSourceMap(){const e=r(645);_convertSourceMap=function(){return e};return e}function _generator(){const e=r(3136);_generator=function(){return e};return e}var n=r(6634);function generateCode(e,t){const{opts:r,ast:s,code:i,inputMap:a}=t;const{generatorOpts:o}=r;const l=[];for(const t of e){for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(s,o,i,_generator().default);if(e!==undefined)l.push(e)}}}let c;if(l.length===0){c=(0,_generator().default)(s,o,i)}else if(l.length===1){c=l[0];if(typeof c.then==="function"){throw new Error(`You appear to be using an async codegen plugin, `+`which your current version of Babel does not support. `+`If you're using a published plugin, `+`you may need to upgrade your @babel/core version.`)}}else{throw new Error("More than one plugin attempted to override codegen.")}let{code:u,decodedMap:p=c.map}=c;if(p){if(a){p=(0,n.default)(a.toObject(),p,o.sourceFileName)}else{p=c.map}}if(r.sourceMaps==="inline"||r.sourceMaps==="both"){u+="\n"+_convertSourceMap().fromObject(p).toComment()}if(r.sourceMaps==="inline"){p=null}return{outputCode:u,outputMap:p}}},6634:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=mergeSourceMap;function _remapping(){const e=r(6143);_remapping=function(){return e};return e}function mergeSourceMap(e,t,r){const n=r.replace(/\\/g,"/");let s=false;const i=_remapping()(rootless(t),((t,r)=>{if(t===n&&!s){s=true;r.source="";return rootless(e)}return null}));if(typeof e.sourceRoot==="string"){i.sourceRoot=e.sourceRoot}return Object.assign({},i)}function rootless(e){return Object.assign({},e,{sourceRoot:null})}},7423:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.run=run;function _traverse(){const e=r(7734);_traverse=function(){return e};return e}var n=r(4319);var s=r(1674);var i=r(9838);var a=r(4437);var o=r(9544);var l=r(6861);function*run(e,t,r){const n=yield*(0,a.default)(e.passes,(0,i.default)(e),t,r);const s=n.opts;try{yield*transformFile(n,e.passes)}catch(e){var c;e.message=`${(c=s.filename)!=null?c:"unknown"}: ${e.message}`;if(!e.code){e.code="BABEL_TRANSFORM_ERROR"}throw e}let u,p;try{if(s.code!==false){({outputCode:u,outputMap:p}=(0,o.default)(e.passes,n))}}catch(e){var f;e.message=`${(f=s.filename)!=null?f:"unknown"}: ${e.message}`;if(!e.code){e.code="BABEL_GENERATE_ERROR"}throw e}return{metadata:n.metadata,options:s,ast:s.ast===true?n.ast:null,code:u===undefined?null:u,map:p===undefined?null:p,sourceType:n.ast.program.sourceType,externalDependencies:(0,l.flattenToSet)(e.externalDependencies)}}function*transformFile(e,t){for(const r of t){const t=[];const i=[];const a=[];for(const o of r.concat([(0,s.default)()])){const r=new n.default(e,o.key,o.options);t.push([o,r]);i.push(r);a.push(o.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);yield*[];if(isThenable(r)){throw new Error(`You appear to be using an plugin with an async .pre, `+`which your current version of Babel does not support. `+`If you're using a published plugin, you may need to upgrade `+`your @babel/core version.`)}}}const o=_traverse().default.visitors.merge(a,i,e.opts.wrapPluginVisitorMethod);(0,_traverse().default)(e.ast,o,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);yield*[];if(isThenable(r)){throw new Error(`You appear to be using an plugin with an async .post, `+`which your current version of Babel does not support. `+`If you're using a published plugin, you may need to upgrade `+`your @babel/core version.`)}}}}}function isThenable(e){return!!e&&(typeof e==="object"||typeof e==="function")&&!!e.then&&typeof e.then==="function"}},4437:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=normalizeFile;function _fs(){const e=r(7147);_fs=function(){return e};return e}function _path(){const e=r(1017);_path=function(){return e};return e}function _debug(){const e=r(6937);_debug=function(){return e};return e}function _t(){const e=r(6953);_t=function(){return e};return e}function _convertSourceMap(){const e=r(645);_convertSourceMap=function(){return e};return e}var n=r(8290);var s=r(9722);var i=r(5248);const{file:a,traverseFast:o}=_t();const l=_debug()("babel:transform:file");const c=1e6;function*normalizeFile(e,t,r,o){r=`${r||""}`;if(o){if(o.type==="Program"){o=a(o,[],[])}else if(o.type!=="File"){throw new Error("AST root must be a Program or File node")}if(t.cloneInputAst){o=(0,i.default)(o)}}else{o=yield*(0,s.default)(e,t,r)}let f=null;if(t.inputSourceMap!==false){if(typeof t.inputSourceMap==="object"){f=_convertSourceMap().fromObject(t.inputSourceMap)}if(!f){const e=extractComments(u,o);if(e){try{f=_convertSourceMap().fromComment(e)}catch(e){l("discarding unknown inline input sourcemap",e)}}}if(!f){const e=extractComments(p,o);if(typeof t.filename==="string"&&e){try{const r=p.exec(e);const n=_fs().readFileSync(_path().resolve(_path().dirname(t.filename),r[1]));if(n.length>c){l("skip merging input map > 1 MB")}else{f=_convertSourceMap().fromJSON(n)}}catch(e){l("discarding unknown file input sourcemap",e)}}else if(e){l("discarding un-loadable file input sourcemap")}}}return new n.default(t,{code:r,ast:o,inputMap:f})}const u=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/;const p=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function extractCommentsFromList(e,t,r){if(t){t=t.filter((({value:t})=>{if(e.test(t)){r=t;return false}return true}))}return[t,r]}function extractComments(e,t){let r=null;o(t,(t=>{[t.leadingComments,r]=extractCommentsFromList(e,t.leadingComments,r);[t.innerComments,r]=extractCommentsFromList(e,t.innerComments,r);[t.trailingComments,r]=extractCommentsFromList(e,t.trailingComments,r)}));return r}},9838:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=normalizeOptions;function _path(){const e=r(1017);_path=function(){return e};return e}function normalizeOptions(e){const{filename:t,cwd:r,filenameRelative:n=(typeof t==="string"?_path().relative(r,t):"unknown"),sourceType:s="module",inputSourceMap:i,sourceMaps:a=!!i,sourceRoot:o=e.options.moduleRoot,sourceFileName:l=_path().basename(n),comments:c=true,compact:u="auto"}=e.options;const p=e.options;const f=Object.assign({},p,{parserOpts:Object.assign({sourceType:_path().extname(n)===".mjs"?"module":s,sourceFileName:t,plugins:[]},p.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:p.auxiliaryCommentBefore,auxiliaryCommentAfter:p.auxiliaryCommentAfter,retainLines:p.retainLines,comments:c,shouldPrintComment:p.shouldPrintComment,compact:u,minified:p.minified,sourceMaps:a,sourceRoot:o,sourceFileName:l},p.generatorOpts)});for(const t of e.passes){for(const e of t){if(e.manipulateOptions){e.manipulateOptions(f,f.parserOpts)}}}return f}},4319:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;class PluginPass{constructor(e,t,r){this._map=new Map;this.key=void 0;this.file=void 0;this.opts=void 0;this.cwd=void 0;this.filename=void 0;this.key=t;this.file=e;this.opts=r||{};this.cwd=e.opts.cwd;this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}t["default"]=PluginPass;{PluginPass.prototype.getModuleName=function getModuleName(){return this.file.getModuleName()}}},7259:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=_default;const r="$$ babel internal serialized type"+Math.random();function serialize(e,t){if(typeof t!=="bigint")return t;return{[r]:"BigInt",value:t.toString()}}function revive(e,t){if(!t||typeof t!=="object")return t;if(t[r]!=="BigInt")return t;return BigInt(t.value)}function _default(e){return JSON.parse(JSON.stringify(e,serialize),revive)}},5248:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=_default;function _v(){const e=r(4655);_v=function(){return e};return e}var n=r(7259);function _default(e){if(_v().deserialize&&_v().serialize){return _v().deserialize(_v().serialize(e))}return(0,n.default)(e)}},6833:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.moduleResolve=moduleResolve;t.resolve=resolve;function _url(){const e=r(7310);_url=function(){return e};return e}function _fs(){const e=_interopRequireWildcard(r(7147),true);_fs=function(){return e};return e}function _path(){const e=r(1017);_path=function(){return e};return e}function _assert(){const e=r(9491);_assert=function(){return e};return e}function _util(){const e=r(3837);_util=function(){return e};return e}function _getRequireWildcardCache(e){if(typeof WeakMap!=="function")return null;var t=new WeakMap;var r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule){return e}if(e===null||typeof e!=="object"&&typeof e!=="function"){return{default:e}}var r=_getRequireWildcardCache(t);if(r&&r.has(e)){return r.get(e)}var n={};var s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e){if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;if(a&&(a.get||a.set)){Object.defineProperty(n,i,a)}else{n[i]=e[i]}}}n.default=e;if(r){r.set(e,n)}return n}function asyncGeneratorStep(e,t,r,n,s,i,a){try{var o=e[i](a);var l=o.value}catch(e){r(e);return}if(o.done){t(l)}else{Promise.resolve(l).then(n,s)}}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,n,s,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,s,_next,_throw,"throw",e)}_next(undefined)}))}}var n={exports:{}};const s="2.0.0";const i=256;const a=Number.MAX_SAFE_INTEGER||9007199254740991;const o=16;var l={SEMVER_SPEC_VERSION:s,MAX_LENGTH:i,MAX_SAFE_INTEGER:a,MAX_SAFE_COMPONENT_LENGTH:o};const c=typeof process==="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};var u=c;(function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r}=l;const n=u;t=e.exports={};const s=t.re=[];const i=t.src=[];const a=t.t={};let o=0;const createToken=(e,t,r)=>{const l=o++;n(l,t);a[e]=l;i[l]=t;s[l]=new RegExp(t,r?"g":undefined)};createToken("NUMERICIDENTIFIER","0|[1-9]\\d*");createToken("NUMERICIDENTIFIERLOOSE","[0-9]+");createToken("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*");createToken("MAINVERSION",`(${i[a.NUMERICIDENTIFIER]})\\.`+`(${i[a.NUMERICIDENTIFIER]})\\.`+`(${i[a.NUMERICIDENTIFIER]})`);createToken("MAINVERSIONLOOSE",`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.`+`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.`+`(${i[a.NUMERICIDENTIFIERLOOSE]})`);createToken("PRERELEASEIDENTIFIER",`(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`);createToken("PRERELEASEIDENTIFIERLOOSE",`(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`);createToken("PRERELEASE",`(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`);createToken("PRERELEASELOOSE",`(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`);createToken("BUILDIDENTIFIER","[0-9A-Za-z-]+");createToken("BUILD",`(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`);createToken("FULLPLAIN",`v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`);createToken("FULL",`^${i[a.FULLPLAIN]}$`);createToken("LOOSEPLAIN",`[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`);createToken("LOOSE",`^${i[a.LOOSEPLAIN]}$`);createToken("GTLT","((?:<|>)?=?)");createToken("XRANGEIDENTIFIERLOOSE",`${i[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);createToken("XRANGEIDENTIFIER",`${i[a.NUMERICIDENTIFIER]}|x|X|\\*`);createToken("XRANGEPLAIN",`[v=\\s]*(${i[a.XRANGEIDENTIFIER]})`+`(?:\\.(${i[a.XRANGEIDENTIFIER]})`+`(?:\\.(${i[a.XRANGEIDENTIFIER]})`+`(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?`+`)?)?`);createToken("XRANGEPLAINLOOSE",`[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})`+`(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})`+`(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})`+`(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?`+`)?)?`);createToken("XRANGE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`);createToken("XRANGELOOSE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`);createToken("COERCE",`${"(^|[^\\d])"+"(\\d{1,"}${r}})`+`(?:\\.(\\d{1,${r}}))?`+`(?:\\.(\\d{1,${r}}))?`+`(?:$|[^\\d])`);createToken("COERCERTL",i[a.COERCE],true);createToken("LONETILDE","(?:~>?)");createToken("TILDETRIM",`(\\s*)${i[a.LONETILDE]}\\s+`,true);t.tildeTrimReplace="$1~";createToken("TILDE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`);createToken("TILDELOOSE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`);createToken("LONECARET","(?:\\^)");createToken("CARETTRIM",`(\\s*)${i[a.LONECARET]}\\s+`,true);t.caretTrimReplace="$1^";createToken("CARET",`^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`);createToken("CARETLOOSE",`^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`);createToken("COMPARATORLOOSE",`^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`);createToken("COMPARATOR",`^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`);createToken("COMPARATORTRIM",`(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,true);t.comparatorTrimReplace="$1$2$3";createToken("HYPHENRANGE",`^\\s*(${i[a.XRANGEPLAIN]})`+`\\s+-\\s+`+`(${i[a.XRANGEPLAIN]})`+`\\s*$`);createToken("HYPHENRANGELOOSE",`^\\s*(${i[a.XRANGEPLAINLOOSE]})`+`\\s+-\\s+`+`(${i[a.XRANGEPLAINLOOSE]})`+`\\s*$`);createToken("STAR","(<|>)?=?\\s*\\*");createToken("GTE0","^\\s*>=\\s*0.0.0\\s*$");createToken("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")})(n,n.exports);const p=["includePrerelease","loose","rtl"];const parseOptions$2=e=>!e?{}:typeof e!=="object"?{loose:true}:p.filter((t=>e[t])).reduce(((e,t)=>{e[t]=true;return e}),{});var f=parseOptions$2;const d=/^[0-9]+$/;const compareIdentifiers$1=(e,t)=>{const r=d.test(e);const n=d.test(t);if(r&&n){e=+e;t=+t}return e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1};const rcompareIdentifiers=(e,t)=>compareIdentifiers$1(t,e);var h={compareIdentifiers:compareIdentifiers$1,rcompareIdentifiers:rcompareIdentifiers};const m=u;const{MAX_LENGTH:y,MAX_SAFE_INTEGER:g}=l;const{re:b,t:T}=n.exports;const S=f;const{compareIdentifiers:E}=h;class SemVer$c{constructor(e,t){t=S(t);if(e instanceof SemVer$c){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease){return e}else{e=e.version}}else if(typeof e!=="string"){throw new TypeError(`Invalid Version: ${e}`)}if(e.length>y){throw new TypeError(`version is longer than ${y} characters`)}m("SemVer",e,t);this.options=t;this.loose=!!t.loose;this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?b[T.LOOSE]:b[T.FULL]);if(!r){throw new TypeError(`Invalid Version: ${e}`)}this.raw=e;this.major=+r[1];this.minor=+r[2];this.patch=+r[3];if(this.major>g||this.major<0){throw new TypeError("Invalid major version")}if(this.minor>g||this.minor<0){throw new TypeError("Invalid minor version")}if(this.patch>g||this.patch<0){throw new TypeError("Invalid patch version")}if(!r[4]){this.prerelease=[]}else{this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<g){return t}}return e}))}this.build=r[5]?r[5].split("."):[];this.format()}format(){this.version=`${this.major}.${this.minor}.${this.patch}`;if(this.prerelease.length){this.version+=`-${this.prerelease.join(".")}`}return this.version}toString(){return this.version}compare(e){m("SemVer.compare",this.version,this.options,e);if(!(e instanceof SemVer$c)){if(typeof e==="string"&&e===this.version){return 0}e=new SemVer$c(e,this.options)}if(e.version===this.version){return 0}return this.compareMain(e)||this.comparePre(e)}compareMain(e){if(!(e instanceof SemVer$c)){e=new SemVer$c(e,this.options)}return E(this.major,e.major)||E(this.minor,e.minor)||E(this.patch,e.patch)}comparePre(e){if(!(e instanceof SemVer$c)){e=new SemVer$c(e,this.options)}if(this.prerelease.length&&!e.prerelease.length){return-1}else if(!this.prerelease.length&&e.prerelease.length){return 1}else if(!this.prerelease.length&&!e.prerelease.length){return 0}let t=0;do{const r=this.prerelease[t];const n=e.prerelease[t];m("prerelease compare",t,r,n);if(r===undefined&&n===undefined){return 0}else if(n===undefined){return 1}else if(r===undefined){return-1}else if(r===n){continue}else{return E(r,n)}}while(++t)}compareBuild(e){if(!(e instanceof SemVer$c)){e=new SemVer$c(e,this.options)}let t=0;do{const r=this.build[t];const n=e.build[t];m("prerelease compare",t,r,n);if(r===undefined&&n===undefined){return 0}else if(n===undefined){return 1}else if(r===undefined){return-1}else if(r===n){continue}else{return E(r,n)}}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0;this.patch=0;this.minor=0;this.major++;this.inc("pre",t);break;case"preminor":this.prerelease.length=0;this.patch=0;this.minor++;this.inc("pre",t);break;case"prepatch":this.prerelease.length=0;this.inc("patch",t);this.inc("pre",t);break;case"prerelease":if(this.prerelease.length===0){this.inc("patch",t)}this.inc("pre",t);break;case"major":if(this.minor!==0||this.patch!==0||this.prerelease.length===0){this.major++}this.minor=0;this.patch=0;this.prerelease=[];break;case"minor":if(this.patch!==0||this.prerelease.length===0){this.minor++}this.patch=0;this.prerelease=[];break;case"patch":if(this.prerelease.length===0){this.patch++}this.prerelease=[];break;case"pre":if(this.prerelease.length===0){this.prerelease=[0]}else{let e=this.prerelease.length;while(--e>=0){if(typeof this.prerelease[e]==="number"){this.prerelease[e]++;e=-2}}if(e===-1){this.prerelease.push(0)}}if(t){if(this.prerelease[0]===t){if(isNaN(this.prerelease[1])){this.prerelease=[t,0]}}else{this.prerelease=[t,0]}}break;default:throw new Error(`invalid increment argument: ${e}`)}this.format();this.raw=this.version;return this}}var x=SemVer$c;const{MAX_LENGTH:P}=l;const{re:v,t:A}=n.exports;const w=x;const I=f;const parse$5=(e,t)=>{t=I(t);if(e instanceof w){return e}if(typeof e!=="string"){return null}if(e.length>P){return null}const r=t.loose?v[A.LOOSE]:v[A.FULL];if(!r.test(e)){return null}try{return new w(e,t)}catch(e){return null}};var C=parse$5;const O=C;const valid$1=(e,t)=>{const r=O(e,t);return r?r.version:null};var k=valid$1;const N=C;const clean=(e,t)=>{const r=N(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};var _=clean;const D=x;const inc=(e,t,r,n)=>{if(typeof r==="string"){n=r;r=undefined}try{return new D(e,r).inc(t,n).version}catch(e){return null}};var M=inc;const L=x;const compare$a=(e,t,r)=>new L(e,r).compare(new L(t,r));var j=compare$a;const F=j;const eq$2=(e,t,r)=>F(e,t,r)===0;var R=eq$2;const B=C;const U=R;const diff=(e,t)=>{if(U(e,t)){return null}else{const r=B(e);const n=B(t);const s=r.prerelease.length||n.prerelease.length;const i=s?"pre":"";const a=s?"prerelease":"";for(const e in r){if(e==="major"||e==="minor"||e==="patch"){if(r[e]!==n[e]){return i+e}}}return a}};var K=diff;const $=x;const major=(e,t)=>new $(e,t).major;var V=major;const W=x;const minor=(e,t)=>new W(e,t).minor;var q=minor;const H=x;const patch=(e,t)=>new H(e,t).patch;var G=patch;const X=C;const prerelease=(e,t)=>{const r=X(e,t);return r&&r.prerelease.length?r.prerelease:null};var J=prerelease;const z=j;const rcompare=(e,t,r)=>z(t,e,r);var Y=rcompare;const Q=j;const compareLoose=(e,t)=>Q(e,t,true);var Z=compareLoose;const ee=x;const compareBuild$2=(e,t,r)=>{const n=new ee(e,r);const s=new ee(t,r);return n.compare(s)||n.compareBuild(s)};var te=compareBuild$2;const re=te;const sort=(e,t)=>e.sort(((e,r)=>re(e,r,t)));var ne=sort;const se=te;const rsort=(e,t)=>e.sort(((e,r)=>se(r,e,t)));var ie=rsort;const ae=j;const gt$3=(e,t,r)=>ae(e,t,r)>0;var oe=gt$3;const le=j;const lt$2=(e,t,r)=>le(e,t,r)<0;var ce=lt$2;const ue=j;const neq$1=(e,t,r)=>ue(e,t,r)!==0;var pe=neq$1;const fe=j;const gte$2=(e,t,r)=>fe(e,t,r)>=0;var de=gte$2;const he=j;const lte$2=(e,t,r)=>he(e,t,r)<=0;var me=lte$2;const ye=R;const ge=pe;const be=oe;const Te=de;const Se=ce;const Ee=me;const cmp=(e,t,r,n)=>{switch(t){case"===":if(typeof e==="object")e=e.version;if(typeof r==="object")r=r.version;return e===r;case"!==":if(typeof e==="object")e=e.version;if(typeof r==="object")r=r.version;return e!==r;case"":case"=":case"==":return ye(e,r,n);case"!=":return ge(e,r,n);case">":return be(e,r,n);case">=":return Te(e,r,n);case"<":return Se(e,r,n);case"<=":return Ee(e,r,n);default:throw new TypeError(`Invalid operator: ${t}`)}};var xe=cmp;const Pe=x;const ve=C;const{re:Ae,t:we}=n.exports;const coerce=(e,t)=>{if(e instanceof Pe){return e}if(typeof e==="number"){e=String(e)}if(typeof e!=="string"){return null}t=t||{};let r=null;if(!t.rtl){r=e.match(Ae[we.COERCE])}else{let t;while((t=Ae[we.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length)){if(!r||t.index+t[0].length!==r.index+r[0].length){r=t}Ae[we.COERCERTL].lastIndex=t.index+t[1].length+t[2].length}Ae[we.COERCERTL].lastIndex=-1}if(r===null)return null;return ve(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)};var Ie=coerce;var Ce;var Oe;function requireIterator(){if(Oe)return Ce;Oe=1;Ce=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next){yield e.value}}};return Ce}var ke;var Ne;function requireYallist(){if(Ne)return ke;Ne=1;ke=Yallist;Yallist.Node=Node;Yallist.create=Yallist;function Yallist(e){var t=this;if(!(t instanceof Yallist)){t=new Yallist}t.tail=null;t.head=null;t.length=0;if(e&&typeof e.forEach==="function"){e.forEach((function(e){t.push(e)}))}else if(arguments.length>0){for(var r=0,n=arguments.length;r<n;r++){t.push(arguments[r])}}return t}Yallist.prototype.removeNode=function(e){if(e.list!==this){throw new Error("removing node which does not belong to this list")}var t=e.next;var r=e.prev;if(t){t.prev=r}if(r){r.next=t}if(e===this.head){this.head=t}if(e===this.tail){this.tail=r}e.list.length--;e.next=null;e.prev=null;e.list=null;return t};Yallist.prototype.unshiftNode=function(e){if(e===this.head){return}if(e.list){e.list.removeNode(e)}var t=this.head;e.list=this;e.next=t;if(t){t.prev=e}this.head=e;if(!this.tail){this.tail=e}this.length++};Yallist.prototype.pushNode=function(e){if(e===this.tail){return}if(e.list){e.list.removeNode(e)}var t=this.tail;e.list=this;e.prev=t;if(t){t.next=e}this.tail=e;if(!this.head){this.head=e}this.length++};Yallist.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++){push(this,arguments[e])}return this.length};Yallist.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++){unshift(this,arguments[e])}return this.length};Yallist.prototype.pop=function(){if(!this.tail){return undefined}var e=this.tail.value;this.tail=this.tail.prev;if(this.tail){this.tail.next=null}else{this.head=null}this.length--;return e};Yallist.prototype.shift=function(){if(!this.head){return undefined}var e=this.head.value;this.head=this.head.next;if(this.head){this.head.prev=null}else{this.tail=null}this.length--;return e};Yallist.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,n=0;r!==null;n++){e.call(t,r.value,n,this);r=r.next}};Yallist.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,n=this.length-1;r!==null;n--){e.call(t,r.value,n,this);r=r.prev}};Yallist.prototype.get=function(e){for(var t=0,r=this.head;r!==null&&t<e;t++){r=r.next}if(t===e&&r!==null){return r.value}};Yallist.prototype.getReverse=function(e){for(var t=0,r=this.tail;r!==null&&t<e;t++){r=r.prev}if(t===e&&r!==null){return r.value}};Yallist.prototype.map=function(e,t){t=t||this;var r=new Yallist;for(var n=this.head;n!==null;){r.push(e.call(t,n.value,this));n=n.next}return r};Yallist.prototype.mapReverse=function(e,t){t=t||this;var r=new Yallist;for(var n=this.tail;n!==null;){r.push(e.call(t,n.value,this));n=n.prev}return r};Yallist.prototype.reduce=function(e,t){var r;var n=this.head;if(arguments.length>1){r=t}else if(this.head){n=this.head.next;r=this.head.value}else{throw new TypeError("Reduce of empty list with no initial value")}for(var s=0;n!==null;s++){r=e(r,n.value,s);n=n.next}return r};Yallist.prototype.reduceReverse=function(e,t){var r;var n=this.tail;if(arguments.length>1){r=t}else if(this.tail){n=this.tail.prev;r=this.tail.value}else{throw new TypeError("Reduce of empty list with no initial value")}for(var s=this.length-1;n!==null;s--){r=e(r,n.value,s);n=n.prev}return r};Yallist.prototype.toArray=function(){var e=new Array(this.length);for(var t=0,r=this.head;r!==null;t++){e[t]=r.value;r=r.next}return e};Yallist.prototype.toArrayReverse=function(){var e=new Array(this.length);for(var t=0,r=this.tail;r!==null;t++){e[t]=r.value;r=r.prev}return e};Yallist.prototype.slice=function(e,t){t=t||this.length;if(t<0){t+=this.length}e=e||0;if(e<0){e+=this.length}var r=new Yallist;if(t<e||t<0){return r}if(e<0){e=0}if(t>this.length){t=this.length}for(var n=0,s=this.head;s!==null&&n<e;n++){s=s.next}for(;s!==null&&n<t;n++,s=s.next){r.push(s.value)}return r};Yallist.prototype.sliceReverse=function(e,t){t=t||this.length;if(t<0){t+=this.length}e=e||0;if(e<0){e+=this.length}var r=new Yallist;if(t<e||t<0){return r}if(e<0){e=0}if(t>this.length){t=this.length}for(var n=this.length,s=this.tail;s!==null&&n>t;n--){s=s.prev}for(;s!==null&&n>e;n--,s=s.prev){r.push(s.value)}return r};Yallist.prototype.splice=function(e,t,...r){if(e>this.length){e=this.length-1}if(e<0){e=this.length+e}for(var n=0,s=this.head;s!==null&&n<e;n++){s=s.next}var i=[];for(var n=0;s&&n<t;n++){i.push(s.value);s=this.removeNode(s)}if(s===null){s=this.tail}if(s!==this.head&&s!==this.tail){s=s.prev}for(var n=0;n<r.length;n++){s=insert(this,s,r[n])}return i};Yallist.prototype.reverse=function(){var e=this.head;var t=this.tail;for(var r=e;r!==null;r=r.prev){var n=r.prev;r.prev=r.next;r.next=n}this.head=t;this.tail=e;return this};function insert(e,t,r){var n=t===e.head?new Node(r,null,t,e):new Node(r,t,t.next,e);if(n.next===null){e.tail=n}if(n.prev===null){e.head=n}e.length++;return n}function push(e,t){e.tail=new Node(t,e.tail,null,e);if(!e.head){e.head=e.tail}e.length++}function unshift(e,t){e.head=new Node(t,null,e.head,e);if(!e.tail){e.tail=e.head}e.length++}function Node(e,t,r,n){if(!(this instanceof Node)){return new Node(e,t,r,n)}this.list=n;this.value=e;if(t){t.next=this;this.prev=t}else{this.prev=null}if(r){r.prev=this;this.next=r}else{this.next=null}}try{requireIterator()(Yallist)}catch(e){}return ke}var _e;var De;function requireLruCache(){if(De)return _e;De=1;const e=requireYallist();const t=Symbol("max");const r=Symbol("length");const n=Symbol("lengthCalculator");const s=Symbol("allowStale");const i=Symbol("maxAge");const a=Symbol("dispose");const o=Symbol("noDisposeOnSet");const l=Symbol("lruList");const c=Symbol("cache");const u=Symbol("updateAgeOnGet");const naiveLength=()=>1;class LRUCache{constructor(e){if(typeof e==="number")e={max:e};if(!e)e={};if(e.max&&(typeof e.max!=="number"||e.max<0))throw new TypeError("max must be a non-negative number");this[t]=e.max||Infinity;const r=e.length||naiveLength;this[n]=typeof r!=="function"?naiveLength:r;this[s]=e.stale||false;if(e.maxAge&&typeof e.maxAge!=="number")throw new TypeError("maxAge must be a number");this[i]=e.maxAge||0;this[a]=e.dispose;this[o]=e.noDisposeOnSet||false;this[u]=e.updateAgeOnGet||false;this.reset()}set max(e){if(typeof e!=="number"||e<0)throw new TypeError("max must be a non-negative number");this[t]=e||Infinity;trim(this)}get max(){return this[t]}set allowStale(e){this[s]=!!e}get allowStale(){return this[s]}set maxAge(e){if(typeof e!=="number")throw new TypeError("maxAge must be a non-negative number");this[i]=e;trim(this)}get maxAge(){return this[i]}set lengthCalculator(e){if(typeof e!=="function")e=naiveLength;if(e!==this[n]){this[n]=e;this[r]=0;this[l].forEach((e=>{e.length=this[n](e.value,e.key);this[r]+=e.length}))}trim(this)}get lengthCalculator(){return this[n]}get length(){return this[r]}get itemCount(){return this[l].length}rforEach(e,t){t=t||this;for(let r=this[l].tail;r!==null;){const n=r.prev;forEachStep(this,e,r,t);r=n}}forEach(e,t){t=t||this;for(let r=this[l].head;r!==null;){const n=r.next;forEachStep(this,e,r,t);r=n}}keys(){return this[l].toArray().map((e=>e.key))}values(){return this[l].toArray().map((e=>e.value))}reset(){if(this[a]&&this[l]&&this[l].length){this[l].forEach((e=>this[a](e.key,e.value)))}this[c]=new Map;this[l]=new e;this[r]=0}dump(){return this[l].map((e=>isStale(this,e)?false:{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[l]}set(e,s,u){u=u||this[i];if(u&&typeof u!=="number")throw new TypeError("maxAge must be a number");const p=u?Date.now():0;const f=this[n](s,e);if(this[c].has(e)){if(f>this[t]){del(this,this[c].get(e));return false}const n=this[c].get(e);const i=n.value;if(this[a]){if(!this[o])this[a](e,i.value)}i.now=p;i.maxAge=u;i.value=s;this[r]+=f-i.length;i.length=f;this.get(e);trim(this);return true}const d=new Entry(e,s,f,p,u);if(d.length>this[t]){if(this[a])this[a](e,s);return false}this[r]+=d.length;this[l].unshift(d);this[c].set(e,this[l].head);trim(this);return true}has(e){if(!this[c].has(e))return false;const t=this[c].get(e).value;return!isStale(this,t)}get(e){return get(this,e,true)}peek(e){return get(this,e,false)}pop(){const e=this[l].tail;if(!e)return null;del(this,e);return e.value}del(e){del(this,this[c].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const n=e[r];const s=n.e||0;if(s===0)this.set(n.k,n.v);else{const e=s-t;if(e>0){this.set(n.k,n.v,e)}}}}prune(){this[c].forEach(((e,t)=>get(this,t,false)))}}const get=(e,t,r)=>{const n=e[c].get(t);if(n){const t=n.value;if(isStale(e,t)){del(e,n);if(!e[s])return undefined}else{if(r){if(e[u])n.value.now=Date.now();e[l].unshiftNode(n)}}return t.value}};const isStale=(e,t)=>{if(!t||!t.maxAge&&!e[i])return false;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[i]&&r>e[i]};const trim=e=>{if(e[r]>e[t]){for(let n=e[l].tail;e[r]>e[t]&&n!==null;){const t=n.prev;del(e,n);n=t}}};const del=(e,t)=>{if(t){const n=t.value;if(e[a])e[a](n.key,n.value);e[r]-=n.length;e[c].delete(n.key);e[l].removeNode(t)}};class Entry{constructor(e,t,r,n,s){this.key=e;this.value=t;this.length=r;this.now=n;this.maxAge=s||0}}const forEachStep=(e,t,r,n)=>{let i=r.value;if(isStale(e,i)){del(e,r);if(!e[s])i=undefined}if(i)t.call(n,i.value,i.key,e)};_e=LRUCache;return _e}var Me;var Le;function requireRange(){if(Le)return Me;Le=1;class Range{constructor(e,t){t=r(t);if(e instanceof Range){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease){return e}else{return new Range(e.raw,t)}}if(e instanceof s){this.raw=e.value;this.set=[[e]];this.format();return this}this.options=t;this.loose=!!t.loose;this.includePrerelease=!!t.includePrerelease;this.raw=e;this.set=e.split(/\s*\|\|\s*/).map((e=>this.parseRange(e.trim()))).filter((e=>e.length));if(!this.set.length){throw new TypeError(`Invalid SemVer Range: ${e}`)}if(this.set.length>1){const e=this.set[0];this.set=this.set.filter((e=>!isNullSet(e[0])));if(this.set.length===0)this.set=[e];else if(this.set.length>1){for(const e of this.set){if(e.length===1&&isAny(e[0])){this.set=[e];break}}}}this.format()}format(){this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim();return this.range}toString(){return this.range}parseRange(e){e=e.trim();const r=Object.keys(this.options).join(",");const n=`parseRange:${r}:${e}`;const a=t.get(n);if(a)return a;const u=this.options.loose;const f=u?o[l.HYPHENRANGELOOSE]:o[l.HYPHENRANGE];e=e.replace(f,hyphenReplace(this.options.includePrerelease));i("hyphen replace",e);e=e.replace(o[l.COMPARATORTRIM],c);i("comparator trim",e,o[l.COMPARATORTRIM]);e=e.replace(o[l.TILDETRIM],p);e=e.replace(o[l.CARETTRIM],d);e=e.split(/\s+/).join(" ");const h=u?o[l.COMPARATORLOOSE]:o[l.COMPARATOR];const m=e.split(" ").map((e=>parseComparator(e,this.options))).join(" ").split(/\s+/).map((e=>replaceGTE0(e,this.options))).filter(this.options.loose?e=>!!e.match(h):()=>true).map((e=>new s(e,this.options)));m.length;const y=new Map;for(const e of m){if(isNullSet(e))return[e];y.set(e.value,e)}if(y.size>1&&y.has(""))y.delete("");const g=[...y.values()];t.set(n,g);return g}intersects(e,t){if(!(e instanceof Range)){throw new TypeError("a Range is required")}return this.set.some((r=>isSatisfiable(r,t)&&e.set.some((e=>isSatisfiable(e,t)&&r.every((r=>e.every((e=>r.intersects(e,t)))))))))}test(e){if(!e){return false}if(typeof e==="string"){try{e=new a(e,this.options)}catch(e){return false}}for(let t=0;t<this.set.length;t++){if(testSet(this.set[t],e,this.options)){return true}}return false}}Me=Range;const e=requireLruCache();const t=new e({max:1e3});const r=f;const s=requireComparator();const i=u;const a=x;const{re:o,t:l,comparatorTrimReplace:c,tildeTrimReplace:p,caretTrimReplace:d}=n.exports;const isNullSet=e=>e.value==="<0.0.0-0";const isAny=e=>e.value==="";const isSatisfiable=(e,t)=>{let r=true;const n=e.slice();let s=n.pop();while(r&&n.length){r=n.every((e=>s.intersects(e,t)));s=n.pop()}return r};const parseComparator=(e,t)=>{i("comp",e,t);e=replaceCarets(e,t);i("caret",e);e=replaceTildes(e,t);i("tildes",e);e=replaceXRanges(e,t);i("xrange",e);e=replaceStars(e,t);i("stars",e);return e};const isX=e=>!e||e.toLowerCase()==="x"||e==="*";const replaceTildes=(e,t)=>e.trim().split(/\s+/).map((e=>replaceTilde(e,t))).join(" ");const replaceTilde=(e,t)=>{const r=t.loose?o[l.TILDELOOSE]:o[l.TILDE];return e.replace(r,((t,r,n,s,a)=>{i("tilde",e,t,r,n,s,a);let o;if(isX(r)){o=""}else if(isX(n)){o=`>=${r}.0.0 <${+r+1}.0.0-0`}else if(isX(s)){o=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`}else if(a){i("replaceTilde pr",a);o=`>=${r}.${n}.${s}-${a} <${r}.${+n+1}.0-0`}else{o=`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`}i("tilde return",o);return o}))};const replaceCarets=(e,t)=>e.trim().split(/\s+/).map((e=>replaceCaret(e,t))).join(" ");const replaceCaret=(e,t)=>{i("caret",e,t);const r=t.loose?o[l.CARETLOOSE]:o[l.CARET];const n=t.includePrerelease?"-0":"";return e.replace(r,((t,r,s,a,o)=>{i("caret",e,t,r,s,a,o);let l;if(isX(r)){l=""}else if(isX(s)){l=`>=${r}.0.0${n} <${+r+1}.0.0-0`}else if(isX(a)){if(r==="0"){l=`>=${r}.${s}.0${n} <${r}.${+s+1}.0-0`}else{l=`>=${r}.${s}.0${n} <${+r+1}.0.0-0`}}else if(o){i("replaceCaret pr",o);if(r==="0"){if(s==="0"){l=`>=${r}.${s}.${a}-${o} <${r}.${s}.${+a+1}-0`}else{l=`>=${r}.${s}.${a}-${o} <${r}.${+s+1}.0-0`}}else{l=`>=${r}.${s}.${a}-${o} <${+r+1}.0.0-0`}}else{i("no pr");if(r==="0"){if(s==="0"){l=`>=${r}.${s}.${a}${n} <${r}.${s}.${+a+1}-0`}else{l=`>=${r}.${s}.${a}${n} <${r}.${+s+1}.0-0`}}else{l=`>=${r}.${s}.${a} <${+r+1}.0.0-0`}}i("caret return",l);return l}))};const replaceXRanges=(e,t)=>{i("replaceXRanges",e,t);return e.split(/\s+/).map((e=>replaceXRange(e,t))).join(" ")};const replaceXRange=(e,t)=>{e=e.trim();const r=t.loose?o[l.XRANGELOOSE]:o[l.XRANGE];return e.replace(r,((r,n,s,a,o,l)=>{i("xRange",e,r,n,s,a,o,l);const c=isX(s);const u=c||isX(a);const p=u||isX(o);const f=p;if(n==="="&&f){n=""}l=t.includePrerelease?"-0":"";if(c){if(n===">"||n==="<"){r="<0.0.0-0"}else{r="*"}}else if(n&&f){if(u){a=0}o=0;if(n===">"){n=">=";if(u){s=+s+1;a=0;o=0}else{a=+a+1;o=0}}else if(n==="<="){n="<";if(u){s=+s+1}else{a=+a+1}}if(n==="<")l="-0";r=`${n+s}.${a}.${o}${l}`}else if(u){r=`>=${s}.0.0${l} <${+s+1}.0.0-0`}else if(p){r=`>=${s}.${a}.0${l} <${s}.${+a+1}.0-0`}i("xRange return",r);return r}))};const replaceStars=(e,t)=>{i("replaceStars",e,t);return e.trim().replace(o[l.STAR],"")};const replaceGTE0=(e,t)=>{i("replaceGTE0",e,t);return e.trim().replace(o[t.includePrerelease?l.GTE0PRE:l.GTE0],"")};const hyphenReplace=e=>(t,r,n,s,i,a,o,l,c,u,p,f,d)=>{if(isX(n)){r=""}else if(isX(s)){r=`>=${n}.0.0${e?"-0":""}`}else if(isX(i)){r=`>=${n}.${s}.0${e?"-0":""}`}else if(a){r=`>=${r}`}else{r=`>=${r}${e?"-0":""}`}if(isX(c)){l=""}else if(isX(u)){l=`<${+c+1}.0.0-0`}else if(isX(p)){l=`<${c}.${+u+1}.0-0`}else if(f){l=`<=${c}.${u}.${p}-${f}`}else if(e){l=`<${c}.${u}.${+p+1}-0`}else{l=`<=${l}`}return`${r} ${l}`.trim()};const testSet=(e,t,r)=>{for(let r=0;r<e.length;r++){if(!e[r].test(t)){return false}}if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++){i(e[r].semver);if(e[r].semver===s.ANY){continue}if(e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch){return true}}}return false}return true};return Me}var je;var Fe;function requireComparator(){if(Fe)return je;Fe=1;const e=Symbol("SemVer ANY");class Comparator{static get ANY(){return e}constructor(r,n){n=t(n);if(r instanceof Comparator){if(r.loose===!!n.loose){return r}else{r=r.value}}a("comparator",r,n);this.options=n;this.loose=!!n.loose;this.parse(r);if(this.semver===e){this.value=""}else{this.value=this.operator+this.semver.version}a("comp",this)}parse(t){const n=this.options.loose?r[s.COMPARATORLOOSE]:r[s.COMPARATOR];const i=t.match(n);if(!i){throw new TypeError(`Invalid comparator: ${t}`)}this.operator=i[1]!==undefined?i[1]:"";if(this.operator==="="){this.operator=""}if(!i[2]){this.semver=e}else{this.semver=new o(i[2],this.options.loose)}}toString(){return this.value}test(t){a("Comparator.test",t,this.options.loose);if(this.semver===e||t===e){return true}if(typeof t==="string"){try{t=new o(t,this.options)}catch(e){return false}}return i(t,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof Comparator)){throw new TypeError("a Comparator is required")}if(!t||typeof t!=="object"){t={loose:!!t,includePrerelease:false}}if(this.operator===""){if(this.value===""){return true}return new l(e.value,t).test(this.value)}else if(e.operator===""){if(e.value===""){return true}return new l(this.value,t).test(e.semver)}const r=(this.operator===">="||this.operator===">")&&(e.operator===">="||e.operator===">");const n=(this.operator==="<="||this.operator==="<")&&(e.operator==="<="||e.operator==="<");const s=this.semver.version===e.semver.version;const a=(this.operator===">="||this.operator==="<=")&&(e.operator===">="||e.operator==="<=");const o=i(this.semver,"<",e.semver,t)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<");const c=i(this.semver,">",e.semver,t)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return r||n||s&&a||o||c}}je=Comparator;const t=f;const{re:r,t:s}=n.exports;const i=xe;const a=u;const o=x;const l=requireRange();return je}const Re=requireRange();const satisfies$3=(e,t,r)=>{try{t=new Re(t,r)}catch(e){return false}return t.test(e)};var Be=satisfies$3;const Ue=requireRange();const toComparators=(e,t)=>new Ue(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")));var Ke=toComparators;const $e=x;const Ve=requireRange();const maxSatisfying=(e,t,r)=>{let n=null;let s=null;let i=null;try{i=new Ve(t,r)}catch(e){return null}e.forEach((e=>{if(i.test(e)){if(!n||s.compare(e)===-1){n=e;s=new $e(n,r)}}}));return n};var We=maxSatisfying;const qe=x;const He=requireRange();const minSatisfying=(e,t,r)=>{let n=null;let s=null;let i=null;try{i=new He(t,r)}catch(e){return null}e.forEach((e=>{if(i.test(e)){if(!n||s.compare(e)===1){n=e;s=new qe(n,r)}}}));return n};var Ge=minSatisfying;const Xe=x;const Je=requireRange();const ze=oe;const minVersion=(e,t)=>{e=new Je(e,t);let r=new Xe("0.0.0");if(e.test(r)){return r}r=new Xe("0.0.0-0");if(e.test(r)){return r}r=null;for(let t=0;t<e.set.length;++t){const n=e.set[t];let s=null;n.forEach((e=>{const t=new Xe(e.semver.version);switch(e.operator){case">":if(t.prerelease.length===0){t.patch++}else{t.prerelease.push(0)}t.raw=t.format();case"":case">=":if(!s||ze(t,s)){s=t}break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${e.operator}`)}}));if(s&&(!r||ze(r,s)))r=s}if(r&&e.test(r)){return r}return null};var Ye=minVersion;const Qe=requireRange();const validRange=(e,t)=>{try{return new Qe(e,t).range||"*"}catch(e){return null}};var Ze=validRange;const et=x;const tt=requireComparator();const{ANY:rt}=tt;const nt=requireRange();const st=Be;const it=oe;const at=ce;const ot=me;const lt=de;const outside$2=(e,t,r,n)=>{e=new et(e,n);t=new nt(t,n);let s,i,a,o,l;switch(r){case">":s=it;i=ot;a=at;o=">";l=">=";break;case"<":s=at;i=lt;a=it;o="<";l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(st(e,t,n)){return false}for(let r=0;r<t.set.length;++r){const c=t.set[r];let u=null;let p=null;c.forEach((e=>{if(e.semver===rt){e=new tt(">=0.0.0")}u=u||e;p=p||e;if(s(e.semver,u.semver,n)){u=e}else if(a(e.semver,p.semver,n)){p=e}}));if(u.operator===o||u.operator===l){return false}if((!p.operator||p.operator===o)&&i(e,p.semver)){return false}else if(p.operator===l&&a(e,p.semver)){return false}}return true};var ct=outside$2;const ut=ct;const gtr=(e,t,r)=>ut(e,t,">",r);var pt=gtr;const ft=ct;const ltr=(e,t,r)=>ft(e,t,"<",r);var dt=ltr;const ht=requireRange();const intersects=(e,t,r)=>{e=new ht(e,r);t=new ht(t,r);return e.intersects(t)};var mt=intersects;const yt=Be;const gt=j;var simplify=(e,t,r)=>{const n=[];let s=null;let i=null;const a=e.sort(((e,t)=>gt(e,t,r)));for(const e of a){const a=yt(e,t,r);if(a){i=e;if(!s)s=e}else{if(i){n.push([s,i])}i=null;s=null}}if(s)n.push([s,null]);const o=[];for(const[e,t]of n){if(e===t)o.push(e);else if(!t&&e===a[0])o.push("*");else if(!t)o.push(`>=${e}`);else if(e===a[0])o.push(`<=${t}`);else o.push(`${e} - ${t}`)}const l=o.join(" || ");const c=typeof t.raw==="string"?t.raw:String(t);return l.length<c.length?l:t};const bt=requireRange();const Tt=requireComparator();const{ANY:St}=Tt;const Et=Be;const xt=j;const subset=(e,t,r={})=>{if(e===t)return true;e=new bt(e,r);t=new bt(t,r);let n=false;e:for(const s of e.set){for(const e of t.set){const t=simpleSubset(s,e,r);n=n||t!==null;if(t)continue e}if(n)return false}return true};const simpleSubset=(e,t,r)=>{if(e===t)return true;if(e.length===1&&e[0].semver===St){if(t.length===1&&t[0].semver===St)return true;else if(r.includePrerelease)e=[new Tt(">=0.0.0-0")];else e=[new Tt(">=0.0.0")]}if(t.length===1&&t[0].semver===St){if(r.includePrerelease)return true;else t=[new Tt(">=0.0.0")]}const n=new Set;let s,i;for(const t of e){if(t.operator===">"||t.operator===">=")s=higherGT(s,t,r);else if(t.operator==="<"||t.operator==="<=")i=lowerLT(i,t,r);else n.add(t.semver)}if(n.size>1)return null;let a;if(s&&i){a=xt(s.semver,i.semver,r);if(a>0)return null;else if(a===0&&(s.operator!==">="||i.operator!=="<="))return null}for(const e of n){if(s&&!Et(e,String(s),r))return null;if(i&&!Et(e,String(i),r))return null;for(const n of t){if(!Et(e,String(n),r))return false}return true}let o,l;let c,u;let p=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:false;let f=s&&!r.includePrerelease&&s.semver.prerelease.length?s.semver:false;if(p&&p.prerelease.length===1&&i.operator==="<"&&p.prerelease[0]===0){p=false}for(const e of t){u=u||e.operator===">"||e.operator===">=";c=c||e.operator==="<"||e.operator==="<=";if(s){if(f){if(e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===f.major&&e.semver.minor===f.minor&&e.semver.patch===f.patch){f=false}}if(e.operator===">"||e.operator===">="){o=higherGT(s,e,r);if(o===e&&o!==s)return false}else if(s.operator===">="&&!Et(s.semver,String(e),r))return false}if(i){if(p){if(e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===p.major&&e.semver.minor===p.minor&&e.semver.patch===p.patch){p=false}}if(e.operator==="<"||e.operator==="<="){l=lowerLT(i,e,r);if(l===e&&l!==i)return false}else if(i.operator==="<="&&!Et(i.semver,String(e),r))return false}if(!e.operator&&(i||s)&&a!==0)return false}if(s&&c&&!i&&a!==0)return false;if(i&&u&&!s&&a!==0)return false;if(f||p)return false;return true};const higherGT=(e,t,r)=>{if(!e)return t;const n=xt(e.semver,t.semver,r);return n>0?e:n<0?t:t.operator===">"&&e.operator===">="?t:e};const lowerLT=(e,t,r)=>{if(!e)return t;const n=xt(e.semver,t.semver,r);return n<0?e:n>0?t:t.operator==="<"&&e.operator==="<="?t:e};var Pt=subset;const vt=n.exports;var At={re:vt.re,src:vt.src,tokens:vt.t,SEMVER_SPEC_VERSION:l.SEMVER_SPEC_VERSION,SemVer:x,compareIdentifiers:h.compareIdentifiers,rcompareIdentifiers:h.rcompareIdentifiers,parse:C,valid:k,clean:_,inc:M,diff:K,major:V,minor:q,patch:G,prerelease:J,compare:j,rcompare:Y,compareLoose:Z,compareBuild:te,sort:ne,rsort:ie,gt:oe,lt:ce,eq:R,neq:pe,gte:de,lte:me,cmp:xe,coerce:Ie,Comparator:requireComparator(),Range:requireRange(),satisfies:Be,toComparators:Ke,maxSatisfying:We,minSatisfying:Ge,minVersion:Ye,validRange:Ze,outside:ct,gtr:pt,ltr:dt,intersects:mt,simplifyRange:simplify,subset:Pt};var wt=At;var builtins=function({version:e=process.version,experimental:t=false}={}){var r=["assert","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","vm","zlib"];if(wt.lt(e,"6.0.0"))r.push("freelist");if(wt.gte(e,"1.0.0"))r.push("v8");if(wt.gte(e,"1.1.0"))r.push("process");if(wt.gte(e,"8.0.0"))r.push("inspector");if(wt.gte(e,"8.1.0"))r.push("async_hooks");if(wt.gte(e,"8.4.0"))r.push("http2");if(wt.gte(e,"8.5.0"))r.push("perf_hooks");if(wt.gte(e,"10.0.0"))r.push("trace_events");if(wt.gte(e,"10.5.0")&&(t||wt.gte(e,"12.0.0"))){r.push("worker_threads")}if(wt.gte(e,"12.16.0")&&t){r.push("wasi")}return r};const It={read:read};function read(e){return find(_path().dirname(e))}function find(e){try{const t=_fs().default.readFileSync(_path().toNamespacedPath(_path().join(e,"package.json")),"utf8");return{string:t}}catch(t){if(t.code==="ENOENT"){const t=_path().dirname(e);if(e!==t)return find(t);return{string:undefined}}throw t}}const Ct=process.platform==="win32";const Ot={}.hasOwnProperty;const kt={};const Nt=new Map;const Dt="__node_internal_";let Mt;kt.ERR_INVALID_MODULE_SPECIFIER=createError("ERR_INVALID_MODULE_SPECIFIER",((e,t,r=undefined)=>`Invalid module "${e}" ${t}${r?` imported from ${r}`:""}`),TypeError);kt.ERR_INVALID_PACKAGE_CONFIG=createError("ERR_INVALID_PACKAGE_CONFIG",((e,t,r)=>`Invalid package config ${e}${t?` while importing ${t}`:""}${r?`. ${r}`:""}`),Error);kt.ERR_INVALID_PACKAGE_TARGET=createError("ERR_INVALID_PACKAGE_TARGET",((e,t,r,n=false,s=undefined)=>{const i=typeof r==="string"&&!n&&r.length>0&&!r.startsWith("./");if(t==="."){_assert()(n===false);return`Invalid "exports" main target ${JSON.stringify(r)} defined `+`in the package config ${e}package.json${s?` imported from ${s}`:""}${i?'; targets must start with "./"':""}`}return`Invalid "${n?"imports":"exports"}" target ${JSON.stringify(r)} defined for '${t}' in the package config ${e}package.json${s?` imported from ${s}`:""}${i?'; targets must start with "./"':""}`}),Error);kt.ERR_MODULE_NOT_FOUND=createError("ERR_MODULE_NOT_FOUND",((e,t,r="package")=>`Cannot find ${r} '${e}' imported from ${t}`),Error);kt.ERR_PACKAGE_IMPORT_NOT_DEFINED=createError("ERR_PACKAGE_IMPORT_NOT_DEFINED",((e,t,r)=>`Package import specifier "${e}" is not defined${t?` in package ${t}package.json`:""} imported from ${r}`),TypeError);kt.ERR_PACKAGE_PATH_NOT_EXPORTED=createError("ERR_PACKAGE_PATH_NOT_EXPORTED",((e,t,r=undefined)=>{if(t===".")return`No "exports" main defined in ${e}package.json${r?` imported from ${r}`:""}`;return`Package subpath '${t}' is not defined by "exports" in ${e}package.json${r?` imported from ${r}`:""}`}),Error);kt.ERR_UNSUPPORTED_DIR_IMPORT=createError("ERR_UNSUPPORTED_DIR_IMPORT","Directory import '%s' is not supported "+"resolving ES modules imported from %s",Error);kt.ERR_UNKNOWN_FILE_EXTENSION=createError("ERR_UNKNOWN_FILE_EXTENSION",'Unknown file extension "%s" for %s',TypeError);kt.ERR_INVALID_ARG_VALUE=createError("ERR_INVALID_ARG_VALUE",((e,t,r="is invalid")=>{let n=(0,_util().inspect)(t);if(n.length>128){n=`${n.slice(0,128)}...`}const s=e.includes(".")?"property":"argument";return`The ${s} '${e}' ${r}. Received ${n}`}),TypeError);kt.ERR_UNSUPPORTED_ESM_URL_SCHEME=createError("ERR_UNSUPPORTED_ESM_URL_SCHEME",(e=>{let t="Only file and data URLs are supported by the default ESM loader";if(Ct&&e.protocol.length===2){t+=". On Windows, absolute paths must be valid file:// URLs"}t+=`. Received protocol '${e.protocol}'`;return t}),Error);function createError(e,t,r){Nt.set(e,t);return makeNodeErrorWithCode(r,e)}function makeNodeErrorWithCode(e,t){return NodeError;function NodeError(...r){const n=Error.stackTraceLimit;if(isErrorStackTraceLimitWritable())Error.stackTraceLimit=0;const s=new e;if(isErrorStackTraceLimitWritable())Error.stackTraceLimit=n;const i=getMessage(t,r,s);Object.defineProperty(s,"message",{value:i,enumerable:false,writable:true,configurable:true});Object.defineProperty(s,"toString",{value(){return`${this.name} [${t}]: ${this.message}`},enumerable:false,writable:true,configurable:true});Lt(s,e.name,t);s.code=t;return s}}const Lt=hideStackFrames((function(e,t,r){e=jt(e);e.name=`${t} [${r}]`;e.stack;if(t==="SystemError"){Object.defineProperty(e,"name",{value:t,enumerable:false,writable:true,configurable:true})}else{delete e.name}}));function isErrorStackTraceLimitWritable(){const e=Object.getOwnPropertyDescriptor(Error,"stackTraceLimit");if(e===undefined){return Object.isExtensible(Error)}return Ot.call(e,"writable")?e.writable:e.set!==undefined}function hideStackFrames(e){const t=Dt+e.name;Object.defineProperty(e,"name",{value:t});return e}const jt=hideStackFrames((function(e){const t=isErrorStackTraceLimitWritable();if(t){Mt=Error.stackTraceLimit;Error.stackTraceLimit=Number.POSITIVE_INFINITY}Error.captureStackTrace(e);if(t)Error.stackTraceLimit=Mt;return e}));function getMessage(e,t,r){const n=Nt.get(e);if(typeof n==="function"){_assert()(n.length<=t.length,`Code: ${e}; The provided arguments length (${t.length}) does not `+`match the required ones (${n.length}).`);return Reflect.apply(n,r,t)}const s=(n.match(/%[dfijoOs]/g)||[]).length;_assert()(s===t.length,`Code: ${e}; The provided arguments length (${t.length}) does not `+`match the required ones (${s}).`);if(t.length===0)return n;t.unshift(n);return Reflect.apply(_util().format,null,t)}const{ERR_UNKNOWN_FILE_EXTENSION:Ft}=kt;const Rt={__proto__:null,".cjs":"commonjs",".js":"module",".mjs":"module"};function defaultGetFormat(e){if(e.startsWith("node:")){return{format:"builtin"}}const t=new(_url().URL)(e);if(t.protocol==="data:"){const{1:e}=/^([^/]+\/[^;,]+)[^,]*?(;base64)?,/.exec(t.pathname)||[null,null];const r=e==="text/javascript"?"module":null;return{format:r}}if(t.protocol==="file:"){const r=_path().extname(t.pathname);let n;if(r===".js"){n=getPackageType(t.href)==="module"?"module":"commonjs"}else{n=Rt[r]}if(!n){throw new Ft(r,(0,_url().fileURLToPath)(e))}return{format:n||null}}return{format:null}}const Bt=builtins();const{ERR_INVALID_MODULE_SPECIFIER:Ut,ERR_INVALID_PACKAGE_CONFIG:Kt,ERR_INVALID_PACKAGE_TARGET:$t,ERR_MODULE_NOT_FOUND:Vt,ERR_PACKAGE_IMPORT_NOT_DEFINED:Wt,ERR_PACKAGE_PATH_NOT_EXPORTED:qt,ERR_UNSUPPORTED_DIR_IMPORT:Ht,ERR_UNSUPPORTED_ESM_URL_SCHEME:Gt,ERR_INVALID_ARG_VALUE:Xt}=kt;const Jt={}.hasOwnProperty;const zt=Object.freeze(["node","import"]);const Yt=new Set(zt);const Qt=/(^|\\|\/)(\.\.?|node_modules)(\\|\/|$)/;const Zt=/\*/g;const er=/%2f|%2c/i;const tr=new Set;const rr=new Map;function emitFolderMapDeprecation(e,t,r,n){const s=(0,_url().fileURLToPath)(t);if(tr.has(s+"|"+e))return;tr.add(s+"|"+e);process.emitWarning(`Use of deprecated folder mapping "${e}" in the ${r?'"exports"':'"imports"'} field module resolution of the package at ${s}${n?` imported from ${(0,_url().fileURLToPath)(n)}`:""}.\n`+`Update this package.json to use a subpath pattern like "${e}*".`,"DeprecationWarning","DEP0148")}function emitLegacyIndexDeprecation(e,t,r,n){const{format:s}=defaultGetFormat(e.href);if(s!=="module")return;const i=(0,_url().fileURLToPath)(e.href);const a=(0,_url().fileURLToPath)(new(_url().URL)(".",t));const o=(0,_url().fileURLToPath)(r);if(n)process.emitWarning(`Package ${a} has a "main" field set to ${JSON.stringify(n)}, `+`excluding the full filename and extension to the resolved file at "${i.slice(a.length)}", imported from ${o}.\n Automatic extension resolution of the "main" field is`+"deprecated for ES modules.","DeprecationWarning","DEP0151");else process.emitWarning(`No "main" or "exports" field defined in the package.json for ${a} resolving the main entry point "${i.slice(a.length)}", imported from ${o}.\nDefault "index" lookups for the main are deprecated for ES modules.`,"DeprecationWarning","DEP0151")}function getConditionsSet(e){if(e!==undefined&&e!==zt){if(!Array.isArray(e)){throw new Xt("conditions",e,"expected an array")}return new Set(e)}return Yt}function tryStatSync(e){try{return(0,_fs().statSync)(e)}catch(e){return new(_fs().Stats)}}function getPackageConfig(e,t,r){const n=rr.get(e);if(n!==undefined){return n}const s=It.read(e).string;if(s===undefined){const t={pjsonPath:e,exists:false,main:undefined,name:undefined,type:"none",exports:undefined,imports:undefined};rr.set(e,t);return t}let i;try{i=JSON.parse(s)}catch(n){throw new Kt(e,(r?`"${t}" from `:"")+(0,_url().fileURLToPath)(r||t),n.message)}const{exports:a,imports:o,main:l,name:c,type:u}=i;const p={pjsonPath:e,exists:true,main:typeof l==="string"?l:undefined,name:typeof c==="string"?c:undefined,type:u==="module"||u==="commonjs"?u:"none",exports:a,imports:o&&typeof o==="object"?o:undefined};rr.set(e,p);return p}function getPackageScopeConfig(e){let t=new(_url().URL)("./package.json",e);while(true){const r=t.pathname;if(r.endsWith("node_modules/package.json"))break;const n=getPackageConfig((0,_url().fileURLToPath)(t),e);if(n.exists)return n;const s=t;t=new(_url().URL)("../package.json",t);if(t.pathname===s.pathname)break}const r=(0,_url().fileURLToPath)(t);const n={pjsonPath:r,exists:false,main:undefined,name:undefined,type:"none",exports:undefined,imports:undefined};rr.set(r,n);return n}function fileExists(e){return tryStatSync((0,_url().fileURLToPath)(e)).isFile()}function legacyMainResolve(e,t,r){let n;if(t.main!==undefined){n=new(_url().URL)(`./${t.main}`,e);if(fileExists(n))return n;const s=[`./${t.main}.js`,`./${t.main}.json`,`./${t.main}.node`,`./${t.main}/index.js`,`./${t.main}/index.json`,`./${t.main}/index.node`];let i=-1;while(++i<s.length){n=new(_url().URL)(s[i],e);if(fileExists(n))break;n=undefined}if(n){emitLegacyIndexDeprecation(n,e,r,t.main);return n}}const s=["./index.js","./index.json","./index.node"];let i=-1;while(++i<s.length){n=new(_url().URL)(s[i],e);if(fileExists(n))break;n=undefined}if(n){emitLegacyIndexDeprecation(n,e,r,t.main);return n}throw new Vt((0,_url().fileURLToPath)(new(_url().URL)(".",e)),(0,_url().fileURLToPath)(r))}function finalizeResolution(e,t){if(er.test(e.pathname))throw new Ut(e.pathname,'must not include encoded "/" or "\\" characters',(0,_url().fileURLToPath)(t));const r=(0,_url().fileURLToPath)(e);const n=tryStatSync(r.endsWith("/")?r.slice(-1):r);if(n.isDirectory()){const n=new Ht(r,(0,_url().fileURLToPath)(t));n.url=String(e);throw n}if(!n.isFile()){throw new Vt(r||e.pathname,t&&(0,_url().fileURLToPath)(t),"module")}return e}function throwImportNotDefined(e,t,r){throw new Wt(e,t&&(0,_url().fileURLToPath)(new(_url().URL)(".",t)),(0,_url().fileURLToPath)(r))}function throwExportsNotFound(e,t,r){throw new qt((0,_url().fileURLToPath)(new(_url().URL)(".",t)),e,r&&(0,_url().fileURLToPath)(r))}function throwInvalidSubpath(e,t,r,n){const s=`request is not a valid subpath for the "${r?"imports":"exports"}" resolution of ${(0,_url().fileURLToPath)(t)}`;throw new Ut(e,s,n&&(0,_url().fileURLToPath)(n))}function throwInvalidPackageTarget(e,t,r,n,s){t=typeof t==="object"&&t!==null?JSON.stringify(t,null,""):`${t}`;throw new $t((0,_url().fileURLToPath)(new(_url().URL)(".",r)),e,t,n,s&&(0,_url().fileURLToPath)(s))}function resolvePackageTargetString(e,t,r,n,s,i,a,o){if(t!==""&&!i&&e[e.length-1]!=="/")throwInvalidPackageTarget(r,e,n,a,s);if(!e.startsWith("./")){if(a&&!e.startsWith("../")&&!e.startsWith("/")){let r=false;try{new(_url().URL)(e);r=true}catch(e){}if(!r){const r=i?e.replace(Zt,t):e+t;return packageResolve(r,n,o)}}throwInvalidPackageTarget(r,e,n,a,s)}if(Qt.test(e.slice(2)))throwInvalidPackageTarget(r,e,n,a,s);const l=new(_url().URL)(e,n);const c=l.pathname;const u=new(_url().URL)(".",n).pathname;if(!c.startsWith(u))throwInvalidPackageTarget(r,e,n,a,s);if(t==="")return l;if(Qt.test(t))throwInvalidSubpath(r+t,n,a,s);if(i)return new(_url().URL)(l.href.replace(Zt,t));return new(_url().URL)(t,l)}function isArrayIndex(e){const t=Number(e);if(`${t}`!==e)return false;return t>=0&&t<4294967295}function resolvePackageTarget(e,t,r,n,s,i,a,o){if(typeof t==="string"){return resolvePackageTargetString(t,r,n,e,s,i,a,o)}if(Array.isArray(t)){const l=t;if(l.length===0)return null;let c;let u=-1;while(++u<l.length){const t=l[u];let p;try{p=resolvePackageTarget(e,t,r,n,s,i,a,o)}catch(e){c=e;if(e.code==="ERR_INVALID_PACKAGE_TARGET")continue;throw e}if(p===undefined)continue;if(p===null){c=null;continue}return p}if(c===undefined||c===null){return c}throw c}if(typeof t==="object"&&t!==null){const l=Object.getOwnPropertyNames(t);let c=-1;while(++c<l.length){const t=l[c];if(isArrayIndex(t)){throw new Kt((0,_url().fileURLToPath)(e),s,'"exports" cannot contain numeric property keys.')}}c=-1;while(++c<l.length){const u=l[c];if(u==="default"||o&&o.has(u)){const l=t[u];const c=resolvePackageTarget(e,l,r,n,s,i,a,o);if(c===undefined)continue;return c}}return undefined}if(t===null){return null}throwInvalidPackageTarget(n,t,e,a,s)}function isConditionalExportsMainSugar(e,t,r){if(typeof e==="string"||Array.isArray(e))return true;if(typeof e!=="object"||e===null)return false;const n=Object.getOwnPropertyNames(e);let s=false;let i=0;let a=-1;while(++a<n.length){const e=n[a];const o=e===""||e[0]!==".";if(i++===0){s=o}else if(s!==o){throw new Kt((0,_url().fileURLToPath)(t),r,"\"exports\" cannot contain some keys starting with '.' and some not."+" The exports object must either be an object of package subpath keys"+" or an object of main entry condition name keys only.")}}return s}function packageExportsResolve(e,t,r,n,s){let i=r.exports;if(isConditionalExportsMainSugar(i,e,n))i={".":i};if(Jt.call(i,t)){const r=i[t];const a=resolvePackageTarget(e,r,"",t,n,false,false,s);if(a===null||a===undefined)throwExportsNotFound(t,e,n);return{resolved:a,exact:true}}let a="";const o=Object.getOwnPropertyNames(i);let l=-1;while(++l<o.length){const e=o[l];if(e[e.length-1]==="*"&&t.startsWith(e.slice(0,-1))&&t.length>=e.length&&e.length>a.length){a=e}else if(e[e.length-1]==="/"&&t.startsWith(e)&&e.length>a.length){a=e}}if(a){const r=i[a];const o=a[a.length-1]==="*";const l=t.slice(a.length-(o?1:0));const c=resolvePackageTarget(e,r,l,a,n,o,false,s);if(c===null||c===undefined)throwExportsNotFound(t,e,n);if(!o)emitFolderMapDeprecation(a,e,true,n);return{resolved:c,exact:o}}throwExportsNotFound(t,e,n)}function packageImportsResolve(e,t,r){if(e==="#"||e.startsWith("#/")){const r="is not a valid internal imports specifier name";throw new Ut(e,r,(0,_url().fileURLToPath)(t))}let n;const s=getPackageScopeConfig(t);if(s.exists){n=(0,_url().pathToFileURL)(s.pjsonPath);const i=s.imports;if(i){if(Jt.call(i,e)){const s=resolvePackageTarget(n,i[e],"",e,t,false,true,r);if(s!==null)return{resolved:s,exact:true}}else{let s="";const a=Object.getOwnPropertyNames(i);let o=-1;while(++o<a.length){const t=a[o];if(t[t.length-1]==="*"&&e.startsWith(t.slice(0,-1))&&e.length>=t.length&&t.length>s.length){s=t}else if(t[t.length-1]==="/"&&e.startsWith(t)&&t.length>s.length){s=t}}if(s){const a=i[s];const o=s[s.length-1]==="*";const l=e.slice(s.length-(o?1:0));const c=resolvePackageTarget(n,a,l,s,t,o,true,r);if(c!==null){if(!o)emitFolderMapDeprecation(s,n,false,t);return{resolved:c,exact:o}}}}}}throwImportNotDefined(e,n,t)}function getPackageType(e){const t=getPackageScopeConfig(e);return t.type}function parsePackageName(e,t){let r=e.indexOf("/");let n=true;let s=false;if(e[0]==="@"){s=true;if(r===-1||e.length===0){n=false}else{r=e.indexOf("/",r+1)}}const i=r===-1?e:e.slice(0,r);let a=-1;while(++a<i.length){if(i[a]==="%"||i[a]==="\\"){n=false;break}}if(!n){throw new Ut(e,"is not a valid package name",(0,_url().fileURLToPath)(t))}const o="."+(r===-1?"":e.slice(r));return{packageName:i,packageSubpath:o,isScoped:s}}function packageResolve(e,t,r){const{packageName:n,packageSubpath:s,isScoped:i}=parsePackageName(e,t);const a=getPackageScopeConfig(t);if(a.exists){const e=(0,_url().pathToFileURL)(a.pjsonPath);if(a.name===n&&a.exports!==undefined&&a.exports!==null){return packageExportsResolve(e,s,a,t,r).resolved}}let o=new(_url().URL)("./node_modules/"+n+"/package.json",t);let l=(0,_url().fileURLToPath)(o);let c;do{const a=tryStatSync(l.slice(0,-13));if(!a.isDirectory()){c=l;o=new(_url().URL)((i?"../../../../node_modules/":"../../../node_modules/")+n+"/package.json",o);l=(0,_url().fileURLToPath)(o);continue}const u=getPackageConfig(l,e,t);if(u.exports!==undefined&&u.exports!==null)return packageExportsResolve(o,s,u,t,r).resolved;if(s===".")return legacyMainResolve(o,u,t);return new(_url().URL)(s,o)}while(l.length!==c.length);throw new Vt(n,(0,_url().fileURLToPath)(t))}function isRelativeSpecifier(e){if(e[0]==="."){if(e.length===1||e[1]==="/")return true;if(e[1]==="."&&(e.length===2||e[2]==="/")){return true}}return false}function shouldBeTreatedAsRelativeOrAbsolutePath(e){if(e==="")return false;if(e[0]==="/")return true;return isRelativeSpecifier(e)}function moduleResolve(e,t,r){let n;if(shouldBeTreatedAsRelativeOrAbsolutePath(e)){n=new(_url().URL)(e,t)}else if(e[0]==="#"){({resolved:n}=packageImportsResolve(e,t,r))}else{try{n=new(_url().URL)(e)}catch(s){n=packageResolve(e,t,r)}}return finalizeResolution(n,t)}function defaultResolve(e,t={}){const{parentURL:r}=t;let n;try{n=new(_url().URL)(e);if(n.protocol==="data:"){return{url:e}}}catch(e){}if(n&&n.protocol==="node:")return{url:e};if(n&&n.protocol!=="file:"&&n.protocol!=="data:")throw new Gt(n);if(Bt.includes(e)){return{url:"node:"+e}}if(r.startsWith("data:")){new(_url().URL)(e,r)}const s=getConditionsSet(t.conditions);let i=moduleResolve(e,new(_url().URL)(r),s);const a=(0,_url().fileURLToPath)(i);const o=(0,_fs().realpathSync)(a);const l=i;i=(0,_url().pathToFileURL)(o+(a.endsWith(_path().sep)?"/":""));i.search=l.search;i.hash=l.hash;return{url:`${i}`}}function resolve(e,t){return _resolve.apply(this,arguments)}function _resolve(){_resolve=_asyncToGenerator((function*(e,t){if(!t){throw new Error("Please pass `parent`: `import-meta-resolve` cannot ponyfill that")}try{return defaultResolve(e,{parentURL:t}).url}catch(e){return e.code==="ERR_UNSUPPORTED_DIR_IMPORT"?e.url:Promise.reject(e)}}));return _resolve.apply(this,arguments)}},4623:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;function SourcePos(){return{identifierName:undefined,line:undefined,column:undefined,filename:undefined}}const r=/^[ \t]+$/;class Buffer{constructor(e){this._map=null;this._buf="";this._last=0;this._queue=[];this._position={line:1,column:0};this._sourcePosition=SourcePos();this._disallowedPop=null;this._map=e}get(){this._flush();const e=this._map;const t={code:this._buf.trimRight(),decodedMap:e==null?void 0:e.getDecoded(),get map(){return t.map=e?e.get():null},set map(e){Object.defineProperty(t,"map",{value:e,writable:true})},get rawMappings(){return t.rawMappings=e==null?void 0:e.getRawMappings()},set rawMappings(e){Object.defineProperty(t,"rawMappings",{value:e,writable:true})}};return t}append(e){this._flush();const{line:t,column:r,filename:n,identifierName:s}=this._sourcePosition;this._append(e,t,r,s,n)}queue(e){if(e==="\n"){while(this._queue.length>0&&r.test(this._queue[0][0])){this._queue.shift()}}const{line:t,column:n,filename:s,identifierName:i}=this._sourcePosition;this._queue.unshift([e,t,n,i,s])}queueIndentation(e){this._queue.unshift([e,undefined,undefined,undefined,undefined])}_flush(){let e;while(e=this._queue.pop()){this._append(...e)}}_append(e,t,r,n,s){this._buf+=e;this._last=e.charCodeAt(e.length-1);let i=e.indexOf("\n");let a=0;if(i!==0){this._mark(t,r,n,s)}while(i!==-1){this._position.line++;this._position.column=0;a=i+1;if(a<e.length){this._mark(++t,0,n,s)}i=e.indexOf("\n",a)}this._position.column+=e.length-a}_mark(e,t,r,n){var s;(s=this._map)==null?void 0:s.mark(this._position,e,t,r,n)}removeTrailingNewline(){if(this._queue.length>0&&this._queue[0][0]==="\n"){this._queue.shift()}}removeLastSemicolon(){if(this._queue.length>0&&this._queue[0][0]===";"){this._queue.shift()}}getLastChar(){let e;if(this._queue.length>0){const t=this._queue[0][0];e=t.charCodeAt(0)}else{e=this._last}return e}endsWithCharAndNewline(){const e=this._queue;if(e.length>0){const t=e[0][0];const r=t.charCodeAt(0);if(r!==10)return;if(e.length>1){const t=e[1][0];return t.charCodeAt(0)}else{return this._last}}}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e);t();this.source("end",e);this._disallowPop("start",e)}source(e,t){if(e&&!t)return;this._normalizePosition(e,t,this._sourcePosition)}withSource(e,t,r){if(!this._map)return r();const n=this._sourcePosition.line;const s=this._sourcePosition.column;const i=this._sourcePosition.filename;const a=this._sourcePosition.identifierName;this.source(e,t);r();if(!this._disallowedPop||this._disallowedPop.line!==n||this._disallowedPop.column!==s||this._disallowedPop.filename!==i){this._sourcePosition.line=n;this._sourcePosition.column=s;this._sourcePosition.filename=i;this._sourcePosition.identifierName=a;this._disallowedPop=null}}_disallowPop(e,t){if(e&&!t)return;this._disallowedPop=this._normalizePosition(e,t,SourcePos())}_normalizePosition(e,t,r){const n=t?t[e]:null;r.identifierName=e==="start"&&(t==null?void 0:t.identifierName)||undefined;r.line=n==null?void 0:n.line;r.column=n==null?void 0:n.column;r.filename=t==null?void 0:t.filename;return r}getCurrentColumn(){const e=this._queue.reduce(((e,t)=>t[0]+e),"");const t=e.lastIndexOf("\n");return t===-1?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce(((e,t)=>t[0]+e),"");let t=0;for(let r=0;r<e.length;r++){if(e[r]==="\n")t++}return this._position.line+t}}t["default"]=Buffer},2897:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.BlockStatement=BlockStatement;t.Directive=Directive;t.DirectiveLiteral=DirectiveLiteral;t.File=File;t.InterpreterDirective=InterpreterDirective;t.Placeholder=Placeholder;t.Program=Program;function File(e){if(e.program){this.print(e.program.interpreter,e)}this.print(e.program,e)}function Program(e){this.printInnerComments(e,false);this.printSequence(e.directives,e);if(e.directives&&e.directives.length)this.newline();this.printSequence(e.body,e)}function BlockStatement(e){var t;this.token("{");this.printInnerComments(e);const r=(t=e.directives)==null?void 0:t.length;if(e.body.length||r){this.newline();this.printSequence(e.directives,e,{indent:true});if(r)this.newline();this.printSequence(e.body,e,{indent:true});this.removeTrailingNewline();this.source("end",e.loc);if(!this.endsWith(10))this.newline();this.rightBrace()}else{this.source("end",e.loc);this.token("}")}}function Directive(e){this.print(e.value,e);this.semicolon()}const r=/(?:^|[^\\])(?:\\\\)*'/;const n=/(?:^|[^\\])(?:\\\\)*"/;function DirectiveLiteral(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&t!=null){this.token(t);return}const{value:s}=e;if(!n.test(s)){this.token(`"${s}"`)}else if(!r.test(s)){this.token(`'${s}'`)}else{throw new Error("Malformed AST: it is not possible to print a directive containing"+" both unescaped single and double quotes.")}}function InterpreterDirective(e){this.token(`#!${e.value}\n`)}function Placeholder(e){this.token("%%");this.print(e.name);this.token("%%");if(e.expectedNode==="Statement"){this.semicolon()}}},3988:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.ClassAccessorProperty=ClassAccessorProperty;t.ClassBody=ClassBody;t.ClassExpression=t.ClassDeclaration=ClassDeclaration;t.ClassMethod=ClassMethod;t.ClassPrivateMethod=ClassPrivateMethod;t.ClassPrivateProperty=ClassPrivateProperty;t.ClassProperty=ClassProperty;t.StaticBlock=StaticBlock;t._classMethodHead=_classMethodHead;var n=r(6953);const{isExportDefaultDeclaration:s,isExportNamedDeclaration:i}=n;function ClassDeclaration(e,t){if(!this.format.decoratorsBeforeExport||!s(t)&&!i(t)){this.printJoin(e.decorators,e)}if(e.declare){this.word("declare");this.space()}if(e.abstract){this.word("abstract");this.space()}this.word("class");this.printInnerComments(e);if(e.id){this.space();this.print(e.id,e)}this.print(e.typeParameters,e);if(e.superClass){this.space();this.word("extends");this.space();this.print(e.superClass,e);this.print(e.superTypeParameters,e)}if(e.implements){this.space();this.word("implements");this.space();this.printList(e.implements,e)}this.space();this.print(e.body,e)}function ClassBody(e){this.token("{");this.printInnerComments(e);if(e.body.length===0){this.token("}")}else{this.newline();this.indent();this.printSequence(e.body,e);this.dedent();if(!this.endsWith(10))this.newline();this.rightBrace()}}function ClassProperty(e){this.printJoin(e.decorators,e);this.source("end",e.key.loc);this.tsPrintClassMemberModifiers(e,true);if(e.computed){this.token("[");this.print(e.key,e);this.token("]")}else{this._variance(e);this.print(e.key,e)}if(e.optional){this.token("?")}if(e.definite){this.token("!")}this.print(e.typeAnnotation,e);if(e.value){this.space();this.token("=");this.space();this.print(e.value,e)}this.semicolon()}function ClassAccessorProperty(e){this.printJoin(e.decorators,e);this.source("end",e.key.loc);this.tsPrintClassMemberModifiers(e,true);this.word("accessor");this.printInnerComments(e);this.space();if(e.computed){this.token("[");this.print(e.key,e);this.token("]")}else{this._variance(e);this.print(e.key,e)}if(e.optional){this.token("?")}if(e.definite){this.token("!")}this.print(e.typeAnnotation,e);if(e.value){this.space();this.token("=");this.space();this.print(e.value,e)}this.semicolon()}function ClassPrivateProperty(e){this.printJoin(e.decorators,e);if(e.static){this.word("static");this.space()}this.print(e.key,e);this.print(e.typeAnnotation,e);if(e.value){this.space();this.token("=");this.space();this.print(e.value,e)}this.semicolon()}function ClassMethod(e){this._classMethodHead(e);this.space();this.print(e.body,e)}function ClassPrivateMethod(e){this._classMethodHead(e);this.space();this.print(e.body,e)}function _classMethodHead(e){this.printJoin(e.decorators,e);this.source("end",e.key.loc);this.tsPrintClassMemberModifiers(e,false);this._methodHead(e)}function StaticBlock(e){this.word("static");this.space();this.token("{");if(e.body.length===0){this.token("}")}else{this.newline();this.printSequence(e.body,e,{indent:true});this.rightBrace()}}},764:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=AssignmentExpression;t.AssignmentPattern=AssignmentPattern;t.AwaitExpression=void 0;t.BindExpression=BindExpression;t.CallExpression=CallExpression;t.ConditionalExpression=ConditionalExpression;t.Decorator=Decorator;t.DoExpression=DoExpression;t.EmptyStatement=EmptyStatement;t.ExpressionStatement=ExpressionStatement;t.Import=Import;t.MemberExpression=MemberExpression;t.MetaProperty=MetaProperty;t.ModuleExpression=ModuleExpression;t.NewExpression=NewExpression;t.OptionalCallExpression=OptionalCallExpression;t.OptionalMemberExpression=OptionalMemberExpression;t.ParenthesizedExpression=ParenthesizedExpression;t.PrivateName=PrivateName;t.SequenceExpression=SequenceExpression;t.Super=Super;t.ThisExpression=ThisExpression;t.UnaryExpression=UnaryExpression;t.UpdateExpression=UpdateExpression;t.V8IntrinsicIdentifier=V8IntrinsicIdentifier;t.YieldExpression=void 0;var n=r(6953);var s=r(4815);const{isCallExpression:i,isLiteral:a,isMemberExpression:o,isNewExpression:l}=n;function UnaryExpression(e){if(e.operator==="void"||e.operator==="delete"||e.operator==="typeof"||e.operator==="throw"){this.word(e.operator);this.space()}else{this.token(e.operator)}this.print(e.argument,e)}function DoExpression(e){if(e.async){this.word("async");this.space()}this.word("do");this.space();this.print(e.body,e)}function ParenthesizedExpression(e){this.token("(");this.print(e.expression,e);this.token(")")}function UpdateExpression(e){if(e.prefix){this.token(e.operator);this.print(e.argument,e)}else{this.startTerminatorless(true);this.print(e.argument,e);this.endTerminatorless();this.token(e.operator)}}function ConditionalExpression(e){this.print(e.test,e);this.space();this.token("?");this.space();this.print(e.consequent,e);this.space();this.token(":");this.space();this.print(e.alternate,e)}function NewExpression(e,t){this.word("new");this.space();this.print(e.callee,e);if(this.format.minified&&e.arguments.length===0&&!e.optional&&!i(t,{callee:e})&&!o(t)&&!l(t)){return}this.print(e.typeArguments,e);this.print(e.typeParameters,e);if(e.optional){this.token("?.")}this.token("(");this.printList(e.arguments,e);this.token(")")}function SequenceExpression(e){this.printList(e.expressions,e)}function ThisExpression(){this.word("this")}function Super(){this.word("super")}function isDecoratorMemberExpression(e){switch(e.type){case"Identifier":return true;case"MemberExpression":return!e.computed&&e.property.type==="Identifier"&&isDecoratorMemberExpression(e.object);default:return false}}function shouldParenthesizeDecoratorExpression(e){if(e.type==="CallExpression"){e=e.callee}if(e.type==="ParenthesizedExpression"){return false}return!isDecoratorMemberExpression(e)}function Decorator(e){this.token("@");const{expression:t}=e;if(shouldParenthesizeDecoratorExpression(t)){this.token("(");this.print(t,e);this.token(")")}else{this.print(t,e)}this.newline()}function OptionalMemberExpression(e){this.print(e.object,e);if(!e.computed&&o(e.property)){throw new TypeError("Got a MemberExpression for MemberExpression property")}let t=e.computed;if(a(e.property)&&typeof e.property.value==="number"){t=true}if(e.optional){this.token("?.")}if(t){this.token("[");this.print(e.property,e);this.token("]")}else{if(!e.optional){this.token(".")}this.print(e.property,e)}}function OptionalCallExpression(e){this.print(e.callee,e);this.print(e.typeArguments,e);this.print(e.typeParameters,e);if(e.optional){this.token("?.")}this.token("(");this.printList(e.arguments,e);this.token(")")}function CallExpression(e){this.print(e.callee,e);this.print(e.typeArguments,e);this.print(e.typeParameters,e);this.token("(");this.printList(e.arguments,e);this.token(")")}function Import(){this.word("import")}function buildYieldAwait(e){return function(t){this.word(e);if(t.delegate){this.token("*")}if(t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t);this.endTerminatorless(e)}}}const c=buildYieldAwait("yield");t.YieldExpression=c;const u=buildYieldAwait("await");t.AwaitExpression=u;function EmptyStatement(){this.semicolon(true)}function ExpressionStatement(e){this.print(e.expression,e);this.semicolon()}function AssignmentPattern(e){this.print(e.left,e);if(e.left.optional)this.token("?");this.print(e.left.typeAnnotation,e);this.space();this.token("=");this.space();this.print(e.right,e)}function AssignmentExpression(e,t){const r=this.inForStatementInitCounter&&e.operator==="in"&&!s.needsParens(e,t);if(r){this.token("(")}this.print(e.left,e);this.space();if(e.operator==="in"||e.operator==="instanceof"){this.word(e.operator)}else{this.token(e.operator)}this.space();this.print(e.right,e);if(r){this.token(")")}}function BindExpression(e){this.print(e.object,e);this.token("::");this.print(e.callee,e)}function MemberExpression(e){this.print(e.object,e);if(!e.computed&&o(e.property)){throw new TypeError("Got a MemberExpression for MemberExpression property")}let t=e.computed;if(a(e.property)&&typeof e.property.value==="number"){t=true}if(t){this.token("[");this.print(e.property,e);this.token("]")}else{this.token(".");this.print(e.property,e)}}function MetaProperty(e){this.print(e.meta,e);this.token(".");this.print(e.property,e)}function PrivateName(e){this.token("#");this.print(e.id,e)}function V8IntrinsicIdentifier(e){this.token("%");this.word(e.name)}function ModuleExpression(e){this.word("module");this.space();this.token("{");if(e.body.body.length===0){this.token("}")}else{this.newline();this.printSequence(e.body.body,e,{indent:true});this.rightBrace()}}},2231:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.AnyTypeAnnotation=AnyTypeAnnotation;t.ArrayTypeAnnotation=ArrayTypeAnnotation;t.BooleanLiteralTypeAnnotation=BooleanLiteralTypeAnnotation;t.BooleanTypeAnnotation=BooleanTypeAnnotation;t.DeclareClass=DeclareClass;t.DeclareExportAllDeclaration=DeclareExportAllDeclaration;t.DeclareExportDeclaration=DeclareExportDeclaration;t.DeclareFunction=DeclareFunction;t.DeclareInterface=DeclareInterface;t.DeclareModule=DeclareModule;t.DeclareModuleExports=DeclareModuleExports;t.DeclareOpaqueType=DeclareOpaqueType;t.DeclareTypeAlias=DeclareTypeAlias;t.DeclareVariable=DeclareVariable;t.DeclaredPredicate=DeclaredPredicate;t.EmptyTypeAnnotation=EmptyTypeAnnotation;t.EnumBooleanBody=EnumBooleanBody;t.EnumBooleanMember=EnumBooleanMember;t.EnumDeclaration=EnumDeclaration;t.EnumDefaultedMember=EnumDefaultedMember;t.EnumNumberBody=EnumNumberBody;t.EnumNumberMember=EnumNumberMember;t.EnumStringBody=EnumStringBody;t.EnumStringMember=EnumStringMember;t.EnumSymbolBody=EnumSymbolBody;t.ExistsTypeAnnotation=ExistsTypeAnnotation;t.FunctionTypeAnnotation=FunctionTypeAnnotation;t.FunctionTypeParam=FunctionTypeParam;t.IndexedAccessType=IndexedAccessType;t.InferredPredicate=InferredPredicate;t.InterfaceDeclaration=InterfaceDeclaration;t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=InterfaceExtends;t.InterfaceTypeAnnotation=InterfaceTypeAnnotation;t.IntersectionTypeAnnotation=IntersectionTypeAnnotation;t.MixedTypeAnnotation=MixedTypeAnnotation;t.NullLiteralTypeAnnotation=NullLiteralTypeAnnotation;t.NullableTypeAnnotation=NullableTypeAnnotation;Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:true,get:function(){return i.NumericLiteral}});t.NumberTypeAnnotation=NumberTypeAnnotation;t.ObjectTypeAnnotation=ObjectTypeAnnotation;t.ObjectTypeCallProperty=ObjectTypeCallProperty;t.ObjectTypeIndexer=ObjectTypeIndexer;t.ObjectTypeInternalSlot=ObjectTypeInternalSlot;t.ObjectTypeProperty=ObjectTypeProperty;t.ObjectTypeSpreadProperty=ObjectTypeSpreadProperty;t.OpaqueType=OpaqueType;t.OptionalIndexedAccessType=OptionalIndexedAccessType;t.QualifiedTypeIdentifier=QualifiedTypeIdentifier;Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:true,get:function(){return i.StringLiteral}});t.StringTypeAnnotation=StringTypeAnnotation;t.SymbolTypeAnnotation=SymbolTypeAnnotation;t.ThisTypeAnnotation=ThisTypeAnnotation;t.TupleTypeAnnotation=TupleTypeAnnotation;t.TypeAlias=TypeAlias;t.TypeAnnotation=TypeAnnotation;t.TypeCastExpression=TypeCastExpression;t.TypeParameter=TypeParameter;t.TypeParameterDeclaration=t.TypeParameterInstantiation=TypeParameterInstantiation;t.TypeofTypeAnnotation=TypeofTypeAnnotation;t.UnionTypeAnnotation=UnionTypeAnnotation;t.Variance=Variance;t.VoidTypeAnnotation=VoidTypeAnnotation;t._interfaceish=_interfaceish;t._variance=_variance;var n=r(6953);var s=r(4982);var i=r(5764);const{isDeclareExportDeclaration:a,isStatement:o}=n;function AnyTypeAnnotation(){this.word("any")}function ArrayTypeAnnotation(e){this.print(e.elementType,e);this.token("[");this.token("]")}function BooleanTypeAnnotation(){this.word("boolean")}function BooleanLiteralTypeAnnotation(e){this.word(e.value?"true":"false")}function NullLiteralTypeAnnotation(){this.word("null")}function DeclareClass(e,t){if(!a(t)){this.word("declare");this.space()}this.word("class");this.space();this._interfaceish(e)}function DeclareFunction(e,t){if(!a(t)){this.word("declare");this.space()}this.word("function");this.space();this.print(e.id,e);this.print(e.id.typeAnnotation.typeAnnotation,e);if(e.predicate){this.space();this.print(e.predicate,e)}this.semicolon()}function InferredPredicate(){this.token("%");this.word("checks")}function DeclaredPredicate(e){this.token("%");this.word("checks");this.token("(");this.print(e.value,e);this.token(")")}function DeclareInterface(e){this.word("declare");this.space();this.InterfaceDeclaration(e)}function DeclareModule(e){this.word("declare");this.space();this.word("module");this.space();this.print(e.id,e);this.space();this.print(e.body,e)}function DeclareModuleExports(e){this.word("declare");this.space();this.word("module");this.token(".");this.word("exports");this.print(e.typeAnnotation,e)}function DeclareTypeAlias(e){this.word("declare");this.space();this.TypeAlias(e)}function DeclareOpaqueType(e,t){if(!a(t)){this.word("declare");this.space()}this.OpaqueType(e)}function DeclareVariable(e,t){if(!a(t)){this.word("declare");this.space()}this.word("var");this.space();this.print(e.id,e);this.print(e.id.typeAnnotation,e);this.semicolon()}function DeclareExportDeclaration(e){this.word("declare");this.space();this.word("export");this.space();if(e.default){this.word("default");this.space()}FlowExportDeclaration.apply(this,arguments)}function DeclareExportAllDeclaration(){this.word("declare");this.space();s.ExportAllDeclaration.apply(this,arguments)}function EnumDeclaration(e){const{id:t,body:r}=e;this.word("enum");this.space();this.print(t,e);this.print(r,e)}function enumExplicitType(e,t,r){if(r){e.space();e.word("of");e.space();e.word(t)}e.space()}function enumBody(e,t){const{members:r}=t;e.token("{");e.indent();e.newline();for(const n of r){e.print(n,t);e.newline()}if(t.hasUnknownMembers){e.token("...");e.newline()}e.dedent();e.token("}")}function EnumBooleanBody(e){const{explicitType:t}=e;enumExplicitType(this,"boolean",t);enumBody(this,e)}function EnumNumberBody(e){const{explicitType:t}=e;enumExplicitType(this,"number",t);enumBody(this,e)}function EnumStringBody(e){const{explicitType:t}=e;enumExplicitType(this,"string",t);enumBody(this,e)}function EnumSymbolBody(e){enumExplicitType(this,"symbol",true);enumBody(this,e)}function EnumDefaultedMember(e){const{id:t}=e;this.print(t,e);this.token(",")}function enumInitializedMember(e,t){const{id:r,init:n}=t;e.print(r,t);e.space();e.token("=");e.space();e.print(n,t);e.token(",")}function EnumBooleanMember(e){enumInitializedMember(this,e)}function EnumNumberMember(e){enumInitializedMember(this,e)}function EnumStringMember(e){enumInitializedMember(this,e)}function FlowExportDeclaration(e){if(e.declaration){const t=e.declaration;this.print(t,e);if(!o(t))this.semicolon()}else{this.token("{");if(e.specifiers.length){this.space();this.printList(e.specifiers,e);this.space()}this.token("}");if(e.source){this.space();this.word("from");this.space();this.print(e.source,e)}this.semicolon()}}function ExistsTypeAnnotation(){this.token("*")}function FunctionTypeAnnotation(e,t){this.print(e.typeParameters,e);this.token("(");if(e.this){this.word("this");this.token(":");this.space();this.print(e.this.typeAnnotation,e);if(e.params.length||e.rest){this.token(",");this.space()}}this.printList(e.params,e);if(e.rest){if(e.params.length){this.token(",");this.space()}this.token("...");this.print(e.rest,e)}this.token(")");if(t&&(t.type==="ObjectTypeCallProperty"||t.type==="DeclareFunction"||t.type==="ObjectTypeProperty"&&t.method)){this.token(":")}else{this.space();this.token("=>")}this.space();this.print(e.returnType,e)}function FunctionTypeParam(e){this.print(e.name,e);if(e.optional)this.token("?");if(e.name){this.token(":");this.space()}this.print(e.typeAnnotation,e)}function InterfaceExtends(e){this.print(e.id,e);this.print(e.typeParameters,e)}function _interfaceish(e){var t;this.print(e.id,e);this.print(e.typeParameters,e);if((t=e.extends)!=null&&t.length){this.space();this.word("extends");this.space();this.printList(e.extends,e)}if(e.mixins&&e.mixins.length){this.space();this.word("mixins");this.space();this.printList(e.mixins,e)}if(e.implements&&e.implements.length){this.space();this.word("implements");this.space();this.printList(e.implements,e)}this.space();this.print(e.body,e)}function _variance(e){if(e.variance){if(e.variance.kind==="plus"){this.token("+")}else if(e.variance.kind==="minus"){this.token("-")}}}function InterfaceDeclaration(e){this.word("interface");this.space();this._interfaceish(e)}function andSeparator(){this.space();this.token("&");this.space()}function InterfaceTypeAnnotation(e){this.word("interface");if(e.extends&&e.extends.length){this.space();this.word("extends");this.space();this.printList(e.extends,e)}this.space();this.print(e.body,e)}function IntersectionTypeAnnotation(e){this.printJoin(e.types,e,{separator:andSeparator})}function MixedTypeAnnotation(){this.word("mixed")}function EmptyTypeAnnotation(){this.word("empty")}function NullableTypeAnnotation(e){this.token("?");this.print(e.typeAnnotation,e)}function NumberTypeAnnotation(){this.word("number")}function StringTypeAnnotation(){this.word("string")}function ThisTypeAnnotation(){this.word("this")}function TupleTypeAnnotation(e){this.token("[");this.printList(e.types,e);this.token("]")}function TypeofTypeAnnotation(e){this.word("typeof");this.space();this.print(e.argument,e)}function TypeAlias(e){this.word("type");this.space();this.print(e.id,e);this.print(e.typeParameters,e);this.space();this.token("=");this.space();this.print(e.right,e);this.semicolon()}function TypeAnnotation(e){this.token(":");this.space();if(e.optional)this.token("?");this.print(e.typeAnnotation,e)}function TypeParameterInstantiation(e){this.token("<");this.printList(e.params,e,{});this.token(">")}function TypeParameter(e){this._variance(e);this.word(e.name);if(e.bound){this.print(e.bound,e)}if(e.default){this.space();this.token("=");this.space();this.print(e.default,e)}}function OpaqueType(e){this.word("opaque");this.space();this.word("type");this.space();this.print(e.id,e);this.print(e.typeParameters,e);if(e.supertype){this.token(":");this.space();this.print(e.supertype,e)}if(e.impltype){this.space();this.token("=");this.space();this.print(e.impltype,e)}this.semicolon()}function ObjectTypeAnnotation(e){if(e.exact){this.token("{|")}else{this.token("{")}const t=[...e.properties,...e.callProperties||[],...e.indexers||[],...e.internalSlots||[]];if(t.length){this.space();this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:true,statement:true,iterator:()=>{if(t.length!==1||e.inexact){this.token(",");this.space()}}});this.space()}if(e.inexact){this.indent();this.token("...");if(t.length){this.newline()}this.dedent()}if(e.exact){this.token("|}")}else{this.token("}")}}function ObjectTypeInternalSlot(e){if(e.static){this.word("static");this.space()}this.token("[");this.token("[");this.print(e.id,e);this.token("]");this.token("]");if(e.optional)this.token("?");if(!e.method){this.token(":");this.space()}this.print(e.value,e)}function ObjectTypeCallProperty(e){if(e.static){this.word("static");this.space()}this.print(e.value,e)}function ObjectTypeIndexer(e){if(e.static){this.word("static");this.space()}this._variance(e);this.token("[");if(e.id){this.print(e.id,e);this.token(":");this.space()}this.print(e.key,e);this.token("]");this.token(":");this.space();this.print(e.value,e)}function ObjectTypeProperty(e){if(e.proto){this.word("proto");this.space()}if(e.static){this.word("static");this.space()}if(e.kind==="get"||e.kind==="set"){this.word(e.kind);this.space()}this._variance(e);this.print(e.key,e);if(e.optional)this.token("?");if(!e.method){this.token(":");this.space()}this.print(e.value,e)}function ObjectTypeSpreadProperty(e){this.token("...");this.print(e.argument,e)}function QualifiedTypeIdentifier(e){this.print(e.qualification,e);this.token(".");this.print(e.id,e)}function SymbolTypeAnnotation(){this.word("symbol")}function orSeparator(){this.space();this.token("|");this.space()}function UnionTypeAnnotation(e){this.printJoin(e.types,e,{separator:orSeparator})}function TypeCastExpression(e){this.token("(");this.print(e.expression,e);this.print(e.typeAnnotation,e);this.token(")")}function Variance(e){if(e.kind==="plus"){this.token("+")}else{this.token("-")}}function VoidTypeAnnotation(){this.word("void")}function IndexedAccessType(e){this.print(e.objectType,e);this.token("[");this.print(e.indexType,e);this.token("]")}function OptionalIndexedAccessType(e){this.print(e.objectType,e);if(e.optional){this.token("?.")}this.token("[");this.print(e.indexType,e);this.token("]")}},6638:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(5624);Object.keys(n).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===n[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return n[e]}})}));var s=r(764);Object.keys(s).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===s[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return s[e]}})}));var i=r(4022);Object.keys(i).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===i[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return i[e]}})}));var a=r(3988);Object.keys(a).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===a[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return a[e]}})}));var o=r(4908);Object.keys(o).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===o[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return o[e]}})}));var l=r(4982);Object.keys(l).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===l[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return l[e]}})}));var c=r(5764);Object.keys(c).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===c[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return c[e]}})}));var u=r(2231);Object.keys(u).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===u[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return u[e]}})}));var p=r(2897);Object.keys(p).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===p[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return p[e]}})}));var f=r(6737);Object.keys(f).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===f[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return f[e]}})}));var d=r(633);Object.keys(d).forEach((function(e){if(e==="default"||e==="__esModule")return;if(e in t&&t[e]===d[e])return;Object.defineProperty(t,e,{enumerable:true,get:function(){return d[e]}})}))},6737:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.JSXAttribute=JSXAttribute;t.JSXClosingElement=JSXClosingElement;t.JSXClosingFragment=JSXClosingFragment;t.JSXElement=JSXElement;t.JSXEmptyExpression=JSXEmptyExpression;t.JSXExpressionContainer=JSXExpressionContainer;t.JSXFragment=JSXFragment;t.JSXIdentifier=JSXIdentifier;t.JSXMemberExpression=JSXMemberExpression;t.JSXNamespacedName=JSXNamespacedName;t.JSXOpeningElement=JSXOpeningElement;t.JSXOpeningFragment=JSXOpeningFragment;t.JSXSpreadAttribute=JSXSpreadAttribute;t.JSXSpreadChild=JSXSpreadChild;t.JSXText=JSXText;function JSXAttribute(e){this.print(e.name,e);if(e.value){this.token("=");this.print(e.value,e)}}function JSXIdentifier(e){this.word(e.name)}function JSXNamespacedName(e){this.print(e.namespace,e);this.token(":");this.print(e.name,e)}function JSXMemberExpression(e){this.print(e.object,e);this.token(".");this.print(e.property,e)}function JSXSpreadAttribute(e){this.token("{");this.token("...");this.print(e.argument,e);this.token("}")}function JSXExpressionContainer(e){this.token("{");this.print(e.expression,e);this.token("}")}function JSXSpreadChild(e){this.token("{");this.token("...");this.print(e.expression,e);this.token("}")}function JSXText(e){const t=this.getPossibleRaw(e);if(t!=null){this.token(t)}else{this.token(e.value)}}function JSXElement(e){const t=e.openingElement;this.print(t,e);if(t.selfClosing)return;this.indent();for(const t of e.children){this.print(t,e)}this.dedent();this.print(e.closingElement,e)}function spaceSeparator(){this.space()}function JSXOpeningElement(e){this.token("<");this.print(e.name,e);this.print(e.typeParameters,e);if(e.attributes.length>0){this.space();this.printJoin(e.attributes,e,{separator:spaceSeparator})}if(e.selfClosing){this.space();this.token("/>")}else{this.token(">")}}function JSXClosingElement(e){this.token("</");this.print(e.name,e);this.token(">")}function JSXEmptyExpression(e){this.printInnerComments(e)}function JSXFragment(e){this.print(e.openingFragment,e);this.indent();for(const t of e.children){this.print(t,e)}this.dedent();this.print(e.closingFragment,e)}function JSXOpeningFragment(){this.token("<");this.token(">")}function JSXClosingFragment(){this.token("</");this.token(">")}},4908:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.ArrowFunctionExpression=ArrowFunctionExpression;t.FunctionDeclaration=t.FunctionExpression=FunctionExpression;t._functionHead=_functionHead;t._methodHead=_methodHead;t._param=_param;t._parameters=_parameters;t._params=_params;t._predicate=_predicate;var n=r(6953);const{isIdentifier:s}=n;function _params(e){this.print(e.typeParameters,e);this.token("(");this._parameters(e.params,e);this.token(")");this.print(e.returnType,e)}function _parameters(e,t){for(let r=0;r<e.length;r++){this._param(e[r],t);if(r<e.length-1){this.token(",");this.space()}}}function _param(e,t){this.printJoin(e.decorators,e);this.print(e,t);if(e.optional)this.token("?");this.print(e.typeAnnotation,e)}function _methodHead(e){const t=e.kind;const r=e.key;if(t==="get"||t==="set"){this.word(t);this.space()}if(e.async){this._catchUp("start",r.loc);this.word("async");this.space()}if(t==="method"||t==="init"){if(e.generator){this.token("*")}}if(e.computed){this.token("[");this.print(r,e);this.token("]")}else{this.print(r,e)}if(e.optional){this.token("?")}this._params(e)}function _predicate(e){if(e.predicate){if(!e.returnType){this.token(":")}this.space();this.print(e.predicate,e)}}function _functionHead(e){if(e.async){this.word("async");this.space()}this.word("function");if(e.generator)this.token("*");this.printInnerComments(e);this.space();if(e.id){this.print(e.id,e)}this._params(e);this._predicate(e)}function FunctionExpression(e){this._functionHead(e);this.space();this.print(e.body,e)}function ArrowFunctionExpression(e){if(e.async){this.word("async");this.space()}const t=e.params[0];if(!this.format.retainLines&&!this.format.auxiliaryCommentBefore&&!this.format.auxiliaryCommentAfter&&e.params.length===1&&s(t)&&!hasTypesOrComments(e,t)){this.print(t,e)}else{this._params(e)}this._predicate(e);this.space();this.token("=>");this.space();this.print(e.body,e)}function hasTypesOrComments(e,t){var r,n;return!!(e.typeParameters||e.returnType||e.predicate||t.typeAnnotation||t.optional||(r=t.leadingComments)!=null&&r.length||(n=t.trailingComments)!=null&&n.length)}},4982:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.ExportAllDeclaration=ExportAllDeclaration;t.ExportDefaultDeclaration=ExportDefaultDeclaration;t.ExportDefaultSpecifier=ExportDefaultSpecifier;t.ExportNamedDeclaration=ExportNamedDeclaration;t.ExportNamespaceSpecifier=ExportNamespaceSpecifier;t.ExportSpecifier=ExportSpecifier;t.ImportAttribute=ImportAttribute;t.ImportDeclaration=ImportDeclaration;t.ImportDefaultSpecifier=ImportDefaultSpecifier;t.ImportNamespaceSpecifier=ImportNamespaceSpecifier;t.ImportSpecifier=ImportSpecifier;var n=r(6953);const{isClassDeclaration:s,isExportDefaultSpecifier:i,isExportNamespaceSpecifier:a,isImportDefaultSpecifier:o,isImportNamespaceSpecifier:l,isStatement:c}=n;function ImportSpecifier(e){if(e.importKind==="type"||e.importKind==="typeof"){this.word(e.importKind);this.space()}this.print(e.imported,e);if(e.local&&e.local.name!==e.imported.name){this.space();this.word("as");this.space();this.print(e.local,e)}}function ImportDefaultSpecifier(e){this.print(e.local,e)}function ExportDefaultSpecifier(e){this.print(e.exported,e)}function ExportSpecifier(e){if(e.exportKind==="type"){this.word("type");this.space()}this.print(e.local,e);if(e.exported&&e.local.name!==e.exported.name){this.space();this.word("as");this.space();this.print(e.exported,e)}}function ExportNamespaceSpecifier(e){this.token("*");this.space();this.word("as");this.space();this.print(e.exported,e)}function ExportAllDeclaration(e){this.word("export");this.space();if(e.exportKind==="type"){this.word("type");this.space()}this.token("*");this.space();this.word("from");this.space();this.print(e.source,e);this.printAssertions(e);this.semicolon()}function ExportNamedDeclaration(e){if(this.format.decoratorsBeforeExport&&s(e.declaration)){this.printJoin(e.declaration.decorators,e)}this.word("export");this.space();ExportDeclaration.apply(this,arguments)}function ExportDefaultDeclaration(e){if(this.format.decoratorsBeforeExport&&s(e.declaration)){this.printJoin(e.declaration.decorators,e)}this.word("export");this.space();this.word("default");this.space();ExportDeclaration.apply(this,arguments)}function ExportDeclaration(e){if(e.declaration){const t=e.declaration;this.print(t,e);if(!c(t))this.semicolon()}else{if(e.exportKind==="type"){this.word("type");this.space()}const t=e.specifiers.slice(0);let r=false;for(;;){const n=t[0];if(i(n)||a(n)){r=true;this.print(t.shift(),e);if(t.length){this.token(",");this.space()}}else{break}}if(t.length||!t.length&&!r){this.token("{");if(t.length){this.space();this.printList(t,e);this.space()}this.token("}")}if(e.source){this.space();this.word("from");this.space();this.print(e.source,e);this.printAssertions(e)}this.semicolon()}}function ImportDeclaration(e){this.word("import");this.space();const t=e.importKind==="type"||e.importKind==="typeof";if(t){this.word(e.importKind);this.space()}const r=e.specifiers.slice(0);const n=!!r.length;while(n){const t=r[0];if(o(t)||l(t)){this.print(r.shift(),e);if(r.length){this.token(",");this.space()}}else{break}}if(r.length){this.token("{");this.space();this.printList(r,e);this.space();this.token("}")}else if(t&&!n){this.token("{");this.token("}")}if(n||t){this.space();this.word("from");this.space()}this.print(e.source,e);this.printAssertions(e);{var s;if((s=e.attributes)!=null&&s.length){this.space();this.word("with");this.space();this.printList(e.attributes,e)}}this.semicolon()}function ImportAttribute(e){this.print(e.key);this.token(":");this.space();this.print(e.value)}function ImportNamespaceSpecifier(e){this.token("*");this.space();this.word("as");this.space();this.print(e.local,e)}},4022:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.BreakStatement=void 0;t.CatchClause=CatchClause;t.ContinueStatement=void 0;t.DebuggerStatement=DebuggerStatement;t.DoWhileStatement=DoWhileStatement;t.ForOfStatement=t.ForInStatement=void 0;t.ForStatement=ForStatement;t.IfStatement=IfStatement;t.LabeledStatement=LabeledStatement;t.ReturnStatement=void 0;t.SwitchCase=SwitchCase;t.SwitchStatement=SwitchStatement;t.ThrowStatement=void 0;t.TryStatement=TryStatement;t.VariableDeclaration=VariableDeclaration;t.VariableDeclarator=VariableDeclarator;t.WhileStatement=WhileStatement;t.WithStatement=WithStatement;var n=r(6953);const{isFor:s,isForStatement:i,isIfStatement:a,isStatement:o}=n;function WithStatement(e){this.word("with");this.space();this.token("(");this.print(e.object,e);this.token(")");this.printBlock(e)}function IfStatement(e){this.word("if");this.space();this.token("(");this.print(e.test,e);this.token(")");this.space();const t=e.alternate&&a(getLastStatement(e.consequent));if(t){this.token("{");this.newline();this.indent()}this.printAndIndentOnComments(e.consequent,e);if(t){this.dedent();this.newline();this.token("}")}if(e.alternate){if(this.endsWith(125))this.space();this.word("else");this.space();this.printAndIndentOnComments(e.alternate,e)}}function getLastStatement(e){if(!o(e.body))return e;return getLastStatement(e.body)}function ForStatement(e){this.word("for");this.space();this.token("(");this.inForStatementInitCounter++;this.print(e.init,e);this.inForStatementInitCounter--;this.token(";");if(e.test){this.space();this.print(e.test,e)}this.token(";");if(e.update){this.space();this.print(e.update,e)}this.token(")");this.printBlock(e)}function WhileStatement(e){this.word("while");this.space();this.token("(");this.print(e.test,e);this.token(")");this.printBlock(e)}const buildForXStatement=function(e){return function(t){this.word("for");this.space();if(e==="of"&&t.await){this.word("await");this.space()}this.token("(");this.print(t.left,t);this.space();this.word(e);this.space();this.print(t.right,t);this.token(")");this.printBlock(t)}};const l=buildForXStatement("in");t.ForInStatement=l;const c=buildForXStatement("of");t.ForOfStatement=c;function DoWhileStatement(e){this.word("do");this.space();this.print(e.body,e);this.space();this.word("while");this.space();this.token("(");this.print(e.test,e);this.token(")");this.semicolon()}function buildLabelStatement(e,t="label"){return function(r){this.word(e);const n=r[t];if(n){this.space();const e=t=="label";const s=this.startTerminatorless(e);this.print(n,r);this.endTerminatorless(s)}this.semicolon()}}const u=buildLabelStatement("continue");t.ContinueStatement=u;const p=buildLabelStatement("return","argument");t.ReturnStatement=p;const f=buildLabelStatement("break");t.BreakStatement=f;const d=buildLabelStatement("throw","argument");t.ThrowStatement=d;function LabeledStatement(e){this.print(e.label,e);this.token(":");this.space();this.print(e.body,e)}function TryStatement(e){this.word("try");this.space();this.print(e.block,e);this.space();if(e.handlers){this.print(e.handlers[0],e)}else{this.print(e.handler,e)}if(e.finalizer){this.space();this.word("finally");this.space();this.print(e.finalizer,e)}}function CatchClause(e){this.word("catch");this.space();if(e.param){this.token("(");this.print(e.param,e);this.print(e.param.typeAnnotation,e);this.token(")");this.space()}this.print(e.body,e)}function SwitchStatement(e){this.word("switch");this.space();this.token("(");this.print(e.discriminant,e);this.token(")");this.space();this.token("{");this.printSequence(e.cases,e,{indent:true,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}});this.token("}")}function SwitchCase(e){if(e.test){this.word("case");this.space();this.print(e.test,e);this.token(":")}else{this.word("default");this.token(":")}if(e.consequent.length){this.newline();this.printSequence(e.consequent,e,{indent:true})}}function DebuggerStatement(){this.word("debugger");this.semicolon()}function variableDeclarationIndent(){this.token(",");this.newline();if(this.endsWith(10)){for(let e=0;e<4;e++)this.space(true)}}function constDeclarationIndent(){this.token(",");this.newline();if(this.endsWith(10)){for(let e=0;e<6;e++)this.space(true)}}function VariableDeclaration(e,t){if(e.declare){this.word("declare");this.space()}this.word(e.kind);this.space();let r=false;if(!s(t)){for(const t of e.declarations){if(t.init){r=true}}}let n;if(r){n=e.kind==="const"?constDeclarationIndent:variableDeclarationIndent}this.printList(e.declarations,e,{separator:n});if(s(t)){if(i(t)){if(t.init===e)return}else{if(t.left===e)return}}this.semicolon()}function VariableDeclarator(e){this.print(e.id,e);if(e.definite)this.token("!");this.print(e.id.typeAnnotation,e);if(e.init){this.space();this.token("=");this.space();this.print(e.init,e)}}},5624:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.TaggedTemplateExpression=TaggedTemplateExpression;t.TemplateElement=TemplateElement;t.TemplateLiteral=TemplateLiteral;function TaggedTemplateExpression(e){this.print(e.tag,e);this.print(e.typeParameters,e);this.print(e.quasi,e)}function TemplateElement(e,t){const r=t.quasis[0]===e;const n=t.quasis[t.quasis.length-1]===e;const s=(r?"`":"}")+e.value.raw+(n?"`":"${");this.token(s)}function TemplateLiteral(e){const t=e.quasis;for(let r=0;r<t.length;r++){this.print(t[r],e);if(r+1<t.length){this.print(e.expressions[r],e)}}}},5764:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.ArgumentPlaceholder=ArgumentPlaceholder;t.ArrayPattern=t.ArrayExpression=ArrayExpression;t.BigIntLiteral=BigIntLiteral;t.BooleanLiteral=BooleanLiteral;t.DecimalLiteral=DecimalLiteral;t.Identifier=Identifier;t.NullLiteral=NullLiteral;t.NumericLiteral=NumericLiteral;t.ObjectPattern=t.ObjectExpression=ObjectExpression;t.ObjectMethod=ObjectMethod;t.ObjectProperty=ObjectProperty;t.PipelineBareFunction=PipelineBareFunction;t.PipelinePrimaryTopicReference=PipelinePrimaryTopicReference;t.PipelineTopicExpression=PipelineTopicExpression;t.RecordExpression=RecordExpression;t.RegExpLiteral=RegExpLiteral;t.SpreadElement=t.RestElement=RestElement;t.StringLiteral=StringLiteral;t.TopicReference=TopicReference;t.TupleExpression=TupleExpression;var n=r(6953);var s=r(4011);const{isAssignmentPattern:i,isIdentifier:a}=n;function Identifier(e){this.exactSource(e.loc,(()=>{this.word(e.name)}))}function ArgumentPlaceholder(){this.token("?")}function RestElement(e){this.token("...");this.print(e.argument,e)}function ObjectExpression(e){const t=e.properties;this.token("{");this.printInnerComments(e);if(t.length){this.space();this.printList(t,e,{indent:true,statement:true});this.space()}this.token("}")}function ObjectMethod(e){this.printJoin(e.decorators,e);this._methodHead(e);this.space();this.print(e.body,e)}function ObjectProperty(e){this.printJoin(e.decorators,e);if(e.computed){this.token("[");this.print(e.key,e);this.token("]")}else{if(i(e.value)&&a(e.key)&&e.key.name===e.value.left.name){this.print(e.value,e);return}this.print(e.key,e);if(e.shorthand&&a(e.key)&&a(e.value)&&e.key.name===e.value.name){return}}this.token(":");this.space();this.print(e.value,e)}function ArrayExpression(e){const t=e.elements;const r=t.length;this.token("[");this.printInnerComments(e);for(let n=0;n<t.length;n++){const s=t[n];if(s){if(n>0)this.space();this.print(s,e);if(n<r-1)this.token(",")}else{this.token(",")}}this.token("]")}function RecordExpression(e){const t=e.properties;let r;let n;if(this.format.recordAndTupleSyntaxType==="bar"){r="{|";n="|}"}else if(this.format.recordAndTupleSyntaxType==="hash"){r="#{";n="}"}else{throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`)}this.token(r);this.printInnerComments(e);if(t.length){this.space();this.printList(t,e,{indent:true,statement:true});this.space()}this.token(n)}function TupleExpression(e){const t=e.elements;const r=t.length;let n;let s;if(this.format.recordAndTupleSyntaxType==="bar"){n="[|";s="|]"}else if(this.format.recordAndTupleSyntaxType==="hash"){n="#[";s="]"}else{throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`)}this.token(n);this.printInnerComments(e);for(let n=0;n<t.length;n++){const s=t[n];if(s){if(n>0)this.space();this.print(s,e);if(n<r-1)this.token(",")}}this.token(s)}function RegExpLiteral(e){this.word(`/${e.pattern}/${e.flags}`)}function BooleanLiteral(e){this.word(e.value?"true":"false")}function NullLiteral(){this.word("null")}function NumericLiteral(e){const t=this.getPossibleRaw(e);const r=this.format.jsescOption;const n=e.value+"";if(r.numbers){this.number(s(e.value,r))}else if(t==null){this.number(n)}else if(this.format.minified){this.number(t.length<n.length?t:n)}else{this.number(t)}}function StringLiteral(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&t!=null){this.token(t);return}const r=s(e.value,Object.assign(this.format.jsescOption,this.format.jsonCompatibleStrings&&{json:true}));return this.token(r)}function BigIntLiteral(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&t!=null){this.word(t);return}this.word(e.value+"n")}function DecimalLiteral(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&t!=null){this.word(t);return}this.word(e.value+"m")}const o=new Set(["^^","@@","^","%","#"]);function TopicReference(){const{topicToken:e}=this.format;if(o.has(e)){this.token(e)}else{const t=JSON.stringify(e);const r=Array.from(o,(e=>JSON.stringify(e)));throw new Error(`The "topicToken" generator option must be one of `+`${r.join(", ")} (${t} received instead).`)}}function PipelineTopicExpression(e){this.print(e.expression,e)}function PipelineBareFunction(e){this.print(e.callee,e)}function PipelinePrimaryTopicReference(){this.token("#")}},633:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.TSAnyKeyword=TSAnyKeyword;t.TSArrayType=TSArrayType;t.TSAsExpression=TSAsExpression;t.TSBigIntKeyword=TSBigIntKeyword;t.TSBooleanKeyword=TSBooleanKeyword;t.TSCallSignatureDeclaration=TSCallSignatureDeclaration;t.TSConditionalType=TSConditionalType;t.TSConstructSignatureDeclaration=TSConstructSignatureDeclaration;t.TSConstructorType=TSConstructorType;t.TSDeclareFunction=TSDeclareFunction;t.TSDeclareMethod=TSDeclareMethod;t.TSEnumDeclaration=TSEnumDeclaration;t.TSEnumMember=TSEnumMember;t.TSExportAssignment=TSExportAssignment;t.TSExpressionWithTypeArguments=TSExpressionWithTypeArguments;t.TSExternalModuleReference=TSExternalModuleReference;t.TSFunctionType=TSFunctionType;t.TSImportEqualsDeclaration=TSImportEqualsDeclaration;t.TSImportType=TSImportType;t.TSIndexSignature=TSIndexSignature;t.TSIndexedAccessType=TSIndexedAccessType;t.TSInferType=TSInferType;t.TSInstantiationExpression=TSInstantiationExpression;t.TSInterfaceBody=TSInterfaceBody;t.TSInterfaceDeclaration=TSInterfaceDeclaration;t.TSIntersectionType=TSIntersectionType;t.TSIntrinsicKeyword=TSIntrinsicKeyword;t.TSLiteralType=TSLiteralType;t.TSMappedType=TSMappedType;t.TSMethodSignature=TSMethodSignature;t.TSModuleBlock=TSModuleBlock;t.TSModuleDeclaration=TSModuleDeclaration;t.TSNamedTupleMember=TSNamedTupleMember;t.TSNamespaceExportDeclaration=TSNamespaceExportDeclaration;t.TSNeverKeyword=TSNeverKeyword;t.TSNonNullExpression=TSNonNullExpression;t.TSNullKeyword=TSNullKeyword;t.TSNumberKeyword=TSNumberKeyword;t.TSObjectKeyword=TSObjectKeyword;t.TSOptionalType=TSOptionalType;t.TSParameterProperty=TSParameterProperty;t.TSParenthesizedType=TSParenthesizedType;t.TSPropertySignature=TSPropertySignature;t.TSQualifiedName=TSQualifiedName;t.TSRestType=TSRestType;t.TSStringKeyword=TSStringKeyword;t.TSSymbolKeyword=TSSymbolKeyword;t.TSThisType=TSThisType;t.TSTupleType=TSTupleType;t.TSTypeAliasDeclaration=TSTypeAliasDeclaration;t.TSTypeAnnotation=TSTypeAnnotation;t.TSTypeAssertion=TSTypeAssertion;t.TSTypeLiteral=TSTypeLiteral;t.TSTypeOperator=TSTypeOperator;t.TSTypeParameter=TSTypeParameter;t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=TSTypeParameterInstantiation;t.TSTypePredicate=TSTypePredicate;t.TSTypeQuery=TSTypeQuery;t.TSTypeReference=TSTypeReference;t.TSUndefinedKeyword=TSUndefinedKeyword;t.TSUnionType=TSUnionType;t.TSUnknownKeyword=TSUnknownKeyword;t.TSVoidKeyword=TSVoidKeyword;t.tsPrintBraced=tsPrintBraced;t.tsPrintClassMemberModifiers=tsPrintClassMemberModifiers;t.tsPrintFunctionOrConstructorType=tsPrintFunctionOrConstructorType;t.tsPrintPropertyOrMethodName=tsPrintPropertyOrMethodName;t.tsPrintSignatureDeclarationBase=tsPrintSignatureDeclarationBase;t.tsPrintTypeLiteralOrInterfaceBody=tsPrintTypeLiteralOrInterfaceBody;t.tsPrintUnionOrIntersectionType=tsPrintUnionOrIntersectionType;function TSTypeAnnotation(e){this.token(":");this.space();if(e.optional)this.token("?");this.print(e.typeAnnotation,e)}function TSTypeParameterInstantiation(e,t){this.token("<");this.printList(e.params,e,{});if(t.type==="ArrowFunctionExpression"&&e.params.length===1){this.token(",")}this.token(">")}function TSTypeParameter(e){if(e.in){this.word("in");this.space()}if(e.out){this.word("out");this.space()}this.word(e.name);if(e.constraint){this.space();this.word("extends");this.space();this.print(e.constraint,e)}if(e.default){this.space();this.token("=");this.space();this.print(e.default,e)}}function TSParameterProperty(e){if(e.accessibility){this.word(e.accessibility);this.space()}if(e.readonly){this.word("readonly");this.space()}this._param(e.parameter)}function TSDeclareFunction(e){if(e.declare){this.word("declare");this.space()}this._functionHead(e);this.token(";")}function TSDeclareMethod(e){this._classMethodHead(e);this.token(";")}function TSQualifiedName(e){this.print(e.left,e);this.token(".");this.print(e.right,e)}function TSCallSignatureDeclaration(e){this.tsPrintSignatureDeclarationBase(e);this.token(";")}function TSConstructSignatureDeclaration(e){this.word("new");this.space();this.tsPrintSignatureDeclarationBase(e);this.token(";")}function TSPropertySignature(e){const{readonly:t,initializer:r}=e;if(t){this.word("readonly");this.space()}this.tsPrintPropertyOrMethodName(e);this.print(e.typeAnnotation,e);if(r){this.space();this.token("=");this.space();this.print(r,e)}this.token(";")}function tsPrintPropertyOrMethodName(e){if(e.computed){this.token("[")}this.print(e.key,e);if(e.computed){this.token("]")}if(e.optional){this.token("?")}}function TSMethodSignature(e){const{kind:t}=e;if(t==="set"||t==="get"){this.word(t);this.space()}this.tsPrintPropertyOrMethodName(e);this.tsPrintSignatureDeclarationBase(e);this.token(";")}function TSIndexSignature(e){const{readonly:t,static:r}=e;if(r){this.word("static");this.space()}if(t){this.word("readonly");this.space()}this.token("[");this._parameters(e.parameters,e);this.token("]");this.print(e.typeAnnotation,e);this.token(";")}function TSAnyKeyword(){this.word("any")}function TSBigIntKeyword(){this.word("bigint")}function TSUnknownKeyword(){this.word("unknown")}function TSNumberKeyword(){this.word("number")}function TSObjectKeyword(){this.word("object")}function TSBooleanKeyword(){this.word("boolean")}function TSStringKeyword(){this.word("string")}function TSSymbolKeyword(){this.word("symbol")}function TSVoidKeyword(){this.word("void")}function TSUndefinedKeyword(){this.word("undefined")}function TSNullKeyword(){this.word("null")}function TSNeverKeyword(){this.word("never")}function TSIntrinsicKeyword(){this.word("intrinsic")}function TSThisType(){this.word("this")}function TSFunctionType(e){this.tsPrintFunctionOrConstructorType(e)}function TSConstructorType(e){if(e.abstract){this.word("abstract");this.space()}this.word("new");this.space();this.tsPrintFunctionOrConstructorType(e)}function tsPrintFunctionOrConstructorType(e){const{typeParameters:t}=e;const r=e.parameters;this.print(t,e);this.token("(");this._parameters(r,e);this.token(")");this.space();this.token("=>");this.space();const n=e.typeAnnotation;this.print(n.typeAnnotation,e)}function TSTypeReference(e){this.print(e.typeName,e);this.print(e.typeParameters,e)}function TSTypePredicate(e){if(e.asserts){this.word("asserts");this.space()}this.print(e.parameterName);if(e.typeAnnotation){this.space();this.word("is");this.space();this.print(e.typeAnnotation.typeAnnotation)}}function TSTypeQuery(e){this.word("typeof");this.space();this.print(e.exprName);if(e.typeParameters){this.print(e.typeParameters,e)}}function TSTypeLiteral(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)}function tsPrintTypeLiteralOrInterfaceBody(e,t){this.tsPrintBraced(e,t)}function tsPrintBraced(e,t){this.token("{");if(e.length){this.indent();this.newline();for(const r of e){this.print(r,t);this.newline()}this.dedent();this.rightBrace()}else{this.token("}")}}function TSArrayType(e){this.print(e.elementType,e);this.token("[]")}function TSTupleType(e){this.token("[");this.printList(e.elementTypes,e);this.token("]")}function TSOptionalType(e){this.print(e.typeAnnotation,e);this.token("?")}function TSRestType(e){this.token("...");this.print(e.typeAnnotation,e)}function TSNamedTupleMember(e){this.print(e.label,e);if(e.optional)this.token("?");this.token(":");this.space();this.print(e.elementType,e)}function TSUnionType(e){this.tsPrintUnionOrIntersectionType(e,"|")}function TSIntersectionType(e){this.tsPrintUnionOrIntersectionType(e,"&")}function tsPrintUnionOrIntersectionType(e,t){this.printJoin(e.types,e,{separator(){this.space();this.token(t);this.space()}})}function TSConditionalType(e){this.print(e.checkType);this.space();this.word("extends");this.space();this.print(e.extendsType);this.space();this.token("?");this.space();this.print(e.trueType);this.space();this.token(":");this.space();this.print(e.falseType)}function TSInferType(e){this.token("infer");this.space();this.print(e.typeParameter)}function TSParenthesizedType(e){this.token("(");this.print(e.typeAnnotation,e);this.token(")")}function TSTypeOperator(e){this.word(e.operator);this.space();this.print(e.typeAnnotation,e)}function TSIndexedAccessType(e){this.print(e.objectType,e);this.token("[");this.print(e.indexType,e);this.token("]")}function TSMappedType(e){const{nameType:t,optional:r,readonly:n,typeParameter:s}=e;this.token("{");this.space();if(n){tokenIfPlusMinus(this,n);this.word("readonly");this.space()}this.token("[");this.word(s.name);this.space();this.word("in");this.space();this.print(s.constraint,s);if(t){this.space();this.word("as");this.space();this.print(t,e)}this.token("]");if(r){tokenIfPlusMinus(this,r);this.token("?")}this.token(":");this.space();this.print(e.typeAnnotation,e);this.space();this.token("}")}function tokenIfPlusMinus(e,t){if(t!==true){e.token(t)}}function TSLiteralType(e){this.print(e.literal,e)}function TSExpressionWithTypeArguments(e){this.print(e.expression,e);this.print(e.typeParameters,e)}function TSInterfaceDeclaration(e){const{declare:t,id:r,typeParameters:n,extends:s,body:i}=e;if(t){this.word("declare");this.space()}this.word("interface");this.space();this.print(r,e);this.print(n,e);if(s!=null&&s.length){this.space();this.word("extends");this.space();this.printList(s,e)}this.space();this.print(i,e)}function TSInterfaceBody(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)}function TSTypeAliasDeclaration(e){const{declare:t,id:r,typeParameters:n,typeAnnotation:s}=e;if(t){this.word("declare");this.space()}this.word("type");this.space();this.print(r,e);this.print(n,e);this.space();this.token("=");this.space();this.print(s,e);this.token(";")}function TSAsExpression(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e);this.space();this.word("as");this.space();this.print(r,e)}function TSTypeAssertion(e){const{typeAnnotation:t,expression:r}=e;this.token("<");this.print(t,e);this.token(">");this.space();this.print(r,e)}function TSInstantiationExpression(e){this.print(e.expression,e);this.print(e.typeParameters,e)}function TSEnumDeclaration(e){const{declare:t,const:r,id:n,members:s}=e;if(t){this.word("declare");this.space()}if(r){this.word("const");this.space()}this.word("enum");this.space();this.print(n,e);this.space();this.tsPrintBraced(s,e)}function TSEnumMember(e){const{id:t,initializer:r}=e;this.print(t,e);if(r){this.space();this.token("=");this.space();this.print(r,e)}this.token(",")}function TSModuleDeclaration(e){const{declare:t,id:r}=e;if(t){this.word("declare");this.space()}if(!e.global){this.word(r.type==="Identifier"?"namespace":"module");this.space()}this.print(r,e);if(!e.body){this.token(";");return}let n=e.body;while(n.type==="TSModuleDeclaration"){this.token(".");this.print(n.id,n);n=n.body}this.space();this.print(n,e)}function TSModuleBlock(e){this.tsPrintBraced(e.body,e)}function TSImportType(e){const{argument:t,qualifier:r,typeParameters:n}=e;this.word("import");this.token("(");this.print(t,e);this.token(")");if(r){this.token(".");this.print(r,e)}if(n){this.print(n,e)}}function TSImportEqualsDeclaration(e){const{isExport:t,id:r,moduleReference:n}=e;if(t){this.word("export");this.space()}this.word("import");this.space();this.print(r,e);this.space();this.token("=");this.space();this.print(n,e);this.token(";")}function TSExternalModuleReference(e){this.token("require(");this.print(e.expression,e);this.token(")")}function TSNonNullExpression(e){this.print(e.expression,e);this.token("!")}function TSExportAssignment(e){this.word("export");this.space();this.token("=");this.space();this.print(e.expression,e);this.token(";")}function TSNamespaceExportDeclaration(e){this.word("export");this.space();this.word("as");this.space();this.word("namespace");this.space();this.print(e.id,e)}function tsPrintSignatureDeclarationBase(e){const{typeParameters:t}=e;const r=e.parameters;this.print(t,e);this.token("(");this._parameters(r,e);this.token(")");const n=e.typeAnnotation;this.print(n,e)}function tsPrintClassMemberModifiers(e,t){if(t&&e.declare){this.word("declare");this.space()}if(e.accessibility){this.word(e.accessibility);this.space()}if(e.static){this.word("static");this.space()}if(e.override){this.word("override");this.space()}if(e.abstract){this.word("abstract");this.space()}if(t&&e.readonly){this.word("readonly");this.space()}}},3136:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.CodeGenerator=void 0;t["default"]=generate;var n=r(1722);var s=r(4423);class Generator extends s.default{constructor(e,t={},r){const s=normalizeOptions(r,t);const i=t.sourceMaps?new n.default(t,r):null;super(s,i);this.ast=void 0;this.ast=e}generate(){return super.generate(this.ast)}}function normalizeOptions(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:t.comments==null||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,indent:{adjustMultilineComment:true,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:true,minimal:false},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType,topicToken:t.topicToken};{r.jsonCompatibleStrings=t.jsonCompatibleStrings}if(r.minified){r.compact=true;r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)}else{r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0)}if(r.compact==="auto"){r.compact=e.length>5e5;if(r.compact){console.error("[BABEL] Note: The code generator has deoptimised the styling of "+`${t.filename} as it exceeds the max of ${"500KB"}.`)}}if(r.compact){r.indent.adjustMultilineComment=false}return r}class CodeGenerator{constructor(e,t,r){this._generator=void 0;this._generator=new Generator(e,t,r)}generate(){return this._generator.generate()}}t.CodeGenerator=CodeGenerator;function generate(e,t,r){const n=new Generator(e,t,r);return n.generate()}},4815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.needsParens=needsParens;t.needsWhitespace=needsWhitespace;t.needsWhitespaceAfter=needsWhitespaceAfter;t.needsWhitespaceBefore=needsWhitespaceBefore;var n=r(6385);var s=r(6882);var i=r(6953);const{FLIPPED_ALIAS_KEYS:a,isCallExpression:o,isExpressionStatement:l,isMemberExpression:c,isNewExpression:u}=i;function expandAliases(e){const t={};function add(e,r){const n=t[e];t[e]=n?function(e,t,s){const i=n(e,t,s);return i==null?r(e,t,s):i}:r}for(const t of Object.keys(e)){const r=a[t];if(r){for(const n of r){add(n,e[t])}}else{add(t,e[t])}}return t}const p=expandAliases(s);const f=expandAliases(n.nodes);const d=expandAliases(n.list);function find(e,t,r,n){const s=e[t.type];return s?s(t,r,n):null}function isOrHasCallExpression(e){if(o(e)){return true}return c(e)&&isOrHasCallExpression(e.object)}function needsWhitespace(e,t,r){if(!e)return 0;if(l(e)){e=e.expression}let n=find(f,e,t);if(!n){const s=find(d,e,t);if(s){for(let t=0;t<s.length;t++){n=needsWhitespace(s[t],e,r);if(n)break}}}if(typeof n==="object"&&n!==null){return n[r]||0}return 0}function needsWhitespaceBefore(e,t){return needsWhitespace(e,t,"before")}function needsWhitespaceAfter(e,t){return needsWhitespace(e,t,"after")}function needsParens(e,t,r){if(!t)return false;if(u(t)&&t.callee===e){if(isOrHasCallExpression(e))return true}return find(p,e,t,r)}},6882:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.ArrowFunctionExpression=ArrowFunctionExpression;t.AssignmentExpression=AssignmentExpression;t.Binary=Binary;t.BinaryExpression=BinaryExpression;t.ClassExpression=ClassExpression;t.ConditionalExpression=ConditionalExpression;t.DoExpression=DoExpression;t.FunctionExpression=FunctionExpression;t.FunctionTypeAnnotation=FunctionTypeAnnotation;t.Identifier=Identifier;t.LogicalExpression=LogicalExpression;t.NullableTypeAnnotation=NullableTypeAnnotation;t.ObjectExpression=ObjectExpression;t.OptionalIndexedAccessType=OptionalIndexedAccessType;t.OptionalCallExpression=t.OptionalMemberExpression=OptionalMemberExpression;t.SequenceExpression=SequenceExpression;t.TSAsExpression=TSAsExpression;t.TSInferType=TSInferType;t.TSInstantiationExpression=TSInstantiationExpression;t.TSTypeAssertion=TSTypeAssertion;t.TSIntersectionType=t.TSUnionType=TSUnionType;t.UnaryLike=UnaryLike;t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=UnionTypeAnnotation;t.UpdateExpression=UpdateExpression;t.AwaitExpression=t.YieldExpression=YieldExpression;var n=r(6953);const{isArrayTypeAnnotation:s,isArrowFunctionExpression:i,isAssignmentExpression:a,isAwaitExpression:o,isBinary:l,isBinaryExpression:c,isUpdateExpression:u,isCallExpression:p,isClassDeclaration:f,isClassExpression:d,isConditional:h,isConditionalExpression:m,isExportDeclaration:y,isExportDefaultDeclaration:g,isExpressionStatement:b,isFor:T,isForInStatement:S,isForOfStatement:E,isForStatement:x,isFunctionExpression:P,isIfStatement:v,isIndexedAccessType:A,isIntersectionTypeAnnotation:w,isLogicalExpression:I,isMemberExpression:C,isNewExpression:O,isNullableTypeAnnotation:k,isObjectPattern:N,isOptionalCallExpression:_,isOptionalMemberExpression:D,isReturnStatement:M,isSequenceExpression:L,isSwitchStatement:j,isTSArrayType:F,isTSAsExpression:R,isTSInstantiationExpression:B,isTSIntersectionType:U,isTSNonNullExpression:K,isTSOptionalType:$,isTSRestType:V,isTSTypeAssertion:W,isTSUnionType:q,isTaggedTemplateExpression:H,isThrowStatement:G,isTypeAnnotation:X,isUnaryLike:J,isUnionTypeAnnotation:z,isVariableDeclarator:Y,isWhileStatement:Q,isYieldExpression:Z}=n;const ee={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10};const isClassExtendsClause=(e,t)=>(f(t)||d(t))&&t.superClass===e;const hasPostfixPart=(e,t)=>(C(t)||D(t))&&t.object===e||(p(t)||_(t)||O(t))&&t.callee===e||H(t)&&t.tag===e||K(t);function NullableTypeAnnotation(e,t){return s(t)}function FunctionTypeAnnotation(e,t,r){return z(t)||w(t)||s(t)||X(t)&&i(r[r.length-3])}function UpdateExpression(e,t){return hasPostfixPart(e,t)||isClassExtendsClause(e,t)}function ObjectExpression(e,t,r){return isFirstInContext(r,{expressionStatement:true,arrowBody:true})}function DoExpression(e,t,r){return!e.async&&isFirstInContext(r,{expressionStatement:true})}function Binary(e,t){if(e.operator==="**"&&c(t,{operator:"**"})){return t.left===e}if(isClassExtendsClause(e,t)){return true}if(hasPostfixPart(e,t)||J(t)||o(t)){return true}if(l(t)){const r=t.operator;const n=ee[r];const s=e.operator;const i=ee[s];if(n===i&&t.right===e&&!I(t)||n>i){return true}}}function UnionTypeAnnotation(e,t){return s(t)||k(t)||w(t)||z(t)}function OptionalIndexedAccessType(e,t){return A(t,{objectType:e})}function TSAsExpression(){return true}function TSTypeAssertion(){return true}function TSUnionType(e,t){return F(t)||$(t)||U(t)||q(t)||V(t)}function TSInferType(e,t){return F(t)||$(t)}function TSInstantiationExpression(e,t){return(p(t)||_(t)||O(t)||B(t))&&!!t.typeParameters}function BinaryExpression(e,t){return e.operator==="in"&&(Y(t)||T(t))}function SequenceExpression(e,t){if(x(t)||G(t)||M(t)||v(t)&&t.test===e||Q(t)&&t.test===e||S(t)&&t.right===e||j(t)&&t.discriminant===e||b(t)&&t.expression===e){return false}return true}function YieldExpression(e,t){return l(t)||J(t)||hasPostfixPart(e,t)||o(t)&&Z(e)||m(t)&&e===t.test||isClassExtendsClause(e,t)}function ClassExpression(e,t,r){return isFirstInContext(r,{expressionStatement:true,exportDefault:true})}function UnaryLike(e,t){return hasPostfixPart(e,t)||c(t,{operator:"**",left:e})||isClassExtendsClause(e,t)}function FunctionExpression(e,t,r){return isFirstInContext(r,{expressionStatement:true,exportDefault:true})}function ArrowFunctionExpression(e,t){return y(t)||ConditionalExpression(e,t)}function ConditionalExpression(e,t){if(J(t)||l(t)||m(t,{test:e})||o(t)||W(t)||R(t)){return true}return UnaryLike(e,t)}function OptionalMemberExpression(e,t){return p(t,{callee:e})||C(t,{object:e})}function AssignmentExpression(e,t){if(N(e.left)){return true}else{return ConditionalExpression(e,t)}}function LogicalExpression(e,t){switch(e.operator){case"||":if(!I(t))return false;return t.operator==="??"||t.operator==="&&";case"&&":return I(t,{operator:"??"});case"??":return I(t)&&t.operator!=="??"}}function Identifier(e,t,r){var n;if((n=e.extra)!=null&&n.parenthesized&&a(t,{left:e})&&(P(t.right)||d(t.right))&&t.right.id==null){return true}if(e.name==="let"){const n=C(t,{object:e,computed:true})||D(t,{object:e,computed:true,optional:false});return isFirstInContext(r,{expressionStatement:n,forHead:n,forInHead:n,forOfHead:true})}return e.name==="async"&&E(t)&&e===t.left}function isFirstInContext(e,{expressionStatement:t=false,arrowBody:r=false,exportDefault:n=false,forHead:s=false,forInHead:o=false,forOfHead:c=false}){let p=e.length-1;let f=e[p];p--;let d=e[p];while(p>=0){if(t&&b(d,{expression:f})||n&&g(d,{declaration:f})||r&&i(d,{body:f})||s&&x(d,{init:f})||o&&S(d,{left:f})||c&&E(d,{left:f})){return true}if(hasPostfixPart(f,d)&&!O(d)||L(d)&&d.expressions[0]===f||u(d)&&!d.prefix||h(d,{test:f})||l(d,{left:f})||a(d,{left:f})){f=d;p--;d=e[p]}else{return false}}return false}},6385:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.nodes=t.list=void 0;var n=r(6953);const{FLIPPED_ALIAS_KEYS:s,isArrayExpression:i,isAssignmentExpression:a,isBinary:o,isBlockStatement:l,isCallExpression:c,isFunction:u,isIdentifier:p,isLiteral:f,isMemberExpression:d,isObjectExpression:h,isOptionalCallExpression:m,isOptionalMemberExpression:y,isStringLiteral:g}=n;function crawl(e,t={}){if(d(e)||y(e)){crawl(e.object,t);if(e.computed)crawl(e.property,t)}else if(o(e)||a(e)){crawl(e.left,t);crawl(e.right,t)}else if(c(e)||m(e)){t.hasCall=true;crawl(e.callee,t)}else if(u(e)){t.hasFunction=true}else if(p(e)){t.hasHelper=t.hasHelper||isHelper(e.callee)}return t}function isHelper(e){if(d(e)){return isHelper(e.object)||isHelper(e.property)}else if(p(e)){return e.name==="require"||e.name[0]==="_"}else if(c(e)){return isHelper(e.callee)}else if(o(e)||a(e)){return p(e.left)&&isHelper(e.left)||isHelper(e.right)}else{return false}}function isType(e){return f(e)||h(e)||i(e)||p(e)||d(e)}const b={AssignmentExpression(e){const t=crawl(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction){return{before:t.hasFunction,after:true}}},SwitchCase(e,t){return{before:!!e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}},LogicalExpression(e){if(u(e.left)||u(e.right)){return{after:true}}},Literal(e){if(g(e)&&e.value==="use strict"){return{after:true}}},CallExpression(e){if(u(e.callee)||isHelper(e)){return{before:true,after:true}}},OptionalCallExpression(e){if(u(e.callee)){return{before:true,after:true}}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let n=isHelper(r.id)&&!isType(r.init);if(!n){const e=crawl(r.init);n=isHelper(r.init)&&e.hasCall||e.hasFunction}if(n){return{before:true,after:true}}}},IfStatement(e){if(l(e.consequent)){return{before:true,after:true}}}};t.nodes=b;b.ObjectProperty=b.ObjectTypeProperty=b.ObjectMethod=function(e,t){if(t.properties[0]===e){return{before:true}}};b.ObjectTypeCallProperty=function(e,t){var r;if(t.callProperties[0]===e&&!((r=t.properties)!=null&&r.length)){return{before:true}}};b.ObjectTypeIndexer=function(e,t){var r,n;if(t.indexers[0]===e&&!((r=t.properties)!=null&&r.length)&&!((n=t.callProperties)!=null&&n.length)){return{before:true}}};b.ObjectTypeInternalSlot=function(e,t){var r,n,s;if(t.internalSlots[0]===e&&!((r=t.properties)!=null&&r.length)&&!((n=t.callProperties)!=null&&n.length)&&!((s=t.indexers)!=null&&s.length)){return{before:true}}};const T={VariableDeclaration(e){return e.declarations.map((e=>e.init))},ArrayExpression(e){return e.elements},ObjectExpression(e){return e.properties}};t.list=T;[["Function",true],["Class",true],["Loop",true],["LabeledStatement",true],["SwitchStatement",true],["TryStatement",true]].forEach((function([e,t]){if(typeof t==="boolean"){t={after:t,before:t}}[e].concat(s[e]||[]).forEach((function(e){b[e]=function(){return t}}))}))},4423:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(4623);var s=r(4815);var i=r(6953);var a=r(6638);const{isProgram:o,isFile:l,isEmptyStatement:c}=i;const u=/e/i;const p=/\.0+$/;const f=/^0[box]/;const d=/^\s*[@#]__PURE__\s*$/;const{needsParens:h,needsWhitespaceAfter:m,needsWhitespaceBefore:y}=s;class Printer{constructor(e,t){this.inForStatementInitCounter=0;this._printStack=[];this._indent=0;this._insideAux=false;this._parenPushNewlineState=null;this._noLineTerminator=false;this._printAuxAfterOnNextUserNode=false;this._printedComments=new WeakSet;this._endsWithInteger=false;this._endsWithWord=false;this.format=e;this._buf=new n.default(t)}generate(e){this.print(e);this._maybeAddAuxComment();return this._buf.get()}indent(){if(this.format.compact||this.format.concise)return;this._indent++}dedent(){if(this.format.compact||this.format.concise)return;this._indent--}semicolon(e=false){this._maybeAddAuxComment();this._append(";",!e)}rightBrace(){if(this.format.minified){this._buf.removeLastSemicolon()}this.token("}")}space(e=false){if(this.format.compact)return;if(e){this._space()}else if(this._buf.hasContent()){const e=this.getLastChar();if(e!==32&&e!==10){this._space()}}}word(e){if(this._endsWithWord||this.endsWith(47)&&e.charCodeAt(0)===47){this._space()}this._maybeAddAuxComment();this._append(e);this._endsWithWord=true}number(e){this.word(e);this._endsWithInteger=Number.isInteger(+e)&&!f.test(e)&&!u.test(e)&&!p.test(e)&&e.charCodeAt(e.length-1)!==46}token(e){const t=this.getLastChar();const r=e.charCodeAt(0);if(e==="--"&&t===33||r===43&&t===43||r===45&&t===45||r===46&&this._endsWithInteger){this._space()}this._maybeAddAuxComment();this._append(e)}newline(e=1){if(this.format.retainLines||this.format.compact)return;if(this.format.concise){this.space();return}const t=this.endsWithCharAndNewline();if(t===10)return;if(t===123||t===58){e--}if(e<=0)return;for(let t=0;t<e;t++){this._newline()}}endsWith(e){return this.getLastChar()===e}getLastChar(){return this._buf.getLastChar()}endsWithCharAndNewline(){return this._buf.endsWithCharAndNewline()}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e);this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t);this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t);this._buf.withSource(e,t,r)}_space(){this._append(" ",true)}_newline(){this._append("\n",true)}_append(e,t=false){this._maybeAddParen(e);this._maybeIndent(e);if(t)this._buf.queue(e);else this._buf.append(e);this._endsWithWord=false;this._endsWithInteger=false}_maybeIndent(e){if(this._indent&&this.endsWith(10)&&e.charCodeAt(0)!==10){this._buf.queueIndentation(this._getIndent())}}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(r=0;r<e.length&&e[r]===" ";r++)continue;if(r===e.length){return}const n=e[r];if(n!=="\n"){if(n!=="/"||r+1===e.length){this._parenPushNewlineState=null;return}const t=e[r+1];if(t==="*"){if(d.test(e.slice(r+2,e.length-2))){return}}else if(t!=="/"){this._parenPushNewlineState=null;return}}this.token("(");this.indent();t.printed=true}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if((r==null?void 0:r.line)!=null){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++){this._newline()}}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=false){if(e){this._noLineTerminator=true;return null}else{return this._parenPushNewlineState={printed:false}}}endTerminatorless(e){this._noLineTerminator=false;if(e!=null&&e.printed){this.dedent();this.newline();this.token(")")}}print(e,t){if(!e)return;const r=this.format.concise;if(e._compact){this.format.concise=true}const n=this[e.type];if(!n){throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(e==null?void 0:e.constructor.name)}`)}this._printStack.push(e);const s=this._insideAux;this._insideAux=!e.loc;this._maybeAddAuxComment(this._insideAux&&!s);let i=h(e,t,this._printStack);if(this.format.retainFunctionParens&&e.type==="FunctionExpression"&&e.extra&&e.extra.parenthesized){i=true}if(i)this.token("(");this._printLeadingComments(e);const a=o(e)||l(e)?null:e.loc;this.withSource("start",a,(()=>{n.call(this,e,t)}));this._printTrailingComments(e);if(i)this.token(")");this._printStack.pop();this.format.concise=r;this._insideAux=s}_maybeAddAuxComment(e){if(e)this._printAuxBeforeComment();if(!this._insideAux)this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=true;const e=this.format.auxiliaryCommentBefore;if(e){this._printComment({type:"CommentBlock",value:e})}}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=false;const e=this.format.auxiliaryCommentAfter;if(e){this._printComment({type:"CommentBlock",value:e})}}getPossibleRaw(e){const t=e.extra;if(t&&t.raw!=null&&t.rawValue!=null&&e.value===t.rawValue){return t.raw}}printJoin(e,t,r={}){if(!(e!=null&&e.length))return;if(r.indent)this.indent();const n={addNewlines:r.addNewlines};for(let s=0;s<e.length;s++){const i=e[s];if(!i)continue;if(r.statement)this._printNewline(true,i,t,n);this.print(i,t);if(r.iterator){r.iterator(i,s)}if(r.separator&&s<e.length-1){r.separator.call(this)}if(r.statement)this._printNewline(false,i,t,n)}if(r.indent)this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;if(r)this.indent();this.print(e,t);if(r)this.dedent()}printBlock(e){const t=e.body;if(!c(t)){this.space()}this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(false,e))}_printLeadingComments(e){this._printComments(this._getComments(true,e),true)}printInnerComments(e,t=true){var r;if(!((r=e.innerComments)!=null&&r.length))return;if(t)this.indent();this._printComments(e.innerComments);if(t)this.dedent()}printSequence(e,t,r={}){r.statement=true;return this.printJoin(e,t,r)}printList(e,t,r={}){if(r.separator==null){r.separator=commaSeparator}return this.printJoin(e,t,r)}_printNewline(e,t,r,n){if(this.format.retainLines||this.format.compact)return;if(this.format.concise){this.space();return}let s=0;if(this._buf.hasContent()){if(!e)s++;if(n.addNewlines)s+=n.addNewlines(e,t)||0;const i=e?y:m;if(i(t,r))s++}this.newline(Math.min(2,s))}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;this._printedComments.add(e);const r=e.type==="CommentBlock";const n=r&&!t&&!this._noLineTerminator;if(n&&this._buf.hasContent())this.newline(1);const s=this.getLastChar();if(s!==91&&s!==123){this.space()}let i=!r&&!this._noLineTerminator?`//${e.value}\n`:`/*${e.value}*/`;if(r&&this.format.indent.adjustMultilineComment){var a;const t=(a=e.loc)==null?void 0:a.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");i=i.replace(e,"\n")}const r=Math.max(this._getIndent().length,this.format.retainLines?0:this._buf.getCurrentColumn());i=i.replace(/\n(?!$)/g,`\n${" ".repeat(r)}`)}if(this.endsWith(47))this._space();this.withSource("start",e.loc,(()=>{this._append(i)}));if(n)this.newline(1)}_printComments(e,t){if(!(e!=null&&e.length))return;if(t&&e.length===1&&d.test(e[0].value)){this._printComment(e[0],this._buf.hasContent()&&!this.endsWith(10))}else{for(const t of e){this._printComment(t)}}}printAssertions(e){var t;if((t=e.assertions)!=null&&t.length){this.space();this.word("assert");this.space();this.token("{");this.space();this.printList(e.assertions,e);this.space();this.token("}")}}}Object.assign(Printer.prototype,a);{Printer.prototype.Noop=function Noop(){}}var g=Printer;t["default"]=g;function commaSeparator(){this.token(",");this.space()}},1722:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(5328);class SourceMap{constructor(e,t){var r;this._map=void 0;this._rawMappings=void 0;this._sourceFileName=void 0;this._lastGenLine=0;this._lastSourceLine=0;this._lastSourceColumn=0;const s=this._map=new n.GenMapping({sourceRoot:e.sourceRoot});this._sourceFileName=(r=e.sourceFileName)==null?void 0:r.replace(/\\/g,"/");this._rawMappings=undefined;if(typeof t==="string"){(0,n.setSourceContent)(s,this._sourceFileName,t)}else if(typeof t==="object"){Object.keys(t).forEach((e=>{(0,n.setSourceContent)(s,e.replace(/\\/g,"/"),t[e])}))}}get(){return(0,n.toEncodedMap)(this._map)}getDecoded(){return(0,n.toDecodedMap)(this._map)}getRawMappings(){return this._rawMappings||(this._rawMappings=(0,n.allMappings)(this._map))}mark(e,t,r,s,i){this._rawMappings=undefined;(0,n.maybeAddMapping)(this._map,{name:s,generated:e,source:t==null?undefined:(i==null?void 0:i.replace(/\\/g,"/"))||this._sourceFileName,original:t==null?undefined:{line:t,column:r}})}}t["default"]=SourceMap},7266:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getInclusionReasons=getInclusionReasons;var n=r(7849);var s=r(112);var i=r(8886);function getInclusionReasons(e,t,r){const a=r[e]||{};return Object.keys(t).reduce(((e,r)=>{const o=(0,i.getLowestImplementedVersion)(a,r);const l=t[r];if(!o){e[r]=(0,s.prettifyVersion)(l)}else{const t=(0,i.isUnreleasedVersion)(o,r);const a=(0,i.isUnreleasedVersion)(l,r);if(!a&&(t||n.lt(l.toString(),(0,i.semverify)(o)))){e[r]=(0,s.prettifyVersion)(l)}}return e}),{})}},1372:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=filterItems;t.isRequired=isRequired;t.targetsSupported=targetsSupported;var n=r(7849);var s=r(9974);var i=r(8886);function targetsSupported(e,t){const r=Object.keys(e);if(r.length===0){return false}const s=r.filter((r=>{const s=(0,i.getLowestImplementedVersion)(t,r);if(!s){return true}const a=e[r];if((0,i.isUnreleasedVersion)(a,r)){return false}if((0,i.isUnreleasedVersion)(s,r)){return true}if(!n.valid(a.toString())){throw new Error(`Invalid version passed for target "${r}": "${a}". `+"Versions must be in semver format (major.minor.patch)")}return n.gt((0,i.semverify)(s),a.toString())}));return s.length===0}function isRequired(e,t,{compatData:r=s,includes:n,excludes:i}={}){if(i!=null&&i.has(e))return false;if(n!=null&&n.has(e))return true;return!targetsSupported(t,r[e])}function filterItems(e,t,r,n,s,i,a){const o=new Set;const l={compatData:e,includes:t,excludes:r};for(const t in e){if(isRequired(t,n,l)){o.add(t)}else if(a){const e=a.get(t);if(e){o.add(e)}}}if(s){s.forEach((e=>!r.has(e)&&o.add(e)))}if(i){i.forEach((e=>!t.has(e)&&o.delete(e)))}return o}},8479:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"TargetNames",{enumerable:true,get:function(){return l.TargetNames}});t["default"]=getTargets;Object.defineProperty(t,"filterItems",{enumerable:true,get:function(){return p.default}});Object.defineProperty(t,"getInclusionReasons",{enumerable:true,get:function(){return u.getInclusionReasons}});t.isBrowsersQueryValid=isBrowsersQueryValid;Object.defineProperty(t,"isRequired",{enumerable:true,get:function(){return p.isRequired}});Object.defineProperty(t,"prettifyTargets",{enumerable:true,get:function(){return c.prettifyTargets}});Object.defineProperty(t,"unreleasedLabels",{enumerable:true,get:function(){return o.unreleasedLabels}});var n=r(4907);var s=r(46);var i=r(4234);var a=r(8886);var o=r(7093);var l=r(3746);var c=r(112);var u=r(7266);var p=r(1372);const f=i["es6.module"];const d=new s.OptionValidator("@babel/helper-compilation-targets");function validateTargetNames(e){const t=Object.keys(l.TargetNames);for(const r of Object.keys(e)){if(!(r in l.TargetNames)){throw new Error(d.formatMessage(`'${r}' is not a valid target\n- Did you mean '${(0,s.findSuggestion)(r,t)}'?`))}}return e}function isBrowsersQueryValid(e){return typeof e==="string"||Array.isArray(e)&&e.every((e=>typeof e==="string"))}function validateBrowsers(e){d.invariant(e===undefined||isBrowsersQueryValid(e),`'${String(e)}' is not a valid browserslist query`);return e}function getLowestVersions(e){return e.reduce(((e,t)=>{const[r,n]=t.split(" ");const s=o.browserNameMap[r];if(!s){return e}try{const t=n.split("-")[0].toLowerCase();const i=(0,a.isUnreleasedVersion)(t,r);if(!e[s]){e[s]=i?t:(0,a.semverify)(t);return e}const o=e[s];const l=(0,a.isUnreleasedVersion)(o,r);if(l&&i){e[s]=(0,a.getLowestUnreleased)(o,t,r)}else if(l){e[s]=(0,a.semverify)(t)}else if(!l&&!i){const r=(0,a.semverify)(t);e[s]=(0,a.semverMin)(o,r)}}catch(e){}return e}),{})}function outputDecimalWarning(e){if(!e.length){return}console.warn("Warning, the following targets are using a decimal version:\n");e.forEach((({target:e,value:t})=>console.warn(`  ${e}: ${t}`)));console.warn(`\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n`)}function semverifyTarget(e,t){try{return(0,a.semverify)(t)}catch(r){throw new Error(d.formatMessage(`'${t}' is not a valid value for 'targets.${e}'.`))}}const h={__default(e,t){const r=(0,a.isUnreleasedVersion)(t,e)?t.toLowerCase():semverifyTarget(e,t);return[e,r]},node(e,t){const r=t===true||t==="current"?process.versions.node:semverifyTarget(e,t);return[e,r]}};function generateTargets(e){const t=Object.assign({},e);delete t.esmodules;delete t.browsers;return t}function resolveTargets(e,t){const r=n(e,{mobileToDesktop:true,env:t});return getLowestVersions(r)}function getTargets(e={},t={}){var r,s;let{browsers:i,esmodules:o}=e;const{configPath:l="."}=t;validateBrowsers(i);const c=generateTargets(e);let u=validateTargetNames(c);const p=!!i;const d=p||Object.keys(u).length>0;const m=!t.ignoreBrowserslistConfig&&!d;if(!i&&m){i=n.loadConfig({config:t.configFile,path:l,env:t.browserslistEnv});if(i==null){{i=[]}}}if(o&&(o!=="intersect"||!((r=i)!=null&&r.length))){i=Object.keys(f).map((e=>`${e} >= ${f[e]}`)).join(", ");o=false}if((s=i)!=null&&s.length){const e=resolveTargets(i,t.browserslistEnv);if(o==="intersect"){for(const t of Object.keys(e)){const r=e[t];if(f[t]){e[t]=(0,a.getHighestUnreleased)(r,(0,a.semverify)(f[t]),t)}else{delete e[t]}}}u=Object.assign(e,u)}const y={};const g=[];for(const e of Object.keys(u).sort()){var b;const t=u[e];if(typeof t==="number"&&t%1!==0){g.push({target:e,value:t})}const r=(b=h[e])!=null?b:h.__default;const[n,s]=r(e,t);if(s){y[n]=s}}outputDecimalWarning(g);return y}},3746:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.TargetNames=void 0;const r={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"};t.TargetNames=r},112:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.prettifyTargets=prettifyTargets;t.prettifyVersion=prettifyVersion;var n=r(7849);var s=r(7093);function prettifyVersion(e){if(typeof e!=="string"){return e}const t=[n.major(e)];const r=n.minor(e);const s=n.patch(e);if(r||s){t.push(r)}if(s){t.push(s)}return t.join(".")}function prettifyTargets(e){return Object.keys(e).reduce(((t,r)=>{let n=e[r];const i=s.unreleasedLabels[r];if(typeof n==="string"&&i!==n){n=prettifyVersion(n)}t[r]=n;return t}),{})}},7093:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.unreleasedLabels=t.browserNameMap=void 0;const r={safari:"tp"};t.unreleasedLabels=r;const n={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"};t.browserNameMap=n},8886:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getHighestUnreleased=getHighestUnreleased;t.getLowestImplementedVersion=getLowestImplementedVersion;t.getLowestUnreleased=getLowestUnreleased;t.isUnreleasedVersion=isUnreleasedVersion;t.semverMin=semverMin;t.semverify=semverify;var n=r(7849);var s=r(46);var i=r(7093);const a=/^(\d+|\d+.\d+)$/;const o=new s.OptionValidator("@babel/helper-compilation-targets");function semverMin(e,t){return e&&n.lt(e,t)?e:t}function semverify(e){if(typeof e==="string"&&n.valid(e)){return e}o.invariant(typeof e==="number"||typeof e==="string"&&a.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");while(t.length<3){t.push("0")}return t.join(".")}function isUnreleasedVersion(e,t){const r=i.unreleasedLabels[t];return!!r&&r===e.toString().toLowerCase()}function getLowestUnreleased(e,t,r){const n=i.unreleasedLabels[r];const s=[e,t].some((e=>e===n));if(s){return e===s?t:e||t}return semverMin(e,t)}function getHighestUnreleased(e,t,r){return getLowestUnreleased(e,t,r)===e?t:e}function getLowestImplementedVersion(e,t){const r=e[t];if(!r&&t==="android"){return e.chrome}return r}},5166:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;t.requeueComputedKeyAndDecorators=requeueComputedKeyAndDecorators;t.skipAllButComputedKey=skipAllButComputedKey;function skipAllButComputedKey(e){e.skip();if(e.node.computed){e.context.maybeQueue(e.get("key"))}}function requeueComputedKeyAndDecorators(e){const{context:t,node:r}=e;if(r.computed){t.maybeQueue(e.get("key"))}if(r.decorators){for(const r of e.get("decorators")){t.maybeQueue(r)}}}const r={FunctionParent(e){if(e.isArrowFunctionExpression()){return}else{e.skip();if(e.isMethod()){requeueComputedKeyAndDecorators(e)}}},Property(e){if(e.isObjectProperty()){return}e.skip();requeueComputedKeyAndDecorators(e)}};var n=r;t["default"]=n},2186:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(9491);var s=r(6953);const{callExpression:i,cloneNode:a,expressionStatement:o,identifier:l,importDeclaration:c,importDefaultSpecifier:u,importNamespaceSpecifier:p,importSpecifier:f,memberExpression:d,stringLiteral:h,variableDeclaration:m,variableDeclarator:y}=s;class ImportBuilder{constructor(e,t,r){this._statements=[];this._resultName=null;this._scope=null;this._hub=null;this._importedSource=void 0;this._scope=t;this._hub=r;this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){this._statements.push(c([],h(this._importedSource)));return this}require(){this._statements.push(o(i(l("require"),[h(this._importedSource)])));return this}namespace(e="namespace"){const t=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];n(r.type==="ImportDeclaration");n(r.specifiers.length===0);r.specifiers=[p(t)];this._resultName=a(t);return this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];n(t.type==="ImportDeclaration");n(t.specifiers.length===0);t.specifiers=[u(e)];this._resultName=a(e);return this}named(e,t){if(t==="default")return this.default(e);e=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];n(r.type==="ImportDeclaration");n(r.specifiers.length===0);r.specifiers=[f(e,l(t))];this._resultName=a(e);return this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];if(t.type!=="ExpressionStatement"){n(this._resultName);t=o(this._resultName);this._statements.push(t)}this._statements[this._statements.length-1]=m("var",[y(e,t.expression)]);this._resultName=a(e);return this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];if(t.type==="ExpressionStatement"){t.expression=i(e,[t.expression])}else if(t.type==="VariableDeclaration"){n(t.declarations.length===1);t.declarations[0].init=i(e,[t.declarations[0].init])}else{n.fail("Unexpected type.")}return this}prop(e){const t=this._statements[this._statements.length-1];if(t.type==="ExpressionStatement"){t.expression=d(t.expression,l(e))}else if(t.type==="VariableDeclaration"){n(t.declarations.length===1);t.declarations[0].init=d(t.declarations[0].init,l(e))}else{n.fail("Unexpected type:"+t.type)}return this}read(e){this._resultName=d(this._resultName,l(e))}}t["default"]=ImportBuilder},4959:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(9491);var s=r(6953);var i=r(2186);var a=r(8235);const{numericLiteral:o,sequenceExpression:l}=s;class ImportInjector{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:false,ensureNoContext:false,importPosition:"before"};const n=e.find((e=>e.isProgram()));this._programPath=n;this._programScope=n.scope;this._hub=n.hub;this._defaultOpts=this._applyDefaults(t,r,true)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){n(typeof e==="string");return this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),false)}_applyDefaults(e,t,r=false){const s=[];if(typeof e==="string"){s.push({importedSource:e});s.push(t)}else{n(!t,"Unexpected secondary arguments.");s.push(e)}const i=Object.assign({},this._defaultOpts);for(const e of s){if(!e)continue;Object.keys(i).forEach((t=>{if(e[t]!==undefined)i[t]=e[t]}));if(!r){if(e.nameHint!==undefined)i.nameHint=e.nameHint;if(e.blockHoist!==undefined)i.blockHoist=e.blockHoist}}return i}_generateImport(e,t){const r=t==="default";const n=!!t&&!r;const s=t===null;const{importedSource:c,importedType:u,importedInterop:p,importingInterop:f,ensureLiveReference:d,ensureNoContext:h,nameHint:m,importPosition:y,blockHoist:g}=e;let b=m||t;const T=(0,a.default)(this._programPath);const S=T&&f==="node";const E=T&&f==="babel";if(y==="after"&&!T){throw new Error(`"importPosition": "after" is only supported in modules`)}const x=new i.default(c,this._programScope,this._hub);if(u==="es6"){if(!S&&!E){throw new Error("Cannot import an ES6 module from CommonJS")}x.import();if(s){x.namespace(m||c)}else if(r||n){x.named(b,t)}}else if(u!=="commonjs"){throw new Error(`Unexpected interopType "${u}"`)}else if(p==="babel"){if(S){b=b!=="default"?b:c;const e=`${c}$es6Default`;x.import();if(s){x.default(e).var(b||c).wildcardInterop()}else if(r){if(d){x.default(e).var(b||c).defaultInterop().read("default")}else{x.default(e).var(b).defaultInterop().prop(t)}}else if(n){x.default(e).read(t)}}else if(E){x.import();if(s){x.namespace(b||c)}else if(r||n){x.named(b,t)}}else{x.require();if(s){x.var(b||c).wildcardInterop()}else if((r||n)&&d){if(r){b=b!=="default"?b:c;x.var(b).read(t);x.defaultInterop()}else{x.var(c).read(t)}}else if(r){x.var(b).defaultInterop().prop(t)}else if(n){x.var(b).prop(t)}}}else if(p==="compiled"){if(S){x.import();if(s){x.default(b||c)}else if(r||n){x.default(c).read(b)}}else if(E){x.import();if(s){x.namespace(b||c)}else if(r||n){x.named(b,t)}}else{x.require();if(s){x.var(b||c)}else if(r||n){if(d){x.var(c).read(b)}else{x.prop(t).var(b)}}}}else if(p==="uncompiled"){if(r&&d){throw new Error("No live reference for commonjs default")}if(S){x.import();if(s){x.default(b||c)}else if(r){x.default(b)}else if(n){x.default(c).read(b)}}else if(E){x.import();if(s){x.default(b||c)}else if(r){x.default(b)}else if(n){x.named(b,t)}}else{x.require();if(s){x.var(b||c)}else if(r){x.var(b)}else if(n){if(d){x.var(c).read(b)}else{x.var(b).prop(t)}}}}else{throw new Error(`Unknown importedInterop "${p}".`)}const{statements:P,resultName:v}=x.done();this._insertStatements(P,y,g);if((r||n)&&h&&v.type!=="Identifier"){return l([o(0),v])}return v}_insertStatements(e,t="before",r=3){const n=this._programPath.get("body");if(t==="after"){for(let t=n.length-1;t>=0;t--){if(n[t].isImportDeclaration()){n[t].insertAfter(e);return}}}else{e.forEach((e=>{e._blockHoist=r}));const t=n.find((e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4}));if(t){t.insertBefore(e);return}}this._programPath.unshiftContainer("body",e)}}t["default"]=ImportInjector},2056:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"ImportInjector",{enumerable:true,get:function(){return n.default}});t.addDefault=addDefault;t.addNamed=addNamed;t.addNamespace=addNamespace;t.addSideEffect=addSideEffect;Object.defineProperty(t,"isModule",{enumerable:true,get:function(){return s.default}});var n=r(4959);var s=r(8235);function addDefault(e,t,r){return new n.default(e).addDefault(t,r)}function addNamed(e,t,r,s){return new n.default(e).addNamed(t,r,s)}function addNamespace(e,t,r){return new n.default(e).addNamespace(t,r)}function addSideEffect(e,t,r){return new n.default(e).addSideEffect(t,r)}},8235:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=isModule;function isModule(e){const{sourceType:t}=e.node;if(t!=="module"&&t!=="script"){throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`)}return e.node.sourceType==="module"}},349:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=getModuleName;{const e=getModuleName;t["default"]=getModuleName=function getModuleName(t,r){var n,s,i,a;return e(t,{moduleId:(n=r.moduleId)!=null?n:t.moduleId,moduleIds:(s=r.moduleIds)!=null?s:t.moduleIds,getModuleId:(i=r.getModuleId)!=null?i:t.getModuleId,moduleRoot:(a=r.moduleRoot)!=null?a:t.moduleRoot})}}function getModuleName(e,t){const{filename:r,filenameRelative:n=r,sourceRoot:s=t.moduleRoot}=e;const{moduleId:i,moduleIds:a=!!i,getModuleId:o,moduleRoot:l=s}=t;if(!a)return null;if(i!=null&&!o){return i}let c=l!=null?l+"/":"";if(n){const e=s!=null?new RegExp("^"+s+"/?"):"";c+=n.replace(e,"").replace(/\.(\w*?)$/,"")}c=c.replace(/\\/g,"/");if(o){return o(c)||c}else{return c}}},1914:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.buildNamespaceInitStatements=buildNamespaceInitStatements;t.ensureStatementsHoisted=ensureStatementsHoisted;Object.defineProperty(t,"getModuleName",{enumerable:true,get:function(){return u.default}});Object.defineProperty(t,"hasExports",{enumerable:true,get:function(){return c.hasExports}});Object.defineProperty(t,"isModule",{enumerable:true,get:function(){return a.isModule}});Object.defineProperty(t,"isSideEffectImport",{enumerable:true,get:function(){return c.isSideEffectImport}});t.rewriteModuleStatementsAndPrepareHeader=rewriteModuleStatementsAndPrepareHeader;Object.defineProperty(t,"rewriteThis",{enumerable:true,get:function(){return o.default}});t.wrapInterop=wrapInterop;var n=r(9491);var s=r(6953);var i=r(9767);var a=r(2056);var o=r(9094);var l=r(2329);var c=r(6943);var u=r(349);const{booleanLiteral:p,callExpression:f,cloneNode:d,directive:h,directiveLiteral:m,expressionStatement:y,identifier:g,isIdentifier:b,memberExpression:T,stringLiteral:S,valueToNode:E,variableDeclaration:x,variableDeclarator:P}=s;function rewriteModuleStatementsAndPrepareHeader(e,{loose:t,exportName:r,strict:s,allowTopLevelThis:i,strictMode:u,noInterop:p,importInterop:f=(p?"none":"babel"),lazy:d,esNamespaceOnly:y,filename:g,constantReexports:b=t,enumerableModuleMeta:T=t,noIncompleteNsImportDetection:S}){(0,c.validateImportInteropOption)(f);n((0,a.isModule)(e),"Cannot process module statements in a script");e.node.sourceType="script";const E=(0,c.default)(e,r,{importInterop:f,initializeReexports:b,lazy:d,esNamespaceOnly:y,filename:g});if(!i){(0,o.default)(e)}(0,l.default)(e,E);if(u!==false){const t=e.node.directives.some((e=>e.value.value==="use strict"));if(!t){e.unshiftContainer("directives",h(m("use strict")))}}const x=[];if((0,c.hasExports)(E)&&!s){x.push(buildESModuleHeader(E,T))}const P=buildExportNameListDeclaration(e,E);if(P){E.exportNameListName=P.name;x.push(P.statement)}x.push(...buildExportInitializationStatements(e,E,b,S));return{meta:E,headers:x}}function ensureStatementsHoisted(e){e.forEach((e=>{e._blockHoist=3}))}function wrapInterop(e,t,r){if(r==="none"){return null}if(r==="node-namespace"){return f(e.hub.addHelper("interopRequireWildcard"),[t,p(true)])}else if(r==="node-default"){return null}let n;if(r==="default"){n="interopRequireDefault"}else if(r==="namespace"){n="interopRequireWildcard"}else{throw new Error(`Unknown interop: ${r}`)}return f(e.hub.addHelper(n),[t])}function buildNamespaceInitStatements(e,t,r=false){const n=[];let s=g(t.name);if(t.lazy)s=f(s,[]);for(const e of t.importsNamespace){if(e===t.name)continue;n.push(i.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:d(s)}))}if(r){n.push(...buildReexportsFromMeta(e,t,true))}for(const r of t.reexportNamespace){n.push((t.lazy?i.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:i.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:r,NAMESPACE:d(s)}))}if(t.reexportAll){const i=buildNamespaceReexport(e,d(s),r);i.loc=t.reexportAll.loc;n.push(i)}return n}const v={constant:i.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:i.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:i.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `};const buildReexportsFromMeta=(e,t,r)=>{const n=t.lazy?f(g(t.name),[]):g(t.name);const{stringSpecifiers:s}=e;return Array.from(t.reexports,(([i,a])=>{let o=d(n);if(a==="default"&&t.interop==="node-default"){}else if(s.has(a)){o=T(o,S(a),true)}else{o=T(o,g(a))}const l={EXPORTS:e.exportName,EXPORT_NAME:i,NAMESPACE_IMPORT:o};if(r||b(o)){if(s.has(i)){return v.constantComputed(l)}else{return v.constant(l)}}else{return v.spec(l)}}))};function buildESModuleHeader(e,t=false){return(t?i.default.statement`
        EXPORTS.__esModule = true;
      `:i.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}function buildNamespaceReexport(e,t,r){return(r?i.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:i.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?(0,i.default)`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}function buildExportNameListDeclaration(e,t){const r=Object.create(null);for(const e of t.local.values()){for(const t of e.names){r[t]=true}}let n=false;for(const e of t.source.values()){for(const t of e.reexports.keys()){r[t]=true}for(const t of e.reexportNamespace){r[t]=true}n=n||!!e.reexportAll}if(!n||Object.keys(r).length===0)return null;const s=e.scope.generateUidIdentifier("exportNames");delete r.default;return{name:s.name,statement:x("var",[P(s,E(r))])}}function buildExportInitializationStatements(e,t,r=false,n=false){const s=[];for(const[e,r]of t.local){if(r.kind==="import"){}else if(r.kind==="hoisted"){s.push([r.names[0],buildInitStatement(t,r.names,g(e))])}else if(!n){for(const e of r.names){s.push([e,null])}}}for(const e of t.source.values()){if(!r){const r=buildReexportsFromMeta(t,e,false);const n=[...e.reexports.keys()];for(let e=0;e<r.length;e++){s.push([n[e],r[e]])}}if(!n){for(const t of e.reexportNamespace){s.push([t,null])}}}s.sort((([e],[t])=>{if(e<t)return-1;if(t<e)return 1;return 0}));const i=[];if(n){for(const[,e]of s){i.push(e)}}else{const r=100;for(let n=0;n<s.length;n+=r){let a=[];for(let o=0;o<r&&n+o<s.length;o++){const[r,l]=s[n+o];if(l!==null){if(a.length>0){i.push(buildInitStatement(t,a,e.scope.buildUndefinedNode()));a=[]}i.push(l)}else{a.push(r)}}if(a.length>0){i.push(buildInitStatement(t,a,e.scope.buildUndefinedNode()))}}}return i}const A={computed:i.default.expression`EXPORTS["NAME"] = VALUE`,default:i.default.expression`EXPORTS.NAME = VALUE`};function buildInitStatement(e,t,r){const{stringSpecifiers:n,exportName:s}=e;return y(t.reduce(((e,t)=>{const r={EXPORTS:s,NAME:t,VALUE:e};if(n.has(t)){return A.computed(r)}else{return A.default(r)}}),r))}},6943:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=normalizeModuleAndLoadMetadata;t.hasExports=hasExports;t.isSideEffectImport=isSideEffectImport;t.validateImportInteropOption=validateImportInteropOption;var n=r(1017);var s=r(7239);var i=r(1705);function hasExports(e){return e.hasExports}function isSideEffectImport(e){return e.imports.size===0&&e.importsNamespace.size===0&&e.reexports.size===0&&e.reexportNamespace.size===0&&!e.reexportAll}function validateImportInteropOption(e){if(typeof e!=="function"&&e!=="none"&&e!=="babel"&&e!=="node"){throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`)}return e}function resolveImportInterop(e,t,r){if(typeof e==="function"){return validateImportInteropOption(e(t,r))}return e}function normalizeModuleAndLoadMetadata(e,t,{importInterop:r,initializeReexports:n=false,lazy:s=false,esNamespaceOnly:i=false,filename:a}){if(!t){t=e.scope.generateUidIdentifier("exports").name}const o=new Set;nameAnonymousExports(e);const{local:l,source:c,hasExports:u}=getModuleMetadata(e,{initializeReexports:n,lazy:s},o);removeModuleDeclarations(e);for(const[,e]of c){if(e.importsNamespace.size>0){e.name=e.importsNamespace.values().next().value}const t=resolveImportInterop(r,e.source,a);if(t==="none"){e.interop="none"}else if(t==="node"&&e.interop==="namespace"){e.interop="node-namespace"}else if(t==="node"&&e.interop==="default"){e.interop="node-default"}else if(i&&e.interop==="namespace"){e.interop="default"}}return{exportName:t,exportNameListName:null,hasExports:u,local:l,source:c,stringSpecifiers:o}}function getExportSpecifierName(e,t){if(e.isIdentifier()){return e.node.name}else if(e.isStringLiteral()){const r=e.node.value;if(!(0,s.isIdentifierName)(r)){t.add(r)}return r}else{throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}}function assertExportSpecifier(e){if(e.isExportSpecifier()){return}else if(e.isExportNamespaceSpecifier()){throw e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`.")}else{throw e.buildCodeFrameError("Unexpected export specifier type")}}function getModuleMetadata(e,{lazy:t,initializeReexports:r},s){const i=getLocalExportMetadata(e,r,s);const a=new Map;const getData=t=>{const r=t.value;let s=a.get(r);if(!s){s={name:e.scope.generateUidIdentifier((0,n.basename)(r,(0,n.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:false,source:r};a.set(r,s)}return s};let o=false;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const t=getData(e.node.source);if(!t.loc)t.loc=e.node.loc;e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const n=i.get(r);if(n){i.delete(r);n.names.forEach((e=>{t.reexports.set(e,"default")}))}}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const n=i.get(r);if(n){i.delete(r);n.names.forEach((e=>{t.reexportNamespace.add(e)}))}}else if(e.isImportSpecifier()){const r=getExportSpecifierName(e.get("imported"),s);const n=e.get("local").node.name;t.imports.set(n,r);const a=i.get(n);if(a){i.delete(n);a.names.forEach((e=>{t.reexports.set(e,r)}))}}}))}else if(e.isExportAllDeclaration()){o=true;const t=getData(e.node.source);if(!t.loc)t.loc=e.node.loc;t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){o=true;const t=getData(e.node.source);if(!t.loc)t.loc=e.node.loc;e.get("specifiers").forEach((e=>{assertExportSpecifier(e);const r=getExportSpecifierName(e.get("local"),s);const n=getExportSpecifierName(e.get("exported"),s);t.reexports.set(n,r);if(n==="__esModule"){throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}}))}else if(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration()){o=true}}));for(const e of a.values()){let t=false;let r=false;if(e.importsNamespace.size>0){t=true;r=true}if(e.reexportAll){r=true}for(const n of e.imports.values()){if(n==="default")t=true;else r=true}for(const n of e.reexports.values()){if(n==="default")t=true;else r=true}if(t&&r){e.interop="namespace"}else if(t){e.interop="default"}}for(const[e,r]of a){if(t!==false&&!(isSideEffectImport(r)||r.reexportAll)){if(t===true){r.lazy=!/\./.test(e)}else if(Array.isArray(t)){r.lazy=t.indexOf(e)!==-1}else if(typeof t==="function"){r.lazy=t(e)}else{throw new Error(`.lazy must be a boolean, string array, or function`)}}}return{hasExports:o,local:i,source:a}}function getLocalExportMetadata(e,t,r){const n=new Map;e.get("body").forEach((e=>{let r;if(e.isImportDeclaration()){r="import"}else{if(e.isExportDefaultDeclaration())e=e.get("declaration");if(e.isExportNamedDeclaration()){if(e.node.declaration){e=e.get("declaration")}else if(t&&e.node.source&&e.get("source").isStringLiteral()){e.get("specifiers").forEach((e=>{assertExportSpecifier(e);n.set(e.get("local").node.name,"block")}));return}}if(e.isFunctionDeclaration()){r="hoisted"}else if(e.isClassDeclaration()){r="block"}else if(e.isVariableDeclaration({kind:"var"})){r="var"}else if(e.isVariableDeclaration()){r="block"}else{return}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{n.set(e,r)}))}));const s=new Map;const getLocalMetadata=e=>{const t=e.node.name;let r=s.get(t);if(!r){const i=n.get(t);if(i===undefined){throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`)}r={names:[],kind:i};s.set(t,r)}return r};e.get("body").forEach((e=>{if(e.isExportNamedDeclaration()&&(t||!e.node.source)){if(e.node.declaration){const t=e.get("declaration");const r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach((e=>{if(e==="__esModule"){throw t.buildCodeFrameError('Illegal export "__esModule".')}getLocalMetadata(r[e]).names.push(e)}))}else{e.get("specifiers").forEach((e=>{const t=e.get("local");const n=e.get("exported");const s=getLocalMetadata(t);const i=getExportSpecifierName(n,r);if(i==="__esModule"){throw n.buildCodeFrameError('Illegal export "__esModule".')}s.names.push(i)}))}}else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(t.isFunctionDeclaration()||t.isClassDeclaration()){getLocalMetadata(t.get("id")).names.push("default")}else{throw t.buildCodeFrameError("Unexpected default expression export.")}}}));return s}function nameAnonymousExports(e){e.get("body").forEach((e=>{if(!e.isExportDefaultDeclaration())return;(0,i.default)(e)}))}function removeModuleDeclarations(e){e.get("body").forEach((e=>{if(e.isImportDeclaration()){e.remove()}else if(e.isExportNamedDeclaration()){if(e.node.declaration){e.node.declaration._blockHoist=e.node._blockHoist;e.replaceWith(e.node.declaration)}else{e.remove()}}else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(t.isFunctionDeclaration()||t.isClassDeclaration()){t._blockHoist=e.node._blockHoist;e.replaceWith(t)}else{throw t.buildCodeFrameError("Unexpected default expression export.")}}else if(e.isExportAllDeclaration()){e.remove()}}))}},2329:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=rewriteLiveReferences;var n=r(9491);var s=r(6953);var i=r(9767);var a=r(7798);const{assignmentExpression:o,callExpression:l,cloneNode:c,expressionStatement:u,getOuterBindingIdentifiers:p,identifier:f,isMemberExpression:d,isVariableDeclaration:h,jsxIdentifier:m,jsxMemberExpression:y,memberExpression:g,numericLiteral:b,sequenceExpression:T,stringLiteral:S,variableDeclaration:E,variableDeclarator:x}=s;function isInType(e){do{switch(e.parent.type){case"TSTypeAnnotation":case"TSTypeAliasDeclaration":case"TSTypeReference":case"TypeAnnotation":case"TypeAlias":return true;case"ExportSpecifier":return e.parentPath.parent.exportKind==="type";default:if(e.parentPath.isStatement()||e.parentPath.isExpression()){return false}}}while(e=e.parentPath)}function rewriteLiveReferences(e,t){const r=new Map;const n=new Map;const requeueInParent=t=>{e.requeue(t)};for(const[e,n]of t.source){for(const[t,s]of n.imports){r.set(t,[e,s,null])}for(const t of n.importsNamespace){r.set(t,[e,null,t])}}for(const[e,r]of t.local){let t=n.get(e);if(!t){t=[];n.set(e,t)}t.push(...r.names)}const s={metadata:t,requeueInParent:requeueInParent,scope:e.scope,exported:n};e.traverse(P,s);(0,a.default)(e,new Set([...Array.from(r.keys()),...Array.from(n.keys())]),false);const i={seen:new WeakSet,metadata:t,requeueInParent:requeueInParent,scope:e.scope,imported:r,exported:n,buildImportReference:([e,r,n],s)=>{const i=t.source.get(e);if(n){if(i.lazy)s=l(s,[]);return s}let a=f(i.name);if(i.lazy)a=l(a,[]);if(r==="default"&&i.interop==="node-default"){return a}const o=t.stringSpecifiers.has(r);return g(a,o?S(r):f(r),o)}};e.traverse(v,i)}const P={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;const{id:s}=e.node;if(!s)throw new Error("Expected class to have a name");const i=s.name;const a=r.get(i)||[];if(a.length>0){const r=u(buildBindingExportAssignmentExpression(n,a,f(i)));r._blockHoist=e.node._blockHoist;t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((s=>{const i=r.get(s)||[];if(i.length>0){const r=u(buildBindingExportAssignmentExpression(n,i,f(s)));r._blockHoist=e.node._blockHoist;t(e.insertAfter(r)[0])}}))}};const buildBindingExportAssignmentExpression=(e,t,r)=>(t||[]).reduce(((t,r)=>{const{stringSpecifiers:n}=e;const s=n.has(r);return o("=",g(f(e.exportName),s?S(r):f(r),s),t)}),r);const buildImportThrow=e=>i.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `;const v={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:n,imported:s,requeueInParent:i}=this;if(t.has(e.node))return;t.add(e.node);const a=e.node.name;const o=s.get(a);if(o){if(isInType(e)){throw e.buildCodeFrameError(`Cannot transform the imported binding "${a}" since it's also used in a type annotation. `+`Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`)}const t=e.scope.getBinding(a);const s=n.getBinding(a);if(s!==t)return;const l=r(o,e.node);l.loc=e.node.loc;if((e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&d(l)){e.replaceWith(T([b(0),l]))}else if(e.isJSXIdentifier()&&d(l)){const{object:t,property:r}=l;e.replaceWith(y(m(t.name),m(r.name)))}else{e.replaceWith(l)}i(e);e.skip()}},UpdateExpression(e){const{scope:t,seen:r,imported:n,exported:s,requeueInParent:i,buildImportReference:a}=this;if(r.has(e.node))return;r.add(e.node);const l=e.get("argument");if(l.isMemberExpression())return;const u=e.node;if(l.isIdentifier()){const r=l.node.name;if(t.getBinding(r)!==e.scope.getBinding(r)){return}const i=s.get(r);const p=n.get(r);if((i==null?void 0:i.length)>0||p){if(p){e.replaceWith(o(u.operator[0]+"=",a(p,l.node),buildImportThrow(r)))}else if(u.prefix){e.replaceWith(buildBindingExportAssignmentExpression(this.metadata,i,c(u)))}else{const n=t.generateDeclaredUidIdentifier(r);e.replaceWith(T([o("=",c(n),c(u)),buildBindingExportAssignmentExpression(this.metadata,i,f(r)),c(n)]))}}}i(e);e.skip()},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:s,exported:i,requeueInParent:a,buildImportReference:o}=this;if(r.has(e.node))return;r.add(e.node);const l=e.get("left");if(l.isMemberExpression())return;if(l.isIdentifier()){const r=l.node.name;if(t.getBinding(r)!==e.scope.getBinding(r)){return}const c=i.get(r);const u=s.get(r);if((c==null?void 0:c.length)>0||u){n(e.node.operator==="=","Path was not simplified");const t=e.node;if(u){t.left=o(u,t.left);t.right=T([t.right,buildImportThrow(r)])}e.replaceWith(buildBindingExportAssignmentExpression(this.metadata,c,t));a(e)}}else{const r=l.getOuterBindingIdentifiers();const n=Object.keys(r).filter((r=>t.getBinding(r)===e.scope.getBinding(r)));const o=n.find((e=>s.has(e)));if(o){e.node.right=T([e.node.right,buildImportThrow(o)])}const c=[];n.forEach((e=>{const t=i.get(e)||[];if(t.length>0){c.push(buildBindingExportAssignmentExpression(this.metadata,t,f(e)))}}));if(c.length>0){let t=T(c);if(e.parentPath.isExpressionStatement()){t=u(t);t._blockHoist=e.parentPath.node._blockHoist}const r=e.insertAfter(t)[0];a(r)}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e;const{left:n}=r;const{exported:s,imported:i,scope:a}=this;if(!h(n)){let r=false,l;const f=e.get("body").scope;for(const e of Object.keys(p(n))){if(a.getBinding(e)===t.getBinding(e)){if(s.has(e)){r=true;if(f.hasOwnBinding(e)){f.rename(e)}}if(i.has(e)&&!l){l=e}}}if(!r&&!l){return}e.ensureBlock();const d=e.get("body");const h=t.generateUidIdentifierBasedOnNode(n);e.get("left").replaceWith(E("let",[x(c(h))]));t.registerDeclaration(e.get("left"));if(r){d.unshiftContainer("body",u(o("=",n,h)))}if(l){d.unshiftContainer("body",u(buildImportThrow(l)))}}}}},9094:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=rewriteThis;var n=r(5166);var s=r(7734);var i=r(6953);const{numericLiteral:a,unaryExpression:o}=i;function rewriteThis(e){(0,s.default)(e.node,Object.assign({},l,{noScope:true}))}const l=s.default.visitors.merge([n.default,{ThisExpression(e){e.replaceWith(o("void",a(0),true))}}])},7798:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=simplifyAccess;var n=r(6953);const{LOGICAL_OPERATORS:s,assignmentExpression:i,binaryExpression:a,cloneNode:o,identifier:l,logicalExpression:c,numericLiteral:u,sequenceExpression:p,unaryExpression:f}=n;function simplifyAccess(e,t,r=true){e.traverse(d,{scope:e.scope,bindingNames:t,seen:new WeakSet,includeUpdateExpression:r})}const d={UpdateExpression:{exit(e){const{scope:t,bindingNames:r,includeUpdateExpression:n}=this;if(!n){return}const s=e.get("argument");if(!s.isIdentifier())return;const c=s.node.name;if(!r.has(c))return;if(t.getBinding(c)!==e.scope.getBinding(c)){return}if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t=e.node.operator=="++"?"+=":"-=";e.replaceWith(i(t,s.node,u(1)))}else if(e.node.prefix){e.replaceWith(i("=",l(c),a(e.node.operator[0],f("+",s.node),u(1))))}else{const t=e.scope.generateUidIdentifierBasedOnNode(s.node,"old");const r=t.name;e.scope.push({id:t});const n=a(e.node.operator[0],l(r),u(1));e.replaceWith(p([i("=",l(r),f("+",s.node)),i("=",o(s.node),n),l(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:n}=this;if(e.node.operator==="=")return;if(r.has(e.node))return;r.add(e.node);const l=e.get("left");if(!l.isIdentifier())return;const u=l.node.name;if(!n.has(u))return;if(t.getBinding(u)!==e.scope.getBinding(u)){return}const p=e.node.operator.slice(0,-1);if(s.includes(p)){e.replaceWith(c(p,e.node.left,i("=",o(e.node.left),e.node.right)))}else{e.node.right=a(p,o(e.node.left),e.node.right);e.node.operator="="}}}}},1705:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=splitExportDeclaration;var n=r(6953);const{cloneNode:s,exportNamedDeclaration:i,exportSpecifier:a,identifier:o,variableDeclaration:l,variableDeclarator:c}=n;function splitExportDeclaration(e){if(!e.isExportDeclaration()){throw new Error("Only export declarations can be split.")}const t=e.isExportDefaultDeclaration();const r=e.get("declaration");const n=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||n;const u=r.isScope()?r.scope.parent:r.scope;let p=r.node.id;let f=false;if(!p){f=true;p=u.generateUidIdentifier("default");if(t||r.isFunctionExpression()||r.isClassExpression()){r.node.id=s(p)}}const d=t?r:l("var",[c(s(p),r.node)]);const h=i(null,[a(s(p),o("default"))]);e.insertAfter(h);e.replaceWith(d);if(f){u.registerDeclaration(e)}return e}if(e.get("specifiers").length>0){throw new Error("It doesn't make sense to split exported specifiers.")}const u=r.getOuterBindingIdentifiers();const p=Object.keys(u).map((e=>a(o(e),o(e))));const f=i(null,p);e.insertAfter(f);e.replaceWith(r.node);return e}},8676:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.findSuggestion=findSuggestion;const{min:r}=Math;function levenshtein(e,t){let n=[],s=[],i,a;const o=e.length,l=t.length;if(!o){return l}if(!l){return o}for(a=0;a<=l;a++){n[a]=a}for(i=1;i<=o;i++){for(s=[i],a=1;a<=l;a++){s[a]=e[i-1]===t[a-1]?n[a-1]:r(n[a-1],n[a],s[a-1])+1}n=s}return s[l]}function findSuggestion(e,t){const n=t.map((t=>levenshtein(t,e)));return t[n.indexOf(r(...n))]}},46:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"OptionValidator",{enumerable:true,get:function(){return n.OptionValidator}});Object.defineProperty(t,"findSuggestion",{enumerable:true,get:function(){return s.findSuggestion}});var n=r(3952);var s=r(8676)},3952:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.OptionValidator=void 0;var n=r(8676);class OptionValidator{constructor(e){this.descriptor=e}validateTopLevelOptions(e,t){const r=Object.keys(t);for(const t of Object.keys(e)){if(!r.includes(t)){throw new Error(this.formatMessage(`'${t}' is not a valid top-level option.\n- Did you mean '${(0,n.findSuggestion)(t,r)}'?`))}}}validateBooleanOption(e,t,r){if(t===undefined){return r}else{this.invariant(typeof t==="boolean",`'${e}' option must be a boolean.`)}return t}validateStringOption(e,t,r){if(t===undefined){return r}else{this.invariant(typeof t==="string",`'${e}' option must be a string.`)}return t}invariant(e,t){if(!e){throw new Error(this.formatMessage(t))}}formatMessage(e){return`${this.descriptor}: ${e}`}}t.OptionValidator=OptionValidator},5971:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(9767);function helper(e,t){return Object.freeze({minVersion:e,ast:()=>n.default.program.ast(t,{preserveComments:true})})}var s=Object.freeze({applyDecs:helper("7.17.8",'function createMetadataMethodsForProperty(metadataMap,kind,property,decoratorFinishedRef){return{getMetadata:function(key){assertNotFinished(decoratorFinishedRef,"getMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0!==metadataForKey)if(1===kind){var pub=metadataForKey.public;if(void 0!==pub)return pub[property]}else if(2===kind){var priv=metadataForKey.private;if(void 0!==priv)return priv.get(property)}else if(Object.hasOwnProperty.call(metadataForKey,"constructor"))return metadataForKey.constructor},setMetadata:function(key,value){assertNotFinished(decoratorFinishedRef,"setMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0===metadataForKey&&(metadataForKey=metadataMap[key]={}),1===kind){var pub=metadataForKey.public;void 0===pub&&(pub=metadataForKey.public={}),pub[property]=value}else if(2===kind){var priv=metadataForKey.priv;void 0===priv&&(priv=metadataForKey.private=new Map),priv.set(property,value)}else metadataForKey.constructor=value}}}function convertMetadataMapToFinal(obj,metadataMap){var parentMetadataMap=obj[Symbol.metadata||Symbol.for("Symbol.metadata")],metadataKeys=Object.getOwnPropertySymbols(metadataMap);if(0!==metadataKeys.length){for(var i=0;i<metadataKeys.length;i++){var key=metadataKeys[i],metaForKey=metadataMap[key],parentMetaForKey=parentMetadataMap?parentMetadataMap[key]:null,pub=metaForKey.public,parentPub=parentMetaForKey?parentMetaForKey.public:null;pub&&parentPub&&Object.setPrototypeOf(pub,parentPub);var priv=metaForKey.private;if(priv){var privArr=Array.from(priv.values()),parentPriv=parentMetaForKey?parentMetaForKey.private:null;parentPriv&&(privArr=privArr.concat(parentPriv)),metaForKey.private=privArr}parentMetaForKey&&Object.setPrototypeOf(metaForKey,parentMetaForKey)}parentMetadataMap&&Object.setPrototypeOf(metadataMap,parentMetadataMap),obj[Symbol.metadata||Symbol.for("Symbol.metadata")]=metadataMap}}function createAddInitializerMethod(initializers,decoratorFinishedRef){return function(initializer){assertNotFinished(decoratorFinishedRef,"addInitializer"),assertCallable(initializer,"An initializer"),initializers.push(initializer)}}function memberDec(dec,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value){var kindStr;switch(kind){case 1:kindStr="accessor";break;case 2:kindStr="method";break;case 3:kindStr="getter";break;case 4:kindStr="setter";break;default:kindStr="field"}var metadataKind,metadataName,ctx={kind:kindStr,name:isPrivate?"#"+name:name,isStatic:isStatic,isPrivate:isPrivate},decoratorFinishedRef={v:!1};if(0!==kind&&(ctx.addInitializer=createAddInitializerMethod(initializers,decoratorFinishedRef)),isPrivate){metadataKind=2,metadataName=Symbol(name);var access={};0===kind?(access.get=desc.get,access.set=desc.set):2===kind?access.get=function(){return desc.value}:(1!==kind&&3!==kind||(access.get=function(){return desc.get.call(this)}),1!==kind&&4!==kind||(access.set=function(v){desc.set.call(this,v)})),ctx.access=access}else metadataKind=1,metadataName=name;try{return dec(value,Object.assign(ctx,createMetadataMethodsForProperty(metadataMap,metadataKind,metadataName,decoratorFinishedRef)))}finally{decoratorFinishedRef.v=!0}}function assertNotFinished(decoratorFinishedRef,fnName){if(decoratorFinishedRef.v)throw new Error("attempted to call "+fnName+" after decoration was finished")}function assertMetadataKey(key){if("symbol"!=typeof key)throw new TypeError("Metadata keys must be symbols, received: "+key)}function assertCallable(fn,hint){if("function"!=typeof fn)throw new TypeError(hint+" must be a function")}function assertValidReturnValue(kind,value){var type=typeof value;if(1===kind){if("object"!==type||null===value)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==value.get&&assertCallable(value.get,"accessor.get"),void 0!==value.set&&assertCallable(value.set,"accessor.set"),void 0!==value.init&&assertCallable(value.init,"accessor.init"),void 0!==value.initializer&&assertCallable(value.initializer,"accessor.initializer")}else if("function"!==type){var hint;throw hint=0===kind?"field":10===kind?"class":"method",new TypeError(hint+" decorators must return a function or void 0")}}function getInit(desc){var initializer;return null==(initializer=desc.init)&&(initializer=desc.initializer)&&"undefined"!=typeof console&&console.warn(".initializer has been renamed to .init as of March 2022"),initializer}function applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers){var desc,initializer,value,newValue,get,set,decs=decInfo[0];if(isPrivate?desc=0===kind||1===kind?{get:decInfo[3],set:decInfo[4]}:3===kind?{get:decInfo[3]}:4===kind?{set:decInfo[3]}:{value:decInfo[3]}:0!==kind&&(desc=Object.getOwnPropertyDescriptor(base,name)),1===kind?value={get:desc.get,set:desc.set}:2===kind?value=desc.value:3===kind?value=desc.get:4===kind&&(value=desc.set),"function"==typeof decs)void 0!==(newValue=memberDec(decs,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value))&&(assertValidReturnValue(kind,newValue),0===kind?initializer=newValue:1===kind?(initializer=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue);else for(var i=decs.length-1;i>=0;i--){var newInit;if(void 0!==(newValue=memberDec(decs[i],name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value)))assertValidReturnValue(kind,newValue),0===kind?newInit=newValue:1===kind?(newInit=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue,void 0!==newInit&&(void 0===initializer?initializer=newInit:"function"==typeof initializer?initializer=[initializer,newInit]:initializer.push(newInit))}if(0===kind||1===kind){if(void 0===initializer)initializer=function(instance,init){return init};else if("function"!=typeof initializer){var ownInitializers=initializer;initializer=function(instance,init){for(var value=init,i=0;i<ownInitializers.length;i++)value=ownInitializers[i].call(instance,value);return value}}else{var originalInitializer=initializer;initializer=function(instance,init){return originalInitializer.call(instance,init)}}ret.push(initializer)}0!==kind&&(1===kind?(desc.get=value.get,desc.set=value.set):2===kind?desc.value=value:3===kind?desc.get=value:4===kind&&(desc.set=value),isPrivate?1===kind?(ret.push((function(instance,args){return value.get.call(instance,args)})),ret.push((function(instance,args){return value.set.call(instance,args)}))):2===kind?ret.push(value):ret.push((function(instance,args){return value.call(instance,args)})):Object.defineProperty(base,name,desc))}function applyMemberDecs(ret,Class,protoMetadataMap,staticMetadataMap,decInfos){for(var protoInitializers,staticInitializers,existingProtoNonFields=new Map,existingStaticNonFields=new Map,i=0;i<decInfos.length;i++){var decInfo=decInfos[i];if(Array.isArray(decInfo)){var base,metadataMap,initializers,kind=decInfo[1],name=decInfo[2],isPrivate=decInfo.length>3,isStatic=kind>=5;if(isStatic?(base=Class,metadataMap=staticMetadataMap,0!==(kind-=5)&&(initializers=staticInitializers=staticInitializers||[])):(base=Class.prototype,metadataMap=protoMetadataMap,0!==kind&&(initializers=protoInitializers=protoInitializers||[])),0!==kind&&!isPrivate){var existingNonFields=isStatic?existingStaticNonFields:existingProtoNonFields,existingKind=existingNonFields.get(name)||0;if(!0===existingKind||3===existingKind&&4!==kind||4===existingKind&&3!==kind)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+name);!existingKind&&kind>2?existingNonFields.set(name,kind):existingNonFields.set(name,!0)}applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers)}}pushInitializers(ret,protoInitializers),pushInitializers(ret,staticInitializers)}function pushInitializers(ret,initializers){initializers&&ret.push((function(instance){for(var i=0;i<initializers.length;i++)initializers[i].call(instance);return instance}))}function applyClassDecs(ret,targetClass,metadataMap,classDecs){if(classDecs.length>0){for(var initializers=[],newClass=targetClass,name=targetClass.name,i=classDecs.length-1;i>=0;i--){var decoratorFinishedRef={v:!1};try{var ctx=Object.assign({kind:"class",name:name,addInitializer:createAddInitializerMethod(initializers,decoratorFinishedRef)},createMetadataMethodsForProperty(metadataMap,0,name,decoratorFinishedRef)),nextNewClass=classDecs[i](newClass,ctx)}finally{decoratorFinishedRef.v=!0}void 0!==nextNewClass&&(assertValidReturnValue(10,nextNewClass),newClass=nextNewClass)}ret.push(newClass,(function(){for(var i=0;i<initializers.length;i++)initializers[i].call(newClass)}))}}export default function applyDecs(targetClass,memberDecs,classDecs){var ret=[],staticMetadataMap={},protoMetadataMap={};return applyMemberDecs(ret,targetClass,protoMetadataMap,staticMetadataMap,memberDecs),convertMetadataMapToFinal(targetClass.prototype,protoMetadataMap),applyClassDecs(ret,targetClass,staticMetadataMap,classDecs),convertMetadataMapToFinal(targetClass,staticMetadataMap),ret}'),asyncIterator:helper("7.15.9",'export default function _asyncIterator(iterable){var method,async,sync,retry=2;for("undefined"!=typeof Symbol&&(async=Symbol.asyncIterator,sync=Symbol.iterator);retry--;){if(async&&null!=(method=iterable[async]))return method.call(iterable);if(sync&&null!=(method=iterable[sync]))return new AsyncFromSyncIterator(method.call(iterable));async="@@asyncIterator",sync="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(s){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var done=r.done;return Promise.resolve(r.value).then((function(value){return{value:value,done:done}}))}return AsyncFromSyncIterator=function(s){this.s=s,this.n=s.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function(value){var ret=this.s.return;return void 0===ret?Promise.resolve({value:value,done:!0}):AsyncFromSyncIteratorContinuation(ret.apply(this.s,arguments))},throw:function(value){var thr=this.s.return;return void 0===thr?Promise.reject(value):AsyncFromSyncIteratorContinuation(thr.apply(this.s,arguments))}},new AsyncFromSyncIterator(s)}'),jsx:helper("7.0.0-beta.0",'var REACT_ELEMENT_TYPE;export default function _createRawReactElement(type,props,key,children){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var defaultProps=type&&type.defaultProps,childrenLength=arguments.length-3;if(props||0===childrenLength||(props={children:void 0}),1===childrenLength)props.children=children;else if(childrenLength>1){for(var childArray=new Array(childrenLength),i=0;i<childrenLength;i++)childArray[i]=arguments[i+3];props.children=childArray}if(props&&defaultProps)for(var propName in defaultProps)void 0===props[propName]&&(props[propName]=defaultProps[propName]);else props||(props=defaultProps||{});return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:void 0===key?null:""+key,ref:null,props:props,_owner:null}}'),objectSpread2:helper("7.5.0",'import defineProperty from"defineProperty";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}export default function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}'),regeneratorRuntime:helper("7.18.0",'export default function _regeneratorRuntime(){"use strict";\n/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(undefined===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a \'throw\' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}},exports}'),typeof:helper("7.0.0-beta.0",'export default function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}'),wrapRegExp:helper("7.2.6",'import setPrototypeOf from"setPrototypeOf";import inherits from"inherits";export default function _wrapRegExp(){_wrapRegExp=function(re,groups){return new BabelRegExp(re,void 0,groups)};var _super=RegExp.prototype,_groups=new WeakMap;function BabelRegExp(re,flags,groups){var _this=new RegExp(re,flags);return _groups.set(_this,groups||_groups.get(re)),setPrototypeOf(_this,BabelRegExp.prototype)}function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce((function(groups,name){return groups[name]=result[g[name]],groups}),Object.create(null))}return inherits(BabelRegExp,RegExp),BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);return result&&(result.groups=buildGroups(result,this)),result},BabelRegExp.prototype[Symbol.replace]=function(str,substitution){if("string"==typeof substitution){var groups=_groups.get(this);return _super[Symbol.replace].call(this,str,substitution.replace(/\\$<([^>]+)>/g,(function(_,name){return"$"+groups[name]})))}if("function"==typeof substitution){var _this=this;return _super[Symbol.replace].call(this,str,(function(){var args=arguments;return"object"!=typeof args[args.length-1]&&(args=[].slice.call(args)).push(buildGroups(args,_this)),substitution.apply(this,args)}))}return _super[Symbol.replace].call(this,str,substitution)},_wrapRegExp.apply(this,arguments)}')});t["default"]=s},6337:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(9767);var s=r(5971);const i=Object.assign({__proto__:null},s.default);var a=i;t["default"]=a;const helper=e=>t=>({minVersion:e,ast:()=>n.default.program.ast(t)});i.AwaitValue=helper("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`;i.AsyncGenerator=helper("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`;i.wrapAsyncGenerator=helper("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`;i.awaitAsyncGenerator=helper("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`;i.asyncGeneratorDelegate=helper("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`;i.asyncToGenerator=helper("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`;i.classCallCheck=helper("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`;i.createClass=helper("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
`;i.defineEnumerableProperties=helper("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`;i.defaults=helper("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`;i.defineProperty=helper("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`;i.extends=helper("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`;i.objectSpread=helper("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`;i.inherits=helper("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    // We can't use defineProperty to set the prototype in a single step because it
    // doesn't work in Chrome <= 36. https://github.com/babel/babel/issues/14056
    // V8 bug: https://bugs.chromium.org/p/v8/issues/detail?id=3334
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`;i.inheritsLoose=helper("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`;i.getPrototypeOf=helper("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`;i.setPrototypeOf=helper("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
    return _setPrototypeOf(o, p);
  }
`;i.isNativeReflectConstruct=helper("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`;i.construct=helper("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`;i.isNativeFunction=helper("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`;i.wrapNativeSuper=helper("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`;i.instanceof=helper("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`;i.interopRequireDefault=helper("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`;i.interopRequireWildcard=helper("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`;i.newArrowCheck=helper("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`;i.objectDestructuringEmpty=helper("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`;i.objectWithoutPropertiesLoose=helper("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`;i.objectWithoutProperties=helper("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`;i.assertThisInitialized=helper("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`;i.possibleConstructorReturn=helper("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`;i.createSuper=helper("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `;i.superPropBase=helper("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`;i.get=helper("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          // STEP 3. If receiver is not present, then set receiver to target.
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
`;i.set=helper("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`;i.taggedTemplateLiteral=helper("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`;i.taggedTemplateLiteralLoose=helper("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`;i.readOnlyError=helper("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`;i.writeOnlyError=helper("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`;i.classNameTDZError=helper("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`;i.temporalUndefined=helper("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`;i.tdz=helper("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`;i.temporalRef=helper("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`;i.slicedToArray=helper("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;i.slicedToArrayLoose=helper("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;i.toArray=helper("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`;i.toConsumableArray=helper("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`;i.arrayWithoutHoles=helper("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`;i.arrayWithHoles=helper("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`;i.maybeArrayLike=helper("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`;i.iterableToArray=helper("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`;i.iterableToArrayLimit=helper("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`;i.iterableToArrayLimitLoose=helper("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`;i.unsupportedIterableToArray=helper("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`;i.arrayLikeToArray=helper("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`;i.nonIterableSpread=helper("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;i.nonIterableRest=helper("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;i.createForOfIteratorHelper=helper("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`;i.createForOfIteratorHelperLoose=helper("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`;i.skipFirstGeneratorNext=helper("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`;i.toPrimitive=helper("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`;i.toPropertyKey=helper("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`;i.initializerWarningHelper=helper("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`;i.initializerDefineProperty=helper("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`;i.applyDecoratedDescriptor=helper("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`;i.classPrivateFieldLooseKey=helper("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`;i.classPrivateFieldLooseBase=helper("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`;i.classPrivateFieldGet=helper("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;i.classPrivateFieldSet=helper("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;i.classPrivateFieldDestructureSet=helper("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;i.classExtractFieldDescriptor=helper("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`;i.classStaticPrivateFieldSpecGet=helper("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;i.classStaticPrivateFieldSpecSet=helper("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;i.classStaticPrivateMethodGet=helper("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`;i.classStaticPrivateMethodSet=helper("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`;i.classApplyDescriptorGet=helper("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`;i.classApplyDescriptorSet=helper("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`;i.classApplyDescriptorDestructureSet=helper("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`;i.classStaticPrivateFieldDestructureSet=helper("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;i.classCheckPrivateStaticAccess=helper("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`;i.classCheckPrivateStaticFieldDescriptor=helper("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`;i.decorate=helper("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`;i.classPrivateMethodGet=helper("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`;i.checkPrivateRedeclaration=helper("7.14.1")`
  export default function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
`;i.classPrivateFieldInitSpec=helper("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateFieldInitSpec(obj, privateMap, value) {
    checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
`;i.classPrivateMethodInitSpec=helper("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateMethodInitSpec(obj, privateSet) {
    checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
`;{i.classPrivateMethodSet=helper("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }
  `}i.identity=helper("7.17.0")`
  export default function _identity(x) {
    return x;
  }