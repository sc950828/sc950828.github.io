(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{367:function(t,a,i){"use strict";i.r(a);var s=i(44),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"配置信息"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置信息"}},[t._v("#")]),t._v(" 配置信息")]),t._v(" "),i("p",[t._v("Git 自带一个 git config 的工具来帮助设置控制 Git 外观和行为的配置变量。 这些变量存储在三个不同的位置，每一个级别覆盖上一级别的配置。")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("/etc/gitconfig 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果使用带有 --system 选项的 git config 时，它会从此文件读写配置变量。")])]),t._v(" "),i("li",[i("p",[t._v("~/.gitconfig 文件：只针对当前用户。 可以传递 --global 选项让 Git 读写此文件。")])]),t._v(" "),i("li",[i("p",[t._v("当前使用仓库的 "),i("code",[t._v(".git")]),t._v(" 目录中的 config 文件（就是 .git/config）：针对该仓库。")])])]),t._v(" "),i("h2",{attrs:{id:"查看-git-安装目录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#查看-git-安装目录"}},[t._v("#")]),t._v(" 查看 git 安装目录")]),t._v(" "),i("ul",[i("li",[t._v("Mac： 在命令行中输入 which git，就会显示 git 的安装位置了")]),t._v(" "),i("li",[t._v("Windows： 打开 cmd，输入 where git，就会显示 git 的安装路径了")])]),t._v(" "),i("h2",{attrs:{id:"git-配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-配置"}},[t._v("#")]),t._v(" git 配置")]),t._v(" "),i("p",[t._v("git 中 D 向下翻一行 F 向下翻页 B 向上翻页 Q 退出 上箭头向上翻一行 下箭头向下翻一行")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('\n查看系统所有配置\n\ngit config --list\n\n查看某个配置\n\ngit config --get xxx(user.name) --get 可以省略\n\n设置某个配置\n\ngit config key value\n\n查看用户配置\n\ncat ~/.gitconfig\n\n查看当前项目的 git 配置\n\ncat .git/config\n\n查看 git 所有帮助命令\n\ngit --help -a\n\n配置用户名和邮箱\n\ngit config --global user.name "用户名"\n\ngit config --global user.email "git 账号"\n\n删除用户名或别名\n\ngit config --global --unset user.xxx\n\ngit config --global --unset alias.xx\n\n配置别名\n\ngit config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.ci commit\ngit config --global alias.st status\n')])])]),i("h2",{attrs:{id:"生成-ssh"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#生成-ssh"}},[t._v("#")]),t._v(" 生成 ssh")]),t._v(" "),i("p",[t._v("生成 ssh 然后配置好就能拉取推送仓库的代码了。")]),t._v(" "),i("ol",[i("li",[t._v("ssh-keygen -t rsa -C '1287530097@qq.com'")]),t._v(" "),i("li",[t._v("密钥类型可以用 -t 选项指定。如果没有指定则默认生成用于 SSH-2 的 RSA 密钥。这里使用的是 rsa。")]),t._v(" "),i("li",[t._v("同时在密钥中有一个注释字段，用-C 来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息。所以在这里输入自己的邮箱或者其他都行。")]),t._v(" "),i("li",[t._v("输入完毕后程序同时要求输入一个密语字符串(passphrase)，空表示没有密语。接着会让输入 2 次口令(password)，空表示没有口令。3 次回车即可完成当前步骤，此时"),i("code",[t._v("[c盘>用户>自己的用户名>.ssh]")]),t._v("目录下已经生成好了。")]),t._v(" "),i("li",[t._v("登录 github。打开 setting->SSH keys，点击右上角 New SSH key，把生成好的公钥 id_rsa.pub 放进 key 输入框中，再为当前的 key 起一个 title 来区分每个 key。")])]),t._v(" "),i("h2",{attrs:{id:"初始化仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#初始化仓库"}},[t._v("#")]),t._v(" 初始化仓库")]),t._v(" "),i("p",[t._v("有两种取得 Git 项目仓库的方法。 第一种是在现有项目或目录下初始化 git 并指定仓库路径； 第二种是从一个服务器克隆一个现有的 Git 仓库。")]),t._v(" "),i("p",[t._v("1、在现有目录中初始化仓库")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git init\n\ngit remote show origin(别名) 查看仓库详细信息(远程分支 本地分支 自动合并的分支)\n\ngit remote -v 查看当前仓库地址\n\ngit remote remove origin 移除远程仓库\n\ngit remote add origin 添加远程仓库地址 origin 只是远程仓库的别名可随意取。可以添加多个远程仓库。\n\ngit remote rename oldName newName 远程仓库的重命名\n")])])]),i("p",[t._v("2、克隆现有的仓库")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git clone xxxx `[文件夹名]` 克隆的时候可以带上名字，为该项目另起名字。把远程仓库克隆下来。\n")])])]),i("h2",{attrs:{id:"gitignore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[t._v("#")]),t._v(" gitignore")]),t._v(" "),i("p",[t._v("一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件模式。")]),t._v(" "),i("p",[t._v("文件 .gitignore 的格式规范如下：")]),t._v(" "),i("ol",[i("li",[t._v("所有空行或者以 ＃ 开头的行都会被 Git 忽略。")]),t._v(" "),i("li",[t._v("可以使用标准的 glob 模式匹配。")]),t._v(" "),i("li",[t._v("匹配模式可以以（/）开头防止递归。")]),t._v(" "),i("li",[t._v("匹配模式可以以（/）结尾指定目录。")]),t._v(" "),i("li",[t._v("要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。")])]),t._v(" "),i("ul",[i("li",[t._v("星号"),i("code",[t._v("*")]),t._v("匹配零个或多个任意字符；")]),t._v(" "),i("li",[t._v("[abc] 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；")]),t._v(" "),i("li",[t._v("问号（?）只匹配一个任意字符；")]),t._v(" "),i("li",[t._v("如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。")]),t._v(" "),i("li",[t._v("使用两个星号"),i("code",[t._v("*")]),t._v(" 表示匹配任意中间目录，比如"),i("code",[t._v("a/**/z")]),t._v(" 可以匹配 a/z, a/b/z 或 "),i("code",[t._v("a/b/c/z")]),t._v("等。")])]),t._v(" "),i("div",{staticClass:"language-.gitignore extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("# no .a files\n*.a\n\n# but do track lib.a, even though you're ignoring .a files above\n!lib.a\n\n# only ignore the TODO file in the current directory, not subdir/TODO\n/TODO\n\n# ignore all files in the build/ directory\nbuild/\n\n# ignore doc/notes.txt, but not doc/server/arch.txt\ndoc/*.txt\n\n# ignore all .pdf files in the doc/ directory\ndoc/**/*.pdf\n")])])]),i("h2",{attrs:{id:"status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" status")]),t._v(" "),i("p",[t._v("查看状态我们一般使用 git status")]),t._v(" "),i("p",[t._v("git status 命令的输出十分详细，但其用语有些繁琐。 如果你使用 git status -s 命令或 git status --short 命令，你将得到一种更为紧凑的格式输出。 运行 git status -s")]),t._v(" "),i("ol",[i("li",[t._v("新添加的未跟踪文件前面有 ?? 标记")]),t._v(" "),i("li",[t._v("新添加的并且添加到暂存区中的文件前面有 A 标记")]),t._v(" "),i("li",[t._v("修改过的文件前面有 M 标记。 你可能注意到了 M 有两个可以出现的位置，出现在右边的 M 表示该文件被修改了但是还没放入暂存区，出现在靠左边的 M 表示该文件被修改了并放入了暂存区。")])]),t._v(" "),i("h2",{attrs:{id:"add"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),i("p",[t._v("git add 用来从工作区到提交到暂存区。")]),t._v(" "),i("p",[t._v("git add 文件名 或者 . 或者 -A 或者 -u。 . 不包括删除(Git 2.0 以上版本支持了等价于 A) u 不包括新增(2.0 以下才有-u) A 是全部。")]),t._v(" "),i("h2",{attrs:{id:"rm"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[t._v("#")]),t._v(" rm")]),t._v(" "),i("p",[t._v("git rm 文件名 删除工作区文件，并且将这次删除放入暂存区(已经在本地仓库的文件)。如果没有在工作区则需要先手动删除文件然后再使用 git rm 文件名。")]),t._v(" "),i("p",[t._v("git rm --cached 文件名 停止追踪指定文件，但该文件会保留在工作区(当你忘记添加 .gitignore 文件 这个方法很有效)")]),t._v(" "),i("h2",{attrs:{id:"stash"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[t._v("#")]),t._v(" stash")]),t._v(" "),i("p",[t._v("git stash 用来将所有未提交的修改（就是已经提交到暂存区的文件）保存至堆栈中。")]),t._v(" "),i("ul",[i("li",[t._v('git stash save "存储" 给本次存储加个备注，以防时间久了忘了')]),t._v(" "),i("li",[t._v("git stash -u 存储未追踪的文件")]),t._v(" "),i("li",[t._v("git stash list 查看暂存。")]),t._v(" "),i("li",[t._v("git stash pop 提取最近的一次暂存并清除这次暂存。")]),t._v(" "),i("li",[t._v("git stash pop stash@{n} 提取指定的暂存并清除该暂存。")]),t._v(" "),i("li",[t._v("git stash apply stash@{n} 提取某次暂存，但是不清除这次暂存。")]),t._v(" "),i("li",[t._v("git stash show stash@{n} 查看当前记录中修改了哪些文件")]),t._v(" "),i("li",[t._v("git stash show -p stash@{n} 查看当前记录中修改了哪些文件的内容")]),t._v(" "),i("li",[t._v("git stash drop stash@{n} 删除 stash 记录")]),t._v(" "),i("li",[t._v("git stash clear 清除所有暂存。")])]),t._v(" "),i("h2",{attrs:{id:"diff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),i("ul",[i("li",[t._v("gid diff 比较工作区和暂存区的不同。")]),t._v(" "),i("li",[t._v("git diff HEAD 比较工作区和本地仓库的不同。")]),t._v(" "),i("li",[t._v("git diff --staged(Git 1.6.1 及更高版本允许使用)/--cached 比较暂存区和本地仓库的不同。")]),t._v(" "),i("li",[t._v("git diff commit1id..commit2id 比较两个 commit 的不同")]),t._v(" "),i("li",[t._v("git diff branchname..branchname 查看两个本地分支所有的对比")]),t._v(" "),i("li",[t._v("git diff branchname..branchname filename 查看两个本地分支中某一个文件的对比")]),t._v(" "),i("li",[t._v("git diff origin/branchname..origin/branchname 查看远程分支和远程分支的对比")]),t._v(" "),i("li",[t._v("git diff origin/branchname..branchname 查看远程分支和本地分支的对比")])]),t._v(" "),i("h2",{attrs:{id:"回退"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#回退"}},[t._v("#")]),t._v(" 回退")]),t._v(" "),i("p",[t._v("撤销工作区 git checkout .撤销所有，或则 git checkout filename 撤销某个文件的改动。")]),t._v(" "),i("p",[t._v("撤销暂存区 git reset HEAD .撤销所有，或则 git reset HEAD filename 撤销某个文件的改动，改动返回工作区。")]),t._v(" "),i("p",[t._v("撤销版本库 git reset [--hard | --soft | --mixed] id/HEAD^")]),t._v(" "),i("ul",[i("li",[t._v("--hard 删除提交改动放弃掉，--soft 改动回退到暂存区，--mixed 改动回退到工作区(默认)。")]),t._v(" "),i("li",[t._v("id 为你想回到的那次 commit 的 id，或者使用 HEAD^回到上次提交的地方。")])]),t._v(" "),i("h2",{attrs:{id:"commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" commit")]),t._v(" "),i("p",[t._v("git commit 把暂存区的文件提交到本地仓库。")]),t._v(" "),i("p",[t._v("git commit 提交然后进入输入 message 的界面。输入完 message 后保存即提交成功。")]),t._v(" "),i("p",[t._v("git commit -m 'message'。这种方式就是提交然后一并输入提交信息。")]),t._v(" "),i("p",[t._v("git commit -am 'add 和 commit 的合并，便捷写法，和 git add -u 命令一样，但是未跟踪的文件是无法提交上去的'")]),t._v(" "),i("p",[t._v("git commit --amend 修改提交的 message。")]),t._v(" "),i("ul",[i("li",[t._v("需要注意的有一点：commit --amend 并不是直接修改原 commit 的内容，而是生成一条新的 commit。把当前 commit 替换掉")])]),t._v(" "),i("h2",{attrs:{id:"push"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" push")]),t._v(" "),i("p",[t._v("push 是把当前的分支上传到远程仓库，并把这个 branch 的路径上的所有 commits 也一并上传。")]),t._v(" "),i("ul",[i("li",[t._v("git push origin 远程分支名 : 本地分支名 本地分支名可以省略。")]),t._v(" "),i("li",[t._v("你用不加参数的 git push 只能上传那些之前从远端 clone 下来或者 pull 下来的分支。")]),t._v(" "),i("li",[t._v("如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名，用 git push origin branch_name 的格式，而不能只用 git push；或者可以通过 git config 修改 push.default 来改变 push 时的行为逻辑。")])]),t._v(" "),i("h2",{attrs:{id:"branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[t._v("#")]),t._v(" branch")]),t._v(" "),i("p",[t._v("git branch 查看本地拥有哪些分支。")]),t._v(" "),i("ul",[i("li",[t._v("git branch -r 查看远程分支")]),t._v(" "),i("li",[t._v("git branch -a 查看所有分支（包括远程分支和本地分支）")]),t._v(" "),i("li",[t._v("git branch -av 查看所有分支并带上最新的提交信息")]),t._v(" "),i("li",[t._v("git branch -vv 查看本地分支并带上最新的提交信息")]),t._v(" "),i("li",[t._v("git branch -rv 查看远程分支并带上最新的提交信息")]),t._v(" "),i("li",[t._v("git branch newbranchName 新建分支。")]),t._v(" "),i("li",[t._v("git branch -d/-D 删除分支。\n"),i("ul",[i("li",[t._v("-D 是强制删除。当该分支有文件改动尚未提交可以使用该方式强制删除")]),t._v(" "),i("li",[t._v("HEAD 指向的 branch 不能删除。如果要删除 HEAD 指向的 branch，需要先用 checkout 把 HEAD 指向其他地方。")])])]),t._v(" "),i("li",[t._v("git checkout branchName 切换到新分支。")]),t._v(" "),i("li",[t._v("git checkout -b newbranchName 新建分支并切换到该分支。")]),t._v(" "),i("li",[t._v("git branch -m oldbranchName newbranchName 修改分支名。")]),t._v(" "),i("li",[t._v("git push origin :远程分支名或者 git push origin --delete 远程分支名 删除远程分支")])]),t._v(" "),i("h2",{attrs:{id:"rebase"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[t._v("#")]),t._v(" rebase")]),t._v(" "),i("p",[t._v("git rebase 用来合并分支代码，但是 rebase 的时候经常会遇到冲突，我们需要解决冲突。")]),t._v(" "),i("ul",[i("li",[t._v("rebase 解决完冲突后 add . 然后 rebase --continue 然后 push -f 强制提交。")]),t._v(" "),i("li",[t._v("任何时候可以使用 git rebase --abort 来放弃 rebase。")]),t._v(" "),i("li",[t._v("git rebase 的时候会把提交信息一并拉过来。")])]),t._v(" "),i("h2",{attrs:{id:"rebase-i"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rebase-i"}},[t._v("#")]),t._v(" rebase -i")]),t._v(" "),i("p",[t._v("git rebase -i 是交互式 rebase，有很多功能。")]),t._v(" "),i("ol",[i("li",[t._v("可以修改不是第一条提交的 message。rebase -i HEAD^^。把需要修改的 commit 的 message 使用 edit/e 标识。")]),t._v(" "),i("li",[t._v("合并提交。rebase -i HEAD^^。把需要合并的 commit 的 message 用 squash/s 标识。")]),t._v(" "),i("li",[t._v("删除某次提交。rebase -i HEAD^^。把需要删除的 commit 的 message 去掉即可。")])]),t._v(" "),i("p",[t._v("上面的 HEAD^^都是倒数第三次提交，这里用来举例子。不一定就是 HEAD^^。还可以使用分支,相对于分支 rebase -i 分支名，如果已经提交到远程仓库只需要-f 强制提交即可。")]),t._v(" "),i("h2",{attrs:{id:"log"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),i("p",[t._v("使用 git log 查看 log。")]),t._v(" "),i("ul",[i("li",[t._v("git log --stat 查看简要统计。文件级别的显示。")]),t._v(" "),i("li",[t._v("git log -p 查看 log 和这次提交的详细改动。你也可以加上 -2 (git log -p -2)来仅显示最近两次提交")]),t._v(" "),i("li",[t._v("git show id 查看某次具体的提交改动。省略 commit id 展示最近的一次提交的改动。如果还要指定文件，在 git show 的最后加上文件名。")]),t._v(" "),i("li",[t._v("git reflog 查看详细的 log。包括分支切换、代码合并等等操作。")])]),t._v(" "),i("h2",{attrs:{id:"revert"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" revert")]),t._v(" "),i("p",[t._v("git revert HEAD 提交一个新的 commit 它的内容和最近的一个 commit 完全相反。")]),t._v(" "),i("p",[t._v("git revert commit_id 生成一个撤销指定提交版本的新提交")]),t._v(" "),i("h2",{attrs:{id:"cherry-pick"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[t._v("#")]),t._v(" cherry-pick")]),t._v(" "),i("p",[t._v("将指定的提交 commit 应用于当前分支（可以用于在错误的分支提交代码）")]),t._v(" "),i("p",[t._v("例如 我修改了一个文件 commit 完之后才发现在 master 分支上，这时我们就可以用到 cherry-pick 功能了。")]),t._v(" "),i("ol",[i("li",[t._v("我们在 master 分支上用 git log 找到我们刚才的提交，复制 commitId。")]),t._v(" "),i("li",[t._v("我们切换到自己的分支上 使用 git cherry-pick commitId 把刚才的 commit 应用到我们的分支就可以了")]),t._v(" "),i("li",[t._v("然后我们就可以在自己的分支上 push 了")])]),t._v(" "),i("p",[t._v("git cherry-pick commit_id")]),t._v(" "),i("h2",{attrs:{id:"head"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" HEAD")]),t._v(" "),i("p",[t._v("HEAD 在 Git 中，它是一个指针，指向当前所在的本地分支（译注：将 HEAD 想象为当前分支的别名）")]),t._v(" "),i("ul",[i("li",[t._v("HEAD 是指向当前分支的最近的一次 commit 的引用，它具有唯一性，每个仓库中只有一个 HEAD。在每次提交时它都会自动向前移动到最新的 commit。")]),t._v(" "),i("li",[t._v("(HEAD -> 当前分支, origin/该分支对应远程哪个分支)")]),t._v(" "),i("li",[t._v("远程仓库的 HEAD 是永远指向默认分支（即 master）的最近的一次 commit。")]),t._v(" "),i("li",[t._v("远程 merge request 也会形成一个新的 commit。(比如 dev master 分支上就会有 merge 的提交。)")])]),t._v(" "),i("h2",{attrs:{id:"和-符号意义"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#和-符号意义"}},[t._v("#")]),t._v(" ^ 和 ~ 符号意义")]),t._v(" "),i("p",[t._v("^ 的用法：在 commit 的后面加一个或多个 ^ 号，可以把 commit 往回偏移，偏移的数量是 ^ 的数量。")]),t._v(" "),i("ul",[i("li",[t._v("例如：master^ 表示 master 指向的 commit 之前的那个 commit；")]),t._v(" "),i("li",[t._v("HEAD^^ 表示 HEAD 所指向的 commit 往前数两个 commit。")])]),t._v(" "),i("p",[t._v("~ 的用法：在 commit 的后面加上 ~ 号和一个数，可以把 commit 往回偏移，偏移的数量是 ~ 号后面的数。")]),t._v(" "),i("ul",[i("li",[t._v("例如：HEAD~5 表示 HEAD 指向的 commit 往前数 5 个 commit。")])]),t._v(" "),i("h2",{attrs:{id:"tag"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" tag")]),t._v(" "),i("p",[t._v("列出已有 tag")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git tag\n")])])]),i("p",[t._v("新建 tag")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git tag v1.0\n")])])]),i("p",[t._v("新建带有备注信息的 tag")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git tag -a v1.0 -m 'comment'\n")])])]),i("p",[t._v("查看 tag 详情 可以利用 tag 的 commitId 进行代码的回滚")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git show v1.0\n")])])]),i("p",[t._v("给指定的某个 commit 号加 tag")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git tag -a v1.0 -m commitId 'comment'\n")])])]),i("p",[t._v("把 tag 推送到远端")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git push origin v1.0\n")])])]),i("p",[t._v("把所有不存在的 tag 推送到远程")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git push origin --tags\n")])])]),i("p",[t._v("本地删除某个 tag")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git tag -d v1.0\n")])])]),i("p",[t._v("本地删除 tag 后 push 到远端")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git push origin :refs/tags/v1.0\n")])])]),i("p",[t._v("切换到某个 tag 跟分支一样，可以直接切换到某个 tag 去。这个时候不位于任何分支，处于游离状态，可以考虑基于这个 tag 创建一个分支。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git checkout v1.0\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);