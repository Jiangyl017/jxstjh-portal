# 快速上手

我们致力于提供给程序员愉悦的开发体验
> 在开始之前，推荐先学习 [Vue](https://cn.vuejs.org/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)，并正确安装和配置了 [Node.js](https://nodejs.org/) v8.9 或以上及[vscode](https://code.visualstudio.com/)开发工具。我们会假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，阅读本文档可能不是最好的主意。

## 创建模块

### 1. 安装vscode插件

[jh-project-generator](https://marketplace.visualstudio.com/items?itemName=jh-team.jh-project-generator)

### 2. 创建一个模块工程

我们通过插件向vscode注册了一个`江河前端代码生成器`命令[了解vscode命令](https://code.visualstudio.com/api/extension-guides/command).

打开`江河前端代码生成器`

* 可以使用命令面板调用。
* 可以使用键绑定来调用。
* 可以通过VS Code UI调用，例如通过编辑器标题栏。

> 例:
默认情况下使用`ctrl` + `Shift`  + `p` (`command` + `Shift`  + `p` )
在命令行中输入`江河前端代码生成器`
vscode将自动打开一个webview标签页,接下来选择对应的模块模板后选择**下一步**.
![tqu6w.jpg](https://e.im5i.com/2021/07/29/tqu6w.jpg)

输入`项目名称`及选择`项目生成位置`
输入`资源code`***注: 统一安全管理平台中应用的resourceCode***
点击**完成**
***注:您可能会碰见网络问题,如遇见问题请联系相关人员获取权限!***
![t8LHB.jpg](https://e.im5i.com/2021/07/29/t8LHB.jpg)
![1606632640300.jpg](https://e.im5i.com/2020/11/29/1606632640300.jpg)
点击`打开项目`按钮则创建模块成功!

### 3. 模块开发
接下来阅读:
* [模块工程结构解读](#/docs/vue/scaffold-cn/)
* [模块开发与预览]()


## 小贴士

- `项目名称` 将伴随整个卡片生命周期,随意起名不是一个好主意。我们强制需要使用全小写的`[公司缩写]-[业务模块缩写]-[其它]`的形式.例如`jh-sz-news-list`,不合法的项目名称会导致后续代码<font color='red'>发布失败</font>!


