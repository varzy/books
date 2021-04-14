# Git

## 使用 lf 换行风格

Windows 下的 Git 默认使用 `crlf` 作为换行符，甚至会将 `lf` 转换为 `crlf`。本规范要求所有的换行都 **必须** 使用 `lf` 风格。

**Q: 安装 Git 时忘记去勾了 crlf 自动替换的选项，怎么办?**

你可以执行以下命令进行配置:

```bash
git config --global core.eol lf
git config --global core.autocrlf false
git config --global core.safecrlf true
```

## 分支命名

- 开发分支 **必须** 是 `develop`
- 功能分支 **必须** 以 `feature/` 开头。如: `feature/user_system`
- 开发完毕，但仍需维护的版本 **必须** 检出一条新的分支，并以 `stable/` 开头。如: `stable/v1`

## 协作

- 每一次分支合并都 **必须** 发起一个 `Merge Request`，并且进行代码评审
- **必须** 把 `master` 分支 (以及其他重要分支) 设置为保护分支，**绝不** 直接推送、合并
