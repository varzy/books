# Prettier

所有项目都 **必须** 使用 `Prettier` (或其他工具的 Prettier 插件) 进行代码的格式化。

Prettier 配置项很少，绝大部分配置项几乎不需要进行更改。唯独两个例外是：

* `printWidth`: 每一行代码的最大宽度，默认 80。但目前程序员的屏幕越来越大，这个值 **应该** 设置得更大一点
* `singleQuote`: 在 JS 等语言中是否使用单引号，默认 false，即使用双引号。但为了保证少按几次 shift，以及符合 JS 圈的 “大部分” 编码习惯，**应该** 使用单引号

下面是一份推荐使用的 prettier 配置:

```js
// .prettierrc.js
module.exports = {
  overrides: [
    {
      files: '*.{js,ts,jsx,tsx,vue}',
      options: {
        singleQuote: true,
        printWidth: 100,
      },
    },
  ],
};
```
