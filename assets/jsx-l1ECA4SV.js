import x from"./javascript-CEvf9hWA.js";import y from"./markup-BHKKUsMC.js";import"./clike-BF_vhPOR.js";o.displayName="jsx";o.aliases=[];function o(u){u.register(x),u.register(y),function(n){var l=n.util.clone(n.languages.javascript),d=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,j=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,p=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function c(e,t){return e=e.replace(/<S>/g,function(){return d}).replace(/<BRACES>/g,function(){return j}).replace(/<SPREAD>/g,function(){return p}),RegExp(e,t)}p=c(p).source,n.languages.jsx=n.languages.extend("markup",l),n.languages.jsx.tag.pattern=c(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=l.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:c(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:c(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var s=function(e){return e?typeof e=="string"?e:typeof e.content=="string"?e.content:e.content.map(s).join(""):""},i=function(e){for(var t=[],g=0;g<e.length;g++){var a=e[g],f=!1;if(typeof a!="string"&&(a.type==="tag"&&a.content[0]&&a.content[0].type==="tag"?a.content[0].content[0].content==="</"?t.length>0&&t[t.length-1].tagName===s(a.content[0].content[1])&&t.pop():a.content[a.content.length-1].content==="/>"||t.push({tagName:s(a.content[0].content[1]),openedBraces:0}):t.length>0&&a.type==="punctuation"&&a.content==="{"?t[t.length-1].openedBraces++:t.length>0&&t[t.length-1].openedBraces>0&&a.type==="punctuation"&&a.content==="}"?t[t.length-1].openedBraces--:f=!0),(f||typeof a=="string")&&t.length>0&&t[t.length-1].openedBraces===0){var r=s(a);g<e.length-1&&(typeof e[g+1]=="string"||e[g+1].type==="plain-text")&&(r+=s(e[g+1]),e.splice(g+1,1)),g>0&&(typeof e[g-1]=="string"||e[g-1].type==="plain-text")&&(r=s(e[g-1])+r,e.splice(g-1,1),g--),e[g]=new n.Token("plain-text",r,null,r)}a.content&&typeof a.content!="string"&&i(a.content)}};n.hooks.add("after-tokenize",function(e){e.language!=="jsx"&&e.language!=="tsx"||i(e.tokens)})}(u)}export{o as default};
