"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7176,3047],{8331:function(e,n,t){var a=t(595);function s(e){e.register(a),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,s,i){if(t.language===a){var o=t.tokenStack=[];t.code=t.code.replace(s,(function(e){if("function"===typeof i&&!i(e))return e;for(var s,r=o.length;-1!==t.code.indexOf(s=n(a,r));)++r;return o[r]=e,s})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var s=0,i=Object.keys(t.tokenStack);!function o(r){for(var u=0;u<r.length&&!(s>=i.length);u++){var l=r[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var g=i[s],c=t.tokenStack[g],p="string"===typeof l?l:l.content,f=n(a,g),k=p.indexOf(f);if(k>-1){++s;var d=p.substring(0,k),m=new e.Token(a,e.tokenize(c,t.grammar),"language-"+a,c),h=p.substring(k+f.length),v=[];d&&v.push.apply(v,o([d])),v.push(m),h&&v.push.apply(v,o([h])),"string"===typeof l?r.splice.apply(r,[u,1].concat(v)):l.content=v}}else l.content&&o(l.content)}return r}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.11739862.chunk.js.map