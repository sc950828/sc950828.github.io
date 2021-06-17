### gitignore 作用

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件模式。

### 文件 .gitignore 的格式规范如下：

1. 所有空行或者以 ＃ 开头的行都会被 Git 忽略。
2. 可以使用标准的 glob 模式匹配。
3. 匹配模式可以以（/）开头防止递归。
4. 匹配模式可以以（/）结尾指定目录。
5. 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。

### glob 模式匹配

- 星号`*`匹配零个或多个任意字符；
- [abc] 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；
- 问号（?）只匹配一个任意字符；
- 如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。
- 使用两个星号`*` 表示匹配任意中间目录，比如`a/**/z` 可以匹配 a/z, a/b/z 或 `a/b/c/z`等。

### 例子

```.gitignore
# no .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory
doc/**/*.pdf
```
