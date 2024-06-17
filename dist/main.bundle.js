(()=>{var e={998:(e,t,o)=>{const n=o(896),s=o(928),r=o(857),a=o(982),i=o(56).version,c=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function p(e){console.log(`[dotenv@${i}][DEBUG] ${e}`)}function l(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function d(e,t){let o;try{o=new URL(t)}catch(e){if("ERR_INVALID_URL"===e.code){const e=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw e.code="INVALID_DOTENV_KEY",e}throw e}const n=o.password;if(!n){const e=new Error("INVALID_DOTENV_KEY: Missing key part");throw e.code="INVALID_DOTENV_KEY",e}const s=o.searchParams.get("environment");if(!s){const e=new Error("INVALID_DOTENV_KEY: Missing environment part");throw e.code="INVALID_DOTENV_KEY",e}const r=`DOTENV_VAULT_${s.toUpperCase()}`,a=e.parsed[r];if(!a){const e=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${r} in your .env.vault file.`);throw e.code="NOT_FOUND_DOTENV_ENVIRONMENT",e}return{ciphertext:a,key:n}}function u(e){let t=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(const o of e.path)n.existsSync(o)&&(t=o.endsWith(".vault")?o:`${o}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else t=s.resolve(process.cwd(),".env.vault");return n.existsSync(t)?t:null}function h(e){return"~"===e[0]?s.join(r.homedir(),e.slice(1)):e}const g={configDotenv:function(e){const t=s.resolve(process.cwd(),".env");let o="utf8";const r=Boolean(e&&e.debug);e&&e.encoding?o=e.encoding:r&&p("No encoding is specified. UTF-8 is used by default");let a,i=[t];if(e&&e.path)if(Array.isArray(e.path)){i=[];for(const t of e.path)i.push(h(t))}else i=[h(e.path)];const c={};for(const t of i)try{const s=g.parse(n.readFileSync(t,{encoding:o}));g.populate(c,s,e)}catch(e){r&&p(`Failed to load ${t} ${e.message}`),a=e}let l=process.env;return e&&null!=e.processEnv&&(l=e.processEnv),g.populate(l,c,e),a?{parsed:c,error:a}:{parsed:c}},_configVault:function(e){console.log(`[dotenv@${i}][INFO] Loading env from encrypted .env.vault`);const t=g._parseVault(e);let o=process.env;return e&&null!=e.processEnv&&(o=e.processEnv),g.populate(o,t,e),{parsed:t}},_parseVault:function(e){const t=u(e),o=g.configDotenv({path:t});if(!o.parsed){const e=new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);throw e.code="MISSING_DATA",e}const n=l(e).split(","),s=n.length;let r;for(let e=0;e<s;e++)try{const t=d(o,n[e].trim());r=g.decrypt(t.ciphertext,t.key);break}catch(t){if(e+1>=s)throw t}return g.parse(r)},config:function(e){if(0===l(e).length)return g.configDotenv(e);const t=u(e);return t?g._configVault(e):(o=`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`,console.log(`[dotenv@${i}][WARN] ${o}`),g.configDotenv(e));var o},decrypt:function(e,t){const o=Buffer.from(t.slice(-64),"hex");let n=Buffer.from(e,"base64");const s=n.subarray(0,12),r=n.subarray(-16);n=n.subarray(12,-16);try{const e=a.createDecipheriv("aes-256-gcm",o,s);return e.setAuthTag(r),`${e.update(n)}${e.final()}`}catch(e){const t=e instanceof RangeError,o="Invalid key length"===e.message,n="Unsupported state or unable to authenticate data"===e.message;if(t||o){const e=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw e.code="INVALID_DOTENV_KEY",e}if(n){const e=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw e.code="DECRYPTION_FAILED",e}throw e}},parse:function(e){const t={};let o,n=e.toString();for(n=n.replace(/\r\n?/gm,"\n");null!=(o=c.exec(n));){const e=o[1];let n=o[2]||"";n=n.trim();const s=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===s&&(n=n.replace(/\\n/g,"\n"),n=n.replace(/\\r/g,"\r")),t[e]=n}return t},populate:function(e,t,o={}){const n=Boolean(o&&o.debug),s=Boolean(o&&o.override);if("object"!=typeof t){const e=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw e.code="OBJECT_REQUIRED",e}for(const o of Object.keys(t))Object.prototype.hasOwnProperty.call(e,o)?(!0===s&&(e[o]=t[o]),n&&p(!0===s?`"${o}" is already defined and WAS overwritten`:`"${o}" is already defined and was NOT overwritten`)):e[o]=t[o]}};e.exports.configDotenv=g.configDotenv,e.exports._configVault=g._configVault,e.exports._parseVault=g._parseVault,e.exports.config=g.config,e.exports.decrypt=g.decrypt,e.exports.parse=g.parse,e.exports.populate=g.populate,e.exports=g},982:e=>{"use strict";e.exports=require("crypto")},896:e=>{"use strict";e.exports=require("fs")},857:e=>{"use strict";e.exports=require("os")},928:e=>{"use strict";e.exports=require("path")},56:e=>{"use strict";e.exports=JSON.parse('{"name":"dotenv","version":"16.4.5","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"types":"./lib/main.d.ts","require":"./lib/main.js","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"funding":"https://dotenvx.com","keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3","decache":"^4.6.1","sinon":"^14.0.1","standard":"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0","tap":"^16.3.0","tar":"^6.1.11","typescript":"^4.8.4"},"engines":{"node":">=12"},"browser":{"fs":false}}')}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{"use strict";const e=require("liquidjs");var t=o(928);const n=require("http"),s=[{name:"sushi",urls:["https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg","https://cdn.pixabay.com/photo/2024/05/02/18/08/rolls-8735316_1280.jpg",""],type:"main dish",cookPhoto:"https://cdn.pixabay.com/photo/2024/05/31/17/07/ai-generated-8800957_1280.png",cookName:"Tang Wong",price:20},{name:"hamburger",urls:["https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg"],type:"main dish",cookPhoto:"https://cdn.pixabay.com/photo/2024/04/09/01/00/ai-generated-8684799_1280.png",cookName:"Jean Dupont",price:20},{name:"pizza",urls:["https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg","https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg","https://cdn.pixabay.com/photo/2022/10/17/12/51/pizza-7527524_1280.jpg"],type:"main dish",cookPhoto:"https://cdn.pixabay.com/photo/2024/05/02/06/55/ai-generated-8733800_1280.png",cookName:"François Lutier",price:25},{name:"poulet",urls:["https://cdn.pixabay.com/photo/2024/06/13/10/19/meal-8827205_1280.png"],type:"main dish",cookPhoto:"https://cdn.pixabay.com/photo/2024/05/02/06/55/ai-generated-8733800_1280.png",cookName:"François Lutier",price:30},{name:"macarons",type:"dessert",urls:["https://cdn.pixabay.com/photo/2019/11/03/11/21/macaron-4598406_1280.jpg","https://cdn.pixabay.com/photo/2019/11/03/11/18/macaron-4598396_1280.jpg","https://cdn.pixabay.com/photo/2021/12/06/21/34/sweets-6851675_1280.jpg","https://cdn.pixabay.com/photo/2015/04/20/17/00/pastry-731823_1280.jpg","https://cdn.pixabay.com/photo/2020/12/23/21/21/macarons-5856039_1280.jpg"]},{name:"canelés",type:"dessert",urls:["https://cdn.pixabay.com/photo/2020/12/23/21/15/canele-5856024_1280.jpg"]},{name:"cookies",type:"dessert",urls:["https://cdn.pixabay.com/photo/2020/08/06/19/39/cookies-5469009_1280.jpg"]},{name:"gaufres",type:"dessert",urls:["https://cdn.pixabay.com/photo/2022/07/05/19/57/waffles-7303876_1280.jpg"]}];var r=o(896);o(998).config();const a=new e.Liquid({root:t.resolve(__dirname,"liquid"),extname:".liquid"});a.registerTag("header",class extends e.Tag{constructor(t,o,n){super(t,o,n),this.value=new e.Value(t.args,n)}*render(e,t){const o=yield this.value.value(e);t.write((e=>`\n\n        <header class="app-header">\n            <span aria-label>${e}</span>\n            \n            <nav>\n                <a href="/"><i class="fa-solid fa-house"></i></a>\n                <a href="/menu"><i class="fa-solid fa-utensils"></i></a>  \n            </nav>   \n            \n        </header>\n    \n    `)(o))}}),a.registerTag("title",class extends e.Tag{constructor(t,o,n){super(t,o,n),this.value=new e.Value(t.args,n)}*render(e,t){const o=yield this.value.value(e);t.write(`\n            <header>\n                <h1> ${o} </h1>  \n            </header>\n        \n        `)}}),n.createServer(((e,o)=>{var n,i;if(console.log(e.url),"GET"===e.method&&(null===(n=e.url)||void 0===n?void 0:n.startsWith("/css/"))){console.log("into it");const n=t.join(__dirname,"public",e.url);r.readFile(n,((e,t)=>{e?(o.statusCode=404,o.end("Not Found")):(o.setHeader("Content-Type","text/css"),o.end(t))}))}else if("GET"===e.method&&(null===(i=e.url)||void 0===i?void 0:i.startsWith("/assets/"))){console.log("into it");const n=t.join(__dirname,"public",e.url);r.readFile(n,((e,t)=>{e?(o.statusCode=404,o.end("Not Found")):(o.setHeader("Content-Type","image/jpg"),o.end(t))}))}else{if("GET"==e.method&&"/products"==e.url&&(o.setHeader("Content-Type","application/json"),o.statusCode=200,o.end(JSON.stringify(s))),"GET"==e.method&&"/"==e.url){const e={title:"Chez Bobo",landingTitle:"Chez Bobo | DataStore"};a.renderFile("landing",e).then((e=>{o.setHeader("Content-Type","text/html"),o.statusCode=200,o.end(e)}))}if("GET"==e.method&&"/menu"==e.url){const e={title:"Chez Bobo",menuTitle:"Chez Bobo | Menu",products:s};a.renderFile("menu",e).then((e=>{o.setHeader("Content-Type","text/html"),o.statusCode=200,o.end(e)}))}}})).listen(process.env.PORT,(()=>{console.log("listening on port:"+process.env.PORT)}))})()})();