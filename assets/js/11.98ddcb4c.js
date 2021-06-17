(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{367:function(t,e,i){"use strict";i.r(e);var a=i(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h3",{attrs:{id:"gitignore-作用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-作用"}},[t._v("#")]),t._v(" gitignore 作用")]),t._v(" "),i("p",[t._v("一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件模式。")]),t._v(" "),i("h3",{attrs:{id:"文件-gitignore-的格式规范如下"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#文件-gitignore-的格式规范如下"}},[t._v("#")]),t._v(" 文件 .gitignore 的格式规范如下：")]),t._v(" "),i("ol",[i("li",[t._v("所有空行或者以 ＃ 开头的行都会被 Git 忽略。")]),t._v(" "),i("li",[t._v("可以使用标准的 glob 模式匹配。")]),t._v(" "),i("li",[t._v("匹配模式可以以（/）开头防止递归。")]),t._v(" "),i("li",[t._v("匹配模式可以以（/）结尾指定目录。")]),t._v(" "),i("li",[t._v("要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。")])]),t._v(" "),i("h3",{attrs:{id:"glob-模式匹配"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#glob-模式匹配"}},[t._v("#")]),t._v(" glob 模式匹配")]),t._v(" "),i("ul",[i("li",[t._v("星号"),i("code",[t._v("*")]),t._v("匹配零个或多个任意字符；")]),t._v(" "),i("li",[t._v("[abc] 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；")]),t._v(" "),i("li",[t._v("问号（?）只匹配一个任意字符；")]),t._v(" "),i("li",[t._v("如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。")]),t._v(" "),i("li",[t._v("使用两个星号"),i("code",[t._v("*")]),t._v(" 表示匹配任意中间目录，比如"),i("code",[t._v("a/**/z")]),t._v(" 可以匹配 a/z, a/b/z 或 "),i("code",[t._v("a/b/c/z")]),t._v("等。")])]),t._v(" "),i("h3",{attrs:{id:"例子"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),i("div",{staticClass:"language-.gitignore extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("# no .a files\n*.a\n\n# but do track lib.a, even though you're ignoring .a files above\n!lib.a\n\n# only ignore the TODO file in the current directory, not subdir/TODO\n/TODO\n\n# ignore all files in the build/ directory\nbuild/\n\n# ignore doc/notes.txt, but not doc/server/arch.txt\ndoc/*.txt\n\n# ignore all .pdf files in the doc/ directory\ndoc/**/*.pdf\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);