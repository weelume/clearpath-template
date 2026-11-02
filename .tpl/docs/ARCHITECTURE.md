# 架构

Next App Router 的 catch-all 页面只识别语言与 slug，通过 template.tsx 的静态动态导入加载页面。pages 组合公共区块，components 实现导航、表单、FAQ、价格、动效和编辑内容。content/site.ts 保存品牌、服务、FAQ、流程；details.ts 保存文章与案例的中文，并与 reference.json 的完整英文段落严格配对，缺失时抛出明确错误，不静默回退。content/screenshots.json 为实际解码尺寸。

Host Provider 仅注入可选品牌、Logo、邮箱及额外页脚；主题样式在 Shell 引入。html 的 data-clearpath 作用域负责整页滚动条与语言，卸载后恢复。原生 dialog 提供模态焦点管理，CSS 与菜单生命周期锁定背景滚动。没有后端、数据库或网络业务调用。
