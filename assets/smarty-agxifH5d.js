import l from"./markup-templating-DBaZ9pD9.js";import"./markup-BHKKUsMC.js";i.displayName="smarty";i.aliases=[];function i(n){n.register(l),function(e){e.languages.smarty={comment:{pattern:/^\{\*[\s\S]*?\*\}/,greedy:!0},"embedded-php":{pattern:/^\{php\}[\s\S]*?\{\/php\}/,greedy:!0,inside:{smarty:{pattern:/^\{php\}|\{\/php\}$/,inside:null},php:{pattern:/[\s\S]+/,alias:"language-php",inside:e.languages.php}}},string:[{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0,inside:{interpolation:{pattern:/\{[^{}]*\}|`[^`]*`/,inside:{"interpolation-punctuation":{pattern:/^[{`]|[`}]$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},variable:/\$\w+/}},{pattern:/'(?:\\.|[^'\\\r\n])*'/,greedy:!0}],keyword:{pattern:/(^\{\/?)[a-z_]\w*\b(?!\()/i,lookbehind:!0,greedy:!0},delimiter:{pattern:/^\{\/?|\}$/,greedy:!0,alias:"punctuation"},number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:{pattern:/(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,lookbehind:!0},"attr-name":/\b[a-z_]\w*(?=\s*=)/i,boolean:/\b(?:false|no|off|on|true|yes)\b/,punctuation:/[\[\](){}.,:`]|->/,operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/]},e.languages.smarty["embedded-php"].inside.smarty.inside=e.languages.smarty,e.languages.smarty.string[0].inside.interpolation.inside.expression.inside=e.languages.smarty;var s=/"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,o=RegExp(/\{\*[\s\S]*?\*\}/.source+"|"+/\{php\}[\s\S]*?\{\/php\}/.source+"|"+/\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source.replace(/<str>/g,function(){return s.source}),"g");e.hooks.add("before-tokenize",function(t){var p="{literal}",d="{/literal}",a=!1;e.languages["markup-templating"].buildPlaceholders(t,"smarty",o,function(r){return r===d&&(a=!1),a?!1:(r===p&&(a=!0),!0)})}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"smarty")})}(n)}export{i as default};
