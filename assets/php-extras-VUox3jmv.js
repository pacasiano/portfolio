import r from"./php-B-k-GCl2.js";import"./markup-templating-DBaZ9pD9.js";import"./markup-BHKKUsMC.js";a.displayName="php-extras";a.aliases=[];function a(e){e.register(r),e.languages.insertBefore("php","variable",{this:{pattern:/\$this\b/,alias:"keyword"},global:/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/\b(?:parent|self|static)\b/,punctuation:/::|\\/}}})}export{a as default};
