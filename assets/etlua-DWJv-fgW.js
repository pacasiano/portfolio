import u from"./lua-DkSH5e9Z.js";import o from"./markup-templating-DBaZ9pD9.js";import"./markup-BHKKUsMC.js";l.displayName="etlua";l.aliases=[];function l(e){e.register(u),e.register(o),function(a){a.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:a.languages.lua}},a.hooks.add("before-tokenize",function(t){var n=/<%[\s\S]+?%>/g;a.languages["markup-templating"].buildPlaceholders(t,"etlua",n)}),a.hooks.add("after-tokenize",function(t){a.languages["markup-templating"].tokenizePlaceholders(t,"etlua")})}(e)}export{l as default};
