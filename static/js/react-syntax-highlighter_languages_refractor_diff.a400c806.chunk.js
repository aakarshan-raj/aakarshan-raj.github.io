"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6247],{9442:function(e){function n(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(s){var i=n[s],a=[];/^\w+$/.test(s)||a.push(/\w+/.exec(s)[0]),"diff"===s&&a.push("bold"),e.languages.diff[s]={pattern:RegExp("^(?:["+i+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(s)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(e)}e.exports=n,n.displayName="diff",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff.a400c806.chunk.js.map