import{S as x,i as _,s as j,e as c,t as q,c as d,a as m,h as k,d as o,b as h,f as p,g as E,I as g,j as y,E as f}from"./index-c527b42d.js";function H(n){let e,t,a,s,r;return{c(){e=c("header"),t=c("div"),a=c("div"),s=c("p"),r=q(n[1]),this.h()},l(i){e=d(i,"HEADER",{style:!0,class:!0});var l=m(e);t=d(l,"DIV",{class:!0});var v=m(t);a=d(v,"DIV",{class:!0});var b=m(a);s=d(b,"P",{class:!0});var u=m(s);r=k(u,n[1]),u.forEach(o),b.forEach(o),v.forEach(o),l.forEach(o),this.h()},h(){h(s,"class","text-3xl md:text-7xl font-bold text-right text-white mb-8 mr-8 md:mb-20 md:mr-32"),h(a,"class","title flex flex-col-reverse items-end pt-52 pr-7 md:pt-40 md:pr-16 svelte-jc8q13"),h(t,"class","box bg-primary w-screen md:h-2/4 svelte-jc8q13"),p(e,"--image","url("+n[0]+")"),h(e,"class","svelte-jc8q13")},m(i,l){E(i,e,l),g(e,t),g(t,a),g(a,s),g(s,r)},p(i,[l]){l&2&&y(r,i[1]),l&1&&p(e,"--image","url("+i[0]+")")},i:f,o:f,d(i){i&&o(e)}}}function w(n,e,t){let{img:a}=e,{title:s}=e;return n.$$set=r=>{"img"in r&&t(0,a=r.img),"title"in r&&t(1,s=r.title)},[a,s]}class I extends x{constructor(e){super(),_(this,e,w,H,j,{img:0,title:1})}}export{I as H};
