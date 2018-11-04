(function(e){function n(n){for(var i,c,a=n[0],s=n[1],l=n[2],u=0,p=[];u<a.length;u++)c=a[u],o[c]&&p.push(o[c][0]),o[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);v&&v(n);while(p.length)p.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,a=1;a<t.length;a++){var s=t[a];0!==o[s]&&(i=!1)}i&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var i={},o={app:0},r=[];function c(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=i,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(t,i,function(n){return e[n]}.bind(null,i));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var v=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0fc8":function(e,n,t){"use strict";var i=t("def2"),o=t.n(i);o.a},"1a50":function(e,n,t){},3132:function(e,n,t){e.exports=t.p+"./img/vego.6f0cb51.png"},"4db0":function(e,n,t){},"561f":function(e,n,t){"use strict";var i=t("4db0"),o=t.n(i);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var i=t("ba4c"),o=t.n(i),r=t("8c4f"),c=t("fd94"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main row"},[t("nav",{staticClass:"col-3 col sidebar "},[t("h1",[e._v("Vego")]),t("p",[e._v("Vue based library which apply MVVM (Model–view–viewmodel) to HTML5 canvas 2D programing.")]),t("div",{staticClass:"sidebar-header"},[t("router-link",{attrs:{to:"introduction"}},[e._v("Introduction")])],1),t("div",{staticClass:"sidebar-header"},[t("router-link",{attrs:{to:"canvascomp"}},[e._v("Canvas Components")])],1),t("div",{staticClass:"sidebar-header"},[t("router-link",{attrs:{to:"spritesheet"}},[e._v("Sprite Sheet")])],1)]),t("div",{staticClass:"col-9 col main"},[t("router-view")],1)])},s=[],l={},v=l,u=(t("0fc8"),t("2877")),p=Object(u["a"])(v,a,s,!1,null,null,null);p.options.__file="Index.vue";var m=p.exports,f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("introdoc"),t("introCanvas"),t("introenddoc")],1)},h=[],d=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h1",[e._v("Vego")]),t("p",[e._v("Vego is a Vue based library which apply MVVM (Model–view–viewmodel) to HTML5 canvas 2D programing. It provides a bunch of features allow you manipulate graphics like writing Vue components to manipulate DOMs. And it also provides a event mixin to mimic mouse interactions events.")]),t("p",[e._v("It is designed for building reusable "),t("em",[e._v("canvas components")]),e._v(" used for tiny games or simple data visualization or other requirements bringing canvas in Vue project.")]),t("h2",[e._v("Install")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("npm install --save vego\n")])]),t("h2",[e._v("Quick Start")]),t("h4",[e._v("Step 1. Use plugin")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" plugin "),t("span",{attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{attrs:{class:"hljs-string"}},[e._v("'vego/plugin'")]),e._v(";\nVue.use(plugin);\n\n"),t("span",{attrs:{class:"hljs-comment"}},[e._v("// other initialization")]),e._v("\n")])]),t("h4",[e._v("Step 2. Create a canvas component")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-vue"}},[e._v('<template>\n<div :config="config"></div>\n</template>\n<script>\nexport default {\n    props: { config: Object },\n    draw(ctx, p) {\n        const {\n            x, y, r, color,\n        } = this.config;\n\n        ctx.beginPath();\n        ctx.save();\n        ctx.fillStyle = color;\n        ctx.arc(x, y, r, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.restore();\n    },\n};\n<\/script>\n\n\n')])]),t("h4",[e._v("Step 3. Apply canvas component within tag vego-canvas")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-vue"}},[e._v("<template>\n<div>\n    <vego-canvas :width=\"canvasWidth\" :height=\"canvasHeight\">\n        <my-arc :config=\"config\"></my-arc>\n    </vego-canvas>\n</div>\n</template>\n\n<script>\nimport circle from '../components/circle.vue';\nexport default {\n    components: { 'my-arc': circle },\n    data() {\n        return {\n            canvasWidth: 200,\n            canvasHeight: 200,\n            config: {\n                x: 50,\n                y: 50,\n                r: 40,\n                color: 'red',\n            },\n        };\n    },\n};\n<\/script>\n\n")])])])}],_={},x=Object(u["a"])(_,d,g,!1,null,null,null);x.options.__file="intro.md";var y=x.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"card"},[t("vego-canvas",{attrs:{width:e.canvasWidth,height:e.canvasHeight}},[t("my-arc",{attrs:{config:e.config}})],1)],1)},b=[],j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{config:e.config}})},S=[],O=(t("6c7b"),{props:{config:Object},draw:function(e,n){var t=this.config,i=t.x,o=t.y,r=t.r,c=t.color;e.beginPath(),e.save(),e.fillStyle=c,e.arc(i,o,r,0,2*Math.PI),e.fill(),e.restore()}}),E=O,k=Object(u["a"])(E,j,S,!1,null,null,null);k.options.__file="circle.vue";var C=k.exports,$={components:{"my-arc":C},data:function(){return{canvasWidth:200,canvasHeight:200,config:{x:50,y:50,r:40,color:"red"}}}},M=$,I=Object(u["a"])(M,w,b,!1,null,null,null);I.options.__file="introCanvas.vue";var P=I.exports,T=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h2",[e._v("Key features")]),t("p",[t("strong",[e._v("vego-canvas")]),e._v(": canvas wrapper. It has width, height properties and basic events emiters. And it can fit different devicePixelRatio. All components within this tag must implement draw function which named as  "),t("em",[e._v("canvas components")]),e._v(".")]),t("p",[t("strong",[e._v("eventDispatcher")]),e._v(": a mixin mimic mouse event, iucludes click, mousedown, mouseup and ect. It will mixin into "),t("em",[e._v("canvas component")]),e._v(" when created.")]),t("p",[t("strong",[e._v("drawStack")]),e._v(":  a mixin into "),t("em",[e._v("canvas component")]),e._v(" when created. It injects function "),t("code",{pre:!0},[e._v("_updateContext")]),e._v(" for every "),t("em",[e._v("canvas components")]),e._v(".")]),t("p",[t("strong",[e._v("tweenMixin")]),e._v(": a mixin used to calculate tweening when declared data changed.")]),t("p",[t("strong",[e._v("spriteSheet")]),e._v(": a "),t("em",[e._v("canvas component")]),e._v(" to display a sprite sheet.")]),t("p",[t("strong",[e._v("vego-container")]),e._v(":  a "),t("em",[e._v("canvas component")]),e._v(" to contain other "),t("em",[e._v("canvas components")]),e._v(" and it has own coordiantes-origin from left top.")]),t("p",[t("strong",[e._v("ticker")]),e._v(": a internal ticker drive stack to draw graphics.")]),t("h2",[e._v("License")]),t("p",[t("a",{attrs:{href:"http://opensource.org/licenses/MIT"}},[e._v("MIT")])]),t("p",[e._v("Copyright (c) 2018-present Tony Wang")])])}],V={},H=Object(u["a"])(V,T,W,!1,null,null,null);H.options.__file="introend.md";var A=H.exports,X={components:{introdoc:y,introenddoc:A,introCanvas:P}},D=X,N=(t("561f"),Object(u["a"])(D,f,h,!1,null,null,null));N.options.__file="Introduction.vue";var F=N.exports,R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Canvas Component")]),t("introdoc"),t("div",[t("img",{attrs:{src:e.imgStructure}})]),t("containerdoc"),t("containerexample"),t("tweendoc"),t("tweenexample"),t("apidoc")],1)},z=[],B=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[e._v("A "),t("em",[e._v("canvas component")]),e._v(" is a vue instance which implements a draw function within "),t("em",[e._v("vego-canvas")]),e._v(" tag. Vego mix "),t("em",[e._v("drawStack")]),e._v(", "),t("em",[e._v("eventDispatcher")]),e._v(", "),t("em",[e._v("tweenMixin")]),e._v(" into "),t("em",[e._v("canvas components")]),e._v(" when they created.")])])}],U={},Y=Object(u["a"])(U,B,L,!1,null,null,null);Y.options.__file="intro.md";var q=Y.exports,J=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h2",[e._v("VegoContainer")]),t("p",[t("em",[e._v("VegoContainer")]),e._v(" is a special "),t("em",[e._v("canvas component")]),e._v(". It contains "),t("em",[e._v("canvas components")]),e._v(" and has its own coordinate system from left top. In addition, it will pass events from target to top. For example:")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-vue"}},[e._v('<template>\n<div>\n    <vego-canvas :width="400" :height="200">\n        <my-circle :config="circle1"\n            @mousemove="onmousemove(\'mousemove circle1\')"\n        ></my-circle>\n        <my-circle :config="circle2"\n            @mousemove="onmousemove(\'mousemove circle2\')"\n        ></my-circle>\n        <vego-container :x="x" :y="y"\n            @mousemove="onmousemove(\'mousemove circle3 or 4\')"\n        >\n            <my-circle :config="circle3"></my-circle>\n            <my-circle :config="circle4" @mousemove="onmousemovecircle4"></my-circle>\n        </vego-container>\n        <msgbox :x="200" :y="50" :text="msg" fill="black" font="18px serif"></msgbox>\n    </vego-canvas>\n</div>\n</template>\n<script>\nimport circle from \'../components/circle.vue\';\nimport text from \'../components/text.vue\';\nexport default {\n    components: {\n        \'my-circle\': circle,\n        msgbox: text,\n    },\n    data() {\n        return {\n            circle1: {\n                x: 50,\n                y: 50,\n                r: 50,\n                color: \'red\',\n            },\n            circle2: {\n                x: 80,\n                y: 50,\n                r: 50,\n                color: \'blue\',\n            },\n            x: 100,\n            y: 50,\n            circle3: {\n                x: 0,\n                y: 0,\n                r: 50,\n                color: \'yellow\',\n            },\n            circle4: {\n                x: 40,\n                y: 0,\n                r: 50,\n                color: \'green\',\n            },\n\n            msg: \'\',\n        };\n    },\n    methods: {\n        onmousemove(which) {\n            this.msg = which;\n        },\n        onmousemovecircle4(event) {\n            this.msg = \'\';\n            event.stopPropagation();\n        },\n    },\n};\n<\/script>\n\n')])])])}],K={},Q=Object(u["a"])(K,J,G,!1,null,null,null);Q.options.__file="container.md";var Z=Q.exports,ee=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h2",[e._v("Tween")]),t("p",[e._v("Sometimes, we need to smooth the transition animation as we change the data. You can do this using the "),t("em",[e._v("tween")]),e._v(" attribute. For example:")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-vue"}},[e._v("// tweencircle.vue\n<template>\n<div :config=\"config\"></div>\n</template>\n<script>\nimport { tweenMixin } from 'vego';\nexport default {\n    mixins: [tweenMixin],\n    props: { config: Object },\n    draw(ctx, p) {\n        const {\n            x, y, r, color,\n        } = this.config;\n\n        ctx.beginPath();\n        ctx.save();\n        ctx.fillStyle = color;\n        ctx.arc(x, y, r, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.restore();\n    },\n};\n<\/script>\n\n")])]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-vue"}},[e._v("// tweenexample.vue\n<template>\n<div class=\"card\">\n    <vego-canvas :width=\"canvasWidth\" :height=\"canvasHeight\">\n        <my-circle :config=\"config\" :tween=\"tween\" @tweenend=\"end\"></my-circle>\n    </vego-canvas>\n</div>\n</template>\n<script>\n\nimport circle from '../components/tweencircle.vue';\nexport default {\n    components: { 'my-circle': circle },\n    data() {\n        return {\n            canvasWidth: 400,\n            canvasHeight: 250,\n            config: {\n                x: 50,\n                y: 50,\n                r: 40,\n                color: '#ffff00',\n            },\n\n            tween: {\n                duration: 2000,\n                easing: 'easeOutBounce',\n                observe: ['config'],\n            },\n            direction: -1,\n            directionX: 1,\n        };\n    },\n\n    mounted() {\n        this.config.x = 100;\n        this.config.y = 150;\n        this.config.color = '#ff00ff';\n    },\n    methods: {\n        end() {\n            if (this.config.x + this.config.r > this.canvasWidth || this.config.x - this.config.r < 0)\n                this.directionX = -this.directionX;\n            this.config.x += this.directionX * 100;\n            this.config.y += this.direction * 100;\n            this.config.color = this.direction > 0 ? '#ff00ff' : '#ffff00';\n            this.direction = -this.direction;\n        },\n    },\n};\n<\/script>\n\n\n")])])])}],te={},ie=Object(u["a"])(te,ee,ne,!1,null,null,null);ie.options.__file="tween.md";var oe=ie.exports,re=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"card"},[t("vego-canvas",{attrs:{width:400,height:100}},[t("my-circle",{attrs:{config:e.circle1},on:{mousemove:function(n){e.onmousemove("mousemove circle1")}}}),t("my-circle",{attrs:{config:e.circle2},on:{mousemove:function(n){e.onmousemove("mousemove circle2")}}}),t("vego-container",{attrs:{x:e.x,y:e.y},on:{mousemove:function(n){e.onmousemove("mousemove circle3 or 4")}}},[t("my-circle",{attrs:{config:e.circle3}}),t("my-circle",{attrs:{config:e.circle4},on:{mousemove:e.onmousemovecircle4}})],1),t("msgbox",{attrs:{x:200,y:50,text:e.msg,fill:"black",font:"18px serif"}})],1)],1)},ce=[],ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{x:e.x,y:e.y,text:e.text,font:e.font,fillColor:e.fill,strokeColor:e.stroke}})},se=[],le=(t("c5f6"),{props:{x:Number,y:Number,text:String,font:String,fill:String,stroke:String},draw:function(e,n){var t=this.x,i=this.y,o=this.text,r=this.font,c=this.fill,a=this.stroke;e.beginPath(),e.save(),r&&(e.font=r),c&&(e.fillStyle=c,e.fillText(o,t,i,200)),a&&(e.strokeStyle=a,e.strokeText(o,t,i,200)),e.restore()}}),ve=le,ue=Object(u["a"])(ve,ae,se,!1,null,null,null);ue.options.__file="text.vue";var pe=ue.exports,me={components:{"my-circle":C,msgbox:pe},data:function(){return{circle1:{x:50,y:50,r:50,color:"red"},circle2:{x:80,y:50,r:50,color:"blue"},x:100,y:50,circle3:{x:0,y:0,r:50,color:"yellow"},circle4:{x:40,y:0,r:50,color:"green"},msg:""}},methods:{onmousemove:function(e){this.msg=e},onmousemovecircle4:function(e){this.msg="",e.stopPropagation()}}},fe=me,he=Object(u["a"])(fe,re,ce,!1,null,null,null);he.options.__file="ContainerExample.vue";var de=he.exports,ge=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"card"},[t("vego-canvas",{attrs:{width:e.canvasWidth,height:e.canvasHeight}},[t("my-circle",{attrs:{config:e.config,tween:e.tween},on:{tweenend:e.end}})],1)],1)},_e=[],xe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{config:e.config}})},ye=[],we={mixins:[c["b"]],props:{config:Object},draw:function(e,n){var t=this.config,i=t.x,o=t.y,r=t.r,c=t.color;e.beginPath(),e.save(),e.fillStyle=c,e.arc(i,o,r,0,2*Math.PI),e.fill(),e.restore()}},be=we,je=Object(u["a"])(be,xe,ye,!1,null,null,null);je.options.__file="tweencircle.vue";var Se=je.exports,Oe={components:{"my-circle":Se},data:function(){return{canvasWidth:400,canvasHeight:200,config:{x:50,y:50,r:40,color:"#ffff00"},tween:{duration:2e3,easing:"easeOutBounce",observe:["config"]},direction:-1,directionX:1}},mounted:function(){this.config.x=100,this.config.y=150,this.config.color="#ff00ff"},methods:{end:function(){(this.config.x+this.config.r>this.canvasWidth||this.config.x-this.config.r<0)&&(this.directionX=-this.directionX),this.config.x+=100*this.directionX,this.config.y+=100*this.direction,this.config.color=this.direction>0?"#ff00ff":"#ffff00",this.direction=-this.direction}}},Ee=Oe,ke=Object(u["a"])(Ee,ge,_e,!1,null,null,null);ke.options.__file="TweenExample.vue";var Ce=ke.exports,$e=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Me=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h2",[e._v("API")]),t("h3",[e._v("Canvas component")]),t("ol",[t("li",[t("p",[e._v("draw : function(ctx):\nRender methods, similar to vue's render methods, must be implemented.\n@params: ctx")]),t("p",[e._v("​\ttype: "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"}},[e._v("CanvasRenderingContext2D")])])]),t("li",[t("p",[e._v("mouseevent:\nmouse event object")]),t("ul",[t("li",[e._v("type: event type")]),t("li",[e._v("target: target of event")]),t("li",[e._v("originEvent: canvas triggered event")]),t("li",[e._v("x: the x coordinate value relative to the canvas origin")]),t("li",[e._v("y: the y coordinate value relative to the canvas origin")])])]),t("li",[t("p",[e._v("Inherited method:")]),t("ul",[t("li",[e._v("@click(event)")]),t("li",[e._v("@mousedown(event)")]),t("li",[e._v("@mousemove(event)")]),t("li",[e._v("@pressmove(event): Pressmove provides additional parameters anchorX and anchorY to record the location of the mousedown")]),t("li",[e._v("@mouseup(event)")]),t("li",[e._v("@mouseenter(event)")]),t("li",[e._v("@mouseleave(event)")])])]),t("li",[t("p",[e._v("tweenmixin:\nA component that USES tween needs to reference this mixin, which introduces a new property to specify the parameter of tween.")]),t("ul",[t("li",[e._v("tween: {\n"),t("ul",[t("li",[e._v("duration: Number,")]),t("li",[e._v("easing: String|Function,")]),t("li",[e._v("observe: Array of props or datas")])])]),t("li",[e._v("}")])]),t("p",[e._v("Currently support for digital and hexadecimal colors and RGB colors tweening.")]),t("ul",[t("li",[e._v("@tweenend(): An additional tweenend event was introduced to identify the end.")])])])])])}],Ie={},Pe=Object(u["a"])(Ie,$e,Me,!1,null,null,null);Pe.options.__file="apis.md";var Te=Pe.exports,We=t("3132"),Ve={components:{introdoc:q,containerdoc:Z,containerexample:de,tweendoc:oe,tweenexample:Ce,apidoc:Te},data:function(){return{imgStructure:We}}},He=Ve,Ae=Object(u["a"])(He,R,z,!1,null,null,null);Ae.options.__file="Canvascomp.vue";var Xe=Ae.exports,De=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("introdoc"),t("spriteSheetExample"),t("spriteApidoc")],1)},Ne=[],Fe=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Re=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h1",[e._v("SpriteSheet")]),t("p",[t("em",[e._v("SpriteSheet")]),e._v(" can play the Sprite animation and differentiate the animation stages based on Settings. For example:")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-vue"}},[e._v('<template>\n<div>\n    <vego-canvas @domclick="jump" @tick="tick" :width="canvasWidth" :height="canvasHeight">\n        <vego-container :x="x" :y="y">\n            <vego-sprite-sheet :configs="conf" :pattern.sync="pattern"></vego-sprite-sheet>\n        </vego-container>\n    </vego-canvas>\n</div>\n</template>\n<script>\nconst sheet = require(\'../assets/spritesheet_grant.png\');\n\nexport default{\n    data() {\n        return {\n            canvasWidth: 800,\n            canvasHeight: 400,\n\n            conf: {\n                framerate: 30,\n                image: sheet,\n                frames: {\n                    width: 165,\n                    height: 292,\n                    count: 64,\n\n                },\n                // "regX": 82, "height": 292, "count": 64, "regY": 0, "width": 165},\n                // define two animations, run (loops, 1.5x speed) and jump (returns to run):\n                patterns: {\n                    run: {\n                        frame: [0, 25],\n                        next: \'run\',\n                    },\n                    jump: {\n                        frame: [26, 63],\n                        next: \'run\',\n                    },\n                },\n            },\n            pattern: \'run\',\n\n            velocity: 150,\n            x: 0,\n            y: 100,\n        };\n    },\n    methods: {\n        jump() {\n            console.log(\'jump\');\n            this.pattern = \'jump\';\n        },\n        tick(due) {\n            this.x = (this.velocity / 1000 * due) % (this.canvasWidth + 165) - 165;\n        },\n    },\n\n};\n<\/script>\n')])])])}],ze={},Be=Object(u["a"])(ze,Fe,Re,!1,null,null,null);Be.options.__file="spritesheet.md";var Le=Be.exports,Ue=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"card"},[t("vego-canvas",{attrs:{width:e.canvasWidth,height:e.canvasHeight},on:{domclick:e.jump,tick:e.tick}},[t("vego-container",{attrs:{x:e.x,y:e.y}},[t("vego-sprite-sheet",{attrs:{configs:e.conf,pattern:e.pattern},on:{"update:pattern":function(n){e.pattern=n}}})],1)],1)],1)},Ye=[],qe=t("7d7c"),Je={data:function(){return{canvasWidth:800,canvasHeight:400,conf:{framerate:30,image:qe,frames:{width:165,height:292,count:64},patterns:{run:{frame:[0,25],next:"run"},jump:{frame:[26,63],next:"run"}}},pattern:"run",velocity:150,x:0,y:100}},methods:{jump:function(){console.log("jump"),this.pattern="jump"},tick:function(e){this.x=this.velocity/1e3*e%(this.canvasWidth+165)-165}}},Ge=Je,Ke=(t("61c5"),Object(u["a"])(Ge,Ue,Ye,!1,null,null,null));Ke.options.__file="spriteSheetExample.vue";var Qe=Ke.exports,Ze=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},en=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h2",[e._v("API")]),t("h3",[e._v("SpriteSheet component")]),t("p",[e._v("The following parameters must be passed in when using spritesheet:")]),t("ul",[t("li",[t("p",[e._v("config {")]),t("ul",[t("li",[e._v("framerate: Number :framerate of spritesheet,")]),t("li",[e._v("image: String :image source of sptitesheet,")]),t("li",[e._v("frames: Object :{\n"),t("ul",[t("li",[e._v("width: Number :The width of each frame")]),t("li",[e._v("height: Number :The height of each frame")]),t("li",[e._v("count: Number :The count of all frames")])])]),t("li",[e._v("},")]),t("li",[e._v("patterns: Object :{\n"),t("ul",[t("li",[e._v("'pattern': Object :{\n"),t("ul",[t("li",[e._v("frame: [from, to], :The beginning and the end of a pattern")]),t("li",[e._v("next: 'next  pattern', :The next pattern")])])]),t("li",[e._v("}")])])]),t("li",[e._v("}")])])]),t("li",[t("p",[e._v("}")])]),t("li",[t("p",[e._v("pattern.sync : String : From config patterns.")])])])])}],nn={},tn=Object(u["a"])(nn,Ze,en,!1,null,null,null);tn.options.__file="spritesheetapi.md";var on=tn.exports,rn={components:{introdoc:Le,spriteSheetExample:Qe,spriteApidoc:on}},cn=rn,an=Object(u["a"])(cn,De,Ne,!1,null,null,null);an.options.__file="SpriteSheetIntro.vue";var sn=an.exports,ln=[{path:"/",component:m,children:[{path:"/",redirect:"/introduction"},{path:"/introduction",component:F},{path:"/canvascomp",component:Xe},{path:"/spritesheet",component:sn}]}];o.a.config.productionTip=!1,o.a.use(c["a"]),o.a.use(r["a"]);var vn=new r["a"]({routes:ln});new o.a({router:vn}).$mount("#app")},"61c5":function(e,n,t){"use strict";var i=t("1a50"),o=t.n(i);o.a},"7d7c":function(e,n,t){e.exports=t.p+"./img/spritesheet_grant.b566378.png"},def2:function(e,n,t){}});
//# sourceMappingURL=app.8dbdd7f7.js.map