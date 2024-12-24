(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[871],{9973:function(e,n,t){Promise.resolve().then(t.bind(t,5083)),Promise.resolve().then(t.bind(t,4171)),Promise.resolve().then(t.bind(t,6034))},5083:function(e,n,t){"use strict";t.r(n),t.d(n,{PageContainer:function(){return i}});var r=t(7437),a=t(9311);function i(e){let{children:n,className:t}=e;return(0,r.jsx)("div",{className:(0,a.cn)("container space-y-8 py-8 px-4 md:px-8",t),children:n})}},4171:function(e,n,t){"use strict";t.r(n),t.d(n,{PageHeader:function(){return i}});var r=t(7437),a=t(9311);function i(e){let{title:n,description:t,className:i}=e;return(0,r.jsxs)("div",{className:(0,a.cn)("space-y-4",i),children:[(0,r.jsx)("h1",{className:"text-3xl font-bold tracking-tight",children:n}),t&&(0,r.jsx)("p",{className:"text-lg text-muted-foreground",children:t})]})}},6034:function(e,n,t){"use strict";t.r(n),t.d(n,{Tabs:function(){return V},TabsContent:function(){return I},TabsList:function(){return M},TabsTrigger:function(){return D}});var r=t(7437),a=t(2265),i=t(5744),s=t(6989),o=t(4356),l=t(5606),u=t(9381),c=t(5400),d=t(3763),f=t(966),b="Tabs",[m,v]=(0,s.b)(b,[o.Pc]),g=(0,o.Pc)(),[p,h]=m(b),x=a.forwardRef((e,n)=>{let{__scopeTabs:t,value:a,onValueChange:i,defaultValue:s,orientation:o="horizontal",dir:l,activationMode:b="automatic",...m}=e,v=(0,c.gm)(l),[g,h]=(0,d.T)({prop:a,onChange:i,defaultProp:s});return(0,r.jsx)(p,{scope:t,baseId:(0,f.M)(),value:g,onValueChange:h,orientation:o,dir:v,activationMode:b,children:(0,r.jsx)(u.WV.div,{dir:v,"data-orientation":o,...m,ref:n})})});x.displayName=b;var y="TabsList",N=a.forwardRef((e,n)=>{let{__scopeTabs:t,loop:a=!0,...i}=e,s=h(y,t),l=g(t);return(0,r.jsx)(o.fC,{asChild:!0,...l,orientation:s.orientation,dir:s.dir,loop:a,children:(0,r.jsx)(u.WV.div,{role:"tablist","aria-orientation":s.orientation,...i,ref:n})})});N.displayName=y;var j="TabsTrigger",w=a.forwardRef((e,n)=>{let{__scopeTabs:t,value:a,disabled:s=!1,...l}=e,c=h(j,t),d=g(t),f=k(c.baseId,a),b=P(c.baseId,a),m=a===c.value;return(0,r.jsx)(o.ck,{asChild:!0,...d,focusable:!s,active:m,children:(0,r.jsx)(u.WV.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":b,"data-state":m?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:f,...l,ref:n,onMouseDown:(0,i.M)(e.onMouseDown,e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():c.onValueChange(a)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&c.onValueChange(a)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==c.activationMode;m||s||!e||c.onValueChange(a)})})})});w.displayName=j;var C="TabsContent",T=a.forwardRef((e,n)=>{let{__scopeTabs:t,value:i,forceMount:s,children:o,...c}=e,d=h(C,t),f=k(d.baseId,i),b=P(d.baseId,i),m=i===d.value,v=a.useRef(m);return a.useEffect(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,r.jsx)(l.z,{present:s||m,children:({present:t})=>(0,r.jsx)(u.WV.div,{"data-state":m?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":f,hidden:!t,id:b,tabIndex:0,...c,ref:n,style:{...e.style,animationDuration:v.current?"0s":void 0},children:t&&o})})});function k(e,n){return`${e}-trigger-${n}`}function P(e,n){return`${e}-content-${n}`}T.displayName=C;var R=t(9311);let V=x,M=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)(N,{ref:n,className:(0,R.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...a})});M.displayName=N.displayName;let D=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)(w,{ref:n,className:(0,R.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...a})});D.displayName=w.displayName;let I=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)(T,{ref:n,className:(0,R.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...a})});I.displayName=T.displayName},9311:function(e,n,t){"use strict";t.d(n,{cn:function(){return i}});var r=t(7042),a=t(4769);function i(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.m6)((0,r.W)(n))}}},function(e){e.O(0,[895,273,971,864,744],function(){return e(e.s=9973)}),_N_E=e.O()}]);